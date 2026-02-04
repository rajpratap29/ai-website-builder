import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();

const port = process.env.PORT || 3000;

const trustedOrigins =
  process.env.TRUSTED_ORIGINS?.split(",").map((o) => o.trim()) || [];

// const corsOptions = {
//   origin: process.env.TRUSTED_ORIGINS?.split(",") || [],
//   credentials: true,
// };

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow mobile browsers
      if (trustedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json({ limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is live!");
});
app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

export default app;
