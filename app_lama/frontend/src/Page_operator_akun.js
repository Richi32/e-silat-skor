import React from "react";

function Page_operator_akun() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">

        {/* Main content */}
        <section className="content">

          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">List akun</h3>
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
                      Role
                    </th>
                    <th style={{ width: "30%" }}>
                      Username
                    </th>
                    <th>
                      Password
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
                    <td>
                      Operator123
                    </td>                    
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                      </a>
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

export default Page_operator_akun;
