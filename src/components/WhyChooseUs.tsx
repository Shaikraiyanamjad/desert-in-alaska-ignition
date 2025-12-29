import { useEffect, useRef, useState } from "react";
import { 
  BadgeCheck, 
  Zap, 
  FileCheck, 
  HeartHandshake,
  Building2
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description: "Our technicians hold industry-leading certifications and undergo continuous training to stay current with safety standards.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "24/7 emergency service ensures your facility is never left unprotected. We respond quickly when you need us most.",
  },
  {
    icon: FileCheck,
    title: "Code Compliance",
    description: "We guarantee all installations and inspections meet or exceed local, state, and federal fire safety regulations.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable Service",
    description: "Dependable scheduling, transparent pricing, and consistent quality you can count on for every project.",
  },
  {
    icon: Building2,
    title: "Commercial Expertise",
    description: "Specialized knowledge in commercial and industrial applications, from restaurants to manufacturing facilities.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(212 55% 25%) 0%, hsl(215 35% 20%) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 rounded-full bg-alaska-blue/10 blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-fire-glow font-semibold uppercase tracking-wider text-sm mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Why Choose Us
          </span>
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The Desert in Alaska Difference
          </h2>
          <p
            className={`text-primary-foreground/70 text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We don't just meet expectations – we exceed them. Here's what sets us apart 
            from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 transition-all duration-700 hover:bg-primary-foreground/10 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${index === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-fire flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-accent blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-accent/20 to-transparent transform rotate-45 translate-x-4 -translate-y-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
