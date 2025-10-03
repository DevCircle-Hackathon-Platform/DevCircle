import HackathonCard from "./HackathonCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedHackathons = () => {
  // Mock data for featured hackathons
  const featuredHackathons = [
    {
      id: "1",
      title: "AI Innovation Challenge 2024",
      description: "Build the next generation of AI applications that solve real-world problems. Focus on machine learning, natural language processing, and computer vision.",
      startDate: "2024-03-15",
      endDate: "2024-03-17",
      location: "Virtual & San Francisco, CA",
      prize: "$50,000 Prize Pool",
      participants: 450,
      maxParticipants: 500,
      status: "upcoming" as const,
      tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
    },
    {
      id: "2",
      title: "Web3 Future Hackathon",
      description: "Create decentralized applications that will shape the future of the internet. Build on blockchain, explore DeFi, and create the next big dApp.",
      startDate: "2024-03-10",
      endDate: "2024-03-12",
      location: "New York, NY",
      prize: "$75,000 Prize Pool",
      participants: 320,
      maxParticipants: 400,
      status: "live" as const,
      tags: ["Blockchain", "Solidity", "Web3", "DeFi"],
    },
    {
      id: "3",
      title: "Green Tech Solutions",
      description: "Develop sustainable technology solutions for environmental challenges. Focus on clean energy, waste reduction, and climate monitoring.",
      startDate: "2024-03-22",
      endDate: "2024-03-24",
      location: "Seattle, WA",
      prize: "$30,000 Prize Pool",
      participants: 180,
      maxParticipants: 300,
      status: "upcoming" as const,
      tags: ["GreenTech", "IoT", "Sustainability", "React"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Hackathons
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join these exciting hackathons and compete with developers from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} {...hackathon} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/hackathons">
              View All Hackathons
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHackathons;