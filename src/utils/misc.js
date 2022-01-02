import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

import location from '../assets/locations/location.png'
import hill from '../assets/locations/hill.png'
import city from '../assets/locations/city.png'
import forest from '../assets/locations/forest.png'
import marsh from '../assets/locations/marsh.png'
import mountain from '../assets/locations/mountain.png'
import ocean from '../assets/locations/ocean.png'
import plain from '../assets/locations/plain.png'
import river from '../assets/locations/river.png'

import neutral from '../assets/people/neutral.png'
import male from '../assets/people/male.png'
import female from '../assets/people/female.png'

import specy from '../assets/species/specy.png'
import mammal from '../assets/species/mammal.png'
import elk from '../assets/species/elk.png'
import god from '../assets/species/god.png'
import spirit from '../assets/species/spirit.png'
import dragon from '../assets/species/dragon.png'

import vehicle from '../assets/vehicles/vehicle.png'
import airplane from '../assets/vehicles/airplane.png'
import airship from '../assets/vehicles/airship.png'
import boat from '../assets/vehicles/boat.png'

export const links = [
  {
    id: 'github',
    href: 'https://github.com/gobwah/my-ghibli-list',
    title: 'MyGhibliList Github Project',
    src: github,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/vincent-dellalibera/',
    title: 'Contact me',
    src: linkedin,
  },
  {
    id: 'ghibli',
    href: 'http://www.ghibli.jp/',
    title: 'Ghibli Studio',
    src: 'https://www.ghibli.jp/img/home.png',
  },
]

export function getImage(type, elt) {
  switch (type) {
    case 'people':
      return getPeopleImg(elt)

    case 'species':
      return getSpeciesImg(elt)

    case 'locations':
      return getLocationsImg(elt)

    case 'vehicles':
      return getVehiclesImg(elt)
    default:
      return ''
  }
}

function getPeopleImg(elt) {
  switch (elt.gender) {
    case 'Male':
      return male

    case 'Female':
      return female

    default:
      return neutral
  }
}

function getSpeciesImg(elt) {
  switch (elt.classification) {
    case 'Mammal':
      return mammal

    case 'Spirit':
      return spirit

    case 'God':
      return god

    case 'Elk':
      return elk

    case 'Dragon':
      return dragon

    default:
      return specy
  }
}

function getLocationsImg(elt) {
  switch (elt.terrain) {
    case 'Hill':
      return hill

    case 'City':
      return city

    case 'Forest':
      return forest

    case 'Marsh':
      return marsh

    case 'Mountain':
      return mountain

    case 'Ocean':
      return ocean

    case 'Plain':
      return plain

    case 'River':
      return river

    default:
      return location
  }
}

function getVehiclesImg(elt) {
  switch (elt.vehicle_class) {
    case 'Airship':
      return airship

    case 'Airplane':
      return airplane

    case 'Boat':
      return boat

    default:
      return vehicle
  }
}
