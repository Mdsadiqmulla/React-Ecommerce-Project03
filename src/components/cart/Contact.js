import React, { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phonenumberRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const newContact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phonenumber: phonenumberRef.current.value,
    };

    console.log(newContact);
    // console.log(response);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phonenumberRef.current.value = "";

    const response = await fetch(
      "https://http-ecommerce-a7fae-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    alert("Thank You We will Get Back to You");

    console.log(newContact);
    console.log(response);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phonenumberRef.current.value = "";
  };

  return (
    <div className={classes.contact}>
      <h2>Contact Us</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            ref={emailRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            ref={phonenumberRef}
          />
        </div>
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
