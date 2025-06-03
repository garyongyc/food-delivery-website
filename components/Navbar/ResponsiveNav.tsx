'use client';

import React, { useState } from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => setMobileNavOpen((prevState) => !prevState);

  return (
    <>
      <MainNav toggleNav={toggleNav} />
      <MobileNav mobileNavOpen={mobileNavOpen} />
    </>
  );
};

export default ResponsiveNav;
