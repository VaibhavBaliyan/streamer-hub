import type { Stream } from "@/types";

// This is a Server Component - runs on the server
// Mock data for now - will be replaced with database queries later
async function getLiveStreams(): Promise<Stream[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock data - this would come from your database
  return [
    {
      id: "1",
      title: "Building a Next.js 15 App",
      description: "Learning the latest Next.js features with App Router",
      category: "Programming",
      thumbnailUrl: "/api/placeholder/320/180",
      isLive: true,
      viewerCount: 1247,
      startedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      streamUrl: "",
      streamKey: "",
      user: {
        id: "1",
        username: "techstreamer",
        displayName: "Tech Streamer",
        avatar: "/api/placeholder/40/40",
        isLive: true,
        followerCount: 15420,
        followingCount: 234,
        bio: "Full-stack developer and educator",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date(),
      },
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "React 19 Deep Dive",
      description: "Exploring the new features in React 19",
      category: "Programming",
      thumbnailUrl: "/api/placeholder/320/180",
      isLive: true,
      viewerCount: 892,
      startedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      streamUrl: "",
      streamKey: "",
      user: {
        id: "2",
        username: "reactdev",
        displayName: "React Developer",
        avatar: "/api/placeholder/40/40",
        isLive: true,
        followerCount: 8930,
        followingCount: 145,
        bio: "React core team member",
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date(),
      },
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date(),
    },
    {
      id: "3",
      title: "TypeScript Best Practices",
      description: "Advanced TypeScript patterns and techniques",
      category: "Programming",
      thumbnailUrl: "/api/placeholder/320/180",
      isLive: true,
      viewerCount: 634,
      startedAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      streamUrl: "",
      streamKey: "",
      user: {
        id: "3",
        username: "tsexpert",
        displayName: "TypeScript Expert",
        avatar: "/api/placeholder/40/40",
        isLive: true,
        followerCount: 12340,
        followingCount: 89,
        bio: "TypeScript evangelist",
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date(),
      },
      createdAt: new Date("2024-02-01"),
      updatedAt: new Date(),
    },
  ];
}

export async function LiveStreamsSection() {
  // This runs on the server - no client-side JavaScript needed
  const streams = await getLiveStreams();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Now</h2>
        <p className="text-muted-foreground">{streams.length} streams live</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div key={stream.id} className="group cursor-pointer">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              {/* Thumbnail placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600" />

              {/* Live indicator */}
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                LIVE
              </div>

              {/* Viewer count */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {stream.viewerCount.toLocaleString()} viewers
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {stream.title}
              </h3>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full" />
                <span className="text-sm text-muted-foreground">
                  {stream.user.displayName}
                </span>
              </div>

              <p className="text-sm text-muted-foreground">{stream.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
