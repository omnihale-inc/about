import React from 'react';

type ContactUsButtonProps = {
  className: string;
};

export default function ContactUsButton(props: ContactUsButtonProps) {
  return <button className={props.className}>Contact Us</button>;
}
