import React, { useContext } from "react";
import SignContext from "../../storage/Sign-Context";

import Modal from "./Modal";


const Cart = (props) => {
  
  const SignCtx = useContext(SignContext);
  const totalAmount = `$${SignCtx.totalAmount}`;

  const removeItemHandler = (id) => {
    console.log(id);
    SignCtx.removeItem(id);
  };

  return (
    <Modal
      onClose={props.onClose}
      style={{
        margin: " 0px",
        display: "flex",
        position: "fixed",
        top: "50px",
        height: "95%",
        right: "0",
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(177, 103, 103)",
      }}
    >
      {
        <div>
          <h2
            style={{
              margin: "20px 0px",
              padding: "0",
              textAlign: "center",
              marginBottom: "40px",
              marginTop: "1",
              borderBottom: "2px solid black",
            }}
          >
            CART
          </h2>
          <button
            onClick={props.onClose}
            style={{
              position: "absolute",
              cursor: "pointer",
              color: "black",
              top: "0",
              right: "0",
              margin: "20px",
              background: "lightblack",
              fontSize: "16px",
              fontWeight: "700",
              padding: "5px",
            }}
          >
            X
          </button>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            <span
              style={{
                alignItems: "center",
                font: "bold",

                marginRight: "1.5rem",
                paddingBottom: "10px",
                marginTop: "10px",
                paddingLeft: "30px",
                // borderBottom:'1px solid black'
              }}
            >
              ITEM
            </span>

            <span
              style={{
                alignItems: "center",
                borderBottom: "1px solidblack",
                marginRight: "1.5rem",
                paddingBottom: "0px",
                marginTop: "10px",
                marginLeft: "5rem",
              }}
            >
              PRICE
            </span>
            <span
              style={{
                alignItems: "center",
                borderBottom: "1px solidblack",
                marginRight: "1.5rem",
                paddingBottom: "10px",
                marginTop: "10px",
                marginLeft: "5rem",
              }}
            >
              QUANTITY
            </span>
          </div>
          <div>
            {SignCtx.items.map((prod) => (
              <div style={{ fontsize: "1px", display: "flex" }} key={prod.id}>
                <div>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solidblack",
                      marginRight: "1.5rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        padding: "3.5px",
                        width: "100px",
                        borderRadius: "8%",
                        marginRight: "20px",
                        marginTop: "5px",
                      }}
                      src={prod.imageUrl}
                      alt={prod.title}
                    />
                    <span
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        marginRight: "1.5rem",
                        paddingBottom: "10px",
                        marginTop: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {prod.title}
                    </span>
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid black",
                      marginRight: "1.5rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {prod.price}
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid black",
                      marginRight: "1.5rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <span
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        marginRight: "1.5rem",
                        paddingBottom: "10px",
                        marginTop: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {prod.quantity}
                    </span>
                    <button
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        background: "red",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "8%",
                        height: "30px",
                        outline: "none",
                        padding: "0px 7px",
                      }}
                      onClick={() => removeItemHandler(prod.id)}
                    >
                      REMOVE
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              fontSize: "1.2rem",
              margin: "20px",
            }}
          >
            <span
              style={{ boxSizing: "border-box", margin: "0", padding: "0" }}
            >
              {totalAmount}
            </span>
            <h1
              style={{
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            >
              Total
            </h1>
          </div>
          <div>
            <button
              style={{
                display: "flex",
                alignitems: "center",
                justifycontent: "end",
                margin: "auto",
                margintop: "50px",
                background: "#56CCF2",
                color: "white",
                fontsize: "1.2rem",
                fontweight: "bold",
                border: "none",
                borderradius: "10%",
                padding: "12px",
                cursor: "pointer",
              }}
            >
              PURCHASE
            </button>
          </div>
        </div>
      }
    </Modal>
  );
};

export default Cart;
