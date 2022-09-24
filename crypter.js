//This is cryption algorithm using AES

//Libraries -->
const crypto = require("crypto-js");
require("dotenv").config();

//Commencing the app
//This the performs the cryption algorithm twice
class Crypter {
  constructor() {
    this.SECRET = process.env.SECRET;
  }

  //This encrypts the data and returns the cipher text
  encrypter(text) {
    const cipherText1 = crypto.AES.encrypt(text, this.SECRET).toString();
    const cipherText2 = crypto.AES.encrypt(cipherText1, this.SECRET).toString();
    return cipherText2;
  }

  //This decrypts the data and returns the normal text
  decrypter(cipher) {
    const text1 = crypto.AES.decrypt(cipher, this.SECRET).toString(
      crypto.enc.Utf8
    );
    const text2 = crypto.AES.decrypt(text1, this.SECRET).toString(
      crypto.enc.Utf8
    );
    return text2;
  }

  //This compares the cipher text with a normal value to check if it was encrypted using the same algorithm
  compareEncrypter(text, cipher) {
    let status;
    const normal = this.decrypter(cipher);
    // console.log("text: ", text);
    // console.log("normal_: ", normal);
    if (text === normal) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}

export { Crypter };

const crypter = new Crypter();
const dataText = "secret of life";
const cipher = crypter.encrypter(dataText);
const normal = crypter.decrypter(cipher);
console.log("Normal: ", normal);
const stat = crypter.compareEncrypter(dataText, cipher);
console.log("Status: ", stat);
// const data1 = "secret of life";
// const data2 = "secret of life";
// if (data1 === data2) {
//   console.log(true);
// } else {
//   console.log(false);
// }
