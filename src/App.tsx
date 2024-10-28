import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './panel/Login/Index';
import Panel from './panel/Index';
import CreateAccount from './panel/Login/CreateAccount';
import Welcome from './panel/view/Home/Index';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-user" element={<CreateAccount />} />
      <Route path="/panel" element={<Panel />}>
          <Route index element={<Welcome />} /> 
        </Route>
    </Routes>
  </Router>

  );
}

export default App;
