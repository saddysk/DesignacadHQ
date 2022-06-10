import React from "react";
import styled from "styled-components";
import { NewsletterUrl, SupportUsUrl, TwitterUrl } from "./Links";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src="logo.png" alt="logo" />
      </LogoContainer>

      <LinkContainer>
        <Link href={TwitterUrl} target="_blank">
          Twitter
        </Link>
        <Link href={NewsletterUrl} target="_blank">
          Newsletter
        </Link>
        <Link href={SupportUsUrl} target="_blank">
          Support Us
        </Link>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
const LogoContainer = styled.div``;
const LinkContainer = styled.div`
  @media (max-width: 550px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-right: 20px;
`;

export default Footer;
