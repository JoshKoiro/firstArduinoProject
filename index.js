const five = require("johnny-five")
const board = new five.Board()

//Command line object
const commands = {
  //Enter keywords as object key and function as object method
  
}

let runtime = () => {
  //Initialize command line control
  board.repl.inject(commands)
  //INSERT CODE BELOW

}

//Initialization function
board.on("ready", () => {
  console.log("Ready Event Fired...Board Initialized");
  runtime()
})
