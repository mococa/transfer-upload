const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { exec } = require("child_process");
const { v4 } = require("uuid");

const app = express();

app.use(cors("*"));
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("ping received at " + new Date().toLocaleString());
});

app.post("/", async (req, res) => {
  const { binary, extension } = req.body;
  const buffer = Buffer.from(binary.split("base64,")[1], "base64");
  const id = v4();
  const filename = id + "." + extension;

  fs.writeFileSync(filename, buffer);

  const command = `sh upload.sh ${filename} ${extension}`;
  const upload = exec(command);

  upload.stdout.on("data", (url) => {
    res.send(url);
  });
});

app.listen(3000, () => console.log("App running on port 3000"));
