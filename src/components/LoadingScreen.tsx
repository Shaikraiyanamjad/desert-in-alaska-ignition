import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 25; // Faster loading
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(212 55% 25%) 0%, hsl(215 35% 20%) 100%)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -right-48 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 rounded-full bg-alaska-blue/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img src={logo} alt="Desert in Alaska" className="h-24 md:h-32" />
        </div>

        {/* Company Name */}
        <h1 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-8 text-center">
          Desert in Alaska
        </h1>

        {/* Loading Bar */}
        <div className="w-64 h-1.5 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-fire-glow rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-primary-foreground/60 text-sm">
          Loading experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
