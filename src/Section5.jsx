import React from "react";
import styled from "styled-components";
const Section5 = () => {
  return (
    <Container>
      <SubHeading>
        A side project by Bionic
        <br /> (aka ashish)
      </SubHeading>
      <SubtextContainer>
        <Subtext>
          I built this side project as a part of my cohort at{" "}
          <span>BuildBySTL</span>. I work on this in my spare time and it will
          keep growing as I grow personally as a designer.
        </Subtext>
        <Subtext>
          If you find it useful you can support me{" "}
          <span>buying me a coffee</span>, and if you have any doubts you can
          reach out to me on <span>Twitter</span> anytime.
        </Subtext>
      </SubtextContainer>
    </Container>
  );
};
const Container = styled.div`
  @media (max-width: 550px) {
    padding: 40px 0;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
`;

const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

const Subtext = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #a9a9a9;
  margin-top: 24px;
  span {
    color: #0a88ff;
  }
`;
const SubtextContainer = styled.div`
  max-width: 600px;
`;
export default Section5;
