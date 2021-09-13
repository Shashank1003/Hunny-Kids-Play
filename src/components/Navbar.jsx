import React from "react";
import styled from "styled-components";
import logo from "../images/logo.webp";

const NavWrapper = styled.div`
  background-color: #1e272e;
  padding: 0.5rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  padding: 0.5rem 3rem;

  a{
      text-decoration: none;
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  /* border: 1px black solid; */
  width: 15rem;
  padding: 0.5rem;
  color: white;
  /* background-color: black; */
  /* border-radius: 10px; */
  cursor: pointer;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
`;

const SubHeading = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  transition: all 300ms ease-in-out;

  p {
    /* background-color: white; */
    padding: 0.5rem;
    /* padding-bottom: 0.2rem; */
    /* border-bottom: 1px white solid; */
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: white;
      border-radius: 5px;
      font-weight: 500;

      a {
        color: black;
      }
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <a href="#home">
        <Brand>
          <Logo src={logo} alt="logo" />

          <HeadingWrapper>
            <Heading>Hunny Kids</Heading>
            {/* <SubHeading>Play School</SubHeading> */}
          </HeadingWrapper>
        </Brand>
      </a>
      <Buttons>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#activities">Activities</a>
        </p>
        <p>
          <a href="#gallery">Gallery</a>
        </p>
        <p>
          <a href="#contactUs">Contact Us</a>
        </p>
      </Buttons>
    </NavWrapper>
  );
}

export default Navbar;
