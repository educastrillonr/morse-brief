# Morse Translator

Link: http://morse.educastrillon.xyz/

One of the exercises done at nology. I had a few hours to create a website that would translate from English to morse and vice versa using TDD.

Tech used: 
- HTML
- JavaScript
- CSS
- Jest

## Installation

- Clone repo to your local machine.
- Run `yarn install` to install dependencies.
- Open in live server.

## Tests

To run the tests, run the command `yarn test`.

The tests follow this syntax: 
```
test("Translate one character from morse code to english & viceversa", function() {
  expect(main.translateEng("N")).toBe("-.");
  expect(main.translateMor("-.")).toBe("N");
});
```
