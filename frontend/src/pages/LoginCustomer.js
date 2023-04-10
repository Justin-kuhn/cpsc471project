import {useState } from 'react';

const LoginCustomer = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
        // SHOULD CHANGE HOW IT HANDLES !!
    }

    return (
    <> <h1>Login as Customer</h1>;
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
  
  export default LoginCustomer;