import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchListQuery, LaunchListQueryVariables } from '../generated/LaunchListQuery';
import styled from 'styled-components';
import { H1Title, H2Title } from './shared';
import StarryNight from '../images/starry-night-sky.jpg';
import MarsNight from '../images/mars-starry-sky.jpg';
import HeaderLogo from './HeaderLogo';

const LaunchListContainer = styled.div`
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
`;

const ListHeadingContainer = styled.div`
  width: 50vw;
  z-index: 1;
`;

const ListTitle = styled(H1Title)`
  display: inline-block;
  margin: 20vh 0 0 10vw;
`;

const NextLaunchLink = styled.span`
  margin: 0 0 0 20px;

  font-weight: bold;
  font-style: italic;
  letter-spacing: 1px;
  color: gold;

  opacity: 0.7;
`;

const PastLaunchesListContainer = styled.div`
  width: 50vw;
  height: 100vh;
  margin: 0 2em;
  z-index: 1;

  overflow-y: scroll;

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
`;

const PastLaunchContainer = styled.div`
  margin: 50px 25px;
  background: rgba(40, 40, 60, 0.4);
  box-shadow: 0 0 7px 10px rgba(40, 40, 60, 0.4);
`;

const StyledLink = styled(Link)`
  display: flex;
  width: calc(100% - 20px);
  height: 100%;
  padding: 15px;

  font-size: 0.8rem;
  text-decoration: none;
  color: #fff;
`;

const PastLaunchImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 20px 0 0;
`;

const LaunchImage = styled.img`
  height: 200px;
  width: 200px;

  object-fit: cover;
  object-position: top;

  border: solid 1px rgba(255, 255, 255, 0.05);
`;

const PastLaunchInfoContainer = styled.div``;

const LaunchMissionName = styled(H2Title)`
  font-size: 1.5rem;
`;

const LaunchDate = styled.div`
  font-style: italic;
  letter-spacing: 1px;
  color: #ddd;
`;

const LaunchDetails = styled.p``;

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

interface IDateStringOptions {
  weekday: 'long' | 'short' | 'narrow' | undefined;
  year: 'numeric' | '2-digit' | undefined;
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day: 'numeric' | '2-digit' | undefined;
}

interface ILaunchListProps {}

const LaunchList: React.FunctionComponent<ILaunchListProps> = () => {
  const { data, loading } = useQuery<LaunchListQuery, LaunchListQueryVariables>(LAUNCH_LIST_QUERY, {
    variables: {
      limit: 10
    }
  });

  const formatDate = (date: string) => {
    const options: IDateStringOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  if (loading || !data) return <div>Loading...</div>;

  return (
    <LaunchListContainer>
      <HeaderLogo />
      <ListHeadingContainer>
        <ListTitle>Launch List</ListTitle>
        <NextLaunchLink>Next Upcoming Launch</NextLaunchLink>
      </ListHeadingContainer>
      <PastLaunchesListContainer>
        {data.launchesPast?.map((launch) => (
          <PastLaunchContainer key={launch?.id}>
            <StyledLink to={`/launch-list/${launch?.id}`}>
              {launch?.links?.flickr_images?.length !== 0 && (
                <PastLaunchImageContainer>
                  <LaunchImage src={`${launch?.links?.flickr_images![0]}`} alt={'Launch Image'} />
                </PastLaunchImageContainer>
              )}
              <PastLaunchInfoContainer>
                <LaunchMissionName>{launch?.mission_name || '---'}</LaunchMissionName>
                <LaunchDate>
                  {launch?.launch_date_utc && launch?.launch_site?.site_name_long
                    ? `${formatDate(launch?.launch_date_utc)} @ ${
                        launch?.launch_site?.site_name_long
                      }`
                    : '---'}
                </LaunchDate>
                <LaunchDetails>{launch?.details || '---'}</LaunchDetails>
              </PastLaunchInfoContainer>
            </StyledLink>
          </PastLaunchContainer>
        ))}
      </PastLaunchesListContainer>
    </LaunchListContainer>
  );
};

export default LaunchList;
