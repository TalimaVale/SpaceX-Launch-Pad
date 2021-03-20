import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchListQuery, LaunchListQueryVariables } from '../generated/LaunchListQuery';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100vw;
  text-decoration: none;
  color: #000;
`;

const PastLaunchContainer = styled.div`
  padding: 10px;
  border: solid 2px #000;
`;

const NextLaunchHeading = styled.h3`
  font-style: italic;
`;

const LAUNCH_LIST_QUERY = gql`
  query LaunchListQuery($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      links {
        mission_patch_small
        video_link
        flickr_images
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

interface ILaunchListProps {}

const LaunchList: React.FunctionComponent<ILaunchListProps> = () => {
  const { data, loading } = useQuery<LaunchListQuery, LaunchListQueryVariables>(LAUNCH_LIST_QUERY, {
    variables: {
      limit: 10
    }
  });

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Launch List</h1>
      <NextLaunchHeading>Next Upcoming Launch</NextLaunchHeading>
      {data.launchesPast?.map((launch, idx) => (
        <StyledLink key={idx} to={`/launch-list/${launch?.id}`}>
          <PastLaunchContainer key={launch?.id}>
            <p>{launch?.id || '-'}</p>
            <p>{launch?.mission_name || '-'}</p>
            <p>{launch?.details || '-'}</p>
            <p>{launch?.links?.video_link || '-'}</p>
          </PastLaunchContainer>
        </StyledLink>
      ))}
    </div>
  );
};

export default LaunchList;
