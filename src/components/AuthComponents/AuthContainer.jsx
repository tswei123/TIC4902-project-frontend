import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setLogin, setLogout } from '../../redux/reducers/authSlice.js'
import useCart from '../CartComponents/CartContainer.jsx'
import useProfile from '../ProfileComponents/ProfileContainer.jsx'
import axios from "axios";


const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getCart } = useCart();
  const { getProfile } = useProfile();
  
  //Uses username and password for user login
  const userLogin = async (/** @type {{ email: any; password: any; }} */ inputs) => {
    try {
      let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/auth/signin`, {
        email: inputs.email,
        password: inputs.password
      })
      if (res.status === 200) {
        dispatch(setLogin({
          email: res.data.email,
          role: res.data.roles,
          accessToken: res.data.accessToken,
        }))
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("password", inputs.password) //iterative method since token login is not implemented yet
        sessionStorage.setItem("token", res.data.accessToken)
        await getCart(res.data.email);
        await getProfile(res.data.email);
        console.log("login successful.")
        navigate('/');
      }
    } catch (error) {
      return error.response
    } 
  }

  //Uses accessToken to refresh login status
  const refreshLogin = async (/** @type {{ email: any; password: any; }} */ inputs) => {
    try {
      let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/auth/signin`, {
        email: inputs.email,
        password: inputs.password
      })
      if (res.status === 200) {
        dispatch(setLogin({
          email: res.data.email,
          role: res.data.roles,
          accessToken: res.data.accessToken,
        }))
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("password", inputs.password) //iterative method since token login is not implemented yet
        sessionStorage.setItem("token", res.data.accessToken)
        await getCart(res.data.email);
        await getProfile(res.data.email); 
      }
    }  catch (error) {
      return error.response
    } 
  }
  // Logs user out.
  // May require implementation of Logout API to verify token before logout? Additional task
  const userLogout = () => {
    //dispatch(setLogout()); //is it necessary when page refreshes? Logout will be reset
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    window.location.replace("/logout"); //refresh or navigate?
  }

  return { userLogin, refreshLogin, userLogout }

};

export default useAuth;