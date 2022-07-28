import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import consume from "./service/kafka/consumer.js";
import kafka from "./service/kafka/kafka.js";
import route from "./routes/index.js";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/views"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/",route);

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/flipitmoney/GitProjects/mockstock/MainService/public/index.html"
  );
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

consume(kafka, io);
