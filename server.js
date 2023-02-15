const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let APP_PORT = process.env.PORT || 10043;
app.use(bodyParser.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

server.listen(APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT : ${APP_PORT}`);
});

app.post("/", (req, res) => {
  const data = req.body;

  // console.log(`Problem name: ${data.name}`);
  // console.log(`Problem group: ${data.group}`);
  console.log("Full body: server side");
  console.log(JSON.stringify(data, null, 4));
  io.sockets.emit("send-new-problem", data);
  // res.setHeader("Content-Type", "application/json");

  // res.send(req.body);
});

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);
});
