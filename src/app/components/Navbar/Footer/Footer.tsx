"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                {/* Top: Links & About */}
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-3">
                            HealthConnect
                        </h2>
                        <p className="text-sm leading-relaxed">
                            A modern platform connecting patients and doctors with seamless,
                            secure, and smart healthcare solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/faq"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            <Link href="https://www.facebook.com/profile.php?id=61558381851640" target="_blank" aria-label="Facebook">
                                <Facebook className="h-5 w-5 hover:text-blue-600 transition-colors" />
                            </Link>
                            <Link href="https://x.com/mahfuzar_m35559" target="_blank" aria-label="Twitter">
                                <Twitter className="h-5 w-5 hover:text-blue-600 transition-colors" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5 hover:text-blue-600 transition-colors" />
                            </Link>
                            <Link href="https://github.com/mahfuzarrahmanmunna/" target="_blank" aria-label="GitHub">
                                <Github className="h-5 w-5 hover:text-blue-600 transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
                    <p className="flex items-center gap-1">
                        © {new Date().getFullYear()} HealthConnect. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 mt-2 sm:mt-0">
                        Made with <Heart className="h-4 w-4 text-red-500" /> by{" "}
                        <span className="font-semibold text-stone-900 dark:text-stone-50">
                            MR. Munna
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
