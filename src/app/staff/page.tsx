"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimateOnScroll } from "@/lib/ScrollUtils";

interface StaffMember {
  name: string;
  role: string;
  image: string;
  biography: string; // Added biography field
  committee?: string;
}

interface CommitteeStaff {
  name: string;
  chairs: StaffMember[];
}

export default function Staff() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leadershipTeam: StaffMember[] = [
    {
      name: "Ben Gelber",
      role: "Secretary-General",
      image: "/BenProfile.jpg",
      biography:
        "Your biography text here. This can be multiple paragraphs long and include details about experience, interests, and goals.",
    },
    {
      name: "Alex Yoon",
      role: "Secretary-General",
      image: "/AlexProfile.jpg",
      biography: "Your biography text here.",
    },
    // ... other leadership team members with biographies
  ];

  const committees: CommitteeStaff[] = [
    {
      name: "United Nations Security Council",
      chairs: [
        {
          name: "[Chair Name]",
          role: "Chair",
          image: "/placeholder.jpg",
          committee: "UNSC",
          biography: "Your biography text here.",
        },
        {
          name: "[Co-Chair Name]",
          role: "Co-Chair",
          image: "/placeholder.jpg",
          committee: "UNSC",
          biography: "Your biography text here.",
        },
      ],
    },
  ];

  const facultyAdvisors: StaffMember[] = [
    {
      name: "Shiela McElwee",
      role: "Faculty Advisor",
      image: "/ShielaProfile.jpg",
      biography: "Your biography text here.",
    },
    {
      name: "Amadou Seck",
      role: "Faculty Advisor",
      image: "/AmadouProfile.jpg",
      biography: "Your biography text here.",
    },
  ];

  // Staff member card component
  const StaffMemberCard = ({ member }: { member: StaffMember }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-full object-cover cursor-pointer transition-transform hover:scale-105"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
        <p className="text-[#4A90E2] font-medium mb-2">{member.role}</p>

        {/* Biography section */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 text-sm mt-2 px-4">{member.biography}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {isExpanded ? "Show Less" : "Read Bio"}
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Hero Section remains the same */}
      <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>

        <div className="absolute inset-0">
          <Image
            src="/staff-background.jpg" // Add a suitable background image
            alt="Staff Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        <div className="relative z-30 text-center px-4">
          <h1 className="text-white font-bold mb-4">
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in-down">
              Meet Our Team
            </span>
          </h1>
          <p className="text-white text-base md:text-lg animate-fade-in">
            The dedicated staff behind NGMUN VII
          </p>
        </div>
      </div>

      {/* Staff Content */}
      <div className="md:px-0 max-w-3xl relative px-4 py-12 -mt-20 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Leadership Section */}
          <section className="mb-16">
            <Card className="p-8 backdrop-blur-sm bg-white/90 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-8">
                Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadershipTeam.map((member, index) => (
                  <AnimateOnScroll
                    key={member.name}
                    className={`delay-${index * 100}`}
                  >
                    <StaffMemberCard member={member} />
                  </AnimateOnScroll>
                ))}
              </div>
            </Card>
          </section>

          {/* Committee Staff Section */}
          <section className="mb-16">
            <Card className="p-8 backdrop-blur-sm bg-white/90 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-8">
                Committee Leadership
              </h2>
              <div className="space-y-12">
                {committees.map((committee) => (
                  <div key={committee.name} className="space-y-6">
                    <h3 className="text-xl font-semibold text-center text-gray-900">
                      {committee.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                      {committee.chairs.map((chair) => (
                        <AnimateOnScroll key={chair.name}>
                          <StaffMemberCard member={chair} />
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Faculty Advisors Section */}
          <section>
            <Card className="p-8 backdrop-blur-sm bg-white/90 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-8">
                Faculty Advisors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {facultyAdvisors.map((advisor) => (
                  <AnimateOnScroll key={advisor.name}>
                    <StaffMemberCard member={advisor} />
                  </AnimateOnScroll>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
