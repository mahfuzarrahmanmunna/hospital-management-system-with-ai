"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

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
        <nav className="sticky top-0 z-50 bg-white/30 dark:bg-stone-800/30 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-stone-700 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                className="text-stone-800 dark:text-stone-100 hover:text-stone-500 dark:hover:text-stone-300 font-medium transition-colors"
                            >
                                {link.name}
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
                                className="text-stone-800 dark:text-stone-100 hover:text-stone-500 dark:hover:text-stone-300 focus:outline-none"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/30 dark:bg-stone-800/30 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t border-white/20 dark:border-stone-700">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-stone-800 dark:text-stone-100 hover:text-stone-500 dark:hover:text-stone-300 font-medium transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
