'use client';
import { useRef, useState, forwardRef, MutableRefObject } from 'react';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import data from '@/constants/data.json';
import UserTeam from './UserTeam';

const Founders = () => {
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
  const foundersData = data.founders;

  return (
    <>
      <div className=' mx-[24px]  md:mx-[80px] flex flex-col gap-5'>
        <div className='mt-[40px] lg:mt-[160px] text-center md:ml-[24px]'>
          <h3 className='text-[32px] lg:text-[64px] text-[#247e5b] text-center'>
            Introducing Our Visionary Founders:
          </h3>
          <p className='text-[20px] md:text-[24px] mt-[16px] text-center'>
            Pioneers of Omnihale Solutions for a Transformed Human Experience
          </p>
        </div>
      </div>
      <div>
        <div className='container-wrap mx-auto flex flex-col gap-6'>
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
      </div>
    </>
  );
};

export default Founders;
