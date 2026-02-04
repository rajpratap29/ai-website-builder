import { createAuthClient } from "better-auth/react";
const baseUrl = import.meta.env.VITE_BASEURL;
export const authClient = createAuthClient({
  baseURL: baseUrl.startsWith("/")
    ? `${window.location.origin}${baseUrl}`
    : baseUrl,
  fetchOptions: { credentials: "include" },
});

export const { signIn, signUp, useSession } = authClient;

