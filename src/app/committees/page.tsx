'use client'

import Link from 'next/link';
import Image from 'next/image';
import { AnimateOnScroll } from "@/lib/ScrollUtils";
import COMMITTEES from "@/StaffData/Committees";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CommitteesPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            {/* Hero section similar to Event Info page */}
            <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
                <div className="absolute inset-0 bg-black/20 z-20"></div>

                <div className="absolute inset-0">
                    <Image
                        src={`${basePath}/committeesBg.jpg`}
                        alt="Committees Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>

                <div className="relative z-30 text-center px-4">
                    <h1 className="text-white font-bold mb-4">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in-down">
                Conference Committees
              </span>
                    </h1>
                    <p className="text-white text-base md:text-lg animate-fade-in">
                        Explore the diverse committees at NGMUN VII
                    </p>
                </div>
            </div>

            {/* Committees Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COMMITTEES.map((committee) => (
                        <AnimateOnScroll key={committee.id}>
                            <Link
                                href={`/committees/${committee.id}`}
                                className="block h-full group"
                            >
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 h-full flex flex-col cursor-pointer">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={`${basePath}/${committee.image}`}
                                            alt={committee.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={50}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#4A90E2] transition-colors">
                                            {committee.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 flex-grow">
                                            {committee.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </main>
    );
}