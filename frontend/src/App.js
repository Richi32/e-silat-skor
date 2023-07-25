import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Akun from "./Page_operator_akun";
import Pertandingan from "./Page_operator_pertandingan";
import NilaiDewan from "./Page_dewan_nilai";
import NilaiJuri from "./Page_juri_nilai";
import PapanSkor from "./Page_dewan_skor";
import PageHome from "./Page_home"
import Peserta from "./Page_operator_peserta";
import Arena from "./Page_operator_arena";
import NilaiOperator from "./Page_operator_nilai";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (token) => {
    setToken(token);
    setError('');
  };

  const handleLogout = () => {
    setToken('');
    setError('');
  };

  return (
    <BrowserRouter>        
    {window.location.pathname !== '/PapanSkor' && <Navbar />}
        {!token ? (
          <>
            {error && <div>{error}</div>}
            <Login onLogin={handleLogin} setError={setError} />
          </>
        ) : (
          <Routes>
            <Route>
              <Route exact path="/" element={<PageHome />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Akun" element={<Akun />} />
              <Route exact path="/Pertandingan" element={<Pertandingan />} />
              <Route exact path="/NilaiDewan" element={<NilaiDewan />} />
              <Route exact path="/NilaiJuri" element={<NilaiJuri />} />
              <Route exact path="/PapanSkor" element={<PapanSkor />} />
              <Route exact path="/Peserta" element={<Peserta />} />
              <Route exact path="/NilaiOperator" element={<NilaiOperator />} />
              <Route exact path="/Arena" element={<Arena />} />
            </Route>
          </Routes>
        )}
    </BrowserRouter>
  );
}

export default App;      
