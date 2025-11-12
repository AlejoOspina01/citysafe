import { Hero } from '@/components/hero';
import { CitySafetyIndex } from '@/components/city-safety-index';
import { Features } from '@/components/features';
import { Partners } from '@/components/partners';

/**
 * Home Page (/)
 * Main landing page for CitySafe platform
 * Displays hero section, safety index, features, and partners
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <CitySafetyIndex />
      <div id="features">
        <Features />
      </div>
      <Partners />
    </main>
  );
}
