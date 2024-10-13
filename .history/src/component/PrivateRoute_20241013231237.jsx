/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userInfoPin = useSelector((state) => state.personalBanking.userInfo.pin);
  const userInfoSession = useSelector((state) => state.personalBanking.userInfo.session);

  // Redirect to dashboard if the user is authenticated and session is active
  return userInfoPin && userInfoPin.length !== 0 && userInfoSession === 'Yes'
      ? children
      : <Navigate to="/" />;
};

export default PrivateRoute;
