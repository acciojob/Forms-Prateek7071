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
          <Link id='form-link' to="/form">Section 1</Link>
          <Link id="form-ref-link" to="/form-ref">Section 2</Link>
          <Link id="form-state-link" to="/form-state">Section 3</Link>
        </nav>
      <Routes>
        <Route
          path='/form'
          element={<Form />}
        />
        <Route
          path='/form-ref'
          element={<FormRef/>}
        />
        <Route
          path='/form-state'
          element={<FormState/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
