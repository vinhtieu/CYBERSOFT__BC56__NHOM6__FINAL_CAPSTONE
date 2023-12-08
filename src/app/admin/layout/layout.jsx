import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./desktopLayout.jsx";
import MobileLayout from "./mobileLayout";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 777 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 776.98 });
  return isMobile ? children : null;
};

export default function Layout() {
  return (
    <>
      <Desktop>
        <DesktopLayout></DesktopLayout>
      </Desktop>
      <Mobile>
        <MobileLayout></MobileLayout>
      </Mobile>
    </>
  );
}
