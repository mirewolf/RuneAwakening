import React from "react";
import Icon1 from '../../images/svg-deck.svg.svg';
import Icon2 from '../../images/svg-deck.svg.svg';
// import Icon3 from '../../images/svg-deck.svg.svg';
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  // PortfolioH2,
  PortfolioP,
  Column2,
  Img,
  ImgWrap,
} from "./ContactElements";

const Contact = () => ({
  img,}) => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <a href="https://sksmejn.github.io/word-force/"">Legend of Worda</a>
            {/* <PortfolioH2>Pawsperity</PortfolioH2> */}
            <PortfolioP>
              The ancient meanings behind magical words.
            </PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <a href="https://boiling-woodland-69446.herokuapp.com/home">Release the Kringle!</a>
            {/* <PortfolioH2>Busy Parent Scheduler</PortfolioH2> */}
            <PortfolioP>
              The best way to get a kringle in your stomach.
            </PortfolioP>
          </PortfolioCard>

          <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          {/* <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>Project 3</PortfolioH2>
            <PortfolioP>

            </PortfolioP>
          </PortfolioCard> */}
        </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Contact;
