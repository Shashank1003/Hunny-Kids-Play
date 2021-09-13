import React from "react";
import styled from "styled-components";
import image1 from "../images/1.jfif";
import image2 from "../images/2.jfif";
import image3 from "../images/3.jfif";
import image4 from "../images/4.jfif";
import image5 from "../images/5.jfif";
import image7 from "../images/7.jfif";
import image8 from "../images/8.jfif";
import image9 from "../images/9.jfif";
import image11 from "../images/11.jfif";
import image13 from "../images/13.jfif";
import image14 from "../images/14.jfif";
import image15 from "../images/15.jfif";
import image18 from "../images/18.jfif";
import image21 from "../images/21.jfif";
import image22 from "../images/22.jfif";
import image24 from "../images/24.jfif";
import image25 from "../images/25.jfif";
import image27 from "../images/27.jfif";
import image28 from "../images/28.jfif";
import image30 from "../images/30.webp";

const Container = styled.div`
  background-color: white;
  margin: 5rem 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 5rem;
  padding-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
`;
const Wrap = styled.div`
  background-image: linear-gradient(45deg, rgb(34, 47, 62), rgb(30, 39, 46));
  padding-top: 2rem;
  border-radius: 20px;
  width: 70rem;
  margin-right: auto;
  margin-left: auto;
`;

const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(9, 1fr);
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  padding: 2rem;
  width: 60rem;
  height: 92rem;
  margin-right: auto;
  margin-left: auto;
`;

const Image = styled.img`
  /* width: 22rem;
  height: 22rem; */
  width: 100%;
  height: 100%;
  border-radius: 20px;

  &.img1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &.img6 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  &.img7 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 7;
  }

  &.img12 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 9;
  }
`;

function Gallery() {
  return (
    <Container id="gallery">
      <Heading>Our Gallery</Heading>
      <Wrap>
        <PhotosContainer>
          <Image src={image2} alt="photo" className="img1" />
          <Image src={image1} alt="photo" className="img2" />
          {/* <Image src={image6} alt="photo" className="img3" /> */}
          <Image src={image4} alt="photo" className="img4" />
          <Image src={image5} alt="photo" className="img5" />
          <Image src={image3} alt="photo" className="img6" />
          <Image src={image30} alt="photo" className="img7" />
          <Image src={image8} alt="photo" className="img8" />
          <Image src={image9} alt="photo" className="img9" />
          <Image src={image7} alt="photo" className="img10" />
          <Image src={image13} alt="photo" className="img11" />
          <Image src={image14} alt="photo" className="img12" />
          <Image src={image15} alt="photo" className="img13" />
          {/* <Image src={image29} alt="photo" className="img14" /> */}
          <Image src={image21} alt="photo" className="img15" />
          <Image src={image22} alt="photo" className="img16" />
          <Image src={image24} alt="photo" className="img17" />
          <Image src={image25} alt="photo" className="img18" />
          <Image src={image27} alt="photo" className="img19" />
          <Image src={image28} alt="photo" className="img20" />
          <Image src={image18} alt="photo" className="img21" />
          <Image src={image11} alt="photo" className="img22" />
        </PhotosContainer>
      </Wrap>
    </Container>
  );
}

export default Gallery;
