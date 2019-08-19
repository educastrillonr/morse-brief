function translateEng(message) {
  let translation = "";
  for (let index = 0; index < message.length; index++) {
    translation += getChar(message.toUpperCase().charAt(index));
  }
  console.log(translation);

  return translation;
}

function getChar(char) {
  switch (char) {
    case "A":
      return ".- ";
      break;
    case "B":
      return "-... ";
      break;
    case "C":
      return "-.-. ";
      break;
    case "D":
      return "-.. ";
      break;
    case "E":
      return ". ";
      break;
    case "F":
      return "..-. ";
      break;
    case "G":
      return "--. ";
      break;
    case "H":
      return ".... ";
      break;
    case "I":
      return ".. ";
      break;
    case "J":
      return ".--- ";
      break;
    case "K":
      return "-.- ";
      break;
    case "L":
      return ".-.. ";
      break;
    case "M":
      return "-- ";
      break;
    case "N":
      return "-. ";
      break;
    case "O":
      return "--- ";
      break;
    case "P":
      return ".--. ";
      break;
    case "Q":
      return "--.- ";
      break;
    case "R":
      return ".-. ";
      break;
    case "S":
      return "... ";
      break;
    case "T":
      return "- ";
      break;
    case "U":
      return "..- ";
      break;
    case "V":
      return "...- ";
      break;
    case "W":
      return ".-- ";
      break;
    case "X":
      return "-..- ";
      break;
    case "Y":
      return "-.-- ";
      break;
    case "Z":
      return "--.. ";
      break;
    case "0":
      return "----- ";
      break;
    case "1":
      return ".---- ";
      break;
    case "2":
      return "..--- ";
      break;
    case "3":
      return "...-- ";
      break;
    case "4":
      return "....- ";
      break;
    case "5":
      return "..... ";
      break;
    case "6":
      return "-.... ";
      break;
    case "7":
      return "--... ";
      break;
    case "8":
      return "---.. ";
      break;
    case "9":
      return "----. ";
      break;
    case " ":
      return "/ ";
      break;
  }
  return translation;
}

translateEng("Never gonna give you up");

// module.exports = { translateEng, getChar };
