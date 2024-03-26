import SignUpForm from '@/app/ui/signup/signup-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Sign Up',
};
 
export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <SignUpForm />
      </div>
    </main>
  );
}