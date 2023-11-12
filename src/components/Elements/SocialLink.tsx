import React, { FC, ReactElement } from 'react';

interface SocialLinkProps {
  icon: ReactElement;
  href: string;
}

const SocialLink: FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      className='hover:text-[#0f7689] hover:translate-x-1 duration-300'
      href={href}
      target='_blank'
    >
      {icon}
    </a>
  );
};

export default SocialLink;
