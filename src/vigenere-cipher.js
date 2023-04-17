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
  constructor(dir = true) {
    this.dir = dir
  }

  validation(m, k) {
    if (!m || !k) throw new Error('Incorrect arguments!')
  }

  encrypt(m, k) {
    this.validation(m, k)

    m = m.toUpperCase()
    k = k.toUpperCase()
    console.log(m, k);
    let r = '';
    for (let i = 0, j = 0; i < m.length; i++) {
      if (/[A-Z]/.test(m[i])) {
        r += String.fromCharCode(((m[i].charCodeAt(0) + (k[j % k.length].charCodeAt(0) - 65) - 65) % 26) + 65)
        j++
      } else {
        r += m[i]
      }
    }
    return this.dir ? r : r.split('').reverse().join('')
  }


  decrypt(m, k) {
    this.validation(m, k)

    m = m.toUpperCase()
    k = k.toUpperCase()
    let r = ''
    for (let i = 0, j = 0; i < m.length; i++) {
      if (/[A-Z]/.test(m[i])) {
        r += String.fromCharCode(((m[i].charCodeAt(0) - (k[j % k.length].charCodeAt(0) - 65) - 65 + 26) % 26) + 65)
        j++
      } else {
        r += m[i]
      }
    }
    return this.dir ? r : r.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
