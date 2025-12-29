import { useEffect, useRef, useState } from "react";
import { Award, Clock, Shield, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Shield, value: "100%", label: "Code Compliance" },
  { icon: Clock, value: "24/7", label: "Emergency Response" },
];

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span
              className={`inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              About Our Company
            </span>
            
            <h2
              className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Your Trusted Partner in{" "}
              <span className="text-gradient">Fire Safety</span> & Commercial Services
            </h2>

            <div
              className={`space-y-4 text-muted-foreground text-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Desert in Alaska is a premier provider of fire protection, mechanical, 
                and safety systems for commercial and industrial facilities. With over 
                15 years of dedicated service, we've built our reputation on reliability, 
                expertise, and unwavering commitment to safety.
              </p>
              <p>
                Our certified technicians are trained to the highest industry standards, 
                ensuring that every installation, inspection, and maintenance service 
                meets or exceeds code requirements. From fire extinguishers to complete 
                HVAC systems, we deliver comprehensive solutions tailored to your needs.
              </p>
            </div>

            {/* Feature List */}
            <ul
              className={`mt-8 space-y-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {["State-certified professionals", "Comprehensive safety inspections", "Emergency response services", "Full code compliance guarantee"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Side */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: "0 4px 20px hsl(215 30% 15% / 0.08)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-alaska-blue flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
