import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedHackathons from "@/components/FeaturedHackathons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedHackathons />
    </div>
  );
};

export default Index;
