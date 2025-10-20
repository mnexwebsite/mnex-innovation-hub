import { useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", division: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      label: "Email",
      value: "info@mnexgroup.com",
      link: "mailto:info@mnexgroup.com",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-accent" />,
      label: "LinkedIn",
      value: "MNEX Group",
      link: "https://linkedin.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      label: "UK Office",
      value: "Registered Address, United Kingdom",
      link: null,
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      label: "Bangladesh Office",
      value: "Operational Support, Bangladesh",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can collaborate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{info.icon}</div>
                  <div>
                    <p className="font-semibold mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Choose MNEX Group?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Global innovation hub based in the UK
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Cutting-edge R&D capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Expert team across technology and creative domains
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    Proven track record of innovation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-[var(--shadow-glow)]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
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
                    <Label htmlFor="division">Division Interest</Label>
                    <Select
                      value={formData.division}
                      onValueChange={(value) => setFormData({ ...formData, division: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a division" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="rd">R&D / Innovation</SelectItem>
                        <SelectItem value="visual">MNEX Visual</SelectItem>
                        <SelectItem value="arc">MNEX Arc</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
