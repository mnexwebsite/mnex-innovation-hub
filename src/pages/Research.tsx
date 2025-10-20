import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Code, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rdLabImage from "@/assets/rd-lab.jpg";

const Research = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Prototype SaaS & AI solutions",
      description: "Building next-generation software and artificial intelligence platforms",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Internal tools & automation systems",
      description: "Creating efficient workflows and automated processes",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "Creative tech innovations",
      description: "Pushing boundaries with cutting-edge creative technologies",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Student collaboration & talent incubation",
      description: "Nurturing the next generation of innovators and engineers",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MNEX R&D — Innovation Engine
          </h1>
        </div>

        {/* Hero Image Section */}
        <section className="mb-20">
          <img
            src={rdLabImage}
            alt="R&D Laboratory"
            className="rounded-lg shadow-[var(--shadow-glow)] w-full max-w-5xl mx-auto"
          />
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            MNEX R&D Cell is the heart of MNEX Group, powering all subsidiaries' projects, prototyping
            SaaS tools, AI solutions, and creative technologies.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            By collaborating with talented students, engineers, and designers, MNEX R&D ensures MNEX
            Group remains at the forefront of technological advancement.
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="hover:shadow-[var(--shadow-accent-glow)] transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Join the Innovation Team</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work on cutting-edge projects that shape the future of technology
          </p>
          <Link to="/careers">
            <Button variant="hero" size="lg">
              Explore Opportunities
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Research;
