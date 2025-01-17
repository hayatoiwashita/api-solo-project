require('dotenv').config();
const { setupExpressServer } = require("./server");

const PORT = process.env.EXPRESS_PORT || 3000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
});