import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    division: "",
    message: "",
  });

  const opportunities = [
    "R&D Interns / Collaborators",
    "Software Engineering Students (AI, Web, Automation)",
    "Motion Graphics / 3D Designers",
    "Creative Project Assistants",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", email: "", skills: "", division: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join MNEX Group Innovation
          </h1>
        </div>

        {/* Content */}
        <section className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            MNEX Group collaborates with talented students, engineers, designers, and innovators to
            build tomorrow's technologies today.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Our R&D Cell provides opportunities to work on cutting-edge projects, SaaS platforms, AI
            automation, and creative production solutions.
          </p>
        </section>

        {/* Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Open Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {opportunities.map((opp) => (
              <Card key={opp} className="hover:shadow-[var(--shadow-accent-glow)] transition-all duration-300">
                <CardContent className="p-6">
                  <p className="font-semibold text-lg">{opp}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <Card className="shadow-[var(--shadow-glow)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="skills">Skills / Expertise</Label>
                  <Input
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g., React, 3D Animation, AI/ML"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="division">Division of Interest</Label>
                  <Select
                    value={formData.division}
                    onValueChange={(value) => setFormData({ ...formData, division: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a division" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rd">R&D / Innovation</SelectItem>
                      <SelectItem value="visual">MNEX Visual</SelectItem>
                      <SelectItem value="arc">MNEX Arc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Why do you want to join MNEX Group?</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Resume / Portfolio</Label>
                  <div className="mt-2 flex items-center justify-center border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors cursor-pointer">
                    <div className="text-center">
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Careers;
