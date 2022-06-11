import React, { useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { NewsletterUrl, SupportUsUrl, TwitterUrl } from "./Links";

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showMenu, setShowMenu] = React.useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Container>
      {/* <LogoContainer>
        <img src="logo.png" alt="logo" />
      </LogoContainer> */}
      <LogoContainer>
        <Logo>design</Logo>
        <Logo custom="#0a88ff">acad.</Logo>
      </LogoContainer>
      {width > 550 ? (
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
      ) : (
        <IconContainer onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu style={{ fontSize: "24px" }} className="hamburger" />
        </IconContainer>
      )}
      {showMenu && (
        <MenuContainer>
          <CloseContainer onClick={() => setShowMenu(!showMenu)}>
            <IoIosClose
              style={{ fontSize: "40px" }}
              className="closeHamburger"
            />
          </CloseContainer>
          <MenuItem href={TwitterUrl} target="_blank">
            Twitter
          </MenuItem>
          <MenuItem href={NewsletterUrl} target="_blank">
            Newsletter
          </MenuItem>
          <MenuItem href={SupportUsUrl} target="_blank">
            Support Us
          </MenuItem>
        </MenuContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
@media (max-width: 550px) {
  height: 40px;
  width: 95%;
}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  color: #fff;
  height: 65px;
  max-width: 1248px;
  background: black;
  position: fixed;
  top: 0;
`;
const LogoContainer = styled.div`
  display: flex;
`;
const Logo = styled.p`
  @media (max-width: 550px) {
    font-size: 22px;
  }
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  color: ${(props) => props.custom || "#FFFFFF"};
`;
const LinkContainer = styled.div``;
const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin: 0 20px;
`;
const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    .hamburger {
      transition: all 0.3s ease-in-out;
      color: #0a88ff;
    }
  }
`;
const CloseContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 25px;
  :hover {
    .closeHamburger {
      transition: all 0.3s ease-in-out;
      color: #0a88ff;
    }
  }
`;
const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  transform: translateY(0);
  opacity: 1;
  z-index: 1;
`;
const MenuItem = styled.a`
  font-size: 16px;
  line-height: 44px;
  margin: 0 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  text-decoration: none;
  width: 100%;
  text-align: center;
  :hover {
    color: #0a88ff;
  }
`;

export default Header;
