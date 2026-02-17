require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./src/app");  // IMPORTANT

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});