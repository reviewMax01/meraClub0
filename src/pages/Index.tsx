import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { toast } = useToast();
  const { user, signInWithGoogle } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'music' | 'chat' | 'settings'>('music');

  useEffect(() => {
    if (!isPlaying) {
      setIsPlaying(true);
      toast({
        title: "Music Starting",
        description: "The playlist will begin playing automatically",
      });
    }
  }, [isPlaying, toast]);

  const activeRooms = [
    {
      id: 1,
      name: "Sigma Music",
      currentTrack: "Sigma Grindset Mix",
      participants: 4,
      hostAvatar: "/placeholder.svg",
      hostName: "Alex",
      playlistUrl: "https://open.spotify.com/embed/playlist/0Xu1wysGNLwsuJWNz5bVYN?utm_source=generator&autoplay=1"
    },
    {
      id: 2,
      name: "White 444",
      currentTrack: "White 444 Mix",
      participants: 6,
      hostAvatar: "/placeholder.svg",
      hostName: "Sarah",
      playlistUrl: "https://open.spotify.com/embed/playlist/29eHk3jqAaBVd8j2Mo1nxo?utm_source=generator"
    },
    {
      id: 3,
      name: "Phonk",
      currentTrack: "Phonk Mix",
      participants: 3,
      hostAvatar: "/placeholder.svg",
      hostName: "Mike",
      playlistUrl: "https://open.spotify.com/embed/playlist/7jYMCARhi5WvrcLEAAuLSX?utm_source=generator"
    },
    {
      id: 4,
      name: "Kr$na",
      currentTrack: "Kr$na Mix",
      participants: 5,
      hostAvatar: "/placeholder.svg",
      hostName: "Jay",
      playlistUrl: "https://open.spotify.com/embed/playlist/5gxkY4SIgFGzmnSUFyCq0t?utm_source=generator"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'music':
        return (
          <div className="grid gap-6">
            {!user ? (
              <Button onClick={signInWithGoogle} className="w-full" size="lg">
                Sign in with Google to Join
              </Button>
            ) : (
              <Button className="w-full" size="lg">
                Create Listening Room
              </Button>
            )}
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Music className="h-4 w-4" />
                        <span>{room.currentTrack}</span>
                      </div>
                      <div className="w-full rounded-lg overflow-hidden shadow-lg mb-4">
                        <iframe
                          src={room.playlistUrl}
                          width="100%"
                          height="352"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                      <Button className="w-full" variant="secondary">
                        Join Room
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        );
      case 'chat':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chat Community</h2>
            {!user ? (
              <Button onClick={signInWithGoogle} className="w-full" size="lg">
                Sign in with Google to Chat
              </Button>
            ) : (
              <p className="text-center text-muted-foreground">Chat feature coming soon!</p>
            )}
          </div>
        );
      case 'settings':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user.photoURL || undefined} />
                    <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.displayName}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <Button onClick={signInWithGoogle} className="w-full" size="lg">
                Sign in with Google
              </Button>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mera Club</h1>
          {user && (
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.photoURL || undefined} />
              <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {renderContent()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
            <Button
              variant={activeTab === 'music' ? 'default' : 'ghost'}
              className="flex-1"
              onClick={() => setActiveTab('music')}
            >
              <Music className="h-5 w-5" />
            </Button>
            <Button
              variant={activeTab === 'chat' ? 'default' : 'ghost'}
              className="flex-1"
              onClick={() => setActiveTab('chat')}
            >
              <Users className="h-5 w-5" />
            </Button>
            <Button
              variant={activeTab === 'settings' ? 'default' : 'ghost'}
              className="flex-1"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;