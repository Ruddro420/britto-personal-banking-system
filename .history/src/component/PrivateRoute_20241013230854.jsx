/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated by looking into Redux state
  const userInfoPin = useSelector((state) => state.personalBanking.userInfo.pin);
  const userInfoSession = useSelector((state) => state.personalBanking.userInfo.session);

  // If userInfo is not available (meaning the user is not logged in), redirect to login
  return userInfoPin && userInfoPin.length !== 0 && userInfoSession && userInfoSession == undefined ? children : <Navigate to="/" />;
};

export default PrivateRoute;
