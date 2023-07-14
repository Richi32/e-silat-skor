import React from "react";

function Page_operator_peserta() {
  return (
    <div>
      <div className="content-wrapper">
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              List Peserta
              <button
                type="button"
                className="btn btn-default"
                data-toggle="modal"
                data-target="#modal-default"
              >
                Tambah Peserta
              </button>
            </h3>

            <div className="modal fade" id="modal-default">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah pertandingan</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Template excel <a href="#">unduh disini</a>
                    </p>
                    <p>
                      pilih excel yang sudah diisi data dan input ke menu dibawah ini
                    </p>
                    <input type="file" name="" id="" />
                  </div>
                  <div className="modal-footer justify-content-between">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      tambah
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body p-0 table-responsive">
            <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "1%" }} className="text-center">
                      No
                    </th>
                    <th>
                      Nama
                    </th>
                    <th>
                      Kontingen
                    </th>
                    <th>
                      Kelas
                    </th>
                    <th>
                      Kategori
                    </th>
                    <th>
                      Jenis Kelamin
                    </th>
                    <th>
                      Sudut
                    </th>                    
                    <th style={{ width: "10%" }}>
                      
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>                 
                      Richa                     
                    </td>
                    <td>
                      Jawa Barat
                    </td>
                    <td>
                      Dewasa
                    </td>       
                    <td>
                      A
                    </td>             
                    <td>
                      pa
                    </td>                
                    <td>
                      Biru
                    </td>                
                    <td className="project-actions text-right">                      
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Page_operator_peserta;
