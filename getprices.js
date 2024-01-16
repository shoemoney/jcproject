import fetch from "node-fetch";

let process;
fetch(
  "https://rest.coinapi.io/v1/ohlcv/BINANCE_SPOT_ETH_BTC/history?period_id=1MTH&time_start=2023-03-01T00:00:00",
  {
    headers: {
        "X-CoinAPI-Key": "048B1430-6933-4AB4-995C-764738FACB96"
    },
  },
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
