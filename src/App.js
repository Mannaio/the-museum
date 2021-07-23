import React, { useEffect, useState } from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
import CardsHolder from "../src/components/CardsHolder";
import CardMedia from "../src/components/CardMedia";
import Carousel from "../src/components/Carousel";
import Footer from "../src/components/Footer";
import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 100px;
  line-height: 0;
  @media only screen and (min-width: 992px) {
    margin-top: 150px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 25px;
  line-height: 1;
`;

const TitleExpanded = styled.h1`
  font-size: 48px;
  line-height: 1;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`;

const HeaderTitle = styled.h1`
  font-size: 78px;
  line-height: 1;
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
`;

const DescriptionText = styled.span`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  @media only screen and (min-width: 992px) {
    font-size: 31px;
  }
`;

const DescriptionExpandedText = styled.span`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  @media only screen and (min-width: 992px) {
    width: 68%;
    line-height: 1.5;
  }
`;

const Titles = () => {
  return (
    <TitleWrapper>
      <HeaderTitle>Archivio</HeaderTitle>
      <HeaderTitle>Storico</HeaderTitle>
    </TitleWrapper>
  )
}

const Description = () => {
  return (
    <DescriptionWrapper>
      <DescriptionText>Una raccolta di tutti i momenti più importanti</DescriptionText>
      <DescriptionText>nella storia del museo e dei suoi curatori.</DescriptionText>
    </DescriptionWrapper>
  )
}

function App() {

  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenSection, setOpenSection] = useState(false);

  const handleOpenSection = () => {
    setOpenSection(true);
  }

  const handleCloseSection = () => {
    setOpenSection(false);
  }

  const Descriptionexpanded = () => {
    return (
      <DescriptionWrapper>
        <div className="expanded__title">
          <TitleExpanded>GALLERY 01</TitleExpanded>
          <AiOutlineClose style={{ cursor: 'pointer' }} onClick={handleCloseSection} size="42" color="white" />
        </div>
        <DescriptionExpandedText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sit etiam id blandit elementum lectus mauris ut cursus adipiscing.
          Egestas nam mattis adipiscing velit fermentum et.
        </DescriptionExpandedText>

      </DescriptionWrapper>
    )
  }

  useEffect(() => {
    (async () => {
      let imageData;
      try {
        const response = await fetch("https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets");
        imageData = await response.json();
      } catch (error) {
        console.log(error);
        imageData = [];
      }
      setAssets(imageData);
      setIsLoading(false);
    })();
  }, []);

  const sectionexpanded = () => (
    <div>
      <div className="expanded">
        <Descriptionexpanded />
      </div>
      <Carousel />
    </div>
  )

  return (
    <div className="App">
      <header className="App__header">
        <Navbar />
        <Titles />
        <Description />
      </header>
      <section className="App__main">
        <CardsHolder />
        <div className="container">
          <CSSTransition
            in={isOpenSection}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            {sectionexpanded()}
          </CSSTransition>
          {isLoading ? (<div>Loading....</div>) : (
            assets.map((asset, index) => (
              <div key={index} className="column-1">
                <CardMedia
                  key={asset}
                  imageData={asset}
                  handleClickOpen={handleOpenSection}
                />
              </div>
            ))
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
