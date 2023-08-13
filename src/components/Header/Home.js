import React from "react";
import { Container, Table } from "react-bootstrap";

function Home() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2 style={{}}>TOURS</h2>
      <Table striped bordered hover>
        <tbody style={{}}>
          <tr
            style={{
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <td>JULY 16</td>
            <td>MUMBAI,IND</td>
            <td>MARINE DRIVE</td>

            <button
              style={{
                backgroundColor: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>
          <tr>
            <td>MAY 30</td>
            <td>HOSPET,IND</td>
            <td>ANJANADRI BETTA</td>
            <button
              style={{
                background: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>
          <tr>
            <td>OCT 5</td>
            <td>GOA,IND</td>
            <td>MAGA BEACH</td>
            <button
              style={{
                background: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>
          <tr>
            <td>APR 16</td>
            <td>UTTRAKHAND,IND</td>
            <td>KEDARNATH</td>
            <button
              style={{
                background: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <button
              style={{
                background: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>

          <tr>
            <td>AUG 7</td>
            <td>CONCORD,CA</td>
            <td>CONCORD PAVILION</td>
            <button
              style={{
                background: "brown",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            >
              BUY TICKET
            </button>
          </tr>
          <br></br>
          <br></br>
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
