import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import {ToastContainer} from 'react-toastify'


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} extact>
            {" "}
          </Route>
          <Route path="/Login" element={<Login />} extact>
            {" "}
          </Route>
          <Route path="/Register" element={<Register />} extact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
