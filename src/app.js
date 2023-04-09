// Import packages
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import blogRouter from "./routes/blog.route.js";

// App configurations
const app = express();

// Middleware and statics
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

// App routes
app.use("/api/v1/blog", blogRouter);

export default app;
