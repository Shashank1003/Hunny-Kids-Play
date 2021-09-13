import React from "react";
import styled from "styled-components";
import logo from "../images/logo.webp";

const Wrapper = styled.div`
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: #1e272e;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1rem;
  position: relative;
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Name = styled.p`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
`;

const Copyright = styled.p`
  position: absolute;
  top: 6rem;
  left: 3rem;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Address = styled.div``;

const Contact = styled.div`
  display: flex;
  gap: 1rem;
`;

function Footer() {
  return (
    <Wrapper id="contactUs">
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <Name>Hunny Kids</Name>
        <Copyright>
          <i className="far fa-copyright"></i> 2021 Hunny Kids Play School
        </Copyright>
      </LogoWrapper>
      <Address>
        <b>Address</b>
        <p>Hunny Kids Play School</p>
        <p>Jawahar Colony, Nearby Vivekanand Park</p>
        <p>Bhawani Mandi (Rajasthan)</p>
      </Address>
      <Contact>
        <b>
          <i className="fas fa-phone-alt"></i>
        </b>
        <p>9529080651</p>
      </Contact>
    </Wrapper>
  );
}

export default Footer;
