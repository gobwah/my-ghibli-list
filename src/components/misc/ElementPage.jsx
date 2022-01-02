import styled from 'styled-components'

import location from '../../assets/locations/location.png'
import hill from '../../assets/locations/hill.png'
import city from '../../assets/locations/city.png'
import forest from '../../assets/locations/forest.png'
import marsh from '../../assets/locations/marsh.png'
import mountain from '../../assets/locations/mountain.png'
import ocean from '../../assets/locations/ocean.png'
import plain from '../../assets/locations/plain.png'
import river from '../../assets/locations/river.png'

import neutral from '../../assets/people/neutral.png'
import male from '../../assets/people/male.png'
import female from '../../assets/people/female.png'

import specy from '../../assets/species/specy.png'
import mammal from '../../assets/species/mammal.png'
import elk from '../../assets/species/elk.png'
import god from '../../assets/species/god.png'
import spirit from '../../assets/species/spirit.png'
import dragon from '../../assets/species/dragon.png'

import vehicle from '../../assets/vehicles/vehicle.png'
import airplane from '../../assets/vehicles/airplane.png'
import airship from '../../assets/vehicles/airship.png'
import boat from '../../assets/vehicles/boat.png'

const Card = styled.article`
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`

const Image = styled.img`
  max-width: 10vw;
`

function ElementPage({ type, elt }) {
  let img
  switch (type) {
    case 'people':
      switch (elt.gender) {
        case 'Male':
          img = male
          break

        case 'Female':
          img = female
          break

        default:
          img = neutral
          break
      }
      break

    case 'species':
      switch (elt.classification) {
        case 'Mammal':
          img = mammal
          break

        case 'Spirit':
          img = spirit
          break

        case 'God':
          img = god
          break

        case 'Elk':
          img = elk
          break

        case 'Dragon':
          img = dragon
          break

        default:
          img = specy
          break
      }
      break

    case 'locations':
      switch (elt.terrain) {
        case 'Hill':
          img = hill
          break

        case 'City':
          img = city
          break

        case 'Forest':
          img = forest
          break

        case 'Marsh':
          img = marsh
          break

        case 'Mountain':
          img = mountain
          break

        case 'Ocean':
          img = ocean
          break

        case 'Plain':
          img = plain
          break

        case 'River':
          img = river
          break

        default:
          img = location
          break
      }
      break

    case 'vehicles':
      switch (elt.vehicle_class) {
        case 'Airship':
          img = airship
          break

        case 'Airplane':
          img = airplane
          break

        case 'Boat':
          img = boat
          break

        default:
          img = vehicle
          break
      }
      break

    default:
      img = ''
      break
  }

  return (
    <Card>
      <Image src={img} alt={type || 'Not found'} />
      <h2>{(elt && elt.name) || 'Unknown'}</h2>
    </Card>
  )
}

export default ElementPage
