import { default as axios } from "axios";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://rest.coinapi.io/v1/ohlcv/:ada/history",
  headers: {
    Accept: "text/plain",
    "X-CoinAPI-Key": "048B1430-6933-4AB4-995C-764738FACB96",
  },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
