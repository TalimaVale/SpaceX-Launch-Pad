import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

interface IHelmetProps {}

const Helmet: React.FunctionComponent<IHelmetProps> = () => {
  return (
    <ReactHelmet>
      <meta charSet='utf-8' />
      <title>SpaceX Launch Pad</title>
      <link rel='canonical' href='https://spacexlaunchpad.com' />
    </ReactHelmet>
  );
};

export default Helmet;
