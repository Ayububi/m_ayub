import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadayubma41@gmail.com",
      link: "mailto:muhammadayubma41@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 324 9135895",
      link: "tel:+923249135895"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@Ayububi",
      link: "https://github.com/Ayububi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Ayub",
      link: "https://www.linkedin.com/in/muhammad-ayub-437662286"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              {socialLinks.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm border border-border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together. Drop me a message!
            </p>
            <Button 
              size="lg" 
              className="gap-2 glow-primary"
              onClick={() => window.location.href = 'mailto:muhammadayubma41@gmail.com'}
            >
              <Mail className="w-5 h-5" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
