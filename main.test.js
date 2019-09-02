const main = require("./main");

test("Translate one character from morse code to english & viceversa", function() {
  expect(main.translateEng("N")).toBe("-.");
  expect(main.translateMor("-.")).toBe("N");
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
