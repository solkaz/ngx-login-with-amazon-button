const writeFileSync = require("fs").writeFileSync;

// Script should build a JSON file that the environment files will import from

// Gets clientId from environment.

writeFileSync(
  __dirname + `/environments/values.json`,
  JSON.stringify(
    {
      clientId: process.env.CLIENT_ID,
    },
    null,
    2
  )
);
