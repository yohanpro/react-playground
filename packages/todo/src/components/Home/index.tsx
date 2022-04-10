import styled from "@emotion/styled";
import Album from "src/components/Album";

const Home = () => {
  return (
    <HomeContainer>
      <Album />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
