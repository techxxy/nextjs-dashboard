import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;

        console.log('const isLoggedIn = !!auth?.user;', isLoggedIn);
        const isOnSchnuppern = nextUrl.pathname.startsWith('/schnuppern');

        if (isOnSchnuppern) {
          // Allow access to /schnuppern for everyone
          return true;
        }
        
        const isOnDashboard = nextUrl.pathname.startsWith('/hangul');
        if (isOnDashboard) {
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