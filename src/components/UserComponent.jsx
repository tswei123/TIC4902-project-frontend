import Header from "./LayoutComponents/HeaderComponent";
import Footer from "./LayoutComponents/FooterComponent";
import Home from "./LayoutComponents/HomeComponent";
import Service from "./ServiceComponent";
import SignUp from "./AuthComponents/SignUp";
import Login from "./AuthComponents/Login";
import ServiceDetail from './ServiceDetailsComponent';
import Cart from "./CartComponents/CartComponent";
import Checkout from "./Checkout";
import Profile from "./ProfileComponents/ProfileComponent";
import Transactions from "./TransactionComponent";
import Logout from "./AuthComponents/Logout";
import AboutUs from "./AboutUs";
import HowitWorks from "./HowItWorks";
import NoPage from "./NoPage";
import ErrorPage from "./ErrorPage";
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import ReactGA from "react-ga4";

const UserPage = () => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "User Page" });
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/service' element={<Service />} />
                <Route path='/service/:serviceId' element={<ServiceDetail />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/transactions" element={<Transactions />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/howitwork" element={<HowitWorks />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default UserPage;
