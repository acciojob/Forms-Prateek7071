import React from 'react';
import Form from './Form.js';
import FormRef from './FormRef.js';
import FormState from './FormState.js';
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link id='form-link' to="/">Section 1</Link>
          <Link id="form-ref-link" to="/ref">Section 2</Link>
          <Link id="form-state-link" to="/state">Section 3</Link>
        </nav>
      <Routes>
        <Route
          path='/'
          element={<Form />}
        />
        <Route
          path='/ref'
          element={<FormRef/>}
        />
        <Route
          path='/state'
          element={<FormState/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
