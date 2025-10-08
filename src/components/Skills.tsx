import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "jQuery", "AJAX"],
      color: "primary"
    },
    {
      title: "Backend Development",
      skills: ["PHP", "Node.js", "CodeIgniter", "Yii", "Laravel", "REST API"],
      color: "secondary"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      color: "primary"
    },
    {
      title: "CMS & Platforms",
      skills: ["WordPress", "WooCommerce", "Custom Themes", "Plugins"],
      color: "secondary"
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Sublime"],
      color: "primary"
    },
    {
      title: "Other Skills",
      skills: ["QA Testing", "Bug Fixing", "Debugging", "Deployment", "UX/UI"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
