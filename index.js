import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import sendToNotion from "./notion/toNotion.js";

// ___________________________________________________________________________________

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ___________________________________________________________________________________

//
app.get("/", function (req, res) {
  res.send("Executed sucessfully!");
});
//
app.post("/notion", function (req, res) {
  const title = req.body.title;
  const summary = req.body.summary;

  sendToNotion(title, summary);

  return res.send("Executed sucessfully!");
});
// ___________________________________________________________________________________

app.listen(process.env.PORT);
console.log("\nServer running at port: http://localhost:6969\n");

// ___________________________________________________________________________________
