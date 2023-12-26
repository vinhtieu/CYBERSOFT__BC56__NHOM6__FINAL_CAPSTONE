import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { userServices } from "../../../../api/service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FAILED, PROCESSING, REGISTERED, STAND_BY } from "../../../../constant/constants";
import { setRegisterAccount,setRegisterStatus } from "../../../../lib/redux/slices/userSlice";
import userSlice from "../../../../lib/redux/slices/userSlice";
import DesktopRegister from "./desktopRegister";
import TabletRegister from "./tabletRegister";
import MobileRegister from "./mobileRegister";
import toast from "react-hot-toast";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 940 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 666, maxWidth: 939.98 });
  return isTabletLandscape ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 665.98 });
  return isMobile ? children : null;
};

const RegisterPage = () => {
  const registerAccount = useSelector((state) => state.user.registerAccount);
  const registerStatus = useSelector((state) => state.user.registerStatus);
//   const { setRegisterStatus } = userSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (registerStatus === PROCESSING) {
      const toastId = toast.loading("Loading", {
        style: {
          minWidth: "250px",
        },
      });
      userServices
        .requestRegister(registerAccount)
        .then((res) => {
          dispatch(setRegisterStatus(REGISTERED));
          toast.success("Register Successful", {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
          setTimeout(() => {
            toast.remove();
            dispatch(setRegisterStatus(STAND_BY));
            dispatch(setPage(PAGE.HOME));
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          dispatch(setRegisterStatus(FAILED));
          toast.error(`Something went wrong`, {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
        });
    }
  }, [registerStatus]);

  return (
    <>
      <Desktop>
        <DesktopRegister />
      </Desktop>
      <Tablet>
        <TabletRegister />
      </Tablet>
      <Mobile>
        <MobileRegister />
      </Mobile>
    </>
  );
};

export default RegisterPage;