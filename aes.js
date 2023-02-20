var data = [
  {
    test1: "test1",
    test2: "test2",
    test3: "test3",
    result1: "result1",
    result2: "result2",
    result3: "result3",
  },
];



var crypto = require("crypto-js");
// const secretKey = "my-secret-key@123";
const secretKey = "secretKey";
var ciphertext = crypto.AES.encrypt(JSON.stringify(data), secretKey).toString();

// firebaseStore(secretKey, ciphertext, email);
console.log("ciphertext is : ", ciphertext);
console.log("secret key is : ", secretKey);

// Decrypt
var bytes = crypto.AES.decrypt(ciphertext, secretKey);
var decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));

//log decrypted Data
console.log("decrypted Data -");
console.log(decryptedData);

// return secretKey;
