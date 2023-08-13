import React, { useState } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer/Footer";
import About from "./components/Header/About";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Header/Home";
import Contact from "./components/cart/Contact";
import ProductDetail from "./components/Products/ProductDetail";
import Login from "./components/Header/Login";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import SignContext from "./storage/Sign-Context";
import Store from "./components/Products/Store";

function App() {
  const [showcart, setShowCart] = useState(false);
  const SignCtx = useContext(SignContext);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

 

  return (
    <>
      {showcart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            {SignCtx.token && <Store onClick={showCartHandler} />}
            {!SignCtx.token && <Redirect to="/login" />}
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          {SignCtx.token && (
            <Route path="/store/:productId">
              <ProductDetail />
            </Route>
          )}
        </Switch>
        <Route path="/login">
          <Login />{" "}
        </Route>
      </main>

      <Footer />
    </>
  );
}

export default App;
