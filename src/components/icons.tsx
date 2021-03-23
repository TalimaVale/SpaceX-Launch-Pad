import React from 'react';

interface ISVGIcon {
  width?: string;
  height?: string;
  fill?: string;
  styles?: any; // object of css properties
}

export const SVGArrowRight: React.FunctionComponent<ISVGIcon> = ({
  width = '40px',
  height = '100%',
  fill = '#00',
  styles = {}
}) => (
  <svg viewBox='0 0 448 512' width={width} height={height} style={styles}>
    <path
      fill={fill}
      d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'
    />
  </svg>
);

export const SVGArrowLeft: React.FunctionComponent<ISVGIcon> = ({
  width = '40px',
  height = '100%',
  fill = '#000',
  styles = {}
}) => (
  <svg viewBox='0 0 448 512' width={width} height={height} style={styles}>
    <path
      fill={fill}
      d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z'
    />
  </svg>
);
