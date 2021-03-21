import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SpanTitle } from './shared';
import SpaceXLogo from '../images/spacex-logo-small.png';

const LogoContainer = styled(Link)`
  position: absolute;
  z-index: 5;

  padding: 1rem;

  text-decoration: none;
  color: #fff;
`;

const StyledLogo = styled.img`
  display: inline-block;
  height: 20px;
`;

interface IHeaderLogoProps {}

const HeaderLogo: React.FunctionComponent<IHeaderLogoProps> = (props) => {
  return (
    <LogoContainer to='/'>
      <StyledLogo src={SpaceXLogo} />
      <SpanTitle>LAUNCH PAD</SpanTitle>
    </LogoContainer>
  );
};

export default HeaderLogo;
