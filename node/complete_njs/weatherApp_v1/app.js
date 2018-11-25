const request = require("request");
const yargs = require("yargs");

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

let encodedAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.goggleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(response);
    console.log(error);
});