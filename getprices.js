import fetch from 'node-fetch';

fetch('https://rest.coinapi.io/v1/ohlcv/BINANCE_SPOT_ETH_BTC/history?period_id=1MTH&time_start=2023-03-01T00:00:00', {
  headers: {
    "X-CoinAPI-Key": "APIKEY // Replace with your API key
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
