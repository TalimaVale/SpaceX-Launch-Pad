import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { LaunchDetailsQuery, LaunchDetailsQueryVariables } from '../generated/LaunchDetailsQuery';
import styled from 'styled-components';

const LaunchDetailsContainer = styled.div`
  background: red;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const StyledImage = styled.img`
  width: 400px;
`;

const LAUNCH_DETAILS_QUERY = gql`
  query LaunchDetailsQuery($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch
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

  if (loading || !data) return <div>Loading...</div>;

  return (
    <LaunchDetailsContainer>
      <StyledLink to='/launch-list'>BACK ARROW</StyledLink>
      <h1>LaunchDetails</h1>
      <h3>{data?.launch?.mission_name}</h3>
      <p>{data?.launch?.details}</p>
      {
        data?.launch?.links?.flickr_images?.map((image, idx) => (
          <StyledImage key={idx} alt={'Spaceship Launch'} src={image || undefined} />
        )) /* Memory leak? */
      }
    </LaunchDetailsContainer>
  );
};

export default LaunchDetails;