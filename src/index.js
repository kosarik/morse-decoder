const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morseLetter; let o;
  if (expr.length < 10) {
    expr.padStart(10, "0");
  }
  let morseBy10 = expr.match(/.{1,10}/g);
  for (let i = 0; i < morseBy10.length; i++) {
    let morseBy2 = morseBy10[i].match(/.{1,2}/g);
    for (let j = 0; j < morseBy2.length; j++) {
      if (morseBy2[j] === "10") {
        morseBy2[j] = ".";
      } else if (morseBy2[j] === "11") {
        morseBy2[j] = "-";
      }
      morseLetter += morseBy2[j];
    }
    morseLetter.toString();
    result += MORSE_TABLE.r;
  }
  return result;
}

module.exports = {
  decode,
};
