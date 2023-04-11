import axios from "axios";

const BASE_URL = "http://localhost:8000";

//General function to make get requests to api
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

// Endpoint to login
export const LoginAPI = async (Username, Password, Email) => {
  const response = await axios
    .post(`${BASE_URL}/user/login`, {
      username: Username,
      password: Password,
      email: Email,
    })
    .catch((error) => {
      if (error.response) {
        console.error(error);
        alert("Login failed. Please try again.");
      }
    });
    console.log('response data: ' + response.data);
  return response.data;
};

// Endpoint to login
export const RegisterAPI = async (Username, Password, Email, Fname, Lname, Age, Gender, Phone) => {
  const response = await axios
    .post(`${BASE_URL}/user/register`, {
      username: Username,
      password: Password,
      email: Email,
      fname: Fname,
      lname: Lname,
      age: Age, 
      gender: Gender,
      phone: Phone
    })
    .catch((error) => {
      if (error.response) {
        console.error(error);
        alert("Registration failed. Please try again.");
      }
    });
  return response.data;
};

// Endpoint to login
export const RegisterAdminAPI = async (Username, Password, Email, Fname, Lname, Age, Gender, Phone, Position) => {
  const response = await axios
    .post(`${BASE_URL}/user/registerAdmin`, {
      username: Username,
      password: Password,
      email: Email,
      fname: Fname,
      lname: Lname,
      age: Age, 
      gender: Gender,
      phone: Phone,
      position: Position
    })
    .catch((error) => {
      if (error.response) {
        console.error(error);
        alert("Admin Registration failed. Please try again.");
      }
    });
  return response.data;
};
