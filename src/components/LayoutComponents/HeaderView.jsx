import { Outlet, Link, NavLink } from "react-router-dom";

const HeaderView = ({ isLoggedIn, handleLogout, cartValue, profile }) => {
  return (

    <nav className="navbar navbar-light navbar-expand-md sticky-top" id="header">
      <div className="container">
        <a className="navbar-brand" href="/" data-bs-target="/index.html"></a>
        <div className="collapse navbar-collapse" id="navcol-1">

          {!isLoggedIn ? // if not log in, show this
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="rental" to="/service">Rental</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="howitwork" to="/howitwork">How it work?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="aboutus" to="/aboutus">About Us</NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="sign_up" to="/sign_up"> Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="login" to="/login"> Login</NavLink>
              </li>
            </ul>

            : //If log in, show this
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavLink className="nav-link" aria-label="rental" to="/service">Rental</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="howitwork" to="/howitwork">How it work?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="aboutus" to="/aboutus">About Us</NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="profile" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="transactions" to="/transactions" email={profile.email}>Transactions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-label="cart" to="/cart"> Cart ({cartValue})</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link not-active" aria-label="logout" onClick={handleLogout} >Logout</Link>
              </li>
            </ul>
          }

        </div><button data-bs-target="#navcol-1" data-bs-toggle="collapse" className="navbar-toggler"><span
          className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
      </div>
    </nav>

  )
};

export default HeaderView;