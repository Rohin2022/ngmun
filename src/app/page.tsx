"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import {
    ChevronRight,
    ArrowRight, MoveDown,

} from "lucide-react";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useScrollAnimation, AnimateOnScroll} from "@/lib/ScrollUtils";

export default function Home() {
    const [hasScrolled, setHasScrolled] = useState(false);

    const scrollY = useScrollAnimation();

    useEffect(() => {
        if (scrollY > 50 && !hasScrolled) {
            // Check if user has scrolled more than 50px
            setHasScrolled(true);
        }
    }, [scrollY, hasScrolled]);

    return (
        <main className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Hero section with parallax */}
            <div className="w-full h-[130vh] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
                <div className="absolute inset-0 bg-black/20 z-20"></div>

                <div
                    className="absolute inset-0"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/background.jpeg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                            className="hidden sm:block"
                        />
                        <Image
                            src="/backgroundTall.jpg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                            className="block sm:hidden"
                        />
                    </div>
                </div>

                <div className="relative z-30 text-center px-4 md:px-0 max-w-3xl xl:-mt-80 -mt-48">
                    <h1 className="text-white font-bold mb-4">
            <span className="block text-md font-medium animate-fade-in-up">
              THE SEVENTH SESSION
            </span>
                        <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 animate-fade-in-down">
              Noble and Greenough
              <br/> Model UN VII
            </span>
                    </h1>

                    <p className="text-white text-base md:text-lg mb-8 max-w-xl mx-auto animate-fade-in">
                        Sunday, May 4, 2025
                    </p>
                    <Link href="/register">
                        <Button
                            variant="expandIcon"
                            Icon={ArrowRight}
                            iconPlacement="right"
                            className="group backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/50 text-white rounded-md h-12 px-8 text-base font-medium transition-all duration-300 animate-fade-in"
                        >
                            Register Today!
                        </Button>
                    </Link>
                </div>
                {hasScrolled ? null :
                    <div
                        className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center justify-center">
                        <MoveDown strokeWidth={1} className="text-white/90 w-16 h-16"/>
                    </div>}
            </div>

            {/* Main Content Section */}
            <div className="relative -mt-24 md:-mt-24 xl:-mt-48 md:px-4 lg:px-8 z-40">
                {/* Main content card with responsive design */}
                <div className="md:max-w-4xl w-full mx-auto bg-white shadow-lg md:rounded-3xl p-6 mb-8">
                    {/* Welcome Section */}
                    <AnimateOnScroll>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
                                Welcome to NGMUN VII
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                                NGMUN is a one-day high school Model UN conference dedicated to
                                strengthening the voices of future leaders by fostering
                                collaboration, public speaking, and problem-solving. Through
                                exploring a wide range of topics and real-world problems, we
                                hope to empower students to become more active in their
                                communities.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Info Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Event Information Card */}
                        <AnimateOnScroll>
                            <Link href="/info">
                                <div
                                    className="cursor-pointer text-center transform transition-all duration-300 hover:scale-105">
                                    <div
                                        className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-black">
                                        Event Information
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Find out everything you need to know about the conference.
                                    </p>
                                </div>
                            </Link>
                        </AnimateOnScroll>

                        {/* Committees Card */}
                        <AnimateOnScroll className="delay-200">
                            <Link href="/committees">
                                <div
                                    className="cursor-pointer text-center transform transition-all duration-300 hover:scale-105">
                                    <div
                                        className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-black">
                                        Committees
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Explore our diverse range of committees and topics.
                                    </p>
                                </div>
                            </Link>
                        </AnimateOnScroll>

                        {/* Staff Card */}
                        <AnimateOnScroll className="delay-400">
                            <Link href="/staff">
                                <div
                                    className="cursor-pointer text-center transform transition-all duration-300 hover:scale-105">
                                    <div
                                        className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-black">Staff</h3>
                                    <p className="text-gray-600 text-sm">
                                        Meet our dedicated team of student leaders.
                                    </p>
                                </div>
                            </Link>
                        </AnimateOnScroll>
                    </div>

                    {/* Team Section */}
                    <AnimateOnScroll>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                                Meet the Secretariat
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                                Our dedicated leadership team works tirelessly to ensure NGMUN
                                provides an exceptional experience for all delegates.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Staff Profiles Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Staff profile cards */}
                        {[
                            {
                                name: "Ben Gelber",
                                role: "Secretary General",
                                description:
                                    "Ben is a Junior at the Noble and Greenough School",
                                img: "/BenProfile.jpg",
                            },
                            {
                                name: "Alex Yoon",
                                role: "Secretary General",
                                description:
                                    "Alex is a Junior at the Noble and Greenough School",
                                img: "/AlexProfile.jpg",
                            },
                            {
                                name: "Chidubem Chukwu",
                                role: "Undersecretary General",
                                description:
                                    "Chidubem is a Senior at the Noble and Greenough School",
                                img: "/ChidProfile.jpg",
                            },
                        ].map((profile, index) => (
                            <AnimateOnScroll
                                key={profile.name}
                                className={`delay-${index * 200}`}
                            >
                                <div className="text-center">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                                        <Image
                                            src={profile.img}
                                            alt={profile.role}
                                            width={160}
                                            height={160}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 text-black">
                                        {profile.name}
                                    </h3>
                                    <p className="text-[#4A90E2] font-medium text-sm mb-1">
                                        {profile.role}
                                    </p>
                                    <p className="text-gray-600 text-xs">{profile.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    {/* Meet More Team Members Section */}
                    <div className="text-center pb-4">
                        <h3 className="text-xl font-bold mb-3 text-black">
                            Meet the NGMUN Team
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 max-w-xl mx-auto">
                            Our conference is made possible by a dedicated group of committee
                            chairs, staff members, and volunteers.
                        </p>
                        <Link href="/staff">
                            <Button
                                className="bg-white text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white border-2 border-[#4A90E2] rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 transition-colors duration-200">
                                Meet the Full Team
                                <ChevronRight className="w-4 h-4"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
