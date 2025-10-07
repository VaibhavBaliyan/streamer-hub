import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Button asChild>
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Go Home</span>
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/browse" className="flex items-center space-x-2">
            <Search className="h-4 w-4" />
            <span>Browse Streams</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
