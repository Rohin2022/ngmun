"use client";

import {Button} from "@/components/ui/button";
import {AnimateOnScroll} from "@/lib/ScrollUtils";
import Link from "next/link";
import {Clock, Mail, MapPin, DollarSign, Calendar} from "lucide-react";
import Image from "next/image";

export default function EventInfo() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            {/* Hero section with parallax */}
            <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
                <div className="absolute inset-0 bg-black/20 z-20"></div>

                <div className="absolute inset-0">
                    <Image
                        src="/registrationBg.jpg"
                        alt="Registration Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>

                <div className="relative z-30 text-center px-4">
                    <h1 className="text-white font-bold mb-4">
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in-down">
              Event Information
            </span>
                    </h1>
                    <p className="text-white text-base md:text-lg animate-fade-in">
                        Everything you need to know about NGMUN VII
                    </p>
                </div>
            </div>

            <div className="relative z-40 pt-12 pb-8 px-4 md:px-0 max-w-3xl">
                {/* Main content card */}
                <div className="bg-white shadow-lg rounded-3xl p-8 mb-8">

                    {/* Letter from Secretary General */}
                    <AnimateOnScroll>
                        <div className="mb-12 p-6 bg-gray-50 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4 text-black">
                                Letter from the Secretariat
                            </h2>
                            <div className="text-gray-600 space-y-4">
                                <p>
                                    Dear Delegates and Advisors,
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus
                                    mattis, rhoncus nisi id, convallis nisi. Etiam eu maximus arcu. Donec varius dictum
                                    egestas. Morbi sodales vel dolor a rutrum. Nunc scelerisque, lectus id pulvinar
                                    tristique, dolor arcu pharetra tortor, non volutpat libero neque ac leo. Vestibulum
                                    vitae diam luctus, gravida augue eu, placerat ligula. Nam vel accumsan nisi. Aenean
                                    eu cursus augue, vel vestibulum dolor. Integer at leo rhoncus, suscipit nibh non,
                                    dictum orci. Nam sollicitudin lobortis neque et egestas. Morbi nulla felis, vehicula
                                    nec nunc a, tincidunt porta augue. Phasellus tincidunt in ipsum eget faucibus.
                                    Aenean non pharetra odio. Maecenas hendrerit enim semper leo cursus mollis.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus
                                    mattis, rhoncus nisi id, convallis nisi. Etiam eu maximus arcu. Donec varius dictum
                                    egestas. Morbi sodales vel dolor a rutrum. Nunc scelerisque, lectus id pulvinar
                                    tristique, dolor arcu pharetra tortor, non volutpat libero neque ac leo. Vestibulum
                                    vitae diam luctus, gravida augue eu, placerat ligula. Nam vel accumsan nisi. Aenean
                                    eu cursus augue, vel vestibulum dolor. Integer at leo rhoncus, suscipit nibh non,
                                    dictum orci. Nam sollicitudin lobortis neque et egestas. Morbi nulla felis, vehicula
                                    nec nunc a, tincidunt porta augue. Phasellus tincidunt in ipsum eget faucibus.
                                    Aenean non pharetra odio. Maecenas hendrerit enim semper leo cursus mollis.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus
                                    mattis, rhoncus nisi id, convallis nisi. Etiam eu maximus arcu. Donec varius dictum
                                    egestas. Morbi sodales vel dolor a rutrum. Nunc scelerisque, lectus id pulvinar
                                    tristique, dolor arcu pharetra tortor, non volutpat libero neque ac leo. Vestibulum
                                    vitae diam luctus, gravida augue eu, placerat ligula. Nam vel accumsan nisi. Aenean
                                    eu cursus augue, vel vestibulum dolor. Integer at leo rhoncus, suscipit nibh non,
                                    dictum orci. Nam sollicitudin lobortis neque et egestas. Morbi nulla felis, vehicula
                                    nec nunc a, tincidunt porta augue. Phasellus tincidunt in ipsum eget faucibus.
                                    Aenean non pharetra odio. Maecenas hendrerit enim semper leo cursus mollis.
                                </p>
                                <p className="mt-4">
                                    Best regards,<br/>
                                    NAMES<br/>
                                    Secretaries-General, NGMUN VII
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Key Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Location Card */}
                        <AnimateOnScroll>
                            <Link
                                href="https://www.google.com/maps/place/Noble+and+Greenough+School/@42.2475,-71.1723,15z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-6 border rounded-xl transition-all duration-300 hover:shadow-lg hover:border-[#4A90E2]"
                            >
                                <div className="flex items-center mb-4">
                                    <MapPin className="w-6 h-6 text-[#4A90E2] mr-2"/>
                                    <h3 className="text-xl font-bold text-black">Location</h3>
                                </div>
                                <p className="text-gray-600">
                                    Noble and Greenough School<br/>
                                    10 Campus Drive<br/>
                                    Dedham, MA 02026
                                </p>
                                <p className="text-[#4A90E2] mt-2 text-sm flex items-center">
                                    View on Google Maps
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </p>
                            </Link>
                        </AnimateOnScroll>

                        {/* Contact Card */}
                        <AnimateOnScroll>
                            <Link
                                href="mailto:ngmun@nobles.edu"
                                className="block p-6 border rounded-xl transition-all duration-300 hover:shadow-lg hover:border-[#4A90E2]"
                            >
                                <div className="flex items-center mb-4">
                                    <Mail className="w-6 h-6 text-[#4A90E2] mr-2" />
                                    <h3 className="text-xl font-bold text-black">Contact</h3>
                                </div>
                                <p className="text-gray-600">
                                    Email: NGMUN@nobles.edu<br />
                                    All correspondence should be directed to this address
                                </p>
                                <p className="text-[#4A90E2] mt-2 text-sm flex items-center">
                                    Send us an email
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </p>
                            </Link>
                        </AnimateOnScroll>
                    </div>

                    {/* Schedule Section */}
                    <AnimateOnScroll>
                        <div className="mb-12">
                            <div className="flex items-center mb-4">
                                <Clock className="w-6 h-6 text-[#4A90E2] mr-2"/>
                                <h2 className="text-2xl font-bold text-black">Conference Schedule</h2>
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <p>8:30 – 9:00 — Opening Ceremony</p>
                                <p>9:00 – 10:30 — First Committee Session</p>
                                <p>10:30 – 10:45 — Break</p>
                                <p>10:45 – 12:00 — Second Committee Session</p>
                                <p>12:00 – 1:00 — Lunch</p>
                                <p>1:00 – 3:30 — Third Committee Session</p>
                                <p>3:45 – 4:15 — Closing Ceremony</p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Important Dates */}
                    <AnimateOnScroll>
                        <div className="mb-12">
                            <div className="flex items-center mb-4">
                                <Calendar className="w-6 h-6 text-[#4A90E2] mr-2"/>
                                <h2 className="text-2xl font-bold text-black">Key Dates</h2>
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <p>April 14 — Position papers due via email to committee chairs (see the <Link className={"text-[#4A90E2] hover:underline"} href={"/committees"}>committees page</Link> for chair emails)</p>
                                <p>April 21 — Conference Day</p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Pricing Information */}
                    <AnimateOnScroll>
                        <div className="mb-12">
                            <div className="flex items-center mb-4">
                                <DollarSign className="w-6 h-6 text-[#4A90E2] mr-2"/>
                                <h2 className="text-2xl font-bold text-black">Pricing & Payment</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>The fee to attend NGMUN is $15/delegate. There is no delegation/school fee.</p>
                                <p>
                                    Please mail checks to:<br/>
                                    ATTN: Business Office<br/>
                                    10 Campus Drive<br/>
                                    Dedham MA, 02026
                                </p>
                                <p>Make checks payable to "Noble and Greenough School" with memo "NGMUN"</p>
                                <p>Alternatively, you can deliver the check in person on the day of the event.</p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Registration Button */}
                    <div className="text-center">
                        <Link href="/register">
                            <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-8 py-3 rounded-full">
                                Register Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}