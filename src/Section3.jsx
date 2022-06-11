import React from "react";
import styled from "styled-components";
const Section3 = () => {
  return (
    <Container>
      <Heading>TESTIMONIALS</Heading>
      <SubHeading>
        What pro designers say
        <br /> about us
      </SubHeading>
      <CardContainer>
        <Card>
          <CardSubHeading>
            “Designacad helped me understand design as a concept and how
            important it is for PMs to understand design. Crazy Stuff”
          </CardSubHeading>
          <CardHeading>Piyush Deshpande</CardHeading>
          <Subtext>PM, Cope Studio</Subtext>
        </Card>
        <Card>
          <CardSubHeading>
            “Designacad has been my go to website to look for best resources on
            the internet to improve my craft. It has helped me provide a proper
            roadmap to make sure I don't miss out on any concepts. The resources
            provided are of top notch quality and is something I keep referring
            back to.”
          </CardSubHeading>
          <CardHeading>Karthika</CardHeading>
          <Subtext>UX Designer, Vodafone</Subtext>
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
  margin-top: 20px;
`;
const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
`;
const CardSubHeading = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  height: 100%;
  /* or 150% */

  letter-spacing: 0.05em;

  /* white */

  color: #ffffff;
`;
const Subtext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  color: #d4d4d4;
  margin-top: 4px;
`;
const CardContainer = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
  margin: 32px 0;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Card = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    margin: 10px 0;
  }
  margin: 0px 10px;
  width: 46%;
  background: #1c1c1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 32px 16px;
`;

export default Section3;
