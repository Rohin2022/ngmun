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
      <div className="absolute inset-0 bg-blue-900 opacity-30 z-10"></div>
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="relative z-20 text-center px-4 md:px-0">
        <h1 className="text-white font-bold mb-4 text-4xl sm:text-5xl md:text-6xl leading-tight">
          <span className="block whitespace-nowrap">{title}</span>
          <span className="block">{subtitle}</span>
        </h1>
        <div className="max-w-md mx-auto">
          <p className="text-white text-sm md:text-md font-bold mb-8">
            {description}
          </p>
          {hasButton ? (
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-3xl">
              {buttonText}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
