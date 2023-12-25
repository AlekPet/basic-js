const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphavit = new Array(26)
      .fill(0)
      .map((v, i) => String.fromCharCode(97 + i).toUpperCase());
  }

  encrypt(mess, key) {
    if (!mess?.length || !key?.length) throw Error("Incorrect arguments!");
    const alp = this.alphavit;

    mess = mess.toUpperCase();
    key = key.toUpperCase();

    // Make correct key
    if (key.length < mess.length) {
      const count = Math.abs(mess.length - key.length);
      if (key.length < mess.length) {
        key = key.repeat(count);
        key = key.slice(0, mess.length);
      }
    }

    const copy = Array.from(key);
    for (let x = 0; x < mess.length; x++) {
      if (alp.indexOf(mess[x]) === -1) copy.splice(x, 0, mess[x]);
    }
    key = copy.join("");
    // end - Make correct key

    let resultEncrypt = [];
    for (let i = 0; i < mess.length; i++) {
      if (alp.indexOf(mess[i]) === -1) {
        resultEncrypt.push(mess[i]);
        continue;
      }

      const messCharIndex = alp.indexOf(mess[i]); // find index char in the alphavite for message
      const keyCharInIndex = alp.indexOf(key[i]); // find index char in the alphavite for key
      let pos = messCharIndex + keyCharInIndex;
      if (pos >= alp.length) {
        pos = Math.abs(alp.length - pos);
      }

      resultEncrypt.push(alp[pos]);
    }

    return this.type
      ? resultEncrypt.join("")
      : resultEncrypt.reverse().join("");
  }

  decrypt(encrymess, key) {
    if (!encrymess?.length || !key?.length) throw Error("Incorrect arguments!");

    const alp = this.alphavit;
    encrymess = encrymess.toUpperCase();
    key = key.toUpperCase();

    // Make correct key
    if (key.length < encrymess.length) {
      const count = Math.abs(encrymess.length - key.length);
      key = key.repeat(count);
      key = key.slice(0, encrymess.length);
    }

    const copy = Array.from(key);
    for (let x = 0; x < encrymess.length; x++) {
      if (alp.indexOf(encrymess[x]) === -1) copy.splice(x, 0, encrymess[x]);
    }
    key = copy.join("");
    // end - Make correct key

    let resultDecrypt = [];
    for (let i = 0; i < encrymess.length; i++) {
      if (alp.indexOf(encrymess[i]) === -1) {
        resultDecrypt.push(encrymess[i]);
        continue;
      }

      const encryptCharIndex = alp.indexOf(encrymess[i]); // find index char in the alphavite for encrypt
      const keyCharInIndex = alp.indexOf(key[i]); // find index char in the alphavite for key
      let pos = encryptCharIndex - keyCharInIndex;
      if (pos < 0) {
        pos = Math.abs(alp.length + pos);
      }
      resultDecrypt.push(alp[pos]);
    }
    return this.type
      ? resultDecrypt.join("")
      : resultDecrypt.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
