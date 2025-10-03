import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  MessageSquare,
  Heart,
  Share2,
  Calendar,
  Trophy,
  Users,
  Filter,
  Plus,
  Pin,
  TrendingUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import communityHero from "@/assets/community-hero.png";

const Community = () => {
  const categories = ["All", "Hackathons", "Tech Stack", "Project Help", "General"];
  
  const discussions = [
    {
      id: 1,
      author: { name: "Alice Johnson", avatar: "https://github.com/shadcn.png", username: "@alice" },
      title: "Looking for teammates for AI hackathon",
      content: "I'm working on an AI-powered code review tool and need a backend developer and UI/UX designer...",
      tags: ["#AI", "#React", "#Python"],
      engagement: { likes: 24, comments: 8, shares: 3 },
      time: "2 hours ago",
      isPinned: false,
    },
    {
      id: 2,
      author: { name: "Mike Chen", avatar: "https://github.com/shadcn.png", username: "@mike_chen" },
      title: "Best practices for React state management in 2024",
      content: "I've been exploring different state management solutions and wanted to share my findings...",
      tags: ["#React", "#StateManagement", "#Frontend"],
      engagement: { likes: 45, comments: 12, shares: 7 },
      time: "4 hours ago",
      isPinned: true,
    },
    {
      id: 3,
      author: { name: "Sarah Kim", avatar: "https://github.com/shadcn.png", username: "@sarah_k" },
      title: "Web3 development resources compilation",
      content: "Here's a comprehensive list of resources I've collected for Web3 development...",
      tags: ["#Web3", "#Blockchain", "#Resources"],
      engagement: { likes: 67, comments: 15, shares: 12 },
      time: "6 hours ago",
      isPinned: false,
    },
  ];

  const topContributors = [
    { name: "Alex Rodriguez", posts: 48, avatar: "https://github.com/shadcn.png" },
    { name: "Emma Wilson", posts: 42, avatar: "https://github.com/shadcn.png" },
    { name: "David Park", posts: 38, avatar: "https://github.com/shadcn.png" },
    { name: "Lisa Zhang", posts: 35, avatar: "https://github.com/shadcn.png" },
  ];

  const upcomingEvents = [
    {
      title: "Frontend Masters Workshop",
      date: "Dec 15, 2024",
      participants: 150,
    },
    {
      title: "AI/ML Bootcamp",
      date: "Dec 20, 2024",
      participants: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${communityHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Join the DevCircle Community</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Connect, collaborate, and grow with fellow developers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <Plus className="mr-2 h-5 w-5" />
                Start a Discussion
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Join Group
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters and Search */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search discussions..." 
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={category === "All" ? "default" : "outline"}
                        size="sm"
                        className={category === "All" ? "bg-gradient-primary text-primary-foreground" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discussion Feed */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                        <AvatarFallback>{discussion.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{discussion.author.name}</h3>
                          <span className="text-sm text-muted-foreground">{discussion.author.username}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{discussion.time}</span>
                          {discussion.isPinned && (
                            <Badge variant="secondary" className="bg-accent-yellow/10 text-accent-yellow">
                              <Pin className="w-3 h-3 mr-1" />
                              Pinned
                            </Badge>
                          )}
                        </div>
                        
                        <div>
                          <h2 className="text-lg font-semibold mb-2">{discussion.title}</h2>
                          <p className="text-muted-foreground">{discussion.content}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-6 pt-2">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                            <Heart className="w-4 h-4 mr-1" />
                            {discussion.engagement.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {discussion.engagement.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent-cyan">
                            <Share2 className="w-4 h-4 mr-1" />
                            {discussion.engagement.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback className="text-xs">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.posts} posts</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors cursor-pointer">
                    <h3 className="font-semibold text-sm">{event.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{event.participants} participants</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-soft bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-bold mb-2">Want to grow your network?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Start a new discussion today and connect with amazing developers! 🚀
                </p>
                <Button className="bg-white text-primary hover:bg-white/90">
                  Start Discussion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;