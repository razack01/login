import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "react-bootstrap";
// import Loginpage from './loginpage'
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  // const [warning, SetWarning] = useState(false);
  const [showsignuppage,Setshowsignuppage]=useState(true)

  let navigatePage = useNavigate();
  function handleSubmit(e) {
    // e.preventDefault();
    if (email != null && email != undefined && email != "") {
      if (password != null && password != undefined && password != "") {
        let getItem = localStorage.getItem("Data");
        console.log("getItem", getItem);
        var Data = [];
        if (getItem == null) {
          var store = {};
          store.useremail = email;
          store.password = password;
          store.activeStatus=true;
          Data.push(store);
          localStorage.setItem("Data", JSON.stringify(Data));
          navigatePage("/login");
        } else {
          console.log("check");
          var store = {};
          store.useremail = email;
          store.password = password;
          var extractdata = JSON.parse(getItem);
          extractdata.push(store);

          localStorage.setItem("Data", JSON.stringify(extractdata));
          navigatePage("/login");
        }
      } else {
        alert("password cannot be empty");
      }
    } else {
      alert("name cannot be empty");
    }
    // let emailValidate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // let testemailValidate=emailValidate.test()
    // console.log("testemail",testemailValidate)
  }

 
  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign Up</h3>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g John"
              onChange={(event) => SetName(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(event) => SetEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(event) => SetPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
}
export default SignUp;
