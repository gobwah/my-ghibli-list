import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import { useApiSearch } from '../../utils/hooks'
import CardCarousel from '../misc/CardCarousel'
import LocationCard from './LocationCard'

const Wrapper = styled.section`
  width: 80%;
`

function LocationsSection({ filmId, locations }) {
  const result = useApiSearch('films', 'locations', filmId, locations)

  return result.length && result[0] !== url.locations.getSimpleAll() ? (
    <Wrapper>
      <h3>
        Locations <sub>{result.length}</sub>
      </h3>
      <CardCarousel>
        {result.map((location, index) => (
          <LocationCard key={`location-${index}`} url={location} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default LocationsSection
