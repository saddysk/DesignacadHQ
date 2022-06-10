import React from "react";
import styled from "styled-components";
import { FiCheck, FiMail, FiMonitor } from "react-icons/fi";
const Section1 = () => {
  return (
    <Container>
      <Heading>HOW IT WORKS</Heading>
      <SubHeading>
        Follow these steps to make <br />
        the best use of us
      </SubHeading>
      <CardContainer>
        <Card>
          <IconContainer>
            <FiMail />
          </IconContainer>
          <CardHeading>Subcribe to the newsletter</CardHeading>
          <Subtext>
            We will keep you updated in your inbox and share freebies & design
            assignments.
          </Subtext>
        </Card>
        <Card>
          <IconContainer>
            <FiMonitor />
          </IconContainer>
          <CardHeading>Watch the curated course</CardHeading>
          <Subtext>
            It is completely self-paced, so don’t rush. Watch at your own pace.
          </Subtext>
        </Card>
        <Card>
          <IconContainer>
            <FiCheck />
          </IconContainer>
          <CardHeading>Do the assignments</CardHeading>
          <Subtext>
            We will keep you updated in your inbox and share freebies & design
            assignments.
          </Subtext>
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
  padding: 80px 0;
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
  text-align: center;
  color: #ffffff;
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
  width: 30%;
  background: #1c1c1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
`;
const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  background: #2c2c2e;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
export default Section1;
