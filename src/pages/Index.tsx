import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const activeRooms = [
    {
      id: 1,
      name: "Chill Vibes",
      currentTrack: "Lofi Study Mix",
      participants: 4,
      hostAvatar: "/placeholder.svg",
      hostName: "Alex",
    },
    {
      id: 2,
      name: "Rock Classics",
      currentTrack: "Sweet Child O' Mine",
      participants: 6,
      hostAvatar: "/placeholder.svg",
      hostName: "Sarah",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sync Music</h1>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          {/* Create Room Button */}
          <Button className="w-full" size="lg">
            Create Listening Room
          </Button>

          {/* Active Rooms */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Active Rooms</h2>
            <div className="grid gap-4">
              {activeRooms.map((room) => (
                <Card key={room.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2 items-center">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={room.hostAvatar} alt={room.hostName} />
                          <AvatarFallback>{room.hostName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{room.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Hosted by {room.hostName}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <Users className="h-3 w-3 mr-1" />
                        {room.participants}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Music className="h-4 w-4" />
                      <span>{room.currentTrack}</span>
                    </div>
                    <Button className="w-full mt-4" variant="secondary">
                      Join Room
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
            <Button variant="ghost" className="flex-1">
              <Music className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="flex-1">
              <Users className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="flex-1">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;