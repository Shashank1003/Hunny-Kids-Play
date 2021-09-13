import React from "react";
import styled from "styled-components";
import classroom from "../images/tree.jpg";

const Container = styled.div`
  background-image: url(${classroom});
  width: 100vw;
  height: 90vh;
  background-repeat: no-repeat;
  background-size: 100vw 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-color: rgba(30, 39, 46, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  width: 80rem;
  text-align: center;
  border-radius: 20px;
`;

const BigText = styled.p`
  font-weight: 700;
  font-size: 3rem;
`;

const SmallText = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  color: #ff5e57;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 1.3rem;

  span {
    color: rgb(255, 168, 1);
  }
`;

const Contact = styled.button`
  background-color: transparent;
  padding: 1rem;
  color: black;
  border-radius: 10px;
  margin-top: 3rem;
  width: 8rem;
  font-weight: 700;
  border: none;
  background-color: #ff5e57;
  /* color: white; */
  font-size: 1rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  a {
      text-decoration: none;
      color: black;
  }

  &:hover {
    background-color: rgb(255, 168, 1);
  }
`;

function HomePage() {
  return (
    <Container id="home">
      <ContentWrapper>
        <BigText>Explore Hunny Kids Play School</BigText>
        <SmallText>#LetsLearnTogether</SmallText>
        <Description>
          At <span>HUNNY KIDS PLAY SCHOOL</span>, we’re proud to offer a unique
          educational experience designed to enhance intellectual growth and
          promote participatory engagement. Take a look through our site to
          learn more about us
        </Description>
        <Contact>
          <a href="#contactUs">Contact Us</a>
        </Contact>
      </ContentWrapper>
    </Container>
  );
}

export default HomePage;
