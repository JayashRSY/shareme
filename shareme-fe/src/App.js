import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './container/Home';

function App() {
  return (
    <>
    <div>awd</div>
      <Routes>
        <Route path="login" element={Login} />
        <Route path="/*" element={Home} />
      </Routes>
      <Login/>
    </>
  );
}

export default App