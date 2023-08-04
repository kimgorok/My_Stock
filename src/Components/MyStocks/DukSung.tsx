import { useQuery } from "react-query";
import { StockData } from "../../routes/Stocks";
import { StockCard, Stockfluctuation } from "./style/StockStyle";
import { fetchStockData } from "../../routes/api";
import MyChart from "../charts/MyChart";

function DukSung() {
  const stockName = "덕성"; // 종목명 설정
  const { data } = useQuery<StockData>(["stock", stockName], () =>
    fetchStockData(stockName)
  );

  return (
    <>
      {data && (
        <>
          <StockCard>
            <h2>{data?.response.body.items.item[0].itmsNm}</h2>
            {/* 기타 필요한 데이터를 적절한 방식으로 표시 */}
            <h3>
              정규시장의 매매시간종료시까지 형성되는 최종가격:{" "}
              {parseFloat(
                data?.response.body.items.item[0].clpr
              ).toLocaleString()}{" "}
              원
            </h3>
            <h3>
              시작 가격:{" "}
              {parseFloat(
                data?.response.body.items.item[0].mkp
              ).toLocaleString()}{" "}
              원
            </h3>
            <Stockfluctuation
              positive={parseFloat(data?.response.body.items.item[0].vs) > 0}
            >
              전일 대비 등락:{" "}
              {parseFloat(
                data?.response.body.items.item[0].vs
              ).toLocaleString()}{" "}
              원
            </Stockfluctuation>
            <Stockfluctuation
              positive={parseFloat(data?.response.body.items.item[0].fltRt) > 0}
            >
              전일 대비 등락에 따른 비율:{" "}
              {data?.response.body.items.item[0].fltRt} %
            </Stockfluctuation>
            <h3>
              최고 가격:{" "}
              {parseFloat(
                data?.response.body.items.item[0].hipr
              ).toLocaleString()}{" "}
              원
            </h3>
            <h3>
              최저 가격:{" "}
              {parseFloat(
                data?.response.body.items.item[0].lopr
              ).toLocaleString()}{" "}
              원
            </h3>
            <h3>
              체결수량의 누적 합계:{" "}
              {parseFloat(
                data?.response.body.items.item[0].trqu
              ).toLocaleString()}{" "}
              주
            </h3>
            <MyChart stockName="덕성" />
          </StockCard>
        </>
      )}
    </>
  );
}

export default DukSung;
