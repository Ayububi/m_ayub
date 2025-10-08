import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "JANTRAH TECH Private Limited",
      position: "Full Stack Software Developer",
      period: "Oct 2024 - Present",
      location: "Islamabad, Pakistan",
      description: [
        "Designed, developed, and maintained dynamic, scalable web applications using PHP, Yii, React, HTML, CSS, and JavaScript",
        "Integrated REST APIs and applied performance optimization techniques",
        "Collaborated on QA testing, bug fixing, and UX/UI improvements",
        "Successfully delivered multiple end-to-end client projects from concept to deployment"
      ],
      projects: ["Assignlly", "Station Manager", "Globx"]
    },
    {
      company: "Qmespotlight, USA Freelance",
      position: "Software Developer",
      period: "Sep 2023 - Sep 2024",
      location: "Islamabad, Pakistan (Remote)",
      description: [
        "Developed and maintained dynamic, scalable websites using PHP, CodeIgniter, HTML, CSS, and JavaScript",
        "Integrated REST APIs and implemented performance optimization techniques",
        "Collaborated in QA testing, bug fixing, and UX/UI enhancements",
        "Delivered multiple client-based projects from concept to deployment"
      ],
      projects: ["Qmelocal", "Kindr", "MBDA", "BipocXchange", "Bizscoreline"]
    },
    {
      company: "Freelance",
      position: "WordPress Developer",
      period: "Apr 2022 - Oct 2022",
      location: "Rawalpindi, Pakistan",
      description: [
        "Designed and customized WordPress websites for multiple freelance clients",
        "Developed blogging platforms with user-friendly layouts and SEO optimization",
        "Built e-commerce websites with product listings and payment gateway integration",
        "Delivered responsive, client-focused solutions ensuring scalability"
      ],
      projects: []
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My professional journey in software development
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary mb-1">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.projects.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold mb-2">Key Projects:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, projectIndex) => (
                          <span 
                            key={projectIndex}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
