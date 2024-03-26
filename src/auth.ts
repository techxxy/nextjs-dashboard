import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import db from '@/db';
import {createCookies, getSession} from '@/services/handleCookie';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log('Invalid credentials');
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) {
          console.log('User not found');
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) {

          createCookies(user.email);
          getSession();

          console.log('Login successful!');
          console.log('User details:', user);
          
          return user;
        } else {
          console.log('Password does not match');
          return null;
        }
      },
    }),
  ],
});
