import ContactUsButton from '@/app/_components/ContactUsButton';
import CtaParagraph from '@/app/_components/Element/CtaParagraph';
import Heading from '@/app/_components/Element/Heading';
import HeroWrapper from '@/app/_components/Element/HeroWrapper';
import Paragraph from '@/app/_components/Element/Paragraph';
import HeroText from '@/app/_components/HeroText';
import { withGreenButton } from '@/app/_components/withButtonStyle';
import data from '@/constants/data.json';

export default function page() {
  const company = data.company;
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  return (
    <div className='w-full my-6'>
      <div className='container-wrap mx-auto'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-10 lg:gap-16'>
            <div className='flex flex-col max-w-2xl mx-auto gap-6 items-center'>
              <HeroText
                title={company.title}
                description={company.description}
              />
            </div>
            {/* hero */}
            <HeroWrapper bgClass={company.bgHero} />
          </div>
          <article className='flex flex-col gap-4'>
            {company.paragraphs.map((paragraph, _) => (
              <Paragraph key={paragraph.id} text={paragraph.text} />
            ))}
          </article>
        </div>
        {/* action */}
        <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
          <CtaParagraph text={company.action.text} />
          <GreenContactUsButton />
        </div>
      </div>
    </div>
  );
}
