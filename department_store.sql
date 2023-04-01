/* CPSC 471 W23 Project Database

 Each time this file is executed, it will reset the database to the original state defined below.
 
 */

DROP DATABASE IF EXISTS DEPARTMENT_STORE;
CREATE DATABASE DEPARTMENT_STORE; 
USE DEPARTMENT_STORE;

DROP TABLE IF EXISTS Department;
CREATE TABLE Department(
	DName varchar(64) NOT NULL,
	Description varchar(255),
	PRIMARY KEY (DName)
);

DROP TABLE IF EXISTS Brand;
CREATE TABLE Brand(
	BrandName varchar(128) NOT NULL,
	Description varchar(255),
	PRIMARY KEY (BrandName)
);

DROP TABLE IF EXISTS Product;
CREATE TABLE Product(
	ItemID int NOT NULL,
	DepartmentName varchar(128),
	ItemDescription varchar(255),
	Class varchar(128),
	Category varchar(128),
	Price decimal(10, 2),
	Quantity int,
	InStock boolean,
	BrandName varchar(128),
	PRIMARY KEY (ItemID),
	FOREIGN KEY (BrandName) REFERENCES Brand(BrandName),
	FOREIGN KEY (DepartmentName) REFERENCES Department(DName)
);

DROP TABLE IF EXISTS Product_SKU;
CREATE TABLE Product_SKU(
	SKU_Num int NOT NULL,
	ItemID int NOT NULL,
	PRIMARY KEY (SKU_Num, ItemID),
	FOREIGN KEY (ItemID) REFERENCES Product(ItemID)
);

DROP TABLE IF EXISTS Location;
CREATE TABLE Location(
	ItemID int NOT NULL,
	LocationName varchar(128) NOT NULL,
	Street varchar(128),
	City varchar(64),
	Province varchar(64),
	PostalCode varchar(6),
	PRIMARY KEY (ItemID, LocationName),
	FOREIGN KEY (ItemID) REFERENCES Product(ItemID)
);

DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer(
	Email varchar(128) NOT NULL,
	Fname varchar(64),
	LName varchar(64),
	Age int,
	Gender char(1),
	Phone varchar(16),
	PRIMARY KEY (Email)
);

DROP TABLE IF EXISTS `Admin`;
CREATE TABLE `Admin`(
	Email varchar(128) NOT NULL,
	Fname varchar(64),
	LName varchar(64),
	Age int,
	Gender char(1),
	Phone varchar(16),
	Position varchar(64),
	PRIMARY KEY (Email)
);

DROP TABLE IF EXISTS Review;
CREATE TABLE Review(
	ReviewID int NOT NULL,
	ItemID int NOT NULL,
	Customer_Email varchar(128) NOT NULL,
	Title varchar(64),
	Description varchar(512),
	Rating int,
	DateWritten date,
	AuthorName varchar(64),
	PRIMARY KEY (ReviewID, ItemID, Customer_Email),
	FOREIGN KEY (ItemID) REFERENCES Product(ItemID),
	FOREIGN KEY (Customer_Email) REFERENCES Customer(Email)
);

DROP TABLE IF EXISTS Deleted_Reviews;
CREATE TABLE Deleted_Reviews(
	ReviewID int NOT NULL,
	Admin_Email varchar(128) NOT NULL,
	PRIMARY KEY (ReviewID, Admin_Email),
	FOREIGN KEY (ReviewID) REFERENCES Review(ReviewID),
	FOREIGN KEY (Admin_Email) REFERENCES `Admin`(Email)
);

DROP TABLE IF EXISTS Dept_Categories;
CREATE TABLE Dept_Categories(
	DCategories varchar(64) NOT NULL,
	Dname varchar(64) NOT NULL,
	PRIMARY KEY (DCategories, DName),
	FOREIGN KEY (DName) REFERENCES Department(DName)
);

DROP TABLE IF EXISTS ReturnRequest;
CREATE TABLE ReturnRequest(
	ReturnID int NOT NULL,
	Customer_Email varchar(128) NOT NULL,
	ReturnDate date,
	RefundAmount decimal(10, 2),
	IsReturned boolean,
	PRIMARY KEY (ReturnID, Customer_Email),
	FOREIGN KEY (ReturnID) REFERENCES Product(ItemID),
	FOREIGN KEY (Customer_Email) REFERENCES Customer(Email)
);

DROP TABLE IF EXISTS Account;
CREATE TABLE Account(
	Username varchar(32) NOT NULL,
	Email varchar(128) NOT NULL,
	Password varchar(255),
	IsBanned boolean,
	PRIMARY KEY (Username),
	FOREIGN KEY (Email) REFERENCES Customer(Email),
	FOREIGN KEY (Email) REFERENCES `Admin`(Email)
);

DROP TABLE IF EXISTS `Order`;
CREATE TABLE `Order`(
	OrderID int NOT NULL,
	Customer_Email varchar(128) NOT NULL,
	OrderDate date,
	ShipDate date,
	ItemsCost decimal(10, 2),
	ShipCost decimal(10, 2),
	Tax decimal(10, 2),
	EstDeliveryDate date, 
	Street varchar(128),
	City varchar(64),
	Province varchar(64),
	Postal varchar(6),
	IsCancelled boolean,
	PRIMARY KEY (OrderID, Customer_Email),
	FOREIGN KEY (Customer_Email) REFERENCES Customer(Email)
);

DROP TABLE IF EXISTS Order_Contains;
CREATE TABLE Order_Contains(
	OrderID int NOT NULL,
	ItemID int NOT NULL,
	ItemSKU int NOT NULL,
	PRIMARY KEY (OrderID, ItemID, ItemSKU),
	FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID),
	FOREIGN KEY (ItemID) REFERENCES Product(ItemID),
	FOREIGN KEY (ItemSKU) REFERENCES Product_SKU(SKU_Num)
);

DROP TABLE IF EXISTS Moderate;
CREATE TABLE Moderate(
	Admin_Email varchar(128) NOT NULL,
	Penalised_Account varchar(32) NOT NULL,
	DisciplinaryAction varchar(32),
	Reason varchar(255), 
	DateApplied date,
	PRIMARY KEY (Admin_Email, Penalised_Account),
	FOREIGN KEY (Admin_Email) REFERENCES `Admin`(email),
	FOREIGN KEY (Penalised_Account) REFERENCES Account(Username)
);

SHOW TABLES;
