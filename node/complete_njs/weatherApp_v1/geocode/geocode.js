const request = require("request");

let geocodeAddress = (address, callback) => {

    let encodedAddress = encodeURIComponent(address);
    let url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=jsonv2&polygon_geojson=1&addressdetails=1`;

    request({
            url: url,
            json: true,
            headers: {
                'User-Agent': 'request'
            }
        },
        (error, response, body) => {
            if (error) {
                callback("Unable to get data");
            } else {
                callback(undefined, {
                    address: body[0].address,
                    latitude: body[0].lat,
                    longitude: body[0].lon
                })
            }
            // console.log(body[0]);
        });
}

module.exports.geocodeAddress = geocodeAddress;