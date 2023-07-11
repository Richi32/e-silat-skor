import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Richi from "./Richi";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ListAkun from "./Page_operator_list_akun";
import ListAcara from "./List_operator_acara";
import NilaiDewan from "./Page_dewan_nilai";
import NilaiJuri from "./Page_juri_nilai";
import PapanSkor from "./Page_dewan_skor";

function App() {
  return (
    <BrowserRouter>        
      <Routes>
        <Route exact path="/" element={<Navbar />}>          
          <Route path="/Richi" element={<Richi />} />      
          <Route path="/Login" element={<Login />} />  
          <Route path="/Register" element={<Register />} />
          <Route path="/ListAkun" element={<ListAkun />} />
          <Route path="/ListAcara" element={<ListAcara />} />
          <Route path="/NilaiDewan" element={<NilaiDewan />} />
          <Route path="/NilaiJuri" element={<NilaiJuri />} />
          <Route path="/PapanSkor" element={<PapanSkor />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;      
