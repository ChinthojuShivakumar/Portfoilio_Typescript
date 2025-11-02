import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shivakumarchinthoju@gmail.com",
      href: "mailto:shivakumarchinthoju@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9948129804",
      href: "tel:+919948129804"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shivakumar-chinthoju",
      href: "https://linkedin.com/in/shivakumar-chinthoju"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "shivakumarchinthoju",
      href: "https://github.com/shivakumarchinthoju"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  {contact.href.startsWith('http') && (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </a>
              </Card>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Card className="p-8 bg-gradient-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Ready to start a project?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Let's create something amazing together!
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-background hover:bg-background/90"
                asChild
              >
                <a href="mailto:shivakumarchinthoju@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
