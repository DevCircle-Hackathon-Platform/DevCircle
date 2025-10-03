import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Trophy,
  Code,
  Users,
  Settings,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ExternalLink,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const quickStats = [
    { label: "Hackathons Joined", value: "3", icon: Trophy, color: "text-accent-cyan" },
    { label: "Projects Submitted", value: "2", icon: Code, color: "text-accent-yellow" },
    { label: "Community Posts", value: "8", icon: Users, color: "text-primary" },
  ];

  const quickLinks = [
    { title: "My Hackathons", description: "View all joined events", icon: Trophy, href: "/hackathons" },
    { title: "Submissions", description: "Track project status", icon: Code, href: "/submissions" },
    { title: "Community", description: "Connect with peers", icon: Users, href: "/community" },
    { title: "Profile Settings", description: "Manage your details", icon: Settings, href: "/settings" },
  ];

  const hackathons = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      status: "Ongoing",
      progress: 65,
      daysLeft: 3,
      participants: 250,
      logo: "🤖",
    },
    {
      id: 2,
      name: "Web3 Developer Summit",
      status: "Upcoming",
      progress: 0,
      daysLeft: 12,
      participants: 180,
      logo: "⚡",
    },
    {
      id: 3,
      name: "Mobile App Hackathon",
      status: "Completed",
      progress: 100,
      daysLeft: 0,
      participants: 320,
      logo: "📱",
    },
  ];

  const submissions = [
    {
      id: 1,
      title: "AI Code Assistant",
      hackathon: "AI Innovation Challenge",
      status: "Under Review",
      submitted: "2 days ago",
    },
    {
      id: 2,
      title: "DeFi Trading Bot",
      hackathon: "Web3 Developer Summit",
      status: "Draft",
      submitted: "Not submitted",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-accent-yellow text-white";
      case "upcoming":
        return "bg-primary text-primary-foreground";
      case "completed":
        return "bg-green-500 text-white";
      case "under review":
        return "bg-accent-cyan text-white";
      case "draft":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Welcome, Sourabh 👋</h1>
            <p className="text-muted-foreground">
              Ready to build something amazing? Check out your dashboard below.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="flex items-center p-6">
                      <div className={`p-3 rounded-lg bg-muted mr-4`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Profile Card */}
          <Card className="w-full lg:w-80 shadow-soft">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="Sourabh" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">S</AvatarFallback>
              </Avatar>
              <CardTitle>Sourabh Upadhyay</CardTitle>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "TypeScript", "Node.js"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                    <ExternalLink className="h-4 w-4 text-muted-foreground mt-3 group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* My Hackathons */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Hackathons</h2>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
              <Plus className="mr-2 h-4 w-4" />
              Join Hackathon
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon) => (
              <Card key={hackathon.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{hackathon.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{hackathon.name}</CardTitle>
                      <Badge className={getStatusColor(hackathon.status)}>
                        {hackathon.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hackathon.status !== "Completed" && (
                    <>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{hackathon.progress}%</span>
                        </div>
                        <Progress value={hackathon.progress} className="h-2" />
                      </div>
                      {hackathon.daysLeft > 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{hackathon.daysLeft} days left</span>
                        </div>
                      )}
                    </>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{hackathon.participants} participants</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submissions Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Submissions</h2>
          <Card className="shadow-soft">
            <CardContent className="p-0">
              <div className="divide-y">
                {submissions.map((submission) => (
                  <div key={submission.id} className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          submission.status === "Under Review" 
                            ? "bg-accent-cyan/10" 
                            : "bg-muted"
                        }`}>
                          {submission.status === "Under Review" ? (
                            <AlertCircle className="h-5 w-5 text-accent-cyan" />
                          ) : (
                            <Code className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{submission.title}</h3>
                          <p className="text-sm text-muted-foreground">{submission.hackathon}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{submission.submitted}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;