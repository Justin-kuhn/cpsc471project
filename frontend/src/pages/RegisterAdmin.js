import {useState } from 'react';

const RegisterAdmin = () => {
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
    <> <h1>Register as Admin</h1>;
        <form onSubmit={handleSubmit}> 
            <label>Username:
                <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
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
            <label>Email:
                <input 
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
                />
            </label>
            <label>First Name:
                <input 
                type="text" 
                name="first_name" 
                value={inputs.first_name || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Last Name:
                <input 
                type="text" 
                name="last_name" 
                value={inputs.last_name || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Age:
                <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Gender (M/F):
                <input 
                type="text" 
                name="Gender" 
                value={inputs.gender || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Phone Number:
                <input 
                type="text" 
                name="phonenum" 
                value={inputs.phonenum || "(000) 000-0000"} 
                onChange={handleChange}
                />
            </label>
            <label>Position:
                <input 
                type="text" 
                name="position" 
                value={inputs.position || ""} 
                onChange={handleChange}
                />
            </label>
            <input type="submit" />

        </form>

    </>
    )
};
  
export default RegisterAdmin;