import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Creative Production",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the creative industry and what it means for content creators.",
      category: "AI",
      date: "2025-10-15",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable SaaS Platforms",
      excerpt:
        "Key principles and best practices for developing enterprise-grade software as a service solutions.",
      category: "SaaS",
      date: "2025-10-10",
      readTime: "7 min read",
    },
    {
      title: "Automation: The Key to Business Efficiency",
      excerpt:
        "How intelligent automation systems are transforming business operations and driving productivity.",
      category: "Technology",
      date: "2025-10-05",
      readTime: "6 min read",
    },
    {
      title: "3D Animation Trends in 2025",
      excerpt:
        "The latest trends and techniques shaping the future of 3D animation and motion graphics.",
      category: "Creative",
      date: "2025-09-28",
      readTime: "4 min read",
    },
    {
      title: "The Role of R&D in Tech Innovation",
      excerpt:
        "Why research and development is crucial for staying ahead in the rapidly evolving technology landscape.",
      category: "Technology",
      date: "2025-09-20",
      readTime: "8 min read",
    },
    {
      title: "Collaborating with Student Talent",
      excerpt:
        "How partnering with students and young innovators drives fresh perspectives and breakthrough solutions.",
      category: "Innovation",
      date: "2025-09-15",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "AI", "SaaS", "Technology", "Creative", "Innovation"];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MNEX Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Innovation, AI, and Technology Perspectives
          </p>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button key={cat} variant="outline" size="sm">
                {cat}
              </Button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Subscribe to MNEX Insights</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
