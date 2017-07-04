//require johnny-five framework
const five = require("johnny-five")

//create board function
const board = new five.Board()

//import weather API module
const weather = require('./weather.js');



//Command line object
const commands = {
  //Enter keywords as object key and function as object method

}

let runtime = () => {
  //Initialize command line control
  if(commands ==! null) {
  board.repl.inject(commands)
  }
  //INSERT CODE BELOW

}

//Initialization function
board.on("ready", () => {
  console.log("Ready Event Fired...Board Initialized");
  runtime()
})
