import { useState, useEffect, ReactNode, useRef } from "react";
import { MoveDown } from "lucide-react";
// Utility function for scroll animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  className = "",
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center justify-center">
      <MoveDown strokeWidth={1} className="text-white/90 w-16 h-16" />
    </div>
  );
};

export { ScrollIndicator, AnimateOnScroll, useScrollAnimation };
