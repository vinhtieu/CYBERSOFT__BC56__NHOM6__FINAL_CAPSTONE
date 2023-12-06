import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./desktopLayout";
import MobileLayout from "./mobileLayout";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 666 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

export default function QuanLyNguoiDung() {
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
