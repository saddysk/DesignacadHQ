import React from "react";
import styled from "styled-components";
import { BionicTwitterUrl, BuildByStl, SupportUsUrl } from "./Links";
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
          <Link href={BuildByStl} target="_blank">BuildBySTL</Link>. I work on this in my spare time and it will
          keep growing as I grow personally as a designer.
        </Subtext>
        <Subtext>
          If you find it useful you can support me{" "}
          <Link href={SupportUsUrl} target="_blank">buying me a coffee</Link>, and if you have any doubts you can
          reach out to me on <Link href={BionicTwitterUrl} target="_blank">Twitter</Link> anytime.
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


const Link = styled.a`
text-decoration: none;
color: #0a88ff;
`

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
