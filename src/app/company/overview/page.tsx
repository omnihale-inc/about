import ContactUsButton from '@/components/ContactUsButton';
import CtaParagraph from '@/components/Elements/CtaParagraph';
import Paragraph from '@/components/Elements/Paragraph';
import HeroDeskImage from '@/components/HeroDeskImage';
import HeroMobImage from '@/components/HeroMobImage';
import HeroText from '@/components/HeroText';
import { withGreenButton } from '@/components/withButtonStyle';
import data from '@/constants/data.json';

export default function page() {
  const company = data.company;
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  return (
    <div className='w-full my-6'>
      <div className='container-wrap mx-auto'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-10 lg:gap-16'>
            <div className='flex flex-col max-w-2xl mx-auto gap-6 items-center mt-[-30px]'>
              <HeroText
                title={company.heroText.title}
                description={company.heroText.description}
              />
            </div>
            <div className='mt-[-30px]'>
              <HeroDeskImage imgSrc={company.heroText.imageDesk} />
              <HeroMobImage imgSrc={company.heroText.imageMob} />
            </div>
          </div>
          <article className='flex flex-col gap-4 mt-10'>
            {company.paragraphs.map((paragraph, _) => (
              <Paragraph key={paragraph.id} text={paragraph.text} />
            ))}
          </article>
        </div>
        {/* action */}
        <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
          <CtaParagraph />
          <GreenContactUsButton />
        </div>
      </div>
    </div>
  );
}
