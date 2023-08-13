import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container
      style={{
        maxWidth: "900px",
        margin: "auto",
        fontSize: "22px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "cursive",
          padding: "20px",
        }}
      >
        ABOUT
      </h1>
      <img style={{
        width: "230px",
        margin:'20px 50px',
        height:'230px',
        borderRadius:'80%',
        float:'left'
      }}
        src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
        alt="bandpic"
      />
      <p style={{
        fontSize:'17px',
        margin:'20px',
        color:'#777',
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur
        minus, ratione repudiandae eveniet totam earum error facilis enim.
        Voluptate ad culpa, qui incidunt sit in consequuntur neque cum illum
        autem! Officia, quis deserunt sit dolor eos omnis! Atque aliquid optio,
        delectus alias quod mollitia facere consectetur asperiores quos tenetur
        sequi eum reiciendis non perspiciatis veniam deleniti natus nulla
        incidunt deserunt quam architecto magnam? Neque fugit ipsum tempore quae
        nobis voluptates beatae assumenda excepturi exercitationem aperiam, ut
        voluptatum expedita velit earum sunt labore at soluta saepe
        reprehenderit? Assumenda quisquam mollitia, tempore autem molestias
        nesciunt. Expedita cupiditate vitae sit assumenda inventore sed fugiat
        commodi dolorum officia ratione molestias, distinctio beatae asperiores
        similique! Dignissimos, molestiae deleniti? Maiores eius quos quibusdam,
        nulla error aut possimus sed magnam beatae laborum optio fugit atque,
        quia alias? Molestiae dolor voluptatum impedit, fugiat nihil laboriosam
        sit consequuntur incidunt natus similique, enim ipsum, aut eligendi
        minima fugit reprehenderit molestias perferendis in illo quae? Molestiae
        cum consequuntur impedit optio commodi, accusamus modi! Enim id saepe
        rerum? Reprehenderit aliquid, impedit ipsum facilis, quisquam
        dignissimos incidunt magni exercitationem, cupiditate non corrupti eaque
        iste. Reprehenderit ullam illum provident error ipsa unde hic, ad sed
        voluptates explicabo animi magnam, amet odit reiciendis necessitatibus!
      </p>
    </Container>
  );
};

export default About;
