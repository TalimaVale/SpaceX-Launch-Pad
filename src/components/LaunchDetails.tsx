import React, { useState, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { LaunchDetailsQuery, LaunchDetailsQueryVariables } from '../generated/LaunchDetailsQuery';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import { H2Title, H3Title, H5Title, H6Title } from './shared';
import breakpoints from '../utils/breakpoints';
import { SVGArrowLeft } from './icons';
import { formatDate } from '../utils/formatDate';
import StarryNight from '../images/starry-night-sky.jpg';
import MarsNight from '../images/mars-starry-sky.jpg';

const LaunchDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4px;
    
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
    background-size: contain;
    background-repeat: repeat;
    opacity: 0.1;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    
    background-image: url(${MarsNight});
    background-size: 50%;
    background-position: -25% 95%;
    background-repeat: no-repeat;
    filter: grayscale(40%);
    opacity: 0.3;
    pointer-events: none;
  }

  ${breakpoints.landscapeTablet} {
    align-items: start;
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  z-index: 1;

  ${breakpoints.landscapeTablet} {
    flex-direction: row;
  }
`;
    
const CarouselContainer = styled.div`
  width: 100vw;
  height: 50vh;

  background: rgba(40, 40, 60, 0.3);
  box-shadow: 0 0 7px 10px rgb(40 40 60 / 30%);

  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%);
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%);
  mask-size: 100%;
  mask-repeat: no-repeat;
  
  ${breakpoints.landscapeTablet}{
    width: 50vw;
    height: 100vh;

    -webkit-mask-image: none;
    mask-image: none;
  }
`;

const StyledCarousel = styled(Carousel)`
  height: 100%;

  > div.carousel {
    max-height: 100%;

    > ul.control-dots {
      bottom: 1.5rem;
    }

    > div > ul {
      height: 50vh;
      align-items: center;

      ${breakpoints.landscapeTablet} { height: 100vh; }

      > li {
        max-height: 100%;
        padding: 0 1px;
      }
    }
  }
`;

const NoImagesCont = styled.div`
  position: relative;
  top: 25vh;

  text-align: center;

  ${breakpoints.landscapeTablet} {
    top: 50vh;

    transform: translateY(-50%);
  }
`;

const LaunchImage = styled.img`
  max-width: 100%;
  max-height: 50vh;

  object-fit: contain;

  ${breakpoints.landscapeTablet} {
    max-height: 100vh;
  }
`;

const LaunchInfoContainer = styled.div`
  width: 100vw;
  height: 50vh;
  
  ${breakpoints.landscapeTablet}{
    width: 42vw;
    padding: 0 4vw;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  width: 2rem;
  padding: .3rem 1.2rem 0;

  text-decoration: none;

  ${breakpoints.landscapeTablet} {
    height: 10vh;
    width: 10rem;
    padding: 0;
    margin: 5vh 0 4vh 0;
  }
`;

const StyledSVGArrowLeft = styled(SVGArrowLeft)`
  width: 40px;
  height: auto;

  color: #fff;

  ${breakpoints.landscapeTablet} {
    width: 75px;
  }
`;

const BackArrowText = styled(H6Title)`
  display: none;
  padding: 3px 0 0 1rem;

  color: #fff;

  ${breakpoints.landscapeTablet} {
    display: block;
  }
`;

const ScrollableRocketInfo = styled.div`
  height: 40vh;
  width: 90vw;
  margin: 1rem auto;
  padding: 5px 10px;
  z-index: 1;

  font-size: 0.9rem;

  border: 1px solid;
  border-image: linear-gradient(to top, rgba(255, 255, 255, 0.2), 40%, transparent) 30;
  box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.1);

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
  }

  ${breakpoints.landscapePhone} {
    > p {
      margin: 1.2rem 0;
    }
  }
  
  ${breakpoints.portraitTablet} {
    > p {
      margin: 1.8rem 0;
    }
  }
  
  ${breakpoints.landscapeTablet} {
    width: unset;
    height: 70vh;
    margin: 1rem;
    padding: 2vh 2.5vh;

    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), 40%, transparent) 30;
    box-shadow: -12px 0 20px -10px rgba(255, 255, 255, 0.1);

    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    
    &::-webkit-scrollbar-button {
      display: block;
    }
    
    > p {
      margin: 1rem 0;
    }
  }
`;

const StyledH2Title = styled(H2Title)`
  text-align: center;

  ${breakpoints.landscapeTablet} {
    text-align: left;
  }
`;

const LaunchDate = styled.div`
  font-style: italic;
  letter-spacing: 1px;
  text-align: center;
  color: #ddd;

  ${breakpoints.landscapeTablet} {
    text-align: left;
  }
`;

const RocketMainInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 0 0 0;

  ${breakpoints.landscapeTablet} {
    margin: 3rem 0 0 0;
  }
`;

const StyledH5Title = styled(H5Title)`
  display: inline;
`;

const RocketNameCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const RocketTypeCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const RocketDescCont = styled.div`
  margin: 0.5rem 0 1.5rem 0;
`;

const RocketEngineInfo = styled.div``;

const EngineTypeAndNumCont = styled.div``;

const EngineTypeCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const EngineNumCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const EnginePropellantCont = styled.div``;

const RocketStageInfo = styled.div`
  margin: 1.5rem 0 0 0;
`;

const StageBurnTimeCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const StageReusableCont = styled.div`
  display: inline-block;
  width: 50%;
`;

