import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  hasButton?: boolean;
  backgroundImage: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  buttonText,
  hasButton,
  backgroundImage,
}: HeroProps) {
  return (
    <div className="w-full h-[100vh] relative overflow-hidden flex items-center justify-center">
      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      
      {/* Content */}
      <div className="relative z-30 text-center px-4 md:px-0 max-w-4xl">
        <h1 className="text-white font-bold mb-6">
          <span className="block text-5xl md:text-7xl mb-2">{title}</span>
          <span className="block text-4xl md:text-6xl">{subtitle}</span>
        </h1>
        
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        {hasButton && (
          <button className="bg-[#2B82E8] hover:bg-blue-600 text-white font-semibold 
            py-3 px-8 rounded-full transition duration-300">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}