import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

// CSS Snippets

const H6Styles = `
  margin: 0;

  font-size: 1rem;
  text-transform: uppercase;
`;

// Styled Components

export const H1Title = styled.h1`
  margin: 0;

  font-size: 4rem;
  text-transform: uppercase;
`;

export const H2Title = styled.h2`
  margin: 0;

  font-size: 1.4rem;
  line-height: 1.5;
  text-transform: uppercase;

  ${breakpoints.portraitTablet} {
    font-size: 1.8rem;
  }

  ${breakpoints.landscapeTablet} {
    font-size: 2rem;
  }

  ${breakpoints.laptop} {
    line-height: 1.3;
  }

  ${breakpoints.desktop}{
    font-size: 3rem;
  }
`;

export const H3Title = styled.h3`
  margin: 0;

  font-size: 1.2rem;
  text-transform: uppercase;
  
  ${breakpoints.portraitPhone} {
    font-size: 1.4rem;
  }

  ${breakpoints.landscapeTablet} {
    font-size: 1.6rem;
  }

  ${breakpoints.desktop} {
    font-size: 2rem;
  }
`;

export const H5Title = styled.h5`
  margin: 0;

  font-size: .9rem;
  text-transform: uppercase;
  
  ${breakpoints.portraitPhone} {
    font-size: 1rem;
  }

  ${breakpoints.landscapeTablet} {
    font-size: 1.2rem;
  }
`;

export const H6Title = styled.h6`
  ${H6Styles}
`;

export const H6TitleLink = styled(Link)`
  ${H6Styles}

  font-family: FjallaOne;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 3px;
`;

export const SpanTitle = styled.span`
  margin: 0;

  font-family: FjallaOne;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