const LAUNCH_DETAILS_QUERY = gql`
  query LaunchDetailsQuery($id: ID!) {
    launch(id: $id) {
      id
      links {
        flickr_images
        mission_patch_small
        video_link
      }
      mission_name
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          description
          engines {
            type
            number
            propellant_1
            propellant_2
          }
          first_stage {
            burn_time_sec
            engines
            reusable
          }
          second_stage {
            burn_time_sec
            engines
          }
        }
      }
      ships {
        name
        home_port
      }
    }
  }
`;

interface ILaunchDetailsProps {}

const LaunchDetails: React.FunctionComponent<ILaunchDetailsProps> = () => {
  const { launchId } = useParams<{ launchId: string }>();
  const { data, loading } = useQuery<LaunchDetailsQuery, LaunchDetailsQueryVariables>(
    LAUNCH_DETAILS_QUERY,
    {
      variables: { id: launchId }
    }
  );

  const [viewportSize, setViewportSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setViewportSize([
        Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      ]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [vw] = viewportSize;

  if (loading || !data) return <div>Loading...</div>;

  return (
    <LaunchDetailsContainer>
      <HeaderLogo />
      <DetailsContainer>
        <CarouselContainer>
          {data?.launch?.links?.flickr_images?.length !== 0 ? (
            <StyledCarousel autoPlay={true} infiniteLoop={true} showStatus={false}>
              {data?.launch?.links?.flickr_images?.map((image, idx) => (
                <LaunchImage key={idx} alt={'Spaceship Launch'} src={image || undefined} />
              ))}
            </StyledCarousel>
          ) : (
            <NoImagesCont>- No Images -</NoImagesCont>
          )}
        </CarouselContainer>
        <LaunchInfoContainer>
          <StyledLink to='/launch-list'>
            <StyledSVGArrowLeft />
            <BackArrowText>BACK</BackArrowText>
          </StyledLink>
          <ScrollableRocketInfo>
            <StyledH2Title>{data?.launch?.mission_name}</StyledH2Title>
            <LaunchDate>
              {data?.launch?.launch_date_utc && data?.launch?.launch_site?.site_name_long
                ? vw >= 568
                  ? `${formatDate(data?.launch?.launch_date_utc)} @ ${
                      data?.launch?.launch_site?.site_name_long
                    }`
                  : `${formatDate(data?.launch?.launch_date_utc)}`
                : '---'}
            </LaunchDate>
            <p>{data?.launch?.details}</p>
            <RocketMainInfo>
              <H3Title>Rocket</H3Title>
              <div>
                <RocketNameCont>
                  Name: <StyledH5Title>{data?.launch?.rocket?.rocket_name}</StyledH5Title>
                </RocketNameCont>
                <RocketTypeCont>
                  Type: <StyledH5Title>{data?.launch?.rocket?.rocket_type}</StyledH5Title>
                </RocketTypeCont>
              </div>
              <RocketDescCont>{data?.launch?.rocket?.rocket?.description}</RocketDescCont>
            </RocketMainInfo>
            <RocketEngineInfo>
              <StyledH5Title>Engines</StyledH5Title>
              <EngineTypeAndNumCont>
                <EngineNumCont>
                  Number:{' '}
                  <StyledH5Title>{data?.launch?.rocket?.rocket?.engines?.number}</StyledH5Title>
                </EngineNumCont>
                <EngineTypeCont>
                  Type: <StyledH5Title>{data?.launch?.rocket?.rocket?.engines?.type}</StyledH5Title>
                </EngineTypeCont>
              </EngineTypeAndNumCont>
              <EnginePropellantCont>
                Propellants:{' '}
                <StyledH5Title>{data?.launch?.rocket?.rocket?.engines?.propellant_1}</StyledH5Title>{' '}
                and{' '}
                <StyledH5Title>{data?.launch?.rocket?.rocket?.engines?.propellant_2}</StyledH5Title>
              </EnginePropellantCont>
            </RocketEngineInfo>
            <RocketStageInfo>
              <StyledH5Title>First Stage</StyledH5Title>
              <div>
                <StageBurnTimeCont>
                  Burn Time:{' '}
                  <StyledH5Title>
                    {data?.launch?.rocket?.rocket?.first_stage?.burn_time_sec}
                  </StyledH5Title>
                </StageBurnTimeCont>
                <StageReusableCont>
                  Reusable:{' '}
                  <StyledH5Title>
                    {data?.launch?.rocket?.rocket?.first_stage?.reusable ? 'true' : 'false'}
                  </StyledH5Title>
                </StageReusableCont>
              </div>
            </RocketStageInfo>

            <RocketStageInfo>
              <H5Title>Second Stage</H5Title>
              <StageBurnTimeCont>
                Burn Time:{' '}
                <StyledH5Title>
                  {data?.launch?.rocket?.rocket?.second_stage?.burn_time_sec}
                </StyledH5Title>
              </StageBurnTimeCont>
            </RocketStageInfo>
          </ScrollableRocketInfo>
        </LaunchInfoContainer>
      </DetailsContainer>
    </LaunchDetailsContainer>
  );
};

export default LaunchDetails;

// rocket {
//   rocket_name
//   rocket_type
//   rocket {
//     description
//     engines {
//       type
//       number
//       propellant_1
//       propellant_2
//     }
//     first_stage {
//       burn_time_sec
//       engines
//       reusable
//     }
//     second_stage {
//       burn_time_sec
//       engines
//     }
//   }
// }
// ships {
//   name
//   home_port
// }
