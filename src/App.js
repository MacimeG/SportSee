import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import './App.css';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import Error404 from './pages/Error';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Dashboard/:id' element={<Dashboard/>}/>
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
