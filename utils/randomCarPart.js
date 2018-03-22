import { generateRandomPoint } from './randomLoc'
import getRandomInt from './getRandomInt'

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
