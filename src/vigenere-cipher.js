const { NotImplementedError } = require('../extensions/index.js');

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
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  flag = true;
  constructor(bool) {
    if (bool === false) {
      this.flag = false;
    }
    
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let phrase = message;
    let encryptedStr = '';
    phrase = phrase.replace(/ /g, '');
    key = key.repeat(Math.ceil(phrase.length / key.length)).substring(0,phrase.length);
    for (let i = 0; i < phrase.length; i++) {
      if(this.alphabet.includes(phrase[i].toLowerCase())) {
        let index = (this.alphabet.indexOf(phrase[i].toLowerCase()) + this.alphabet.indexOf(key[i].toLowerCase())) % 26;
        encryptedStr += this.alphabet[index];
      } else {
        encryptedStr += phrase[i];
      }
    }
    encryptedStr = encryptedStr.split('');
    for (let i = 0; i < message.length;i++) {
      if (message[i] === ' ') {
        encryptedStr.splice(i,0,' ');
      }
    }
    if (this.flag) {
      return encryptedStr.join('').toUpperCase();
    } else {
      return encryptedStr.reverse().join('').toUpperCase();
    }
    
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let phrase = encryptedMessage;
    let decryptedStr = '';
    phrase = phrase.replace(/ /g, '');
    key = key.repeat(Math.ceil(phrase.length / key.length)).substring(0,phrase.length);
    for (let i = 0; i < phrase.length; i++) {
      if (this.alphabet.includes(phrase[i].toLowerCase())) {
        let index = this.alphabet.indexOf(phrase[i].toLowerCase()) - this.alphabet.indexOf(key[i].toLowerCase());
        while (index < 0) {
          index += 26;
        }
        decryptedStr += this.alphabet[index];
      } else {
        decryptedStr += phrase[i];
      }
    }
    decryptedStr = decryptedStr.split('');
    for (let i = 0; i < encryptedMessage.length;i++) {
      if (encryptedMessage[i] === ' ') {
        decryptedStr.splice(i,0,' ');
      }
    }
    if (this.flag) {
      return decryptedStr.join('').toUpperCase();
    } else {
      return decryptedStr.reverse().join('').toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
