import Container from "@/components/layout/Container";

import Hero from "@/components/home/Hero";
import ModulePreview from "@/components/home/ModulePreview";
import CTASection from "@/components/home/CTASection";


export default function Home() {
  return (
    <Container>

      <Hero />

      <ModulePreview />

      <CTASection />

    </Container>
  );
}