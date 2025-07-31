const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

var whitelist = ["http://mes.ecellmit.com", "http://164.92.99.89"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("static"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const eventSchema = new mongoose.Schema({
  eventName: String,
  userName: String,
});

const Event = mongoose.model("Event", eventSchema);

app.post("/register-event", async (req, res) => {
  const { eventName, userName } = req.body;
  console.log(req.body);

  try {
    // Check if the user is already registered for the event
    const existingEvent = await Event.findOne({ eventName, userName });
    console.log(existingEvent);
    if (existingEvent) {
      // User is already registered, so no need to register again
      return res
        .status(200)
        .json({ message: "User already registered for this event" });
    }

    // Proceed with the new registration
    await Event.create({ eventName, userName });
    res.status(200).json({ message: "Event registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

app.listen(PORT, () => {
  console.log(`MES server is running on http://localhost:${PORT}`);
});
