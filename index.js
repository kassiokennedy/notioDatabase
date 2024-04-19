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
  res.send("Newsletter-Get Job Executed sucessfully!");
});
//
app.post("/notion", function (req, res) {
  sendToNotion(req.body.title, req.body.summary);
  res.send("Newsletter-Get Job Executed sucessfully!");
});
// ___________________________________________________________________________________

app.listen(process.env.PORT || 6969);
console.log("\nServer running at port: http://localhost:6969\n");

// ___________________________________________________________________________________
