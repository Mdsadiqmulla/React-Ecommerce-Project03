import React, { useContext } from "react";
import { Container } from "react-bootstrap";
// import BottomCartButton from "../cart/BottomCartButton";
import SignContext from "../../storage/Sign-Context";
// import CartContext from "../../storage/CartContext";
import { useHistory } from "react-router-dom";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  
  // const cartCtx = useContext(CartContext);

  const SignCtx = useContext(SignContext);
  const history = useHistory();

  const userEmail = SignCtx.email;

  const addItemHandler = (item) => {
    SignCtx.addItem({ ...item, quantity: 1 });
    console.log(SignCtx);

    fetch(
      `https://crudcrud.com/api/24d08af95443425f9482246c94384f39/cart${userEmail}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(item);
  };

  const routeChanger = (prod) => {
    console.log(prod);
    history.push(`/store/${prod.id}`);
  };

  const product = productsArr.map((prod) => (
    <div key={prod.id}>
      <div>
        <h2>{prod.title}</h2>
        <div style={{ margin: "30px" }}>
          <img src={prod.imageUrl} alt={prod.title} />
        </div>
        <div>
          <span style={{ marginRight: "5rem" }}>Price: ${prod.price}</span>
          <button
            style={{
              padding: "8px",
              color: "black",
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "10%",
              background: "#56CCF2",
              cursor: "pointer",
            }}
            onClick={() => addItemHandler(prod)}
          >
            Add To Cart
          </button>
        </div>

        <button
          style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "blue",
            color: "white",
            borderRadius: "10px",
            marginRight: "1.5rem",
            paddingBottom: "5px",
            marginTop: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
            hover: {
              color: "yellow",
            },
          }}
          onClick={() => routeChanger(prod)}
        >
          Open Cart
        </button>
      </div>
    </div>
  ));

  return (
    <Container>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h1>MUSIC</h1>
        <div> {product} </div>
      </div>
    </Container>
  );
};
export default Store;
