import React, { useEffect } from "react";
import styled from "styled-components";

const Hero = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <ContentContainer>
        <HeroText>
          start your ux design
          <br /> journey now,
          <br />
          <span>with clarity for free</span>
        </HeroText>
        <HeroSubText>
          Don’t get overwhelemed by abundance of content available on the
          internet, start with our top notch curated UX Design curriculum and
          take a step forward towards your journey.
        </HeroSubText>
        {/* <SubscrptionForm>
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Submit</Button>
          {width > 995 && (
            <Subtext>
              Subcribe to get weekly updates, design <br /> assignments &
              freebies.
            </Subtext>
          )}
        </SubscrptionForm> */}

        <SubscrptionForm
          action="https://www.getrevue.co/profile/designacadhq/add_subscriber"
          method="post"
          name="revue-form"
          target="_blank"
        >
          <Input
            class="revue-form-field"
            placeholder="Your email address..."
            type="email"
            name="member[email]"
          />
          <Button
            type="submit"
            name="member[subscribe]"
            style={{ cursor: "pointer" }}
          >
            Submit
          </Button>
          {width > 995 && (
            <Subtext>
              Subcribe to get weekly updates, design <br /> assignments &
              freebies.
            </Subtext>
          )}
        </SubscrptionForm>

        {width < 995 && (
          <Subtext>
            Subcribe to get weekly updates, design assignments & freebies.
          </Subtext>
        )}
        {/* <ImageContainer>
          <img
            src="producthunt.png"
            alt="producthunt"
            width={250}
            style={{ margin: "20px 0" }}
          />
        </ImageContainer> */}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 550px) {
    background-image: none;
    min-height: 500px;
  }
  width: 100%;
  min-height: 766px;
  margin-top: 65px;
  background-image: url("hero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;

const ContentContainer = styled.div`
  @media (max-width: 550px) {
    max-width: 100%;
  }
  padding: 80px 0;
  max-width: 80%;
`;
const HeroText = styled.h1`
  @media (max-width: 1248px) {
    font-size: 64px;
    line-height: 64px;
  }
  @media (max-width: 996px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
    line-height: 40px;
  }
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  span {
    color: #0a88ff;
  }
`;
const ImageContainer = styled.div`
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const HeroSubText = styled.h2`
  @media (max-width: 1248px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 996px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 24px;
  }
  margin: 20px 0;
  max-width: 450px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  /* grey_body */

  color: #a9a9a9;
`;
const SubscrptionForm = styled.form`
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
  display: flex;
  margin-bottom: 24px;
`;
const Subtext = styled.p`
  @media (max-width: 550px) {
    width: 100%;
  }
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */

  /* grey_body */

  color: #a9a9a9;
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
`;
const Input = styled.input`
  @media (max-width: 550px) {
    max-width: 100%;
  }
  border: none;
  padding: 8px;
  border-radius: 6px;
  max-width: 250px;
  height: 40px;
`;
export default Hero;
