const mongoose = require("mongoose");
const { Schema } = mongoose;

// recipients property we are gonna embed a sub document collection
// In the list of recippients every reciepient will have two property
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
