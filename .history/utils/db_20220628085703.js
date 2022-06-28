import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("It is already connected");
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose;.connections[0].ready
  }
}
