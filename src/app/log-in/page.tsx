"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type LoginForm = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        console.log("Login Data:", data);
        // 🔹 Call your API or NextAuth signIn here
        // await signIn("credentials", { redirect: false, ...data });
    };

    return (
        <div className="flex min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
            {/* Left side with image & text */}
            <div className="w-1/2 relative hidden md:flex items-center justify-center bg-stone-100 dark:bg-stone-800 transition-colors duration-300">
                <div className="absolute top-20 left-16 max-w-md">
                    <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-lg text-stone-700 dark:text-stone-300">
                        Login to manage patients, doctors, appointments and more.
                    </p>
                </div>
                <Image
                    src="https://i.ibb.co.com/FkcWLcFf/3644525.jpg"
                    alt="Hospital Login"
                    width={480}
                    height={480}
                    className="object-contain"
                />
            </div>

            {/* Right side form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-stone-100">
                        Sign In
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email */}
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing in..." : "Login"}
                        </Button>
                    </form>

                    <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
                        Don’t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
