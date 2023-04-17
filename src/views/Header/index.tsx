import React from 'react';

import HeaderTop from '@/components/HeaderTop';
import HeaderMiddle from '@/components/HeaderMiddle';
import HeaderBottom from '@/components/HeaderBottom';

export default function Header() {
  return (
    <>
      <HeaderTop />
      <hr className="text-waterloo" />
      <HeaderMiddle />
      <HeaderBottom />
    </>
  );
}
