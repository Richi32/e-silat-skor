import React from "react";

function Page_operator_nilai() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">

        {/* Main content */}
        <section className="content">

          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">List Nilai
              <button
                type="button"
                className="btn btn-default"
                data-toggle="modal"
                data-target="#modal-default"
              >
                <i className="fas fa-plus"></i>
              </button>
              </h3>
            <div className="modal fade" id="modal-default">
            <div className="modal-dialog">
            <div className="modal-content">
            <form>
                <div className="modal-header">
                <h4 className="modal-title">Tambah Nilai</h4>
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
                    <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="Jenis">Jenis</label>
                        <input type="text" className="form-control" id="Jenis" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nilai">Nilai</label>
                        <input type="text" className="form-control" id="Nilai" />
                    </div>
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                >
                    Close
                </button>                    
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
            </div>
        </div>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
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
                    <th style={{ width: "20%" }}>
                      Nilai
                    </th>
                    <th style={{ width: "30%" }}>
                      Jenis
                    </th>
                    <th style={{ width: "30%" }}>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>                 
                      Operator                      
                    </td>
                    <td>
                      operatorsilat
                    </td>                    
                    <td className="project-actions text-right">
                        <button className="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-default">
                        <i className="fas fa-pencil-alt"></i>
                        </button>                      
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
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

export default Page_operator_nilai;
