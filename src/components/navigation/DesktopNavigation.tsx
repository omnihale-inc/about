import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import data from '@/constants/data.json'
import { withGreenButton } from '../withButtonStyle';
import ContactUsButton from '../ContactUsButton';
import HeaderLink from '../Element/HeaderLink';

type DesktopNavigationProps = {
  font: NextFont;
};

const GreenContactUsButton = withGreenButton(ContactUsButton);

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const navData = data.footer.links
  return (
    <div className='container-wrap mx-auto flex justify-between items-center pt-16'>
      <div className='flex items-center'>
        <Image src='/logo.svg' width={30} height={30} alt='logo' />
        <h3
          className={`${props.font.className} ml-[12px] text-2xl text-[#404040] tracking-wider`}
        >
          <a href='/'>Omnihale</a>
        </h3>
      </div>
      <div className='flex space-x-12'>
        {navData.map((linkItem, _)=> (
          <HeaderLink subLinks={linkItem.sublinks} href={linkItem.href} text={linkItem.text} isDropDow={linkItem.isDropDow}/>
        ))}
      </div>
      <div>
        <GreenContactUsButton />
      </div>
    </div>
  );
};

export default DesktopNavigation;
