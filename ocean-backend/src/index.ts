require("dotenv").config();
import Cortex from "./Cortex";
import WebSocket from "ws";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// put your license, client id, client secret to user object
let socketUrl = "wss://localhost:6868";
let user = {
  clientId: process.env.EMOTIV_CLIENT_ID,
  clientSecret: process.env.EMOTIV_CLIENT_SECRET,
  debit: 5000,
};

let c = new Cortex(user, socketUrl);

console.info("SERVER STARTED");
wss.on("connection", (ws: WebSocket) => {
  wss.clients.forEach((data) => {
    console.log("Connected to client");
  });

  ws.on("message", (message: string) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  c.live("Nils2", async (data) => {
    console.log(data);
  });
});

//start our server
server.listen(process.env.PORT || 8080, () => {
  const { port } = server.address() as any;
  console.log(`Server started on address: ${port} :)`);
});
