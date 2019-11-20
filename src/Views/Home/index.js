import React from 'react';

// test
import AxiosBase from '../../core/AxiosBase';
import { API_CONFIGS } from '../../constants';

export default function Home() {
  const { GET } = API_CONFIGS;

  const handleClick = async () => {
    const request = {
      method: GET,
      url: 'api/people',
      data: {},
      headers: {}
    };

    const data = await AxiosBase.fetch(request);
    console.log('data:', data);
  };

  return (
    <React.Fragment>
      <h1>{'Welcome to home page'}</h1>
      <button onClick={handleClick}>{'get data'}</button>
    </React.Fragment>
  );
}
