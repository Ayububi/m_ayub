import { Card } from "@/components/ui/card";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, value: "1.5+", label: "Years Experience" },
    { icon: Briefcase, label: "10+ Projects", value: "10+" },
    { icon: GraduationCap, label: "BS Computer Science", value: "2023" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional web experiences
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motivated and detail-oriented Web Developer with 1.5+ years of hands-on experience 
                in designing, developing, and maintaining dynamic websites and web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in <span className="text-primary font-semibold">PHP</span>, <span className="text-primary font-semibold">CodeIgniter</span>, 
                <span className="text-primary font-semibold"> Yii</span>, <span className="text-primary font-semibold">WordPress</span>, 
                <span className="text-primary font-semibold"> React</span>, and modern web technologies. 
                Skilled in both frontend and backend development with a strong eye for clean design and seamless functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about learning new technologies, solving real-world problems, and delivering 
                solutions that align with business goals and user needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-slide-in-right">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
