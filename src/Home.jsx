import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1248px) and (max-width: 1440px) {
    padding: 0px;
  }

  max-width: 1248px;
  width: 100%;
  padding: 20px;
  position: relative;
`;
export default Home;
