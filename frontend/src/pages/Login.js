import {useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    return (
    <form>
        <h1>Login</h1>
      <button onClick={() => navigate("/LoginCustomer")}>Customer Login</button>
      <button onClick={() => navigate("/LoginAdmin")}>Admin Login</button>
    </form>
    );
  }
  
export default Login;