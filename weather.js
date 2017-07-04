const weather = require('weather-js');
const readline = require('readline');

//create CLI prompt interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//Exectute CLI prompt
rl.question('Enter city, location, or zip code ', (searchTerm) => {

  //Get weather Data
  findWeather(searchTerm)
  rl.close();
});

//wrapper function for weather.find() method
let findWeather = (searchTerm) => {

  //Get weather data from weather-js module
  weather.find({search: searchTerm, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);

  //print results to console (ref ApiRef.txt for data structure)
  result.forEach((e,i) => {
    console.log("Location " + i + ": " + e.location.name);
    console.log("Time: " + e.current.observationtime);
    console.log("Temperature: " + e.current.temperature);
    console.log("Humidity: " + e.current.humidity);
  })

  });

}
