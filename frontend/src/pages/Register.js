import {useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();
  return (
  <form>
      <h1>Registration</h1>
    <button onClick={() => navigate("/RegisterCustomer")}>Customer Registration</button>
    <button onClick={() => navigate("/RegisterAdmin")}>Admin Registration</button>
  </form>
  );
}
  
  export default Register;