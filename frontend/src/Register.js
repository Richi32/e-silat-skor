import React from "react";

function Register() {
  return (
    <div className="content-wrapper gradient-custom">
      <style>
        {`
          .gradient-custom {
            /* fallback for old browsers */
            background: #ffffff;

            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgb(255, 0, 0), rgb(0, 94, 255));

            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgb(255, 0, 0), rgb(0, 94, 255));
          }
        `}
      </style>

      {/* Main content */}
      <section className="gradient-custom">
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-white text-dark" style={{ borderRadius: "1rem" }}>
                <div className="card-body pr-5 pl-5 text-center">

                  <div>
                    <h2 className="fw-bold text-uppercase">Register</h2>
                    <p className="text-black-50">Harap diisi semua!</p>

                    <div className="form-outline form-black">
                      <input type="email" id="email" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline form-black">
                      <input type="text" id="XXX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="XXX">XXX</label>
                    </div>

                    <div className="form-outline form-black">
                      <input type="text" id="YYY" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="YYY">YYY</label>
                    </div>

                    <div className="form-outline form-black">
                      <input type="password" id="password" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <button className="btn btn-outline-dark btn-lg px-5" type="submit">Register</button>
                  </div>

                  <div>
                    <p className="mb-0">Sudah punya akun? <a href="#!" className="text-black-50 fw-bold">Login</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
}

export default Register;
