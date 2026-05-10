import { lazy, Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { Notification } from "../components/Notification";

// Lazy load heavy sections for better initial load performance
const AboutSection = lazy(() => import("../components/AboutSection").then(mod => ({ default: mod.AboutSection })));
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then(mod => ({ default: mod.ProjectsSection })));
const ContactSection = lazy(() => import("../components/ContactSection").then(mod => ({ default: mod.ContactSection })));
const Footer = lazy(() => import("../components/Footer").then(mod => ({ default: mod.Footer })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll to Top Button */}
      <ScrollToTop />
      {/* Background Effects */}
      <StarBackground />
      {/* Notification */}
      <Notification />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
