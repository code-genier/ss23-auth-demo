
import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Login from "./componets/login";
import Signup from "./componets/signup";
import Homepage from "./componets/homepage/index.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
