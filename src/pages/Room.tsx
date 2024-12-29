import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  MessageSquare, 
  Mic,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Room = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  const participants = [
    { id: 1, name: "Alex", avatar: "/placeholder.svg", isSpeaking: true },
    { id: 2, name: "Sarah", avatar: "/placeholder.svg", isSpeaking: false },
    { id: 3, name: "Mike", avatar: "/placeholder.svg", isSpeaking: false },
  ];

  const messages = [
    { id: 1, user: "Alex", message: "Great song!" },
    { id: 2, user: "Sarah", message: "Yeah, love this one!" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Chill Vibes Room</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 overflow-hidden flex flex-col">
        {/* Now Playing */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-muted rounded-lg mb-4"></div>
              <h2 className="text-xl font-semibold">Lofi Study Mix</h2>
              <p className="text-muted-foreground">Artist Name</p>
              
              {/* Playback Controls */}
              <div className="flex items-center gap-4 mt-6">
                <Button variant="outline" size="icon">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  className="h-12 w-12"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2 mt-4">
                <Volume2 className="h-4 w-4" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Participants */}
        <div className="flex gap-2 mb-6 overflow-x-auto py-2">
          {participants.map((participant) => (
            <div
              key={participant.id}
              className={`flex flex-col items-center ${
                participant.isSpeaking ? "ring-2 ring-primary rounded-lg p-1" : "p-1"
              }`}
            >
              <Avatar>
                <AvatarImage src={participant.avatar} alt={participant.name} />
                <AvatarFallback>{participant.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm mt-1">{participant.name}</span>
            </div>
          ))}
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg) => (
              <div key={msg.id} className="mb-2">
                <span className="font-semibold">{msg.user}: </span>
                <span>{msg.message}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button>Send</Button>
          </div>
        </div>
      </main>

      {/* Voice Chat Controls */}
      <div className="fixed bottom-4 right-4">
        <Button size="icon" variant="secondary">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Room;