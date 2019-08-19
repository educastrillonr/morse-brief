const main = require("./main");

// test("Get character and translate it to morse code & viceversa", function() {
//   expect(main.getMorseChar("N")).toBe("-.");
//   expect(main.getMorseChar(" ")).toBe("/");
//   expect(main.getEnglishChar("-.")).toBe("N");
//   expect(main.getEnglishChar("/")).toBe(" ");
// });

//^ Test above became irrelevant after implementing morseRef

test("Translate from morse code to english & viceversa", function() {
  expect(main.translateEng("Never gonna give you up")).toBe(
    "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
  );
  expect(
    main.translateMor(
      "-. . ...- . .-. / --. --- -. -. .- / .-.. . - / -.-- --- ..- / -.. --- .-- -."
    )
  ).toBe("Never gonna let you down");
});
