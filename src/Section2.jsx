import React, { useEffect } from "react";
import styled from "styled-components";
import { BasicUrl, DesignerStoryUrl, InformationArchitectureUrl, ResearchUrl, UxPatternsUrl, VisualDesignUrl } from "./Links";
const Section2 = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Container>
      <Heading>THE COURSE</Heading>
      <SubHeading>
        Start learning through this
        <br /> curated course
      </SubHeading>
      <CardContainer>
        <Card href={BasicUrl} target="_blank">
          <Subtext>01.</Subtext>
          <CardHeading>Basics</CardHeading>
        </Card>
        <Card href={DesignerStoryUrl} target="_blank">
          <Subtext>02.</Subtext>
          <CardHeading>Designer's Story</CardHeading>
        </Card>
        <Card href={VisualDesignUrl} target="_blank">
          <Subtext>03.</Subtext>
          <CardHeading>Visual Design</CardHeading>
        </Card>
        <Card href={ResearchUrl} target="_blank">
          <Subtext>04. Coming Soon</Subtext>
          <CardHeading>Research</CardHeading>
        </Card>
        <Card gridColumn={width > 995 && "1/3"} href={InformationArchitectureUrl} target="_blank">
          <Subtext>05. Coming Soon</Subtext>
          <CardHeading>Information Architecture</CardHeading>
        </Card>
        <Card gridColumn={width > 995 && "3/5"} href={UxPatternsUrl} target="_blank">
          <Subtext>06. Coming Soon</Subtext>
          <CardHeading>UX Patterns</CardHeading>
        </Card>
      </CardContainer>
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
const Heading = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.11em;
  color: #0a88ff;
  margin: 10px 0;
`;
const CardHeading = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0a88ff;
  margin: 10px 0;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
const CardContainer = styled.div`
  @media (max-width: 995px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
const Card = styled.a`
  background: #1c1c1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 16px;
  text-decoration: none;
  grid-column: ${(props) => props.gridColumn};
`;

export default Section2;
