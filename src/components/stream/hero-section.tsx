"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mic, Video } from "lucide-react";

// This is a Client Component - runs in the browser
export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  const handleGoLive = () => {
    // Handle go live logic here
    console.log("Going live...");
  };

  return (
    <section className="text-center space-y-8 py-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Stream Your
          <span className="text-primary"> Passion</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with your audience in real-time. Share your skills, build a
          community, and grow your following on the modern streaming platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <Input
            placeholder="Search streams, categories, or streamers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handleGoLive}
          size="lg"
          className="flex items-center gap-2"
        >
          <Video className="h-5 w-5" />
          Start Streaming
        </Button>

        <Button variant="outline" size="lg" className="flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Browse Streams
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">10K+</div>
          <div className="text-sm text-muted-foreground">Active Streamers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">50K+</div>
          <div className="text-sm text-muted-foreground">Live Viewers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">1M+</div>
          <div className="text-sm text-muted-foreground">Hours Streamed</div>
        </div>
      </div>
    </section>
  );
}
