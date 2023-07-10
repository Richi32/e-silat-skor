import React from "react";

function List_operator_acara() {
  return (
    <div>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              List acara
              <button
                type="button"
                className="btn btn-default"
                data-toggle="modal"
                data-target="#modal-default"
              >
                Tambah Acara
              </button>
            </h3>

            <div className="modal fade" id="modal-default">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah acara</h4>
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
                  <th style={{ width: "1%" }}>#</th>
                  <th style={{ width: "20%" }}>Project Name</th>
                  <th style={{ width: "30%" }}>Team Members</th>
                  <th>Project Progress</th>
                  <th style={{ width: "8%" }} className="text-center">
                    Status
                  </th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>
                    <a href="#">
                      AdminLTE v3
                    </a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="57"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "57%" }}
                      ></div>
                    </div>
                    <small>57% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i> View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i> Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i> Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List_operator_acara;
