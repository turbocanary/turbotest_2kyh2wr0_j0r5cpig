const crypto = require("crypto");

function anotherInsecurePassword() {
  // GOOD: use cryptographically secure random value
  var suffix = crypto.randomBytes(4).toString("hex");
  var password = "sssAAAA" + suffix;
  return password;
}