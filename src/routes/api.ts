export function fetchStockData(stockName: string) {
  const URL = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=WkRAAZxOoFAel7%2FCKVGp19Z7qUqNuiUSm4Qv4dphNi41r65nmrhjyuF4s%2B8usLe%2FSt11vnMoCd1LJYgjYyCmCg%3D%3D&numOfRows=1&resultType=json&itmsNm=${encodeURIComponent(
    stockName
  )}`;

  return fetch(URL).then((response) => response.json());
}
