import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import menuItemRoutes from "./src/routes/menuItem.routes.js";
import categoryRoutes from "./src/routes/category.routes.js";
import orderRoutes from "./src/routes/order.routes.js";
import reviewRoutes from "./src/routes/review.routes.js";
import notificationRoutes from "./src/routes/notification.routes.js";



const app = express();

// This is required to parse JSON bodies
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Restaurant backend is running!");
})

app.use("/api/users", userRoutes);
app.use("/api/menu-items", menuItemRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/notifications", notificationRoutes);


export default app;