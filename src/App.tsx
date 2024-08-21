import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Home} from "./view/Home";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>

      </div>
  );
}

export default App;
