import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.status(401).json({ message: "Hello World " });
});

app.listen(3333, () => console.log("Server is running on port 3333 !"));
