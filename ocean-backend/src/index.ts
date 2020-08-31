require("dotenv").config();
import Cortex from "./Cortex";
import WebSocket from "ws";

// put your license, client id, client secret to user object
let socketUrl = "wss://localhost:6868";
let user = {
  clientId: process.env.EMOTIV_CLIENT_ID,
  clientSecret: process.env.EMOTIV_CLIENT_SECRET,
  debit: 5000,
};

let c = new Cortex(user, socketUrl);
c.live("Nils2", (data) => {
  // ws.send(data);
  console.log(data);
});

const wss = new WebSocket.Server({ port: 8080 });

console.info("SERVER STARTED");

wss.on("connection", function connection(ws) {
  wss.clients.forEach((data) => {
    console.log("Connected to client");
  });

  // console.log(`Starting Cortex Server for: ${c.headsetId}`);
  // c.live("Nils2", (data) => {
  //   console.log(data.com);
  //   ws.send(data);
  // });
});
