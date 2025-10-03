import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface HackathonCardProps {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  prize: string;
  participants: number;
  maxParticipants: number;
  status: "upcoming" | "live" | "ended";
  tags: string[];
}

const HackathonCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
  location,
  prize,
  participants,
  maxParticipants,
  status,
  tags,
}: HackathonCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-success text-success-foreground";
      case "upcoming":
        return "bg-primary text-primary-foreground";
      case "ended":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-large transition-all duration-300 border-border hover:border-primary/20">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>{prize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>
              {participants}/{maxParticipants} participants
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <Link to={`/hackathons/${id}`}>View Details</Link>
        </Button>
        {status !== "ended" && (
          <Button variant="hero" asChild className="flex-1">
            <Link to={`/hackathons/${id}/register`}>Register Now</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;