const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "address to fetch weather",
            string: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

let res = {};
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) console.log(errorMessage);
            else console.log(`It is ${weatherResults.temperature} at ${results.address.road}`);
        });
    }
});