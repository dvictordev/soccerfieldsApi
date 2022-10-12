import express from "express";
import { localRouter } from "./routes/local.route";
import { router } from "./routes/match.route";
import { userRouter } from "./routes/user.route";

const app = express();
app.use(express.json());
app.use(router);
app.use(localRouter);
app.use(userRouter)

app.listen(3333, () => {
  console.log("http://localhost:3333");
});
