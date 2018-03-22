export function generateRandomPoints(center, radius, count) {
  var points = [];
  for (let i = 0; i < count; i++) {
    points.push(generateRandomPoint(center, radius));
  }
  return points;
}


/**
* Generates number of random geolocation points given a center and a radius.
* Reference URL: http://goo.gl/KWcPE.
* @param  {Object} center A JS object with latitude and longitude attributes.
* @param  {number} radius Radius in meters.
* @return {Object} The generated random points as JS object with latitude and longitude attributes.
*/
export function generateRandomPoint(center, radius) {
  var x0 = center.longitude;
  var y0 = center.latitude;
  // Convert Radius from meters to degrees.
  var rd = radius/111300; // radius 5 meters

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return {'latitude': y+y0, 'longitude': xp+x0};
}



const RADIUS = 300 // meters

const carPartImages = {
  1: require('../img/carPart1.png'),
  2: require('../img/carPart2.png'),
  3: require('../img/carPart3.png'),
  4: require('../img/carPart4.png')
}

export default function createCarParts(count, location) {
  let carParts = []

  for (let i = 0; i < count; i++) {
    carParts.push(Object.assign({
      image: carPartImages[getRandomInt(1, 5)]
    },
    generateRandomPoint(location, RADIUS)
    ))
  }

  return carParts
}





