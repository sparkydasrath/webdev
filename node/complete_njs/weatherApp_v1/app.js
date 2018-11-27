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

let url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=jsonv2&polygon_geojson=1&addressdetails=0`;

let coord = {};

request({
        url: url,
        json: true,
        headers: {
            'User-Agent': 'request'
        }
    },
    (error, response, body) => {
        coord.lat = body[0].lat;
        coord.lon = body[0].lon;
        console.log(coord);
    });