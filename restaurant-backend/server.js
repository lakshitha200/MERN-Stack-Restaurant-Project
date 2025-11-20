import dotenv from "dotenv";
import app from "./app.js";
import mongoose from 'mongoose';

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// Start APP
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});