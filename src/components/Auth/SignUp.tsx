'use client';

import Link from "next/link";
import { useRegister } from "./hooks/useRegister";
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from "../ui/input";

export const Register = () => {
  const { handleChangeRegisterData, handleSubmitRegisterData } = useRegister();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-full max-w-sm flex-col justify-between gap-3 space-y-2 p-12">
        <div className="mx-auto mt-16">
          <Image src="logo.svg" alt="" width={40} height={40} />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Register</h3>
          <p className="leading-tight opacity-75">
            Lets sign up to your account and start your calorie management
          </p>
          <div className="grid grid-cols-2 gap-2">
          <Input
            name="firstName"
            placeholder="First Name"
            onChange={handleChangeRegisterData}
            className="bg-secondary-200"
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChangeRegisterData}
            className="bg-secondary-200"
          />
        </div>
        <Input
          name="username"
          placeholder="username"
          onChange={handleChangeRegisterData}
          className="bg-secondary-200"
        />
        <Input
          name="email"
          placeholder="email@yours.com"
          onChange={handleChangeRegisterData}
          className="bg-secondary-200"
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChangeRegisterData}
        />
        <Button className="w-full rounded-full bg-teal-500" onClick={handleSubmitRegisterData}>
          Register
        </Button>
          <div className="flex items-center gap-2">
          </div>
        </div>
        <div>
          <p>
            Already have an account?
            <span className="text-teal-500">Sign in</span>
          </p>
        </div>
      </div>
    </main>
  );
};
