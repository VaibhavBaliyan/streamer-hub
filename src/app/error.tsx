"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-2 text-destructive">
        <AlertTriangle className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Something went wrong!</h2>
      </div>

      <p className="text-center text-muted-foreground max-w-md">
        We encountered an error while loading this page. Please try again or
        contact support if the problem persists.
      </p>

      <Button
        onClick={reset}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <RefreshCw className="h-4 w-4" />
        <span>Try again</span>
      </Button>
    </div>
  );
}
