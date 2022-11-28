const dotenv = require("dotenv");
const app = require("./app/app");

dotenv.config({ path: "./.env.dev" });

const port = process.env.PORT;

app.listen(port, () =>
  console.log(`
    Server is running on port*: ${port} 
`)
);
