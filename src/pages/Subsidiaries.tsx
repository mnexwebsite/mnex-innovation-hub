import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "MNEX Visual",
      icon: <Rocket className="h-12 w-12 text-accent" />,
      description:
        "Creative production studio delivering world-class video editing, motion graphics, and 3D animation services. We transform ideas into stunning visual experiences that captivate audiences and drive results.",
      services: [
        "Video Production & Editing",
        "Motion Graphics",
        "3D Animation",
        "Visual Effects",
        "Brand Design",
      ],
      link: "#",
    },
    {
      name: "MNEX Arc",
      icon: <Building2 className="h-12 w-12 text-accent" />,
      description:
        "AI automation and web solutions division building SaaS tools and enterprise platforms. We create intelligent systems that streamline operations and accelerate business growth.",
      services: [
        "AI & Machine Learning",
        "SaaS Platform Development",
        "Enterprise Solutions",
        "Web Applications",
        "Automation Systems",
      ],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Subsidiaries
          </h1>
          <p className="text-xl text-muted-foreground">Powered by MNEX Group</p>
        </div>

        {/* Subsidiaries */}
        <section className="space-y-12 max-w-5xl mx-auto mb-20">
          {subsidiaries.map((sub, index) => (
            <Card
              key={sub.name}
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-[var(--shadow-accent-glow)] transition-all duration-300">
                      {sub.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {sub.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">{sub.description}</p>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-accent">Services:</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {sub.services.map((service) => (
                          <li key={service} className="flex items-start text-muted-foreground">
                            <span className="text-accent mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={sub.link}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold"
                    >
                      Visit Website
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Learn How MNEX Group Powers Innovation</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our Research & Development approach
          </p>
          <Link to="/research">
            <Button variant="hero" size="lg">
              Explore MNEX R&D
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Subsidiaries;
