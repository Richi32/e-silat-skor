import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Ngeong from "./Ngeong";
import PageSabung from "./PageSabung";
import Richi from "./Richi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>  
        <Route index element={<Ngeong />} />
          <Route path="/Richi" element={<Richi />} />        
          <Route path="/PageSabung" element={<PageSabung />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;      
