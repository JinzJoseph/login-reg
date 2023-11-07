import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
        },[]);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // Fetch user data
      fetch(`http://localhost:8000/users/${username}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (Object.keys(res).length === 0) {
            toast.error("Please enter a valid username");
          } else {
            if (res.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username",username);
              //sessionStorage.setItem('jwttoken',res.jwtToken);
              usenavigate("/");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login failed: " + err.message);
        });
    }
  };

  const validate = () => {
    if (username === "" || username === null) {
      toast.warning("Please enter a username");
      return false;
    }
    if (password === "" || password === null) {
      toast.warning("Please enter a password");
      return false;
    }
    return true;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={proceedLogin}>
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary m-3">
                Login
              </button>
              <Link className="btn btn-danger" to={"/register"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
