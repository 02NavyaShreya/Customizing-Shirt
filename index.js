const express = require("express");
const dotenv = require("dotenv");
const dalleRoutes = require("./Routes/dalle.routes.js"); 

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount DALL-E routes
app.use("/api/v1/dalle", dalleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
