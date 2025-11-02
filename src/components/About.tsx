import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and scalable web applications with modern frameworks"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Creating cross-platform mobile experiences with React Native"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Designing robust backend systems and RESTful APIs"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Career Objective */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Career Objective</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with 1+ year of experience in building scalable web and mobile 
              applications using MERN STACK, REACT NATIVE AND DJANGO. Looking to contribute to 
              dynamic projects and grow as a versatile developer.
            </p>
          </Card>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
