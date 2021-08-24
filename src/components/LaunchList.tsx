import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LaunchListQuery, LaunchListQueryVariables } from '../generated/LaunchListQuery';
import { formatDate } from '../utils/formatDate';
import HeaderLogo from './HeaderLogo';
import { H1Title, H2Title, H6TitleLink } from './shared';
import breakpoints from '../utils/breakpoints';
import StarryNight from '../images/starry-night-sky.jpg';
import MarsNight from '../images/mars-starry-sky.jpg';

const LaunchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    background-position: -20% 90%;
    background-repeat: no-repeat;
    filter: grayscale(40%);
    opacity: 0.3;
    pointer-events: none;
  }

  ${breakpoints.landscapeTablet} {
    flex-direction: row;
    align-items: unset;
  }
`;

const ListTitleContainer = styled.div`
  width: 100vw;
  padding: 8vh 0 4vh 0;
  text-align: center;

  ${breakpoints.portraitTablet} {
    padding: 10vh 0 5vh 0;
  }

  ${breakpoints.landscapeTablet} {
    width: 45vw;
    padding: 15vh 0 0 5vw;
    box-sizing: border-box;
    z-index: 1;

    text-align: left;
  }

  ${breakpoints.desktop} {
    padding: 15vh 0 0 10vw;
  }
`;

const ListTitle = styled(H1Title)`
  font-size: 3rem;
  line-height: 4rem;

  ${breakpoints.portraitTablet} {
    font-size: 4rem;
    line-height: 5rem;
  }

  ${breakpoints.laptop} {
    display: inline-block;
  }
`;

const NextLaunchLink = styled(H6TitleLink)`
  color: gold;

  opacity: 0.9;

  ${breakpoints.laptop} {
    margin: 0 0 0 20px;
  }
`;

const PastLaunchesListContainer = styled.div`
  width: 100vw;
  z-index: 1;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  &:before {
    content: '';
    position: absolute;

    display: block;
    width: 100vw;
    height: 20px;

    background: linear-gradient(0, transparent, black);
    overflow: hidden;
  }

  > div:first-child {
    margin-top: 20px;
  }

  ${breakpoints.landscapeTablet} {
    width: 55vw;
    height: 100vh;
    margin: 0 1vw 0 0;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-button {
      display: block;
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

    &:before {
      content: none;
    }
  }

  ${breakpoints.laptop} {
    margin: 0 2vw 0 0;
  }
`;

const PastLaunchContainer = styled.div`
  margin: 35px 20px;

  background: rgba(40, 40, 60, 0.3);
  box-shadow: 0 0 7px 10px rgba(40, 40, 60, 0.3);

  ${breakpoints.laptop} {
    margin: 40px 25px;
  }
`;

const LaunchBoxLink = styled(Link)`
  display: flex;
  padding: 8px;

  font-size: 0.8rem;
  text-decoration: none;
  color: #fff;

  ${breakpoints.landscapeTablet} {
    width: calc(100% - 10px);
    padding: 5px;
  }

  ${breakpoints.laptop} {
    width: calc(100% - 20px);
    padding: 15px;
    font-size: 0.8rem;
  }
`;

const LaunchImageContainer = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 15px 0 0;

  ${breakpoints.portraitTablet} {
    margin: 0 20px 0 0;
    width: 165px;
    height: 165px;
  }

  ${breakpoints.desktop} {
    width: 200px;
    height: 200px;
  }
`;

const LaunchImage = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  object-position: top;

  border: solid 1px rgba(255, 255, 255, 0.05);

  ${breakpoints.portraitTablet} {
    width: 165px;
    height: 165px;
  }

  ${breakpoints.desktop} {
    width: 200px;
    height: 200px;
  }
`;

const LaunchMissionName = styled(H2Title)`
  font-size: 1.4rem;
  line-height: 1.5;

  ${breakpoints.portraitTablet} {
    font-size: 1.8rem;
  }

  ${breakpoints.landscapeTablet} {
    font-size: 1.2rem;
  }

  ${breakpoints.laptop} {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;

const LaunchDate = styled.div`
  font-style: italic;
  letter-spacing: 1px;
  color: #ddd;
`;

const LaunchDetails = styled.p`
  display: -webkit-box;

  margin-bottom: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${breakpoints.portraitTablet} {
    -webkit-line-clamp: 3;
  }

  ${breakpoints.landscapeTablet} {
    -webkit-line-clamp: 4;
  }
`;

const LAUNCH_LIST_QUERY = gql`
  query LaunchListQuery($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
      }
      details
      links {
        flickr_images
      }
    }
  }
`;

interface ILaunchListProps {}

const LaunchList: React.FunctionComponent<ILaunchListProps> = () => {
  const { data, loading } = useQuery<LaunchListQuery, LaunchListQueryVariables>(LAUNCH_LIST_QUERY, {
    variables: {
      limit: 15
    }
  });

  if (loading || !data) return <div>Loading...</div>;

  return (
    <LaunchListContainer>
      <HeaderLogo />
      <ListTitleContainer>
        <ListTitle>Launch List</ListTitle>
        <NextLaunchLink to={`/launch-list/110`}>Next Launch</NextLaunchLink>
      </ListTitleContainer>
      <PastLaunchesListContainer>
        {data.launchesPast?.map((launch) => (
          <PastLaunchContainer key={launch?.id}>
            <LaunchBoxLink to={`/launch-list/${launch?.id}`}>
              {launch?.links?.flickr_images?.length !== 0 && (
                <LaunchImageContainer>
                  <LaunchImage src={`${launch?.links?.flickr_images![0]}`} alt={'Launch Image'} />
                </LaunchImageContainer>
              )}
              <div>
                <LaunchMissionName>{launch?.mission_name || '---'}</LaunchMissionName>
                <LaunchDate>
                  {launch?.launch_date_utc && launch?.launch_site?.site_name_long
                    ? `${formatDate(launch?.launch_date_utc)} @ ${
                        launch?.launch_site?.site_name_long
                      }`
                    : '---'}
                </LaunchDate>
                <LaunchDetails>{launch?.details || '---'}</LaunchDetails>
              </div>
            </LaunchBoxLink>
          </PastLaunchContainer>
        ))}
      </PastLaunchesListContainer>
    </LaunchListContainer>
  );
};

export default LaunchList;
