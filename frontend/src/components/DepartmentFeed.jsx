import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './styles/DepartmentFeed.css';

import {
  fetchFromAPI,
} from "../utils/fetchFromApi";

function DepartmentFeed() { 
  const { dname } = useParams();
  const [brands, setBrands] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    brandData();
    departmentData();
  }, []);

  const brandData = async () => {
    fetchFromAPI('user/getBrands').then((data) => {
      setBrands(data);
    }) 
  };

  const departmentData = async () => {
    fetchFromAPI('user/getDepartments').then((data) => {
      setDepartments(data);
    }) 
  };

  const clear = () => {
    window.location.href = "http://localhost:3000/login";
    sessionStorage.clear();
  }

  return (
    //HTML for the Department feed
    <div class="departmentFeed">
      <head>
      <link rel="stylesheet" href="./styles/DepartmentFeed.css"></link>
        <title>Home Page</title>
      </head>
      <body>
      <div class="navbar">
  <a href="http://localhost:3000/home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">Departments ▼</button>
    <div class="subnav-content">
        {departments.map((department) => (
        <a href={`http://localhost:3000/department/${department.DName}`}>{department.DName}</a>
      ))}
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Brands ▼</button>
    <div class="subnav-content">
        {brands.map((brand) => (
        <a href={`http://localhost:3000/brand/${brand.BrandName}`}>{brand.BrandName}</a>
      ))}
    </div>
  </div> 
  <a href="http://localhost:3000/myOrder">My Order</a>
  <div id="log-in-out">
  { sessionStorage.getItem('loggedInUser') != null?
  <div class="subnav">
  <button class="subnavbtn" onClick={clear}>Log out</button>
  </div>: 
  <div class="subnav">
  <a href="http://localhost:3000/login">Log in</a>
  </div> }
  </div>
</div>
{ sessionStorage.getItem('loggedInUser') != null?
<p id="welcome-text">
    {`Welcome, ${sessionStorage.getItem('loggedInUser')}`}
  </p>:
  <p id="welcome-text">
  Not logged in
</p>
}
<div class="department-text">
<h1>
  {`Department: ${dname}`}
</h1>
</div>
<div id="catalogue">
  <div class="card">
    <img src={require('./img/black-silver-toaster.png')} alt=""></img> 
    <p class="description">Black and silver extra-wide slotted toaster, 4 slices</p>
    <p class="price">$39.99</p>
    <p><button>Add to Order</button></p>
  </div>
  <div class="card">
    <img src={require('./img/black-silver-toaster.png')} alt=""></img> 
    <p class="description">Black and silver extra-wide slotted toaster, 4 slices</p>
    <p class="price">$39.99</p>
    <p><button>Add to Order</button></p>
  </div>
  <div class="card">
    <img src={require('./img/black-silver-toaster.png')} alt=""></img> 
    <p class="description">Black and silver extra-wide slotted toaster, 4 slices</p>
    <p class="price">$39.99</p>
    <p><button>Add to Order</button></p>
  </div>
  <div class="card">
    <img src={require('./img/black-silver-toaster.png')} alt=""></img> 
    <p class="description">Black and silver extra-wide slotted toaster, 4 slices</p>
    <p class="price">$39.99</p>
    <p><button>Add to Order</button></p>
  </div>
</div>
      </body>
    </div>
  );
}

export default DepartmentFeed;
