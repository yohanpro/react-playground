import styled from '@emotion/styled';
import { AlbumEntityPropType } from './AlbumEntity.propType';

const Entity = styled.div`
  width: calc(50% - 1rem);
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-top: 1rem;
  background: ${({ image }: AlbumEntityPropType) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: 768px) {
    height: 30vh;
  }
  :hover {
    transform: scale(1.01);
    border: 1px solid pink;
  }
`;

export default Entity;
