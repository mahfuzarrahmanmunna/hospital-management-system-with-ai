"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface MenuLink {
    name: string;
    href: string;
}

interface User {
    name: string;
    avatar: string;
}

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Demo user (replace with real auth)
    const [user, setUser] = useState<User | null>(null);
    // const [user, setUser] = useState<User>({name: "John Doe", avatar: "/avatar.png"});

    const menuLinks: MenuLink[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    const handleLogout = () => {
        setUser(null);
        // TODO: Call logout API or clear auth token
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/30 dark:bg-stone-800/30 backdrop-blur-md shadow-xs border-b border-white/20 dark:border-stone-700 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex-shrink-0 font-bold text-xl text-stone-800 dark:text-stone-100"
                    >
                        MyBrand
                    </Link>

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

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        <ModeToggle />

                        {/* Auth section */}
                        {!user ? (
                            <div className="hidden md:flex space-x-2">
                                <Link href="/log-in">
                                    <Button variant="outline" size="sm">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="focus:outline-none rounded-full overflow-hidden w-9 h-9">
                                        <Image
                                            src={user.avatar}
                                            alt="User avatar"
                                            width={36}
                                            height={36}
                                            className="rounded-full object-cover"
                                        />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}

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

                        {/* Auth for mobile */}
                        {!user ? (
                            <div className="flex space-x-2 mt-4">
                                <Link href="/log-in" onClick={() => setOpen(false)}>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register" onClick={() => setOpen(false)}>
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        src={user.avatar}
                                        alt="User avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span className="text-stone-800 dark:text-stone-100">{user.name}</span>
                                </div>
                                <Link
                                    href="/dashboard"
                                    onClick={() => setOpen(false)}
                                    className="block text-stone-800 dark:text-stone-100"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setOpen(false);
                                    }}
                                    className="text-red-500"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
