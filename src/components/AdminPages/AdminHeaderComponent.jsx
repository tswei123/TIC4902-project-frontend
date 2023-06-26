import { Outlet, Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { useSelector } from 'react-redux'
//import { setLogout, auth } from '.../redux/reducers/authSlice.js'
import { useState } from "react";

const AdminHeader = () => {
  const [isNavOpen, toggleNavOpen] = useState(false);
  //const userIsLoggedIn = useSelector(auth);
  
  const toggleNav = () => {
    toggleNavOpen(!isNavOpen);
  }

  const userLogout = () => {
    //setLogout();
    sessionStorage.removeItem("email"); //temporary 'session key' must modify to JWT  
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("token");
    window.location.replace("/logout");
  }
    return (
      <>
        <div className="sticky-top">
          <Navbar color="dark" dark expand="md">
            <div className="container">
              <NavbarToggler onClick={toggleNav} />
              <Link to="/">
                <NavbarBrand className="mr=-auto">ArchRetail Admin</NavbarBrand>
              </Link>
              <Collapse isOpen={isNavOpen} navbar>
                <Nav navbar className="me-auto">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="nav-link" nav caret color="dark">
                      Add New Service
                    </DropdownToggle>
                    <DropdownMenu right dark>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/add_service"> Add Service </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/add_prices"> Add Prices </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="nav-link" to="/add_items"> Add Items </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink className="nav-link" to="/view_service">View/Update Services</NavLink>
                  </NavItem>
                </Nav>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/shipments">Shipments</NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link not-active" onClick={userLogout} >Logout</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Outlet />
        </div>
      </>
    );

}

export default AdminHeader;