
import React from "react";

function Login() {
  return (
    <div> 
    <section className="gradient-custom">
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-white text-dark" style={{ borderRadius: "1rem" }}>
                <div className="card-body pr-5 pl-5 text-center">
      
                  <div className="">
      
                    <h2 className="fw-bold text-uppercase">Login</h2>
                    <p className="text-black-50">Masukkan username dan password yang benar!</p>
      
                    <div className="form-outline form-black">
                      <input type="email" id="email" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="email">email</label>
                    </div>
      
                    <div className="form-outline form-black">
                      <input type="password" id="password" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="password">password</label>
                    </div>
      
                    <p className="small pb-lg-2"><a className="text-black-50" href="#!">Forgot password?</a></p>
      
                    <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>      
                  </div>
      
                  <div>
                    <p className="mb-0">belum punya akun? <a href="#!" className="text-black-50 fw-bold">Register</a>
                    </p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
  </div>  
  );
}

export default Login;
