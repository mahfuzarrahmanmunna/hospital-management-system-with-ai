"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

interface MenuLink {
    name: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const menuLinks: MenuLink[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/30 dark:bg-stone-800/30 backdrop-blur-md shadow-xs border-b border-white/20 dark:border-stone-700 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-bold text-xl text-stone-800 dark:text-stone-100">
                        MyBrand
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group text-stone-800 dark:text-stone-100 font-medium"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-stone-800 dark:bg-stone-100 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        <ModeToggle />

                        {/* Mobile Hamburger */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setOpen(!open)}
                                className="text-stone-800 dark:text-stone-100 hover:text-stone-500 dark:hover:text-stone-300 focus:outline-none transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobileMenu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white/30 dark:bg-stone-800/30 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t border-white/20 dark:border-stone-700"
                    >
                        {menuLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block relative group text-stone-800 dark:text-stone-100 font-medium"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-stone-800 dark:bg-stone-100 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
