const { splitmessage, toUglyMessage } = require("./index");

test("Der GG Test", () => {
  expect(toUglyMessage(splitmessage(("GGGGGGGG")))).toBe("§8G");
});

test("testen splitmessage", () => {
  var input = "BlaaaaaaaaaaaBlubbbbbb";
  var result = JSON.stringify([
    { char: "B", count: 1 },
    { char: "l", count: 1 },
    { char: "a", count: 11 },
    { char: "B", count: 1 },
    { char: "l", count: 1 },
    { char: "u", count: 1 },
    { char: "b", count: 6 },
  ]);
  var returnvalue = splitmessage(input);
  expect(returnvalue).toBe(result);
});

test("Test to get a Ugly Message", () => {
  var input = JSON.stringify([
    { char: "B", count: 1 },
    { char: "l", count: 1 },
    { char: "a", count: 11 },
    { char: "B", count: 1 },
    { char: "l", count: 1 },
    { char: "u", count: 1 },
    { char: "b", count: 6 },
  ]);
  var result = "Bl§11aBlu§6b";
  var rerunvalue = toUglyMessage(input);
  expect(rerunvalue).toBe(result);
});

test("Try message to JSON and then to a Ugly Message", () => {
  var message = "hhhjjjjfffffddddddghzzzzzzzttttrrrrrrrfffflllllllkkkkkkk";
  var result = "hhh§4j§5f§6dgh§7z§4t§7r§4f§7l§7k";

  var returnvalue = toUglyMessage(splitmessage(message));

  expect(returnvalue).toBe(result);
});
