import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HeroMob from "./_components/HeroMob";
import Values from "./_components/Values";
import Vision from "./_components/Vision";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <HeroMob />
        <About />
        <Vision />
        <Values />
      </div>
      <Footer />
    </>
  )
}
