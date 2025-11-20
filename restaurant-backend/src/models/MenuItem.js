import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  image: { type: String }, // URL of image
  isAvailable: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
