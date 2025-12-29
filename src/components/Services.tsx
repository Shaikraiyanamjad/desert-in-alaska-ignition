import { useEffect, useRef, useState } from "react";
import { 
  FireExtinguisher, 
  Flame, 
  Wind, 
  Droplets, 
  Zap, 
  Lightbulb,
  Snowflake,
  Fan
} from "lucide-react";

import serviceFireExtinguisher from "@/assets/service-fire-extinguisher.jpg";
import serviceKitchenSuppression from "@/assets/service-kitchen-suppression.jpg";
import serviceExhaustCleaning from "@/assets/service-exhaust-cleaning.jpg";
import serviceSprinkler from "@/assets/service-sprinkler.jpg";
import serviceDryChemical from "@/assets/service-dry-chemical.jpg";
import serviceEmergencyLighting from "@/assets/service-emergency-lighting.jpg";
import serviceRefrigeration from "@/assets/service-refrigeration.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";

const services = [
  {
    icon: FireExtinguisher,
    title: "Fire Extinguishers",
    description: "Inspection, maintenance, installation, and compliance with safety regulations for commercial and industrial facilities.",
    image: serviceFireExtinguisher,
    color: "from-fire to-fire-glow",
  },
  {
    icon: Flame,
    title: "Kitchen Fire Suppression",
    description: "Advanced automatic systems designed to protect commercial kitchens from grease and fire hazards.",
    image: serviceKitchenSuppression,
    color: "from-accent to-copper",
  },
  {
    icon: Wind,
    title: "Exhaust System Cleaning",
    description: "Professional cleaning to remove grease buildup, reduce fire risk, and meet fire code requirements.",
    image: serviceExhaustCleaning,
    color: "from-alaska-blue to-primary",
  },
  {
    icon: Droplets,
    title: "Fire Sprinkler Systems",
    description: "Design, installation, inspection, and maintenance of reliable fire sprinkler systems.",
    image: serviceSprinkler,
    color: "from-primary to-alaska-blue",
  },
  {
    icon: Zap,
    title: "Dry Chemical Systems",
    description: "Fast-acting fire suppression systems ideal for high-risk industrial environments.",
    image: serviceDryChemical,
    color: "from-fire-glow to-accent",
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting",
    description: "Installation and maintenance of emergency and exit lighting for safe evacuation during power outages.",
    image: serviceEmergencyLighting,
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Snowflake,
    title: "Refrigeration Services",
    description: "Commercial refrigeration installation, service, and preventive maintenance.",
    image: serviceRefrigeration,
    color: "from-cyan-500 to-alaska-blue",
  },
  {
    icon: Fan,
    title: "HVAC Rooftop Systems",
    description: "Full-service rooftop HVAC solutions for commercial buildings, including repair, replacement, and maintenance.",
    image: serviceHvac,
    color: "from-slate-dark to-primary",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-muted/50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Services
          </span>
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive <span className="text-gradient">Protection</span> Solutions
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From fire safety to climate control, we provide end-to-end commercial 
            services to keep your facility safe, compliant, and running efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                
                {/* Icon Badge */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="h-1 bg-gradient-to-r from-accent to-fire-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact" className="btn-accent inline-flex items-center gap-2">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
