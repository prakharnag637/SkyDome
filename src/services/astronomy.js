export const getVisibleObjects = (latitude) => {
  if (latitude > 0) {
    return {
      planets: ['Jupiter', 'Saturn'],
      constellations: ['Orion', 'Taurus'],
    }
  }

  return {
    planets: ['Mars', 'Venus'],
    constellations: ['Crux', 'Centaurus'],
  }
}