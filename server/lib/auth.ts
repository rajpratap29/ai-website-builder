import "dotenv/config";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma.js";
import { bearer } from "better-auth/plugins";

const trustedOrigins =
  process.env.TRUSTED_ORIGINS?.split(",").map((o) => o.trim()) || [];

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  plugins: [bearer()],

  emailAndPassword: {
    enabled: true,
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  trustedOrigins,
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,
  advanced: {
    crossOriginResourceSharing: {
      allowedOrigins: trustedOrigins,
      allowedHeaders: ["Content-Type", "Authorization"],
      exposeHeaders: ["set-auth-token"],
      credentials: true,
    },
    cookies: {
      session_token: {
        name: "auth_session",
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          path: "/",
        },
      },
    },
  },
});
