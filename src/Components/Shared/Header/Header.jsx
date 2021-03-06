import React from "react";
import {
  Container,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "./../../../images/logo.png";
import "./Header.css";

// Header Components
const Header = () => {
  const { user, admin, logOut } = useAuth();
  const url = `/dashboard`;
  return (
    <>
      {/* Header and navbar area  */}
      <Navbar bg='light' expand='lg' fixed='top'>
        <Container>

          <Navbar.Brand href='/' className='d-flex align-items-center '>
            <img className='logo' src={logo} alt='' />
            <span className='fs-2 fw-bold'>Food Mart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
              <Link className='nav-link' to='/foods'>
                Foods
              </Link>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>

              {user.email ? (
                <DropdownButton
                  variant='outline-secondary'
                  title={<span className='loginUser'>{user.displayName}</span>}
                  id='input-group-dropdown-1'>
                  <Link className='nav-link' to={`${url}/myOrder`}>
                    My Order
                  </Link>
                  <Link className='nav-link' to={`${url}/payment`}>
                    Payment
                  </Link>
                  <Link className='nav-link' to={`${url}/addReview`}>
                    Add a Review
                  </Link>
                  {user.email && admin ? (
                    <span>
                      <hr />
                      <Link className='nav-link' to={`${url}/manageOrder`}>
                        Manage Order
                      </Link>
                      <Link className='nav-link' to={`${url}/addProduct`}>
                        Add Product
                      </Link>
                      <Link className='nav-link' to={`${url}/manageProduct`}>
                        Manage Product
                      </Link>
                      <Link className='nav-link' to={`${url}/createAdmin`}>
                        Create an Admin
                      </Link>
                    </span>
                  ) : (
                    <span style={{ display: "none" }}></span>
                  )}

                  <div className='text-center'>
                    {user.email ? (
                      <button onClick={logOut} className='login btn my-btn '>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Logout
                      </button>
                    ) : (
                      <Link className='login btn my-btn ' to='/login'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Login
                      </Link>
                    )}
                  </div>
                </DropdownButton>
              ) : (
                <Link className='nav-link login' to='/login'>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};
export default Header;
