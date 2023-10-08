import Image from 'next/image';

export default function Team() {
  return (
    <div className=' mx-[24px]  md:mx-[80px]'>
      <div className='mt-[40px] lg:mt-[160px] text-center md:ml-[24px]'>
        <h3 className='text-[32px] lg:text-[64px] text-[#247e5b] text-center'>
          Introducing Our Visionary Team:
        </h3>
        <p className='text-[20px] md:text-[24px] mt-[16px] text-center'>
          Pioneers of Omnihale Solutions for a Transformed Human Experience
        </p>
      </div>
      <div className='md:flex md:flex-wrap mt-[40px]'>{/* team card */}</div>
    </div>
  );
}
