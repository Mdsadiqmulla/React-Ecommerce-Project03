import { Container, Nav, Navbar, Button, NavLink } from "react-bootstrap";
import React, { useContext } from "react";
// import CartContext from "../../storage/CartContext";
import SignContext from "../../storage/Sign-Context";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  // const cartCtx = useContext(CartContext);

  const SignCtx = useContext(SignContext);
  const history = useHistory();

  // const isLoggedIn = SignCtx.isLoggedIn;
  const isLoggedIn = SignCtx.token;

  const logoutHandler = () => {
    SignCtx.logout();
    history.replace("/login");
  };

  const numberOfCartItems = SignCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);

  const loginHandler = () => {
    SignCtx.login();
  };

  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          position: "fixed",
          width: "100%",
        }}
      >
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              background: "black",
              color: "white",
              wordSpacing: 20,
            }}
          >
            <Nav.Link
              href="home"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
                fontFamily: "-moz-initial",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="store"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
                fontFamily: "-moz-initial",
              }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              href="/about"
              to="/about"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
                fontFamily: "-moz-initial",
              }}
            >
              ABOUT
            </Nav.Link>
            <NavLink
              href="/contact"
              to="/contact"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
                fontFamily: "-moz-initial",
              }}
            >
              CONTACTUS
            </NavLink>
            {!isLoggedIn && (
              <button
                onClick={loginHandler}
                style={{
                  marginLeft: "20px",
                  padding: "2px 10px",
                  background: "black",
                  border: "7px solid darkblack",
                  borderRadius: "5px",
                  color: "white",
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "1rem",
                  listStyle: "none",
                  cursor: "pointer",
                  textAlign: "center",
                  fontFamily: "-moz-initial",
                }}
              >
                Login
              </button>
            )}
            {isLoggedIn && (
              <button
                onClick={logoutHandler}
                style={{
                  marginLeft: "20px",
                  padding: "0px 7px",
                  background: "black",
                  border: "7px solid darkblack",
                  borderRadius: "3px",
                  color: "white",
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "1rem",
                  listStyle: "none",
                  cursor: "pointer",
                  alignItems: "center",
                  fontFamily: "-moz-initial",
                  textAlign: "center",
                }}
              >
                Logout
              </button>
            )}

            <Button
              onClick={props.onShowCart}
              variant="outline-info"
              style={{
                marginLeft: "3rem",
                padding: "0px 7px",
                background: "black",
                border: "7px solid darkblack",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "end",
                color: "white",
                fontSize: "1rem",
                listStyle: "none",
                cursor: "pointer",
                alignItems: "center",
                fontFamily: "-moz-initial",
              }}
            >
              cart
              <span
                style={{
                  background: "black",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "1rem",
                  listStyle: "none",
                  cursor: "pointer",
                  alignItems: "center",
                  fontFamily: "-moz-initial",
                }}
              >
                {numberOfCartItems}
              </span>
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <header
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "6.3rem",
          color: "white",
          background: "#233", //455
        }}
      >
        The Generics
      </header>
    </React.Fragment>
  );
};

export default Header;
