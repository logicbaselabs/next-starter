export { auth as middleware } from "@/auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
});

// export function middleware(request) {
//   return new Response("Access Denied", {
//     status: 403,
//     statusText: "Forbidden",
//     headers: { "content-type": "text/plain" },
//   });
// }

// // matching paths
// export const config = {
//   matcher: "/about/:path*",
// };
