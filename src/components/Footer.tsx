import { useState, useEffect } from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Fire Extinguishers",
    "Kitchen Fire Suppression",
    "Fire Sprinkler Systems",
    "HVAC Systems",
    "Refrigeration Services",
  ];

  return (
    <footer className="bg-slate-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src={logo} alt="Desert in Alaska" className="h-16" />
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Your trusted partner for comprehensive fire protection and 
              commercial services. Safety is our priority.
            </p>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>Serving the Greater Region</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:desertinalaska@outlook.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                  <span className="break-all">desertinalaska@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:313-931-3070"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>313-931-3070</span>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Desert in Alaska. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Fire Protection & Commercial Services
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
