import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './panel/Login/Index';
import Panel from './panel/Index';
import AccountUser from './panel/Login/Components/AccountUser';
import CreateAccount from './panel/Login/CreateAccount';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-user" element={<CreateAccount />} />
      <Route path="/panel" element={<Panel />} />
    </Routes>
  </Router>

  );
}

export default App;
