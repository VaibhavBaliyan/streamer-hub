import { HeroSection } from "@/components/stream/hero-section";
import { LiveStreamsSection } from "@/components/stream/live-streams-section";
import { Header } from "@/components/layouts/header";

// This is a Server Component by default in App Router
export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Client Component for interactivity */}
        <HeroSection />

        {/* Server Component for data fetching */}
        <LiveStreamsSection />

        {/* Additional sections can be added here */}
      </main>
    </>
  );
}
