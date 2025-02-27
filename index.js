import { v4 as uuidv4 } from "uuid";

function generateUniqueID(fname, lname) {
  var l_fname = fname.toLowerCase();
  var l_lname = lname.toLowerCase();
  var uniqueid = l_fname[0] + l_lname;
  const uuid = uuidv4();
  uniqueid = uniqueid + uuid.substring(0, 8);
  return uniqueid;
}

function addAccount() {}

export default generateUniqueID;
