
import React from "react";

function Page_juri_nilai() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center h4" colSpan="2">JURI<br/>Gelanggang A</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">TULUNGAGUNG<br/><h5>BAYU SAPUTRO</h5></td>
                          <td className="text-center">JAKARTA<br/><h5>RENO ALFRODA</h5></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                  <div className="card-body table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "center", color: "white", backgroundColor: "red" }}>Skor</th>
                          <th style={{ textAlign: "center", color: "white", backgroundColor: "rgb(0, 0, 0)" }}>Babak</th>
                          <th style={{ textAlign: "center", color: "white", backgroundColor: "rgb(0, 102, 255)" }}>Skor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td style={{ textAlign: "center" }}>I</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style={{ backgroundColor: "rgb(255, 238, 0)", textAlign: "center" }}>II</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style={{ textAlign: "center" }}>III</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
              </div>

            </div>

          </div>
          {/* akhir container fluid */}
                  <style>
                  {`              
                    .fixed-bottom-buttons {
                      position: fixed;                      
                      bottom: 20px;                                            
                      padding: 10px 0;
                      background-color: #f1f1f1;                      
                    }

                    .fixed-bottom-buttons .button-group {
                      display: inline-block;
                      margin: 0 10px;
                    }

                    

                    .fixed-bottom-buttons .button-group .button:last-child {
                      margin-bottom: 0;
                    }
                  `}
                </style>

                  <div className="fixed-bottom-buttons container-fluid row">
                    <div className="col-6">
                    <div className="button-group">
                        <button className="button btn btn-block bg-gradient-warning btn-lg d-none">Hapus</button>
                      </div>
                      <div className="button-group">
                        <button className="button btn btn-block bg-gradient-danger btn-lg">Tinjuan(1)</button>
                        <button className="button btn btn-block bg-gradient-danger btn-lg">Tendangan(2)</button>
                      </div>
                      <div className="button-group mt-3">
                        <button className="button btn btn-block bg-gradient-warning btn-lg">Hapus</button>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div className="button-group">
                        <button className="button btn btn-block bg-gradient-warning btn-lg d-none d-sm-block">Hapus</button>
                      </div>                      
                      <div className="button-group">
                        <button className="button btn btn-block bg-gradient-primary btn-lg">Tinjuan(1)</button>
                        <button className="button btn btn-block bg-gradient-primary btn-lg">Tendangan(2)</button>
                      </div>
                      <div className="button-group mt-3">
                        <button className="button btn btn-block bg-gradient-warning btn-lg d-block d-sm-none">Hapus</button>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "50vh" }}>

                </div>
                    {/* akhir margin */}                
        </section>
      </div>
    </div>
  );
}

export default Page_juri_nilai;
