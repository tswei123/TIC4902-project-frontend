import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { role } from '../redux/reducers/authSlice.js'

import UserPage from './UserComponent.jsx';
import AdminPage from './AdminPages/AdminComponent.jsx';
import useAuth from '././AuthComponents/AuthContainer.jsx';


const Main = () => {
    const [loading, setLoading] = useState(false);
    const userRole = useSelector(role);
    const { refreshLogin } = useAuth();
  useEffect(() => {
    const checkLoggedIn = async () => {
      const email = sessionStorage.getItem("email");
      const password = sessionStorage.getItem("password");
      const token = sessionStorage.getItem("token"); //replace user and password with token login
      const user = { email, password };
      if (email) {
        await refreshLogin(user);
      }
      setLoading(true); 
    }
    checkLoggedIn();
  }, []);

  if (!loading) {
    return (
      <div className="App">
        Loading...
      </div>
    );
  }
  else {
    if(userRole == "ROLE_ADMIN"){
      return (
        <div className="App">
          <AdminPage />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <UserPage />
        </div>
      );
    }
  }

}

export default Main;


