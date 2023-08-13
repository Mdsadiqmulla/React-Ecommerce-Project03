import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useContext } from "react";
// import CartContext from "../../storage/CartContext";
import SignContext from "../../storage/Sign-Context";

const productArr = [
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

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  const SigntCtx = useContext(SignContext);

  const addItemToCart = (product) => {
    SigntCtx.addItem(product);
  };

  const product = productArr.find((prod) => prod.id === +params.productId);

  return (
    <Container style={{ marginTop: "30px", textAlign: "center" }}>
      <div>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt={product.title}></img>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        This is a bueatiful multicolours
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          width: "20%",
          borderRadius: "2px solid #777",
        }}
      >
        <span style={{}}>Price: ${product.price}</span>
        <button
          style={{
            padding: "6px 12px",
            color: "white",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "5px",
            background: "#56CCF2",
            cursor: "pointer",
          }}
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </button>
        
      </div>
    </Container>
  );
};
export default ProductDetail;
