import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-muted-foreground mb-4">
              Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Muhammad Ayub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building dynamic web applications with modern technologies. 
            Specialized in PHP, React, and full-stack development.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 glow-primary">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Ayububi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg transition-all duration-300 hover:glow-primary"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-ayub-437662286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg transition-all duration-300 hover:glow-primary"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:muhammadayubma41@gmail.com"
              className="group p-3 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg transition-all duration-300 hover:glow-primary"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
