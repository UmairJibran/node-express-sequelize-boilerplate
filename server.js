const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
