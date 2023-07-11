
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

                  <style>
                  {`
                    .fixed-bottom-buttons {
                      position: fixed;                      
                      bottom: 20px;                      
                      text-align: center;
                      padding: 10px 0;
                      background-color: #f1f1f1;                      
                    }

                    .fixed-bottom-buttons .button-group {
                      display: inline-block;
                      margin: 0 10px;
                    }

                    .fixed-bottom-buttons .button-group .button {
                      display: block;
                      margin: 5px;
                      font-size: 20px;
                      padding: 1vw 1vw;
                      border-radius: 8px;
                      color: #fff;
                      border: none;
                      cursor: pointer;
                    }

                    .fixed-bottom-buttons .button-group .button:last-child {
                      margin-bottom: 0;
                    }
                  `}
                </style>

                  <div className="fixed-bottom-buttons container-fluid">
                    <div className="button-group">
                      <button className="button" style={{ backgroundColor: "#ff0000", color: "white" }}>Tinjuan(1)</button>
                      <button className="button" style={{ backgroundColor: "#ff0000", color: "white" }}>Tendangan(2)</button>
                    </div>
                    <div className="button-group">
                      <button className="button" style={{ backgroundColor: "#ffd900", color: "black" }}>Hapus</button>
                    </div>
                    <div className="button-group">
                      <button className="button" style={{ backgroundColor: "#ffd900", color: "black" }}>Hapus</button>
                    </div>
                    <div className="button-group">
                      <button className="button" style={{ backgroundColor: "#0400ff", color: "white" }}>Tinjuan(1)</button>
                      <button className="button" style={{ backgroundColor: "#0400ff", color: "white" }}>Tendangan(2)</button>
                    </div>
                  </div>

                  <div style={{ marginBottom: "50vh" }}>

                </div>

                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Page_juri_nilai;
