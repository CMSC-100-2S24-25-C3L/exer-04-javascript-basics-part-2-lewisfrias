import index from "./index.js";

//const generateUniqueID = require("./index.js");
var fname = "Lewis";
var lname = "Frias";
index.generateUniqueID(fname, lname);

const array1 = [fname, lname, "lfrias@w3c.com", 19];
const array3 = [fname, "invalidage", "lfrias@w3c.com", 1];
const array4 = [fname, "invalidmail", "lfrias", 19];
const array2 = ["Michael", "Jackson", "hello@gmail.com", 25];
index.addAccount(array1);
index.addAccount(array2);
index.addAccount(array3);
index.addAccount(array4);
