import React from "react";
import { Link } from 'react-router-dom';

function Page_operator_pertandingan() {
  return (
    <div>
      <div className="content-wrapper">
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              List pertandingan
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
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <form>
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
                    <div className="row">             
                      <div className="card-body col-12">
                        <div className="form-group text-center">
                          <select className="custom-select col-2 mr-1" id="inputGroupSelect01">
                            <option selected>Kelas</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <select className="custom-select col-2" id="inputGroupSelect02">
                            <option selected>Kategori</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <select className="custom-select col-2 ml-1" id="inputGroupSelect03">
                            <option selected>Jenis Kelamin</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <select className="custom-select col-2 ml-1" id="inputGroupSelect03">
                            <option selected>Ronde</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                      </div>  

                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="Arena">Arena</label>
                          <input type="text" className="form-control" id="Arena" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="SudutMerah">Sudut Merah</label>
                          <input type="text" className="form-control" id="SudutMerah" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="SudutBiru">Sudut Biru</label>
                          <input type="text" className="form-control" id="SudutBiru" />
                        </div>
                      </div>

                      <div className="col-6">  
                        <div className="form-group">
                          <label htmlFor="Waktu">Waktu (waktu)</label>
                          <input type="text" className="form-control" id="Waktu" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="NamaPertandingan">Nama Pertandingan</label>
                          <input type="text" className="form-control" id="NamaPertandingan" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="JenisPertandingan">Jenis Pertandingan</label>
                          <input type="text" className="form-control" id="JenisPertandingan" />
                        </div>
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
          <div className="card-body table-responsive">
            <table className="table table-striped projects" id="table-auto-convert">
                <thead>
                  <tr>
                    <th>
                      No
                    </th>
                    <th>
                      Arena
                    </th>
                    <th>
                      Sudut Merah
                    </th>
                    <th>
                      Sudut Biru
                    </th>
                    <th>
                      Ronde
                    </th>
                    <th>
                      Waktu(menit)
                    </th>
                    <th>
                      Nama Pertandingan
                    </th>
                    <th>
                      Jenis Pertandingan
                    </th>
                    <th>
                      Status Pertandingan
                    </th>
                    <th>
                      
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>                 
                      Arena 1                      
                    </td>
                    <td>
                      Roni Seto
                    </td>
                    <td>
                      Dona Irfan
                    </td>       
                    <td>
                      3
                    </td>             
                    <td>
                      90
                    </td>
                    <td>
                      Pertandingan Jawa Cup
                    </td>
                    <td>
                      Sabung
                    </td>       
                    <td>
                      <button className="btn btn-success btn-sm">Berhenti</button>
                      <button className="btn btn-danger btn-sm">Berlangsung</button>
                    </td>              
                    <td className="row">       
                      <Link to="/PapanSkor" target="_blank" className="btn btn-primary btn-sm">
                        <i className="fas fa-external-link-square-alt"></i>
                      </Link>               
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>                        
                      </a>                                            
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>                        
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>
                      No
                    </th>
                    <th>
                      Arena
                    </th>
                    <th>
                      Sudut Merah
                    </th>
                    <th>
                      Sudut Biru
                    </th>
                    <th>
                      Ronde
                    </th>
                    <th>
                      Waktu(menit)
                    </th>
                    <th>
                      Nama Pertandingan
                    </th>
                    <th>
                      Jenis Pertandingan
                    </th>
                    <th>
                      Status Pertandingan
                    </th>
                    <th>
                      
                    </th>
                  </tr>
                </tfoot>
              </table>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Page_operator_pertandingan;
