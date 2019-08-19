const morseRef = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": "/"
};

const handleEnglish = e => {
  const input = document.getElementById("englishInput");
  document.getElementById("morseOutput").innerHTML = translateEng(input.value);
};
const handleMorse = e => {
  const input = document.getElementById("morseInput");
  document.getElementById("englishOutput").innerHTML = translateMor(
    input.value
  );
};

const translateEng = message => {
  let translation = "";
  for (let index = 0; index < message.length; index++) {
    translation += morseRef[message.toLowerCase().charAt(index)] + " ";
    // console.log();
  }
  return translation.substring(0, translation.length - 1);
};

const translateMor = message => {
  message += " ";
  let translation = "";
  let char = "";
  for (let index = 0; index < message.length; index++) {
    if (message.charAt(index) !== " ") {
      char += message.toLowerCase().charAt(index);
    } else {
      translation += Object.keys(morseRef).find(key => morseRef[key] === char);
      // console.log());
      char = "";
    }
  }
  if (message === "") {
    return " ";
  }
  return (
    translation.substring(0, 1).toUpperCase() +
    translation.substring(1, translation.length)
  );
};

translateEng("Never gonna give you up");
translateMor(
  "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
);

module.exports = { translateEng, translateMor };
