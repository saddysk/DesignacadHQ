import React from "react";
import styled from "styled-components";
const Section4 = () => {
  return (
    <Container>
      <Heading>
        <span>Subscribe to get</span> weekly updates,
        <br /> design assignments & freebies.
      </Heading>
      {/* <SubscrptionForm>
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit">Submit</Button>
      </SubscrptionForm> */}

      <SubscrptionForm action="https://www.getrevue.co/profile/designacadhq/add_subscriber" method="post" name="revue-form" target="_blank">
        <Input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" />
        <Button type="submit" name="member[subscribe]" style={{ cursor: "pointer" }}>Submit</Button>
      </SubscrptionForm>
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
  @media (max-width: 550px) {
    font-size: 32px;
    line-height: 40px;
    text-align: left;
  }
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  span {
    color: #0a88ff;
  }
`;
const SubscrptionForm = styled.form`
  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
  display: flex;
  margin: 24px 0;
`;

const Button = styled.button`
  @media (max-width: 550px) {
    width: 100%;
    margin: 10px 0;
  }
  padding: 10px 20px;

  width: 84px;
  height: 40px;
  border: none;
  margin: 0 10px;

  /* blue */

  background: #0a88ff;
  border-radius: 6px;
  cursor: pointer;
`;
const Input = styled.input`
  @media (max-width: 550px) {
    width: 100%;
    margin: 10px 0;
  }
  border: none;
  padding: 8px;
  border-radius: 6px;
  width: 250px;
  height: 40px;
`;
export default Section4;
