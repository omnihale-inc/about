'use client';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import ContactUsButton from '@/components/ContactUsButton';
import CtaParagraph from '@/components/Elements/CtaParagraph';
import HeroText from '@/components/HeroText';
import UserTeam from '@/components/UserTeam';
import { withGreenButton } from '@/components/withButtonStyle';
import data from '@/constants/data.json';
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export default function Team() {
  const foundersData = data.founders;
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  const mobileContainRef = useRef<HTMLDivElement | null>(null);
  const [currentScrollValue, setCurrentScrollValue] = useState(1);

  const scrollHandler = (direction: string) => {
    const scrollValue = mobileContainRef.current!.scrollWidth / 4;
    if (direction === 'right' && currentScrollValue <= 4) {
      mobileContainRef.current?.scrollBy(scrollValue, 0);
      setCurrentScrollValue((state) => state + 1);
    }
    if (direction === 'left' && currentScrollValue >= 1) {
      mobileContainRef.current?.scrollBy(-scrollValue, 0);
      setCurrentScrollValue((state) => state - 1);
    }
  };

  return (
    <div>
      <div className='container-wrap mx-auto flex flex-col gap-6'>
        <HeroText
          isPtag={false}
          description={foundersData.description}
          title={foundersData.title}
        />
        <div className='hidden lg:grid grid-cols-4 gap-6'>
          {foundersData.foundersInfo.map((founder, _) => (
            <UserTeam
              key={founder.id}
              position={founder.position}
              imgUrl={founder.imgUrl}
              username={founder.username}
            />
          ))}
        </div>
      </div>
      <div
        ref={mobileContainRef}
        className='relative scroll-team lg:hidden mx-6 z-0 grid auto-cols-[20rem] grid-flow-col gap-4 overflow-x-auto pt-2 my-5'
      >
        {foundersData.foundersInfo.map((founder, _) => (
          <UserTeam
            key={founder.id}
            position={founder.position}
            imgUrl={founder.imgUrl}
            username={founder.username}
          />
        ))}
      </div>
      <div className='h-3 lg:hidden mx-6 flex'>
        <IconContext.Provider value={{ size: '30px', color: '#247e5b' }}>
          {currentScrollValue > 1 && (
            <div className='mr-4' onClick={() => scrollHandler('left')}>
              <BsArrowLeft />
            </div>
          )}
          {currentScrollValue < 4 && (
            <div onClick={() => scrollHandler('right')}>
              <BsArrowRight />
            </div>
          )}
        </IconContext.Provider>
      </div>
      <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
        <CtaParagraph />
        <GreenContactUsButton />
      </div>
    </div>
  );
}
