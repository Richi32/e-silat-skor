
import React from "react";

function Papan_skor() {
  return (
    <div>
      <style>
        {`
          td {
            border: 4px solid white;
          }
        `}
        </style>
        <div classname="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body table-responsive">
              <div style={{color: 'white', textAlign: 'center', left: 0, right: 0, background: 'linear-gradient(to right, #f00, #00f)'}}><h1>PAPAN SKOR</h1></div>
              <table className="table">
                <tbody>
                  <tr>
                    <td style={{color: 'white', textAlign: 'center', left: 0, right: 0, background: 'linear-gradient(to right, #f00, #00f)'}} className="text-center font-weight-bold" colSpan={10}>MONITOR PENILAIAN KELAS TANDING : A PUTRA DEWASA</td>                                          
                  </tr>
                  <tr>
                    <td className="h1" colSpan={4}>JAWA BARAT</td>                      
                    <td className="text-center col-4 font-weight-bold h1" colSpan={2}>00:51:49</td>
                    <td className="text-right h1" colSpan={4}>JAWA TIMUR</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold" style={{color : 'red'}} colSpan={4}>DONI SAPUTRA</td>                      
                    <td className="text-center" colSpan={2}>
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-play"></i>
                      </a>-
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-pause"></i>                        
                      </a>-
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-stop"></i>                        
                      </a>-                      
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-sync"></i>                        
                      </a>
                    </td>
                    <td className="text-right font-weight-bold" style={{color : 'blue'}} colSpan={4}>GILANG RONA</td>               
                  </tr>
                  </tbody>
              </table>
                <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Teguran1.png" alt="Teguran1.png" width="40" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Teguran2.png" alt="Teguran2.png" width="40" height="30"/>
                        </div>
                      </div>
                    </td>
                    <td className="text-center col-3" style={{ backgroundColor: '#f00', color: 'white', verticalAlign : 'middle', textAlign:'center', fontSize: 100 }} colSpan={3} rowSpan={3}><p>6</p></td>
                    <td className="text-center col-3" colSpan={2}>I</td>
                    <td className="text-center col-3" style={{ backgroundColor: '#00f', color: 'white', verticalAlign : 'middle', textAlign:'center', fontSize: 100 }} colSpan={3} rowSpan={3}><p>7</p></td>
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Teguran1.png" alt="Teguran1.png" width="40" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Teguran2.png" alt="Teguran2.png" width="40" height="30"/>
                        </div>
                      </div>
                    </td>                
                  </tr>
                  <tr>
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Binaan1.png" alt="Binaan1.png" width="30" height="40"/>
                        </div>
                        <div>
                          <img src="assets/images/Binaan2.png" alt="Binaan2.png" width="30" height="40"/>
                        </div>
                      </div>
                    </td>
                    <td className="text-center bg-green" colSpan={2}>II</td>                      
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Binaan1.png" alt="Binaan1.png" width="30" height="40"/>
                        </div>
                        <div>
                          <img src="assets/images/Binaan2.png" alt="Binaan2.png" width="30" height="40"/>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                      </div>
                    </td>
                    <td className="text-center" colSpan={2}>III</td>
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                        <div>
                          <img src="assets/images/Peringatan.png" alt="Peringatan.png" width="30" height="30"/>
                        </div>
                      </div>
                    </td>
                  </tr>                  
                  </tbody>
              </table>
              

              <table table className="table">
                <tbody>
                  <tr style={{backgroundColor:'#9e9e9e'}}>
                    <td className="text-center font-weight-bold">JURI 1</td>                      
                    <td className="text-center font-weight-bold">JURI 2</td>
                    <td className="text-center font-weight-bold">JURI 3</td>                    
                    <td className="col-1">
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Tinju.png" alt="Tinju.png" width="30" height="30"/>
                        </div>                        
                      </div>
                    </td>
                    <td className="col-1">
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Tinju.png" alt="Tinju.png" width="30" height="30"/>
                        </div>                        
                      </div>
                    </td>                    
                    <td className="text-center font-weight-bold">JURI 1</td>
                    <td className="text-center font-weight-bold">JURI 2</td>          
                    <td className="text-center font-weight-bold">JURI 3</td>                 
                  </tr>
                  <tr style={{backgroundColor:'#dbdbdb'}}>
                    <td className="text-center font-weight-bold">JURI 1</td>
                    <td className="text-center font-weight-bold">JURI 2</td>          
                    <td className="text-center font-weight-bold">JURI 3</td>                     
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Tendang.png" alt="Tendang.png" width="30" height="30"/>
                        </div>                      
                      </div>
                    </td>
                    <td>
                      <div className="row justify-content-center">
                        <div>
                          <img src="assets/images/Tendang.png" alt="Tendang.png" width="30" height="30"/>
                        </div>                        
                      </div>
                    </td>                    
                    <td className="text-center font-weight-bold">JURI 1</td>
                    <td className="text-center font-weight-bold">JURI 2</td>          
                    <td className="text-center font-weight-bold">JURI 3</td>               
                  </tr>            
                </tbody>
              </table>
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

export default Papan_skor;
