"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Stethoscope, ShieldCheck, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
    const team = [
        { name: "Dr. Ayesha Rahman", role: "Chief Medical Officer" },
        { name: "Mahfuz Rahman", role: "Lead Software Engineer" },
        { name: "Samiha Chowdhury", role: "UX Designer" },
    ];

    const features = [
        {
            icon: Stethoscope,
            title: "Our Mission",
            description:
                "Connecting patients and doctors through intuitive technology for seamless healthcare experiences.",
        },
        {
            icon: ShieldCheck,
            title: "Our Vision",
            description:
                "A world where quality healthcare is just a click away, everywhere and for everyone.",
        },
        {
            icon: HeartHandshake,
            title: "Our Values",
            description:
                "Integrity, empathy, innovation, and patient privacy—our core principles in every consultation.",
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
                    About <span className="text-blue-600 dark:text-blue-400">HealthConnect</span>
                </motion.h1>
                <p className="max-w-3xl mx-auto text-lg text-stone-700 dark:text-stone-300">
                    Making quality healthcare accessible for everyone, everywhere. Our platform connects
                    patients with certified doctors, making consultations easy, fast, and secure.
                </p>
            </section>

            {/* Our Story */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 text-center">
                    Our Story
                </h2>
                <p className="text-center text-stone-700 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed">
                    Founded in 2025, HealthConnect started with a simple idea: simplify booking doctor
                    appointments. From a small passionate team, we’ve grown into a robust telemedicine
                    ecosystem serving thousands of patients daily.
                </p>
                <p className="text-center text-stone-700 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed">
                    We work closely with healthcare professionals to create tools that empower both patients
                    and doctors. Features like AI-powered symptom checkers and real-time video consultations
                    ensure accessibility, trust, and efficiency.
                </p>
            </section>

            {/* Features / Mission, Vision, Values */}
            <section className="bg-stone-50 dark:bg-stone-900 py-16">
                <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 px-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="relative group rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0"></div>

                                {/* Actual Card */}
                                <Card className="relative z-10 p-6 shadow bg-background dark:bg-stone-800 rounded-2xl transition-all hover:shadow-xl">
                                    <CardHeader>
                                        <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-50 mb-12">
                    Meet Our Team
                </h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            className="relative group rounded-xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0"></div>

                            <div className="relative z-10 bg-stone-100 dark:bg-stone-800 rounded-xl p-6 shadow hover:shadow-xl text-center transition-all">
                                <Users className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-50">{member.name}</h4>
                                <p className="text-stone-600 dark:text-stone-300">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
                    <h2 className="text-3xl font-bold mb-2">Join us on our journey to revolutionize healthcare</h2>
                    <p>
                        Whether you’re a patient seeking trusted medical advice or a doctor aiming to reach more
                        people, HealthConnect is here for you.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-stone-100 dark:text-blue-500 dark:hover:bg-stone-200"
                    >
                        Get Started
                    </Button>
                </div>
            </section>

        </div>
    );
}
