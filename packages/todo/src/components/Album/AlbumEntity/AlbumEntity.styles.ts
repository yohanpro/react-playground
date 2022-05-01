import styled from '@emotion/styled'
import { AlbumEntityPropType } from './AlbumEntity.propType'

const Entity = styled.div`
  width: calc(50% - 1rem);
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 2rem;
  background: ${({ image }: AlbumEntityPropType) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  @media (min-width: 768px) {
    height: 30vh;
  }
  :hover {
    transform: scale(1.01);
    border: 1px solid pink;
  }
  & > .button-container {
    position: absolute;
    right: 1%;
    top: 2%;
    display: flex;
  }
`

const AlbumDescriptons = styled.div`
  width: 100%;
  height: 100px;

  textarea {
    width: 100%;
    height: 100%;
  }
`
export { Entity, AlbumDescriptons }
