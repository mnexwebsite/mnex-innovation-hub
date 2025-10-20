import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-tech.jpg";
import rdLabImage from "@/assets/rd-lab.jpg";

const Home = () => {
  const subsidiaries = [
    {
      name: "MNEX Visual",
      description:
        "Creative production studio delivering world-class video editing, motion graphics, and 3D animation services.",
      icon: <Rocket className="h-8 w-8 text-accent" />,
      link: "#",
    },
    {
      name: "MNEX Arc",
      description:
        "AI automation and web solutions division building SaaS tools and enterprise platforms.",
      icon: <Building2 className="h-8 w-8 text-accent" />,
      link: "#",
    },
  ];

  const leaders = [
    { name: "Midad Khan", role: "Founder & CEO" },
    { name: "Sajidur Rahman", role: "COO" },
    { name: "Safwan Nohash", role: "Managing Director" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Engineering the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From AI and automation to creative production, MNEX Group drives innovation across the
              globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/subsidiaries">
                <Button variant="hero" size="lg">
                  Explore Our Subsidiaries
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="lg">
                  Join Our Innovation Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground leading-relaxed">
            MNEX Group is a global technology and innovation hub based in the UK. We invest in,
            incubate, and manage cutting-edge subsidiaries and projects powered by our Research &
            Development Cell, delivering creative and technological solutions that shape the future.
          </p>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">MNEX R&D — Powering Innovation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MNEX R&D is the engine behind all subsidiaries, prototyping SaaS platforms, AI
                solutions, and creative tools. Collaborating with students, engineers, and designers,
                our R&D Cell ensures MNEX Group remains at the forefront of innovation.
              </p>
              <Link to="/research">
                <Button variant="accent">
                  Join Our Innovation Team
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={rdLabImage}
                alt="R&D Laboratory"
                className="rounded-lg shadow-[var(--shadow-glow)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Subsidiaries — Powered by MNEX Group</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subsidiaries.map((sub) => (
            <Card key={sub.name} className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">{sub.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {sub.name}
                </h3>
                <p className="text-muted-foreground mb-4">{sub.description}</p>
                <a
                  href={sub.link}
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                >
                  Visit Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Leadership</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <Card key={leader.name} className="text-center hover:shadow-[var(--shadow-accent-glow)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Collaborate with MNEX Group</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our innovation team or partner with us to build the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button variant="hero" size="lg">
                Join Our Team
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
