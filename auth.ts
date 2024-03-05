import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { Pool } from 'pg';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

const port = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : undefined;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: port,
  ssl: false,
});


async function getUser(email: string): Promise<User | undefined> {
    try {
      const client = await pool.connect();
      const queryText = `SELECT * FROM users WHERE email=$1`;
      const {rows} = await client.query<User>(queryText, [email]);
      client.release();
      return rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
                const user = await getUser(email);
                if (!user) return null;
                const passwordsMatch = await bcrypt.compare(password, user.password);
 
                if (passwordsMatch) return user;
            }
            
            console.log('Invalid credentials');
            return null;
        },
      }),
    ],
});