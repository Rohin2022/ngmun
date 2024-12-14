import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import COMMITTEES from "@/StaffData/Committees";
//import getConfig from "next/config";

//const { publicRuntimeConfig } = getConfig();
//const basePath = publicRuntimeConfig?.basePath || "";
const basePath = '/ngmun';

type CommitteeDetailParams = {
  id: string;
};

// Generate static paths for the dynamic route
export async function generateStaticParams() {
  // Use the committee IDs from your data source
  const committeeIds = COMMITTEES.map((committee) => committee.id);

  // Return params for each dynamic route
  return committeeIds.map((id) => ({ id }));
}

// Dynamic route page component
export default function CommitteeDetailPage({
  params,
}: {
  params: CommitteeDetailParams;
}) {
  // Find the committee based on the `id` parameter
  const committee = COMMITTEES.find((c) => c.id === params.id);

  if (!committee) {
    return <div>Committee not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Similar hero section structure */}
      <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
        {/* Similar to committees page hero, but with committee-specific image */}
        <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>

        <div className="absolute inset-0">
          <Image
            src={`${basePath}/${committee.image}`}
            alt={committee.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        <div className="relative z-30 text-center px-4">
          <h1 className="text-white font-bold mb-4">
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in-down">
              {committee.title}
            </span>
          </h1>
        </div>
      </div>

      {/* Detailed Committee Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white shadow-lg rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Committee Overview
          </h2>
          <div className="text-gray-600 space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-yellow-700 font-medium">
                🔔 Note: Background guides and chair emails will be posted on
                January 17th by 9pm EST. Your advisor will also receive an email
                from ngmun@nobles.edu with instructions on how to access them.
              </p>
            </div>
            <p>{committee.fullDescription}</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/committees">
              <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white">
                Back to Committees
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
