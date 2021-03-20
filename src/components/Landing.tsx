import * as React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import StarryNight from '../images/starry-night-sky.jpg';

const LandingContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  color: #fff;
  background-color: #000;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    background-image: url(${StarryNight});
    opacity: 0.5;
  }
`;

const LandingIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
`;

const IntroBackground = styled.div`
  align-self: center;
  z-index: 3;

  width: 30vw;
  min-width: 300px;
  height: fit-content;
  padding: 50px;

  background: rgba(20, 20, 30, 0.75);
`;

const LandingTitle = styled.h1`
  margin: 0 0 30px 0;

  font-size: 4rem;
`;

const XSpan = styled.span`
  font-size: 5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: fit-content;
  min-width: 50%;
  margin: 50px 0 20px 0;
  padding: 20px 35px;

  font-family: FjallaOne;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: #111;

  background: gold;
  border: solid 1px orange;
  border-radius: 7px;
`;

const SVGArrowRight = styled.svg``;

const LandingImageContainer = styled.div`
  width: 50vw;
  height: 100vh;

  > div {
    position: relative;
    padding: 25% 0 56.25% 0;
    height: 0;
  }
`;

const StyledYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: -100%;
  width: 150vh;
  min-width: 150vw;
  height: 100vh;
  opacity: 0.9;

  -webkit-mask-image: linear-gradient(to right, transparent 25%, black 40%);
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-image: linear-gradient(to right, transparent 25%, black 40%);
  mask-size: 100%;
  mask-repeat: no-repeat;
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

const Landing: React.FunctionComponent<ILandingProps> = (props) => {
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
    // access to player in all event handlers via event.target
    // event.target.mute();
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
      <LandingIntroContainer>
        <IntroBackground>
          <LandingTitle>
            SPACE<XSpan>X</XSpan> LAUNCH PAD
          </LandingTitle>
          <p>
            Welcome to SpaceX Launch Pad. This site uses the official SpaceX API to display data
            about SpaceX spaceships, rockets and launches.
          </p>
          <p>Enjoy the details of modern day space exploration!</p>
          <StyledLink to='/launch-list'>
            <span>LAUNCH LIST</span>
            <SVGArrowRight className='fas fa-long-arrow-alt-right'></SVGArrowRight>
          </StyledLink>
        </IntroBackground>
      </LandingIntroContainer>
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
