import { getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';
import Link from 'next/link';

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Sign In</h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="mb-4">
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        <div className="mt-4">
          <Link href="/auth/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
