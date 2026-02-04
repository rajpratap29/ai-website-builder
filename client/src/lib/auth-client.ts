import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BASEURL,
  fetchOptions: {
    auth: {
      type: "Bearer",
      token: () => localStorage.getItem("bearer_token") || "",
    },

    onSuccess: async (ctx) => {
      const authToken = ctx.response.headers.get("set-auth-token");
      if (authToken) {
        localStorage.setItem("bearer_token", authToken);
      }
    },

    onError: async (ctx) => {
      if (ctx.response.status === 401) {
        localStorage.removeItem("bearer_token");
      }
    },
  },
});

export const { signIn, signUp, useSession, signOut } = authClient;
