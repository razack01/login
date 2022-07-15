import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Loginpage from './loginpage'
import SignUp from './signup';
import Home from './home'
function App() {
  const ProtectedRoute = () => {
    // console.log("line7",userdata);
    let updatedList = JSON.parse( localStorage.getItem('Data'));
      // console.log("line11",updatedList);
    if (updatedList.some((userdata)=>userdata.activeStatus)) {
      // console.log("line11",ProtectedRoute);
      return <Home/>;
    }
    else{
    return <Navigate to="/login" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<ProtectedRoute/>} />
      <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
