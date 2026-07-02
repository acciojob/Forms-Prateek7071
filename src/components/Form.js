import React from "react";
import Card from "./Card.js";

const Form = () => {
  return (
    <div>
      <Card>
        <h2>Section 1: Basic Form</h2>
        <form id="info-form">
          <div>
            <label htmlFor="full_name">Full Name</label>
            <input type="text" id="full_name"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
          <div>
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input type="password" id="password_confirmation"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </div>
  )
}

export default Form