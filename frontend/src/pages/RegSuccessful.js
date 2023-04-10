import {useNavigate } from "react-router-dom";


const RegSuccessful = () => {
    const navigate = useNavigate();
    return (
    <>
    <h1>Account Registered Successfully</h1>;
    <button onClick={() => navigate("/")}>Start Shopping!</button>
    <button onClick={() => navigate("/Account")}>Manage your account</button>

    

    </>
    )
  };
  
  export default RegSuccessful;