const request = require("request");

const apiKey = "4af4bddaff48ad30f37be6f101275383";

let getWeather = (latitude, longitude, callback) => {
    let builtUrl = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            // console.log(body.currently.temperature);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            // console.log("Unable to get weather data");
            callback("Unable to get weather data");
        }
    })
}

module.exports.getWeather = getWeather;