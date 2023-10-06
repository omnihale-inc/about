import Footer from './_components/Footer';
import Header from './_components/Header';
import Hero from './_components/HeroDeskImage';
import HeroMob from './_components/HeroMobImage';
import HeroText from './_components/HeroText';
import Team from './_components/Team';
import Values from './_components/Values';

export default function Home() {
  return (
    <>
      <main>
        <HeroText />
        <Hero />
        <HeroMob />
        <Values />
        <Team />
      </main>
    </>
  );
}
