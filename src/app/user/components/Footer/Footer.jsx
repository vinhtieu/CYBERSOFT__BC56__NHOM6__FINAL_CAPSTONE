import React from 'react'
import { useMediaQuery } from 'react-responsive';
import FooterDesktop from './FooterDesktop';

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
export default function Footer() {
  return (
    <div>
    <Desktop>
       <FooterDesktop/>
    </Desktop>

    <Tablet><FooterDesktop/></Tablet>
    <Mobile><FooterDesktop/></Mobile>

    </div>
  )
}
