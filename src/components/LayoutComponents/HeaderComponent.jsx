import { useSelector } from 'react-redux'
import { auth } from '../../redux/reducers/authSlice.js'
import { profile } from '../../redux/reducers/profileSlice.js'
import { useState } from "react";
import useAuth from '../AuthComponents/AuthContainer.jsx';
import { totalitems } from '../../redux/reducers/cartSlice.js'
import HeaderView from './HeaderView.jsx'

const Header = () => {
  const [isNavOpen, toggleNavOpen] = useState(false);
  const { userLogout } = useAuth();
  const isLoggedIn = useSelector(auth);
  const userProfile = useSelector(profile);
  const cartValue = useSelector(totalitems);
  const toggleNav = () => {
    toggleNavOpen(!isNavOpen);
  }

  const handleLogout = () => {
    userLogout();
  }
  return (
    <HeaderView toggleNav={toggleNav} isNavOpen={isNavOpen} isLoggedIn={isLoggedIn} handleLogout={handleLogout} cartValue={cartValue} profile={userProfile}/>
  );

};

export default Header;