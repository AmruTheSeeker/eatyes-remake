'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  const handleGoogleLogin = () => {
    signIn('google', {
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full max-w-sm flex-col justify-between gap-3 space-y-2 p-12">
        <div className="mx-auto mt-16">
          <Image src="logo.svg" alt="" width={40} height={40} />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Login</h3>
          <p className="leading-tight opacity-75">
            Lets sign up to your account and start your calorie management
          </p>
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleCredentialsLogin} className="w-full rounded-full bg-teal-500">
            Login
          </Button>
          <div className="flex items-center gap-2">
            <svg
              width="169"
              height="1"
              viewBox="0 0 169 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="-4.37114e-08" y1="0.5" x2="169" y2="0.499985" stroke="#9D9D9D" />
            </svg>
            <p>or</p>
            <svg
              width="169"
              height="1"
              viewBox="0 0 169 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="-4.37114e-08" y1="0.5" x2="169" y2="0.499985" stroke="#9D9D9D" />
            </svg>
          </div>
          <Button onClick={handleGoogleLogin} variant="secondary" className="w-full">
            Continue with Google
          </Button>
        </div>
        <div>
          <p>
            Don't have an account?
            <span className="text-teal-500">Sign up</span>
          </p>
        </div>
      </div>
    </main>
  );
};
