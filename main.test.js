const main = require("./main");

test("Get character and translate it to morse code & viceversa", function() {
  expect(main.getChar("N")).toBe("-. ");
  expect(main.getChar(" ")).toBe("/ ");
});

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
