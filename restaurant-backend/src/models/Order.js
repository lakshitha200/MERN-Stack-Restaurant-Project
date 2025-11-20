import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  paymentMethod: { type: String, enum: ["COD", "ONLINE"], required: true },
  paymentStatus: { type: String, enum: ["PENDING", "PAID", "FAILD"], default: "PENDING" },
  orderStatus: { 
    type: String, 
    enum: ["PLACED", "ACCEPTED", "PREPARING=", "READY", "ON_THE_WAY", "DELIVERED", "CANCELED"], 
    default: "PLACED" 
  },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;
