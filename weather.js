const weather = require('weather-js');
const readline = require('readline');

//create CLI prompt interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//wrapper function for CLI prompt
let init = () => {

  //Exectute CLI prompt
  rl.question('Enter city, location, or zip code ', (searchTerm) => {

    //Get weather Data
    findWeather(searchTerm)
    rl.close();
  });
}

//wrapper function for weather.find() method
let findWeather = (searchTerm) => {

  //Get weather data from weather-js module
  weather.find({search: searchTerm, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);

  //print results to console (ref ApiRef.txt for data structure)
  console.log("\r\nResults: " + result.length);
  result.forEach((e,i) => {
    console.log("------------------");
    console.log("Location " + i + ": " + e.location.name);
    console.log("Time: " + e.current.observationtime);
    console.log("Temperature: " + e.current.temperature);
    console.log("Humidity: " + e.current.humidity);
  })

  });

}

//acual function declaration
init()

//node js export function (import file with require("./weather.js") and call function with .init() method)
var exports = module.exports;
exports.init = init;
