import { useState } from "react";
import Navigation from "@/components/Navigation";
import HackathonCard from "@/components/HackathonCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Mock data for all hackathons
  const allHackathons = [
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
    {
      id: "4",
      title: "Mobile App Innovation",
      description: "Create mobile applications that enhance daily life. Focus on React Native, Flutter, or native development for iOS and Android.",
      startDate: "2024-04-05",
      endDate: "2024-04-07",
      location: "Austin, TX",
      prize: "$25,000 Prize Pool",
      participants: 220,
      maxParticipants: 350,
      status: "upcoming" as const,
      tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
    },
    {
      id: "5",
      title: "Healthcare Tech Challenge",
      description: "Revolutionize healthcare with technology. Build solutions for patient care, medical diagnostics, and health monitoring.",
      startDate: "2024-02-20",
      endDate: "2024-02-22",
      location: "Boston, MA",
      prize: "$40,000 Prize Pool",
      participants: 400,
      maxParticipants: 400,
      status: "ended" as const,
      tags: ["HealthTech", "Medical", "Data Analysis", "IoT"],
    },
    {
      id: "6",
      title: "Fintech Revolution",
      description: "Build the future of financial technology. Create innovative solutions for banking, payments, and financial services.",
      startDate: "2024-04-12",
      endDate: "2024-04-14",
      location: "Chicago, IL",
      prize: "$60,000 Prize Pool",
      participants: 150,
      maxParticipants: 400,
      status: "upcoming" as const,
      tags: ["Fintech", "Blockchain", "API", "Security"],
    },
  ];

  const availableFilters = ["AI", "Blockchain", "Mobile", "HealthTech", "Fintech", "GreenTech", "Web3", "IoT"];

  const filteredHackathons = allHackathons.filter((hackathon) => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilters = selectedFilters.length === 0 ||
      selectedFilters.some(filter => hackathon.tags.includes(filter));

    return matchesSearch && matchesFilters;
  });

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Hackathons</h1>
          <p className="text-xl text-muted-foreground">
            Discover and join exciting hackathons from around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search hackathons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filter by technology:</span>
            </div>
            {availableFilters.map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
            {(selectedFilters.length > 0 || searchTerm) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear all
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredHackathons.length} of {allHackathons.length} hackathons
          </p>
        </div>

        {/* Hackathon Grid */}
        {filteredHackathons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} {...hackathon} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No hackathons found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find more hackathons.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathons;