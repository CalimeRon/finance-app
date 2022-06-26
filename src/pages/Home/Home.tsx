import React, { useEffect } from 'react';
import { config12Data } from '../../utils/config';

const Home = (): JSX.Element => {
  useEffect(() => {
    console.log('test', config12Data());
  }, []);

  return <div>Hello</div>;
};

export default Home;
