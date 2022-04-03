import styled from "@emotion/styled";
import AlbumEntity from "./AlbumEntity.tsx";
import { MockAlbum } from "./mock";

const Album = () => {
  return (
    <Container>
      {MockAlbum.map((album) => {
        return <AlbumEntity key={album.id} {...album} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (min-width: 768px) {
    gap: 1em;
  }
`;
export default Album;
