import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import LoginCustomer from './pages/LoginCustomer';
import NoPage from './pages/NoPage';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterAdmin from './pages/RegisterAdmin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
              <Route path="LoginAdmin" element={<LoginAdmin />} />
              <Route path="LoginCustomer" element={<LoginCustomer />} />
            <Route path="Register" element={<Register />} />
              <Route path="RegisterAdmin" element={<RegisterAdmin />} />
              <Route path="RegisterCustomer" element={<RegisterCustomer />} />
            <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
