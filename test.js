import index from "./index.js";

//const generateUniqueID = require("./index.js");
var fname = "Lewis";
var lname = "Frias";
index.generateUniqueID(fname, lname);

const array1 = [fname, lname, "lfrias@w3c.com", 19];
index.addAccount(array1);
