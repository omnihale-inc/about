type HeroTextProps = {
  title: string;
  description: string;
};

export default function HeroText(props: HeroTextProps) {
  return (
    <div className='mx-[24px] sm:mx-[80px]'>
      <h3 className='text-[64px] sm:text-[80px] text-[#247e5b] text-center leading-[75px] font-medium mt-[78px]'>
        {props.title}
      </h3>
      <p className='text-[20px] sm:text-[24px] lg:w-[664px] text-center mt-[20px] mb-[80px] lg:mx-[auto]'>
        {props.description}
      </p>
    </div>
  );
}
