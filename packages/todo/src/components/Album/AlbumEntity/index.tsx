import Entity from './AlbumEntity.styles'
import { AlbumEntityPropType } from './AlbumEntity.propType'

const AlbumEntity = (props: AlbumEntityPropType) => {
  const { name } = props
  return (
    <Entity role="button" {...props}>
      <div>{name}</div>
    </Entity>
  )
}

export default AlbumEntity
