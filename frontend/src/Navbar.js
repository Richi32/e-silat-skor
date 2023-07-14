import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
  <>
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand-md navbar-dark navbar-black" style={{ background: "linear-gradient(to right, #f00, #00f)" }}>
        <div className="container">
            {/* isi Navbar */}
          <a href="assets/index3.html" className="navbar-brand">
            <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 0.8 }} width="30" height="30"/>
            <span className="brand-text font-weight-light">E-SILAT-SKOR</span>
          </a>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">             
                <Link to="/Login" className="nav-link">Login</Link>
              </li>              
              <li className="nav-item">                             
                <Link to="/Akun" className="nav-link">Akun</Link>                
              </li>
              <li className="nav-item">                             
                <Link to="/Peserta" className="nav-link">Peserta</Link>                
              </li>              
              <li className="nav-item">                             
                <Link to="/Pertandingan" className="nav-link">Pertandingan</Link>                
              </li>
              <li className="nav-item">                             
                <Link to="/Arena" className="nav-link">Arena</Link>                
              </li>              
              <li className="nav-item">                             
                <Link to="/NilaiDewan" className="nav-link">Nilai Dewan</Link>                
              </li>
              <li className="nav-item">                             
                <Link to="/NilaiJuri" className="nav-link">Nilai Juri</Link>                
              </li>
              <li className="nav-item">                             
                <Link to="/PapanSkor" className="nav-link">Papan Skor</Link>                
              </li>
              <li className="nav-item">                             
                <Link to="#" className="nav-link">Logout</Link>                
              </li>     
            </ul>
          </div>          
      {/* /.navbar */}
        </div>
      </nav>
      {/* /.navbar */}
    </div>
    <Outlet />
    </>
  );
}

export default Navbar;
