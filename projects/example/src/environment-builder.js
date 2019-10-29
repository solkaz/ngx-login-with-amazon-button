const fs = require("fs");

const valuesFilePath = `${__dirname}/environments/values.json`;

const data = JSON.stringify(
  {
    clientId: process.env.CLIENT_ID,
  },
  null,
  2
);

fs.writeFileSync(valuesFilePath, data);
