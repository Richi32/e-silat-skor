import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin, setError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password
      });
      const token = response.data.token;
      onLogin(token);
    } catch (error) {
      setError('Username atau password salah');
    }
  };

  return (
    <div> 
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="#" className="h1"><b>E</b>-SILAT-SKOR</a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Masuk sesuai akun masing-masing</p>
              <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* /.social-auth-links */}            
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>    
    </div>
  );
};

export default Login;
