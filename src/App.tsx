import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const rotationAnimation = keyframes`
0%{
  transfrorm:rotate(0deg);
}
50%{
  border-radius:50%
}
100%{
  transform:rotate(360deg);
}`;

const Emoji = styled.span`
  font-size: 30px;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤣</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
