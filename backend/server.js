import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.get("/home", (req, res) => res.json({ message: "server working" }));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port no: ${PORT}`);
});
