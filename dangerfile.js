const { assert } = require("@vtex/danger");

console.log("foooo");
console.log(JSON.stringify(process.env, null, 2));

assert({
  keepachangelog: {
    changeVersion: false,
  },
});
