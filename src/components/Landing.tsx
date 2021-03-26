import * as React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { H1Title } from './shared';
import { SVGArrowRight } from './icons';
import breakpoints from '../utils/breakpoints';
import StarryNight from '../images/starry-night-sky.jpg';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  color: #fff;
  background-color: #000;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    background-image: url(${StarryNight});
    opacity: 0.5;
    pointer-events: none;
  }

  ${breakpoints.landscapeTablet} {
    flex-direction: row;
  }
`;

const LandingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 45vh;

  ${breakpoints.landscapeTablet} {
    height: 100vh;
    width: 45vw;
  }
`;

const IntroBackground = styled.div`
  align-self: center;
  position: absolute;
  top: 0;
  z-index: 3;

  height: fit-content;
  margin: 7vw;
  padding: 2vw 5vw 5vw 5vw;

  background: rgba(20, 20, 30, 0.75);

  ${breakpoints.portraitPhone} {
    box-sizing: border-box;
    width: 86vw;
  }

  ${breakpoints.portraitTablet} {
    width: 90vw;
    margin: 5vw;
    padding-top: 1vw;
  }

  ${breakpoints.landscapeTablet} {
    display: flex;
    flex-direction: column;
    width: 41vw;
    height: 92vh;
    margin: 4vh 0 4vh 4vh;
    padding: 1vw 3vw 3vw 3vw;
  }

  ${breakpoints.laptop} {
    top: unset;
    width: 35vw;
    max-width: 650px;
    height: fit-content;
    margin: 0;
    padding: 20px 45px 45px 45px;
  }
`;

const LandingTitle = styled(H1Title)`
  margin: 0 0 10px 0;

  font-size: 1.5rem;
  text-align: center;

  ${breakpoints.portraitPhone} {
    font-size: 2.5rem;
  }

  ${breakpoints.portraitTablet} {
    font-size: 4.5rem;
  }

  ${breakpoints.landscapeTablet} {
    margin: 0;
    font-size: 4rem;
    line-height: 1.4;
  }

  ${breakpoints.laptop} {
    margin: 0 0 5px 0;
    text-align: left;
  }
`;

const XSpan = styled.span`
  font-size: 2rem;

  ${breakpoints.portraitPhone} {
    font-size: 3.2rem;
  }

  ${breakpoints.portraitTablet} {
    font-size: 5.7rem;
  }

  ${breakpoints.landscapeTablet} {
    font-size: 5rem;
  }

  @media (min-width: 1460px) {
    margin-right: 125px;
  }

  @media (min-width: 1810px) {
    margin-right: 0;
  }
`;

const LandingIntroParagraph = styled.p`
  margin: 10px 0 0 0;
  font-size: 12px;

  ${breakpoints.portraitPhone} {
    margin: 10px 0 15px 0;
    font-size: 14px;
  }

  ${breakpoints.portraitTablet} {
    font-size: 18px;
  }

  ${breakpoints.landscapeTablet} {
    margin: 20px 0 0 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 5px 15px;

  font-family: FjallaOne;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #111;

  background: gold;
  border: solid 1px orange;
  border-radius: 7px;

  ${breakpoints.portraitPhone} {
    margin-top: 25px;
    padding: 10px 25px;

    font-size: 1.5rem;
  }

  ${breakpoints.portraitTablet} {
    margin-top: 35px;
    font-size: 2rem;
  }

  ${breakpoints.landscapeTablet} {
    margin-top: auto;
    padding: 20px 25px;
  }

  ${breakpoints.laptop} {
    width: 22vw;
    max-width: 100%;
    margin: 50px 0 0 0;
    padding: 20px 35px;

    font-size: 1.8rem;
  }
`;

const StyledSVGArrowRight = styled(SVGArrowRight)`
  width: 35px;
  height: auto;
  margin: 0 0 0 1rem;
`;

const LandingImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 200vw;
  height: 55vh;

  > div {
    position: relative;
    left: -50%;
    height: 0;
    padding: 25% 0 56.25% 0;
  }

  ${breakpoints.landscapeTablet} {
    width: 50vw;
    height: 100vh;

    > div {
      left: -180%;
    }
  }
`;

const StyledYouTube = styled(YouTube)`
  position: absolute;
  bottom: 0;
  left: -60%;
  width: 300vw;
  height: 66vh;

  opacity: 0.9;

  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
  mask-size: 100%;
  mask-repeat: no-repeat;

  ${breakpoints.landscapeTablet} {
    height: 100vh;
    width: 240vw;

    -webkit-mask-image: linear-gradient(to right, transparent 25%, black 40%);
    mask-image: linear-gradient(to right, transparent 25%, black 40%);
  }

  ${breakpoints.laptop} {
    -webkit-mask-image: linear-gradient(to right, transparent 32%, black 40%);
    mask-image: linear-gradient(to right, transparent 32%, black 40%);
  }
`;

interface ILandingProps {}

interface IPlayerVars {
  autoplay: 0 | 1 | undefined;
  controls: 0 | 1 | 2 | undefined;
  end: number;
  loop: 0 | 1 | undefined;
  rel: 0 | 1 | undefined;
  showinfo: 0 | 1 | undefined;
  start: number;
}

interface IVideoOptions {
  height: string;
  width: string;
  playerVars: IPlayerVars;
}

const Landing: React.FunctionComponent<ILandingProps> = () => {
  const videoId = 'J442-ti-Dhg';
  const videoOptions: IVideoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      end: 917,
      loop: 1,
      rel: 0,
      showinfo: 0,
      start: 888
    }
  };

  const onVideoReady = (event: any) => {
    event.target.playVideo();
  };

  const onVideoEnd = (event: any) => {
    event.target.loadVideoById({
      videoId: videoId,
      startSeconds: videoOptions.playerVars.start,
      endSeconds: videoOptions.playerVars.end
    });
  };

  return (
    <LandingContainer>
      <LandingHeadingContainer>
        <IntroBackground>
          <LandingTitle>
            SPACE<XSpan>X</XSpan> LAUNCH PAD
          </LandingTitle>
          <LandingIntroParagraph>
            Welcome to SpaceX Launch Pad. This site uses the official SpaceX API to display data
            about SpaceX spaceships, rockets and launches.
          </LandingIntroParagraph>
          <LandingIntroParagraph>
            Enjoy the details of modern day space exploration!
          </LandingIntroParagraph>
          <StyledLink to='/launch-list'>
            <span>Launch List</span>
            <StyledSVGArrowRight />
          </StyledLink>
        </IntroBackground>
      </LandingHeadingContainer>
      <LandingImageContainer>
        <StyledYouTube
          videoId={videoId}
          opts={videoOptions}
          onReady={onVideoReady}
          onEnd={onVideoEnd}
        />
      </LandingImageContainer>
    </LandingContainer>
  );
};

export default Landing;
