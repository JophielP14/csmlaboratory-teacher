import React from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginTeacher from './components/Login';
import Dashboard from './components/Dashboard';
import PendingView from './components/PendingView';
import RejectedView from './components/RejectedView';
import AcceptedView from './components/AcceptedView';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
          
          <Route path="/" element={<LoginTeacher/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/transaction/:id" element={<PendingView />} />
          <Route path="/transaction/rejected/:id" element={<RejectedView/>} />
          <Route path="/transaction/accepted/:id" element={<AcceptedView/>} />
          



         



      </Routes>
      
    </div>

    </Router>
  );
}

export default App;
