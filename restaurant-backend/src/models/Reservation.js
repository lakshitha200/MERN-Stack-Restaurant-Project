import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  reservationTime: { type: Date, required: true },
  status: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING" },
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
