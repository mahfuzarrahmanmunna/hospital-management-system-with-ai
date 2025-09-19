"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type PatientForm = {
    fullName: string;
    gender: string;
    dob: string;
    email: string;
    phone: string;
    address: string;
    bloodGroup: string;
    medicalHistory?: string;
    allergies?: string;
    medications?: string;
    documents?: FileList;
};

type DoctorForm = {
    fullName: string;
    gender: string;
    photo?: FileList;
    phone: string;
    email: string;
    specialty: string;
    qualifications: string;
    experience: number;
    clinicName: string;
    clinicAddress: string;
    consultationFee: number;
    about: string;
    availability?: string; // could be JSON
    verificationDocs?: FileList;
};

type RegisterFormValues = PatientForm & DoctorForm & { role: "patient" | "doctor" };

const RegisterPage = () => {
    const [role, setRole] = useState<"patient" | "doctor">("patient");

    const { register, handleSubmit, control, formState: { errors } } = useForm<RegisterFormValues>({
        defaultValues: { role: "patient" },
    });

    const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
        console.log("Form Data:", data);
        alert(`Registering as ${data.role}`);
        // Call your API here to submit patient/doctor info
    };

    return (
        <div className="flex min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
            {/* Left side */}
            <div className="w-1/2 relative hidden md:flex items-center justify-center bg-stone-100 dark:bg-stone-800 transition-colors duration-300">
                <div className="absolute top-20 left-16 max-w-md z-10">
                    <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                        Welcome to Hospital Management System
                    </h1>
                    <p className="text-lg text-stone-700 dark:text-stone-300">
                        Manage patients, doctors, appointments, and more efficiently.
                    </p>
                </div>
                <figure className="w-full h-full relative">
                    <Image
                        src="https://i.ibb.co.com/TqRPGNxk/OQ6-UTW0-removebg-preview.png"
                        alt="Hospital"
                        height={1000}
                        width={600}
                        // fill
                        className="object-cover"
                        priority
                    />
                </figure>
            </div>


            {/* Right side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
                <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-stone-100">
                    Create an Account
                </h2>

                {/* Role Selection */}
                <div className="mb-4 w-full max-w-md">
                    <Label>Select Role</Label>
                    <Select value={role} onValueChange={(val) => setRole(val as "patient" | "doctor")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="patient">Patient</SelectItem>
                            <SelectItem value="doctor">Doctor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* COMMON FIELDS */}
                    <div>
                        <Label>Full Name</Label>
                        <Input {...register("fullName", { required: "Full name required" })} />
                        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <Label>Gender</Label>
                        <Input {...register("gender", { required: "Gender required" })} />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input {...register("email", { required: "Email required" })} type="email" />
                    </div>

                    <div>
                        <Label>Phone</Label>
                        <Input {...register("phone", { required: "Phone required" })} />
                    </div>

                    {/* PATIENT SPECIFIC */}
                    {role === "patient" && (
                        <>

                            <div>
                                <Label>Address</Label>
                                <Input {...register("address")} />
                            </div>
                            <div className="md:flex space-y-5 justify-between gap-4">
                                <div>
                                    <Label>Blood Group</Label>
                                    <Controller
                                        name="bloodGroup"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                value={field.value}       // pass the current value here
                                                onValueChange={field.onChange} // update react-hook-form state
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Blood Group" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="A+">A+</SelectItem>
                                                    <SelectItem value="A-">A-</SelectItem>
                                                    <SelectItem value="B+">B+</SelectItem>
                                                    <SelectItem value="B-">B-</SelectItem>
                                                    <SelectItem value="AB+">AB+</SelectItem>
                                                    <SelectItem value="AB-">AB-</SelectItem>
                                                    <SelectItem value="O+">O+</SelectItem>
                                                    <SelectItem value="O-">O-</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label>Date of Birth</Label>
                                    <Input type="date" {...register("dob")} />
                                </div>

                            </div>

                            <div>
                                <Label>Medical History</Label>
                                <Input {...register("medicalHistory")} />
                            </div>
                            <div>
                                <Label>Allergies</Label>
                                <Input {...register("allergies")} />
                            </div>
                            <div>
                                <Label>Current Medications</Label>
                                <Input {...register("medications")} />
                            </div>
                            <div>
                                <Label>Upload Lab Reports</Label>
                                <Input type="file" {...register("documents")} multiple />
                            </div>
                        </>
                    )}

                    {/* DOCTOR SPECIFIC */}
                    {role === "doctor" && (
                        <>
                            <div>
                                <Label>Photo</Label>
                                <Input type="file" {...register("photo")} />
                            </div>
                            <div>
                                <Label>Specialty</Label>
                                <Input {...register("specialty", { required: "Specialty required" })} />
                            </div>
                            <div>
                                <Label>Qualifications</Label>
                                <Input {...register("qualifications", { required: "Qualifications required" })} />
                            </div>
                            <div>
                                <Label>Experience (Years)</Label>
                                <Input type="number" {...register("experience", { required: true })} />
                            </div>
                            <div>
                                <Label>Clinic/Hospital Name</Label>
                                <Input {...register("clinicName")} />
                            </div>
                            <div>
                                <Label>Clinic Address</Label>
                                <Input {...register("clinicAddress")} />
                            </div>
                            <div>
                                <Label>Consultation Fee</Label>
                                <Input type="number" {...register("consultationFee")} />
                            </div>
                            <div>
                                <Label>About / Bio</Label>
                                <Input {...register("about")} />
                            </div>
                            <div>
                                <Label>Upload Verification Docs</Label>
                                <Input type="file" {...register("verificationDocs")} multiple />
                            </div>
                        </>
                    )}

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
