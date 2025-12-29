import { useEffect, useRef } from "react";
import { Shield, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = hero.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      hero.style.setProperty("--mouse-x", `${x}px`);
      hero.style.setProperty("--mouse-y", `${y}px`);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(212 55% 25%) 0%, hsl(200 55% 30%) 40%, hsl(215 35% 20%) 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 rounded-full bg-alaska-blue/20 blur-3xl animate-float" />
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fire/5 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, white 1px, transparent 1px),
            linear-gradient(white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-main text-center px-4">
        {/* Logo Badge */}
        <div className="animate-fade-up mb-8" style={{ animationDelay: "0s" }}>
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/20">
            <img src={logo} alt="Desert in Alaska" className="h-10" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className="animate-fade-up font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 max-w-5xl mx-auto"
          style={{ animationDelay: "0.1s" }}
        >
          Fire Protection &{" "}
          <span className="relative inline-block">
            <span className="text-gradient bg-gradient-to-r from-fire-glow to-accent">
              Commercial Services
            </span>
          </span>
          <br />
          You Can Trust
        </h1>

        {/* Subheading */}
        <p 
          className="animate-fade-up text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          style={{ animationDelay: "0.2s" }}
        >
          Certified professionals delivering reliable fire safety, HVAC, and refrigeration 
          solutions for commercial and industrial facilities across the region.
        </p>

        {/* CTA Buttons */}
        <div 
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-fire text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ boxShadow: "0 4px 30px hsl(28 85% 52% / 0.4)" }}
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Contact Us
          </a>
        </div>

        {/* Trust Badges */}
        <div 
          className="animate-fade-up mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/60"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm">24/7 Emergency Service</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
            <span className="text-sm">Certified Technicians</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
            <span className="text-sm">Code Compliant</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up"
        style={{ animationDelay: "0.7s" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
