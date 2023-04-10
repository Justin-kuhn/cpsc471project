import {useState } from 'react';
import {useNavigate } from "react-router-dom";


const LoginAdmin = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        // SHOULD CHANGE HOW IT HANDLES !!

        navigate("/"); // redirects to homepage

    }

    return (
    <> <h1>Login as Admin</h1>;
        <form onSubmit={handleSubmit}> 
            <label>Email:
                <input 
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Password:
                <input 
                type="text" 
                name="password" 
                value={inputs.password || ""} 
                onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>

    </>
    )
};
  
export default LoginAdmin;