
import React from "react";

function Login() {
  return (
    <div> 
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1"><b>E</b>-SILAT-SKOR</a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Masuk sesuai akun masing-masing</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Username" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* /.social-auth-links */}            
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>    
    </div>

  );
}

export default Login;
