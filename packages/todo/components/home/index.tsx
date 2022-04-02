import styled from "@emotion/styled/macro";
import Album from "@components/Album";

const Home = () => {
  return (
    <HomeContainer>
      <Album />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
export default Home;
