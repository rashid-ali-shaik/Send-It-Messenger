const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("chat", chatSchema);
