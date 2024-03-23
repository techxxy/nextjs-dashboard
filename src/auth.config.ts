import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHangul = nextUrl.pathname.startsWith('/hangul');
      const isOnSchnuppern = nextUrl.pathname.startsWith('/schnuppern');
      const isOnHome = nextUrl.pathname.startsWith('/');
      
      if (isOnSchnuppern) {
        // Allow access to /schnuppern for everyone
        return true;
      }
      if (isOnHome) {
        // Allow access to /schnuppern for everyone
        return true;
      }
      if (isOnHangul) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/hangul', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
