import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const certifications = [
    "Certified from Samskruthi Foundation BE GOOD – DO GOOD activity",
    "Certified Training completion certificate for 'DATA SCIENCE' from skill vertex"
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-xl font-medium text-primary">
                  Bachelor of Technology
                </h4>
                <p className="text-lg">Electronics and Communication Engineering</p>
                <p className="text-muted-foreground">
                  Bhart Institute of Engineering and Technology
                </p>
                <p className="text-muted-foreground">Hyderabad</p>
                <Badge className="bg-primary/20 text-primary border-primary/40">
                  Graduated 2022
                </Badge>
              </div>
            </Card>
            
            {/* Certifications */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">🏆</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
