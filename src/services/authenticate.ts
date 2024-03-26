'use server';

import { signIn, signOut } from '@/auth';
import { db } from '@/db';
import { AuthError } from 'next-auth';
import { EmailNotVerifiedError } from '@/errors';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const user = { email: formData.get("email")};

   await isUsersEmailVerified(formData.get('email') as string);
   await signIn('credentials', formData);

  } catch (error) {
    // Handling authentication errors
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    // Handling email verification errors
    if (error instanceof EmailNotVerifiedError) {
      return error?.message;
    }
    // Throwing other unexpected errors
    throw error;
  }

}

// Function to handle user logout
export async function logout() {
   // Destroy the session

  return await signOut();

}

// Function to check if a user's email is verified
export const isUsersEmailVerified = async (email: string) => {
  const user = await db.user.findFirst({
    where: { email },
  });

  // if the user doesn't exist then it's none of the function's business
  if (!user) return true;

  // if the emailVerifiedAt value is null then raise the EmailNotVerifiedError error
  if (!user?.emailVerifiedAt) throw new EmailNotVerifiedError(`EMAIL_NOT_VERIFIED:${email}`);

  return true;
};