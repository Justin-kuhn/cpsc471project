import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/components/Login.jsx"; 
import Register from "../src/components/Register.jsx"; 
import RegisterAdmin from "../src/components/RegisterAdmin.jsx"; 
import Home from "../src/components/Home.jsx"; 
//import DepartmentFeed from "../src/components/DepartmentFeed.jsx"; 
//<Route path="/department/:dname" element={<DepartmentFeed />} /> 

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerAdmin" element={<RegisterAdmin />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
