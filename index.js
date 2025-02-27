import { v4 as uuidv4 } from "uuid";
import validator from "validator";
import fs, { appendFileSync, openSync } from "fs";

// generateUniqueID function
function generateUniqueID(fname, lname) {
  // get lowercase of first and last names
  var l_fname = fname.toLowerCase();
  var l_lname = lname.toLowerCase();
  var uniqueid = l_fname[0] + l_lname;
  // generate uuid
  const uuid = uuidv4();
  // cut the uuid to 8 characters and concatenate
  uniqueid = uniqueid + uuid.substring(0, 8);
  return uniqueid;
}

// addAccount function
function addAccount(acc) {
  // verify if all content/element of array is valid
  if (acc.length != 4) {
    return;
  } else {
    //if so, append to users.txt
    if (
      acc[0] !== "" &&
      acc[1] !== "" &&
      validator.isEmail(acc[2]) &&
      acc[3] >= 18
    ) {
      console.log("Valid");
      var uniqueID = generateUniqueID(acc[0], acc[1]);
      var fd = openSync("users.txt", "a");
      appendFileSync(
        fd,
        `${acc[0]}, ${acc[1]}, ${acc[2]}, ${acc[3]}, ${uniqueID} \n`,
        "utf8"
      );
    } else {
      console.log("Invalid");
    }
  }
}

export default { generateUniqueID, addAccount };
