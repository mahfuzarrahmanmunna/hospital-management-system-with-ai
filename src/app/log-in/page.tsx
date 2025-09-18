"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { SiGoogle, SiFacebook } from "react-icons/si";

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
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (res?.error) {
            alert("Login failed: " + res.error);
        } else {
            alert("Login successful!");
            // TODO: redirect or UI update
        }
    };

    return (
        <div className="flex min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
            {/* Left side */}
            <div className="hidden md:flex w-1/2 relative bg-stone-100 dark:bg-stone-800 transition-colors duration-300 items-center justify-center">
                <div className="absolute top-20 left-16 max-w-md z-10">
                    <h1 className="text-4xl font-extrabold text-stone-900 dark:text-stone-100 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-lg text-stone-700 dark:text-stone-300 max-w-xs leading-relaxed">
                        Login to manage patients, doctors, appointments and more.
                    </p>
                </div>
                <Image
                    src="https://i.ibb.co/FkcWLcFf/3644525.jpg"
                    alt="Hospital Login"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    className="z-0"
                />
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-stone-100">
                        Sign In
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
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

                    {/* Divider */}
                    <div className="relative flex items-center my-8">
                        <div className="flex-grow border-t border-stone-300 dark:border-stone-700"></div>
                        <span className="mx-4 text-stone-500 dark:text-stone-400 font-semibold select-none">
                            OR
                        </span>
                        <div className="flex-grow border-t border-stone-300 dark:border-stone-700"></div>
                    </div>

                    {/* Social buttons */}
                    <div className="flex flex-col gap-4">
                        <Button
                            variant="outline"
                            className="flex items-center justify-center gap-3 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                            onClick={() => signIn("google")}
                            type="button"
                        >
                            <SiGoogle className="w-5 h-5 text-red-600" />
                            Continue with Google
                        </Button>

                        <Button
                            variant="outline"
                            className="flex items-center justify-center gap-3 border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                            onClick={() => signIn("facebook")}
                            type="button"
                        >
                            <SiFacebook className="w-5 h-5 text-blue-600" />
                            Continue with Facebook
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-stone-600 dark:text-stone-400 text-center">
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
