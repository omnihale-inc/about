'use client';

import React from 'react';

type ContactUsButtonProps = {
  className: string;
};

export default function ContactUsButton({className}: ContactUsButtonProps) {
  return (
    <button
      // Triggers the user default emailing software with this
      // email as recipent
      onClick={() => (window.location.href = 'mailto:contact@omnihale.com')}
      className={className}
    >
      Contact Us
    </button>
  );
}
