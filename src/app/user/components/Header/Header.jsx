import React from 'react'
import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from './HeaderDesktop';

import HeaderTablet from './HeaderTablet';
import HeaderMobile from './HeaderMobile';


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

export default function Header() {
  return (
    <div>
      <Desktop>
        <HeaderDesktop/>
      </Desktop>
      <Tablet>

        <HeaderDesktop/>
      </Tablet>
      <Mobile>
        <HeaderDesktop/>

      </Mobile>
    </div>
  )
}
