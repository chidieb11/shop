import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("It is already connected");
    return;
  }

  // @ts-ignore
  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Please use the previous connection!");
      return;
    }
    await mongoose.disconnect();
  }
  // @ts-ignore
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("New connection established");
  // @ts-ignore
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected!");
    }
  }
}

function convertDocToObj(doc) {
  if (doc._id) {
    doc._id = doc._id.toString();
  }
  if (doc.createdAt) {
    doc.createdAt = doc.createdAt.toString();
  }
  if (doc.updatedAt) {
    doc.updatedAt = doc.updatedAt.toString();
  }
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
