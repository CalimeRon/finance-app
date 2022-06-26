import twelvedata from 'twelvedata';

export const config12Data = async () => {
  const config = {
    key: 'demo',
  };

  const client = twelvedata(config);

  const params = {
    symbol: 'AAPL',
    interval: '1min',
    outputsize: 5,
  };

  try {
    const data = await client.timeSeries(params);
    console.log(data);
  } catch (oO) {
    console.log(oO);
  }
};
