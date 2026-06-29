import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Directions } from "@/components/Directions";
import { Programs } from "@/components/Programs";
import { Events } from "@/components/Events";
import { Founder } from "@/components/Founder";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Directions />
        <Programs />
        <Events />
        <Founder />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
