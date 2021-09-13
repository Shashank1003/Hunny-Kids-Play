import React from "react";
import styled from "styled-components";
import clipart from "../images/playlearn.jpg";

const Wrapper = styled.div`
  margin-top: 12rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: 12rem;
  margin-right: 2rem;
  margin-left: 2rem;
  border-radius: 20px;
`;

const Heading = styled.h2`
  background-image: linear-gradient(45deg, rgb(255, 168, 1), rgb(255, 63, 52));
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 4rem;
  width: 28rem;
  margin-bottom: 2rem;
`;

const WriteUp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  margin-right: 10rem;
  width: 35rem;
  height: 25rem;
`;

const AllActivities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 500;
  background-image: linear-gradient(45deg, rgb(76, 209, 55), rgb(0, 168, 255));
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

function Activities() {
  return (
    <Wrapper id="activities">
      <Heading>Our Activities</Heading>
      <WriteUp>
        <Image src={clipart} alt="clip art" />
        <AllActivities>
          <Activity>
            <p>
              <i className="fas fa-hand-point-right"></i>
            </p>

            <p>Students fun-day</p>
          </Activity>

          <Activity>
            <p>
              <i className="fas fa-hand-point-right"></i>
            </p>
            <p>Family fun-day</p>
          </Activity>

          <Activity>
            <p>
              <i className="fas fa-hand-point-right"></i>
            </p>

            <p>Open house</p>
          </Activity>

          <Activity>
            <p>
              <i className="fas fa-hand-point-right"></i>
            </p>

            <p>School festivals</p>
          </Activity>
        </AllActivities>
      </WriteUp>
    </Wrapper>
  );
}

export default Activities;
