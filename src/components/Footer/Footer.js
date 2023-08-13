import React from "react";

function Footer() {
  return (
    <h1
      style={{
        padding: "1.5rem",
        background: "#233",
        marginTop: "180px",
        fontSize: "3rem",
        // width: "100%",
        textAlign: "center",
        color: "white",
      }}
    >
      The Generics
      <img
        src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
        alt="youtube"
        style={{
          width: "30px",
          marginLeft: "50px",
          height: "30px",
          border: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <img
        style={{
          width: "30px",
          marginLeft: "40px",
          height: "30px",
          border: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
        alt="spotify"
      />
      <img
        style={{
          width: "30px",
          marginLeft: "40px",
          height: "30px",
          border: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
        alt="facebook"
      />
    </h1>
  );
}

export default Footer;
