const { assert } = require("@vtex/danger");

console.log(JSON.stringify(process.env, null, 2));

assert();
