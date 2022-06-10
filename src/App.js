import styled from "styled-components";
import Home from "./Home";

function App() {
  return (
    <Container className="App">
      <Home />
    </Container>
  );
}
const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
`;
export default App;
