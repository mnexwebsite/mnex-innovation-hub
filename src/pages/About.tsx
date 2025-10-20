import { Rocket, Database, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const pillars = [
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Research & Development",
      description: "MNEX R&D drives innovation and prototypes",
    },
    {
      icon: <Rocket className="h-10 w-10 text-accent" />,
      title: "Technology & SaaS",
      description: "MNEX Arc develops AI, automation, and enterprise solutions",
    },
    {
      icon: <Palette className="h-10 w-10 text-accent" />,
      title: "Creative & Visual Services",
      description: "MNEX Visual produces video, motion graphics, and 3D animation",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About MNEX Group
          </h1>
        </div>

        {/* Intro */}
        <section className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            MNEX Group is a UK-based global technology and innovation hub. We invest in, incubate,
            and manage cutting-edge subsidiaries and projects that redefine the future of technology,
            creative services, and automation.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Our mission is to bridge creativity with technology and turn ideas into impactful,
            scalable solutions.
          </p>
        </section>

        {/* Core Pillars */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-card/50 rounded-lg p-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a globally recognized innovation hub, shaping the future of technology and
                creativity through research, SaaS, and automation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Mission</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Lead with research and technology innovation
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Build scalable SaaS platforms and creative solutions
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Empower student and young talent collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Incubate and scale future-ready technologies
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
