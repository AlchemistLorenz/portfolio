// src/app/page.tsx
import PageTransition from "../components/PageTransition";
import HomeSection from "../components/HomeSections";

export default function HomePage() {
  return (
      <PageTransition>
        <HomeSection />
      </PageTransition>
  );
}