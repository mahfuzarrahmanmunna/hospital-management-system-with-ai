"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapClient from "./components/MapClient";

export default function ContactUs() {
    const contacts = [
        {
            icon: Phone,
            title: "Phone Support",
            description: "+880 1234 567890",
        },
        {
            icon: Mail,
            title: "Email Support",
            description: "support@healthcare.com",
        },
        {
            icon: MapPin,
            title: "Our Location",
            description: "123 Medical Street, Dhaka, Bangladesh",
        },
        {
            icon: Clock,
            title: "Working Hours",
            description: "Mon - Sat: 8:00 AM - 8:00 PM",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-24 text-center bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-stone-50 mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                </motion.h1>
                <p className="max-w-3xl mx-auto text-lg text-stone-700 dark:text-stone-300">
                    We are here to help you. Reach out to us for any inquiries, feedback, or support regarding our healthcare services.
                </p>
            </section>

            {/* Contact Info Cards */}
            <section className="max-w-6xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {contacts.map((contact, idx) => {
                    const Icon = contact.icon;
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
                                    <div className="h-12 w-12 mb-4">
                                        <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <CardTitle>{contact.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{contact.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </section>

            {/* Contact Form */}
            <section className="max-w-4xl mx-auto py-16 px-6">
                <motion.h2
                    className="text-3xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Send Us a <span className="text-blue-600 dark:text-blue-400">Message</span>
                </motion.h2>
                <form className="bg-background dark:bg-stone-800 p-8 rounded-2xl shadow-md space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-stone-300 dark:border-stone-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-stone-300 dark:border-stone-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="border border-stone-300 dark:border-stone-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="border border-stone-300 dark:border-stone-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Map Section */}
            <section className="max-w-6xl mx-auto py-16 px-6 z-0">
                <motion.div
                    className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <MapClient />

                    {/* Optional overlay gradient effect */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/20 rounded-2xl"></div>
                </motion.div>
            </section>


            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-6 space-y-4">
                    <h2 className="text-3xl font-bold mb-2">Have Questions? We're Here to Help</h2>
                    <p>
                        Contact our support team today for prompt assistance or schedule an appointment with our specialists.
                    </p>
                    <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
                        Contact Support
                    </button>
                </div>
            </section>
        </div>
    );
}
