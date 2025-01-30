import express from "express";
import cors from "cors";

import myData from "./data.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/me", myData);

// Listen for requests on the server
const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
