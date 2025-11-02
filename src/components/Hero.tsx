import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, FileText, ArrowDown, Download } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Greeting */}
          <div className="inline-block mb-4">
            <span className="text-primary font-medium px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              👋 Hello, I'm
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Shiva Kumar Chinthoju
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-light">
            Full Stack Developer
          </p>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable web and mobile applications with MERN Stack, React Native & Django
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            
            <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>Resume - Shiva Kumar Chinthoju</span>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <a href="/ShivaKumarResume.pdf" download="ShivaKumarResume.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-hidden">
                  <iframe
                    src="/ShivaKumarResume.pdf"
                    className="w-full h-full border-0 rounded-lg"
                    title="Resume"
                  />
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("experience")}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Experience
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com/shivakumarchinthoju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/shivakumar-chinthoju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:shivakumarchinthoju@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce cursor-pointer hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
