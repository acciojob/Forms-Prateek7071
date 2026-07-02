import React, { useState } from 'react';
import Card from './Card.js';

export default function FormState() {
  const [values, setValue] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted via useState:", values);
  }
  return (
    <div>
      <Card>
            <h2>Section 3: useState Form</h2>
            <form id="info-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full_name">Full Name:</label>
                <input type="text" id="full_name" value={values.full_name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={values.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={values.password} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password_confirmation">Password Confirmation:</label>
                <input type="password" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </Card>
    </div>
  );
}
