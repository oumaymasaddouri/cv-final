import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Actions/userActions";
function Navigation() {
  const { user } = useSelector((state) => state.loginDetails);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <h1>logo </h1>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {user&& user? (
              <>
                

                <LinkContainer to={`/profile/${user.userLogin._id}`} className="li">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              
                <LinkContainer to={"/cv"} className="li">
                  <Nav.Link>CV</Nav.Link>
                </LinkContainer>
              
              </>
            ) :(
              <>
              <LinkContainer to="/login" className="li">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register" className="li">
              <Nav.Link>
              Register
              </Nav.Link>
              </LinkContainer>
              </>
            )}
            {user ? (
              <>
                <LinkContainer to="/login" className="li">
                  <Nav.Link onClick={handleLogOut} >Log out</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <div></div>
            )}
       
        
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
