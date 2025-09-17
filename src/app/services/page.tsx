"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Coffee, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BiFirstAid } from "react-icons/bi";

export default function OurServices() {
    const services = [
        {
            icon: Stethoscope,
            title: "General Consultation",
            description:
                "Book appointments with certified doctors for routine health checkups and general medical advice.",
        },
        {
            icon: BiFirstAid,
            title: "Emergency Care",
            description:
                "Get urgent medical attention from professionals through our priority appointment system.",
        },
        {
            icon: Coffee,
            title: "Pharmacy & Prescriptions",
            description:
                "Receive prescribed medicines delivered to your doorstep with detailed guidance.",
        },
        {
            icon: Heart,
            title: "Health Monitoring",
            description:
                "Track your vitals and get AI-powered insights for better long-term health management.",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-20 text-center bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-stone-50 mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Our <span className="text-blue-600 dark:text-blue-400">Services</span>
                </motion.h1>
                <p className="max-w-3xl mx-auto text-lg text-stone-700 dark:text-stone-300">
                    Explore our wide range of healthcare services designed to make quality medical assistance easy and accessible for everyone.
                </p>
            </section>

            {/* Services Cards */}
            <section className="max-w-6xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={idx}
                            className="relative group rounded-2xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0"></div>

                            <Card className="relative z-10 p-6 shadow bg-background dark:bg-stone-800 rounded-2xl transition-all hover:shadow-xl">
                                <CardHeader>
                                    <CardHeader>
                                        <div className="h-12 w-12 mb-4">
                                            {Icon && <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />}
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>

                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
                    <h2 className="text-3xl font-bold mb-2">Experience Healthcare Like Never Before</h2>
                    <p>
                        Sign up today and explore all our services designed to provide seamless, safe, and fast healthcare.
                    </p>
                    <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
                        Explore Services
                    </button>
                </div>
            </section>

        </div>
    );
}
