import { Users, Sparkles, Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Leadership = () => {
  const executives = [
    {
      name: "Midad Khan",
      role: "Founder & CEO",
      icon: <Users className="h-12 w-12 text-primary-foreground" />,
    },
    {
      name: "Sajidur Rahman",
      role: "Chief Operating Officer",
      icon: <Users className="h-12 w-12 text-primary-foreground" />,
    },
    {
      name: "Safwan Nohash",
      role: "Managing Director",
      icon: <Users className="h-12 w-12 text-primary-foreground" />,
    },
  ];

  const rdTeam = [
    {
      name: "Ahmed Hassan",
      position: "Lead AI Engineer",
      icon: <Sparkles className="h-8 w-8 text-accent" />,
    },
    {
      name: "Sarah Chen",
      position: "Senior Full-Stack Developer",
      icon: <Code className="h-8 w-8 text-accent" />,
    },
    {
      name: "James Wilson",
      position: "UI/UX Design Lead",
      icon: <Palette className="h-8 w-8 text-accent" />,
    },
    {
      name: "Priya Sharma",
      position: "Machine Learning Specialist",
      icon: <Sparkles className="h-8 w-8 text-accent" />,
    },
    {
      name: "Marcus Rodriguez",
      position: "DevOps Engineer",
      icon: <Zap className="h-8 w-8 text-accent" />,
    },
    {
      name: "Emily Taylor",
      position: "Product Research Analyst",
      icon: <Code className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Leadership & Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders and innovative minds driving MNEX Group's mission to
            engineer the future of technology
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Executive Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced leadership team guides MNEX Group's strategic vision and operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {executives.map((exec) => (
            <Card
              key={exec.name}
              className="text-center hover:shadow-[var(--shadow-accent-glow)] transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  {exec.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
                <p className="text-muted-foreground">{exec.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-accent">
                Founder's Vision
              </h3>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic text-center">
                "At MNEX Group, we don't just build technology—we engineer the future. Our mission
                is to empower innovators, creators, and visionaries to transform bold ideas into
                reality. Through relentless innovation and collaboration, we're shaping a world
                where technology and creativity converge to solve tomorrow's challenges today."
              </blockquote>
              <p className="text-center mt-6 text-muted-foreground font-semibold">— Midad Khan</p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Team */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our R&D Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind MNEX Group's innovation engine, pushing the boundaries of
            technology and creativity
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rdTeam.map((member) => (
            <Card
              key={member.name}
              className="hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the innovation journey. Explore career opportunities at MNEX Group
          </p>
          <a href="/careers">
            <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Open Positions
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
