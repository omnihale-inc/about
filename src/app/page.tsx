import Footer from './_components/Footer';
import Header from './_components/Header';
import Hero from './_components/HeroDeskImage';
import HeroMob from './_components/HeroMobImage';
import HeroText from './_components/HeroText';
import Team from './_components/Team';
import Values from './_components/Values';
import data from '@/constants/data.json';

export default function Home() {
  const { title, description } = data.homepage.heroText;
  return (
    <>
      <main>
        <HeroText title={title} description={description} />
        <Hero />
        <HeroMob />
        <Values />
        <Team />
      </main>
    </>
  );
}
