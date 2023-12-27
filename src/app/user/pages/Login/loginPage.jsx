import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import BigDesktopLogin from "./bigDesktopLogin";
import DesktopLogin from "./desktopLogin";
import TabletLogin from "./tabletLogin";
import MobileLogin from "./mobileLogin";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LOG_IN, LOG_OUT, LOGGING_IN } from "../../../../constant/constants";

import { userServices } from "../../../../api/service";
import userSlice from "../../../../lib/redux/slices/userSlice";

const BigDesktop = ({ children }) => {
  const isBigDesktop = useMediaQuery({ minWidth: 1150 });
  return isBigDesktop ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 940, maxWidth: 1149.98 });
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

const LoginPage = () => {
  const userAccount = useSelector((state) => state.user.userAccount);
  const userStatus = useSelector((state) => state.user.userStatus);
  const { setUserStatus } = userSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === LOGGING_IN) {
      const toastId = toast.loading("Checking", {
        style: {
          minWidth: "250px",
        },
      });
      userServices
        .requestLogin(userAccount)
        .then((res) => {
          dispatch(setUserStatus(LOG_IN));
          localStorage.setItem("currentUser", JSON.stringify(userAccount));
          toast.success("Login Successful", {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
          setTimeout(() => {
            toast.remove();
            dispatch(setPage(PAGE.HOME));
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          dispatch(setUserStatus(LOG_OUT));
          toast.error("Incorrect username or password", {
            id: toastId,
            style: {
              minWidth: "250px",
            },
          });
        });
    }
  }, [userStatus]);

  return (
    <>
      <BigDesktop>
        <BigDesktopLogin />
      </BigDesktop>
      <Desktop>
        <DesktopLogin />
      </Desktop>
      <Tablet>
        <TabletLogin />
      </Tablet>
      <Mobile>
        <MobileLogin />
      </Mobile>
    </>
  );
};

export default LoginPage;
