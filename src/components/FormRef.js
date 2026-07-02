import React, { useRef } from 'react';
import Card from './Card';

export default function FormRef() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPassRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation : confirmPassRef.current.value
    }
    console.log("Submitted via useRef:", data);
  }
  
  return (
    <Card>
      <h2>Section 2: useRef Form</h2>
      <form id='info-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='full_name'>Full name</label>
          <input type='text' id='full_name' ref={nameRef}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef}/>
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" id="password_confirmation" ref={confirmPassRef}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </Card>
  );
}
