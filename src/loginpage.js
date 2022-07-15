import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import GetData from './Api fetch'

function Loginpage() {
  const [emaillog, SetEmaillog] = useState("");
  const [passwordlog, SetPasswordlog] = useState("");
  const [warning, SetWarning] = useState(false);
  let navigatePage = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Data"));
    console.log("line13", data);
    if (data != null) {
      const inputmail = data.findIndex((ele) => ele.useremail === emaillog);
      const inputpass = data.findIndex((ele) => ele.password === passwordlog);
      console.log("index:index", inputmail, inputpass);
      const neg = -1;
      if (!emaillog || !passwordlog) {
        SetWarning(true);
      } else if (inputmail === neg) {
        alert("email is invalid");
      } else if (inputpass === neg) {
        alert("password is invalid");
      } else if (inputmail === neg && inputpass === neg) {
        alert("email and password is invalid");
      } else if (inputmail !== inputpass || inputmail === inputpass) {
        let newUser = data.map((e) => {
          if (e.email === emaillog) {
            return {...e,activeUser: true };
          } else {
            return e;
          }
        });
        console.log("newuser", newUser);
        localStorage.setItem("Data", JSON.stringify(newUser));
        navigatePage("/home");
      } 
    
    } else {
      alert("please register and login");
    }
  }
function handleClick() {
    navigatePage("/signup");
  }

return (
    <div className="LoginApp">
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Login</h3>
            <div className="text-center">
              <p onClick={handleClick}>Not registered yet?</p>
              <span className="link-primary"></span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => SetEmaillog(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => SetPasswordlog(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ handleLogin}>
                Submit
              </button>
            </div>
          </div>
          {warning && (
            <Alert>
              <p> Please fill the details</p>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
