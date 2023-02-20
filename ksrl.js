var MD5 = require("md5.js");
// import { soundex } from "https://esm.sh/soundex-code@2?bundle";
// var soundex = require("soundex-code.js")

var name = "Mr. Md Abu Naser";
var gender = "Male";
var dob = "9/5/1992";
var address = "Muradpur, Chittagong";

// var sal = ["mr", "md"]
function nameHashing(name) {
  name = name.toLowerCase();
  name = name.replace(/(mr)|(md)|\./g, "");
  name = name.trim();
  var nameUpdate = name.substring(1);
  // console.log(nameUpdate);
  nameUpdate = nameUpdate.replace(/[aeiou]/g, "");
  name = name.substring(0, 1) + nameUpdate;
  // console.log(name);

  //Hashing
  let ans = (new MD5().update(name).digest("hex"));
  return ans;
}
// nameHashing(name);

function dateHashing(gender,dob) {
  gender = gender.substring(0, 1)
  var dobUpdate = dob.slice(-4)
  var lastDigit = parseInt(dobUpdate.slice(-1));
  if (lastDigit > 4) {
    var range = dobUpdate.substring(0,3)+"5-"+dobUpdate.substring(0,3)+"9"
  }
  else {
    var range =
      dobUpdate.substring(0, 3) + "0-" + dobUpdate.substring(0, 3) + "4";
  }
  let hash = gender + range
  hash = (new MD5().update(hash).digest("hex"));
  return hash;
}

function addressHashing(address) {
  let str="";
  let j = 0;
  for (let i = 1; i < address.length && j<3; i++)
  {
    if (
      address[i] == "b" ||
      address[i] == "f" ||
      address[i] == "p" ||
      address[i] == "v"
    ) {
      // console.log("1");
      str = str + "1"
      j++;
    } else if (["d", "t"].indexOf(address[i]) >= 0) {
      // console.log("3");
      str = str+"3"
      j++;
    } else if (["c", "g", "j", "k", "q", "x", "z","s"].indexOf(address[i]) >= 0) {
      // console.log("2");
      str = str+"2"
      j++;
    } else if (["m", "n"].indexOf(address[i]) >= 0) {
      // console.log("5");
      str = str + "5";
      j++;
    } else if (address[i] == "l") {
      // console.log("4");
      str = str + "4";
      j++;
    } else if (address[i] == "r") {
      // console.log("6");
      str = str + "6";
      j++;
    }
  }
  // console.log();
  str = address.substring(0, 1) + str;

  str = (new MD5().update(str).digest("hex"));
  return str;
}
let result =
 "NAME : "+ nameHashing(name) +" DATE : "+ dateHashing(gender, dob) +" ADDRESS : "+ addressHashing(address);
console.log(result);
