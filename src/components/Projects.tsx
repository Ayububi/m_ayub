import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Assignlly",
      description: "Platform connecting tutors and students with job posting and application features. Built with Yii framework.",
      link: "https://assignlly.com",
      tags: ["PHP", "Yii", "MySQL", "JavaScript"]
    },
    {
      title: "Station Manager",
      description: "Comprehensive petrol pump management system covering sales, purchases, expenses, and detailed reporting.",
      link: "https://jantrah.com/petrolpump/web/",
      tags: ["PHP", "React", "MySQL", "REST API"]
    },
    {
      title: "Globx",
      description: "Online marketplace platform for electronic component vendors with e-commerce functionality.",
      link: "https://globx.eu/shoptesting/",
      tags: ["PHP", "JavaScript", "MySQL", "E-commerce"]
    },
    {
      title: "Jdent",
      description: "Dental clinic management system with appointment scheduling and patient management.",
      link: "https://dental.jantrah.com/",
      tags: ["PHP", "Yii", "MySQL", "Healthcare"]
    },
    {
      title: "ICC",
      description: "Business management platform with comprehensive administrative tools.",
      link: "https://jantrah.com/icc/",
      tags: ["PHP", "JavaScript", "MySQL"]
    },
    {
      title: "Qmelocal",
      description: "Multi-portal platform integrating jobs marketplace, and service providers in one ecosystem.",
      link: "https://qmelocal.com",
      tags: ["PHP", "CodeIgniter", "MySQL", "REST API"]
    },
    {
      title: "Kindr",
      description: "Donation and fundraising platform for non-profits with secure payment integration.",
      link: "https://bekindr.org/",
      tags: ["PHP", "CodeIgniter", "Payment Gateway"]
    },
    {
      title: "MBDA",
      description: "News agency platform with publishing and editorial tools for content management.",
      link: "https://mbdafpcenter.com/",
      tags: ["PHP", "WordPress", "CMS"]
    },
    {
      title: "BipocXchange",
      description: "Media collaboration community platform for media owners and content creators.",
      link: "https://bipocxchange.com",
      tags: ["PHP", "CodeIgniter", "Community"]
    },
    {
      title: "Bizscoreline",
      description: "Business analytics and reporting dashboard with data visualization capabilities.",
      link: "https://bizscoreline.com",
      tags: ["PHP", "JavaScript", "Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A collection of real-world applications I've built for clients
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2 group-hover:border-primary/50"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
