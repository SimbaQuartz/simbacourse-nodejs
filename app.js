//Events
const EventEmitter = require("events");

const customEventEmitter = new EventEmitter();

//emit on

customEventEmitter.on("artti", (sweet, quantity) => {
  //Japsimran
  console.log(
    "Hey I am Artti",
    `Hey Japsimran, take some ${sweet} from 1 - ${quantity}`
  );
});

customEventEmitter.on("artti", () => {
  // Sahil
  console.log("Hey I am Sahil, here to attend Artti...");
});

customEventEmitter.emit("artti", "Rasgulle", 0);

// Create a game.
