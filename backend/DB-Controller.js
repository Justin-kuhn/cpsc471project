/*
    The functions in this file will act as a middle-man between database and the webpage.
    Any modifications made to the database will be done through these functions.
*/

//The block of code below establishes a connection by default
const mysql = require ('mysql');

var con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "SpartanKiller747" //Switch out with your actual password for MySQL
} );

con.connect( function(err){
    if(err) throw err;
    console.log("Connection to MySQL Database Successful");
} );




/**
 * @username - The username of a registered user
 * @password - Password associated with the account
 * 
 * Customer Log-in
 */
function logIn(username, password, email){

    let SQLquery = "SELECT EXISTS(SELECT * FROM Account WHERE Username = '"+ username + "' AND Password = '"+ password + "') AND EXISTS(SELECT * FROM Customer WHERE Email = '"+ email + "')";

    con.connect(function(err){
        if(err) throw err;
        
        con.query(SQLquery, function(err, result){
            if(err) throw err;
            if(result){
                window.location.href = "./webpage_name.html"; //After log-in, direct to the desired webpage
            }
        });
    });
    
}



/**
 * @username - The username of a registered user
 * @password - Password associated with the account
 * 
 * Admin Log-in
 */
function logInAdmin(username, password, email){
    
    let SQLquery = "SELECT EXISTS(SELECT * FROM Account WHERE Username = '"+ username + "' AND Password = '"+ password + "') AND EXISTS(SELECT * FROM Admin WHERE Email = '"+ email + "')";

    con.connect(function(err){
        if(err) throw err;
        
        con.query(SQLquery, function(err, result){
            if(err) throw err;
            if(result){
                window.location.href = "./webpage_name.html"; //After log-in, direct to the desired webpage
            }
        });
    });

}

/**
 * @username - The desired username of a customer who is registering a new account
 * @password - Password associated with the account
 * 
 * Registers a customer account to the database.
 */
function registerCustomerAccount(username, password, email, first_name, last_name, age, gender, phone_num){

    let CustomerInfo = "INSERT INTO Customer (Email, Fname, Lname, Age, Gender, Phone) VALUES ('" + email + "', '" + first_name + "', '" + last_name + "', '" + age + "', '" + gender + "', '" + phone_num + "')";

    let accountInfo = "INSERT INTO Account (Username, Email, Password, IsBanned) VALUES ('" + username + "', '" + email + "', '" + password + "', 'false')";
    
    con.connect(function(err){
        if(err) throw err;
        
        con.query(CustomerInfo, function(err, result){
            if(err){
                //If err, it means that email is already registered to another customer, cannot make account
            };

            con.query(accountInfo, function(err, result){
                if(err) throw err; //If err, it means that username is already used, cannot make account
                
                window.location.href = "./webpage_name.html"; //After successful registration, direct to the desired webpage
            });
            
        });
    });
    
}


/**
 * @username - The desired username of a customer who is registering a new account
 * @password - Password associated with the account
 * 
 * Registers an admin to the database
 */
function registerAdminAccount(username, password, email, first_name, last_name, age, gender, phone_num, position){
    let CustomerInfo = "INSERT INTO Customer (Email, Fname, Lname, Age, Gender, Phone) VALUES ('" + email + "', '" + first_name + "', '" + last_name + "', '" + age + "', '" + gender + "', '" + phone_num + "', '" + position + "')";

    let accountInfo = "INSERT INTO Account (Username, Email, Password) VALUES ('" + username + "', '" + email + "', '" + password + "', 'false')";
    
    con.connect(function(err){
        if(err) throw err;
        
        con.query(CustomerInfo, function(err, result){
            if(err){
                //If err, it means that email is already registered to another customer, cannot make account
            };

            con.query(accountInfo, function(err, result){
                if(err) throw err; //If err, it means that username is already used, cannot make account
                
                window.location.href = "./webpage_name.html"; //After successful registration, direct to the desired webpage
            });
            
        });
    });
}


/**
 * 
 * @param {*} adminEmail - Admin administering ban
 * @param {*} customerUsername - Username of customer account receiving ban
 * @param {*} action - disciplinary action taken; for now ban is the only action
 * @param {*} reason - reason for administering ban
 * @param {*} date - date ban was applied
 */
function moderateAccount(adminEmail, customerUsername, action, reason, date){

}