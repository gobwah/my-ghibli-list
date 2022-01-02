import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import { useApiSearch } from '../../utils/hooks'
import CardCarousel from '../misc/CardCarousel'
import VehicleCard from './VehicleCard'

const Wrapper = styled.section`
  width: 80%;
`

function VehiclesSection({ filmId, vehicles }) {
  const result = useApiSearch('films', 'vehicles', filmId, vehicles)

  return result.length && result[0] !== url.vehicles.getSimpleAll() ? (
    <Wrapper>
      <h3>
        Vehicles <sub>{result.length}</sub>
      </h3>
      <CardCarousel>
        {result.map((vehicle, index) => (
          <VehicleCard key={`vehicle-${index}`} url={vehicle} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default VehiclesSection
