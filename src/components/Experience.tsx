import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Garudalytics Pvt.Ltd",
      role: "Full Stack Developer – MERN, Django, Postgres",
      period: "Sep 2025 – Present",
      location: "Hyderabad, Telangana",
      achievements: [
        "Developed and maintained web applications using React.js, Node.js, Django and Postgres",
        "Improved performance and scalability, reducing API response time by approx. 25%",
        "Collaborated cross-functionally with teams to implement new features and resolve bugs using Jira",
        "CI/CD deployment in Azure VM"
      ],
      current: true
    },
    {
      company: "My Apps Development (MAD)",
      role: "Full Stack Developer – MERN Stack",
      period: "Dec 2023 – Jan 2025",
      location: "Hyderabad, Telangana",
      achievements: [
        "Developed and maintained web applications using React.js and Node.js",
        "Improved performance and scalability, reducing API response time by approx. 25%",
        "Built a full-featured LMS using MERN STACK with JWT authentication",
        "Developed a comprehensive booking platform with separate user and vendor roles",
        "Integrated Payment Gateway, advanced filtering, reusable components, ContextAPI, and responsive UI",
        "Created a role-based real estate web app for desk booking and service requests",
        "Secured REST APIs with Express.js and used MongoDB Atlas for cloud database scalability"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 ${
                  index % 2 === 0 ? 'md:right-0' : 'md:left-0'
                } left-0 md:transform md:translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${
                  exp.current ? 'animate-glow-pulse' : ''
                }`}></div>
                
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    {exp.current && (
                      <Badge className="bg-primary/20 text-primary border-primary/40">Current</Badge>
                    )}
                  </div>
                  
                  <p className="text-lg font-medium text-primary mb-2">{exp.role}</p>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <span>📍 {exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
