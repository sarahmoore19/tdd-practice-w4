module.exports = function reverseString(string) {
  if (typeof string !== "string") throw new Error("Improper entry")
  return string.split("").reverse().join("");
};
