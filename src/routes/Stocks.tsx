import { useQuery } from "react-query";
import { fetchStockData } from "./api";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import SeoNam from "../Components/MyStocks/SeoNam";
import SinSeong from "../Components/MyStocks/SinSeong";
import PowerLogics from "../Components/MyStocks/PowerLogics";
import DukSung from "../Components/MyStocks/DukSung";
import Mobis from "../Components/MyStocks/Mobis";
import WonikPNE from "../Components/MyStocks/WonikPNE";
import Kiswire from "../Components/MyStocks/Kiswire";
import LSElectric from "../Components/MyStocks/LSElectric";
import FloatButton from "../Components/Button/FloatButton";
import InziControls from "../Components/MyStocks/InziControls";
import Lscnsasia from "../Components/MyStocks/Lscnsasia";

export const Wrapper = styled.div`
  display: grid;
  padding: 40px;
  gap: 20px;

  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

const InLoading = styled.span`
  font-size: 36px;
  text-align: center;

  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Date = styled.h1`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: 20px;

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

export interface StockData {
  basDt: string;
  srtnCd: string;
  isinCd: string;
  itmsNm: string;
  mrktCtg: string;
  clpr: string;
  vs: string;
  fltRt: string;
  mkp: string;
  hipr: string;
  lopr: string;
  trqu: string;
  trPrc: string;
  lstgStCnt: string;
  mrktTotAmt: string;
  response: any;
}

function Stocks() {
  const stockName = "서남"; // 종목명 설정
  const { isLoading, data } = useQuery<StockData>(["stock", stockName], () =>
    fetchStockData(stockName)
  );

  const formatDate = (dateString: string) => {
    const year = dateString?.slice(0, 4);
    const month = dateString?.slice(4, 6);
    const day = dateString?.slice(6, 8);
    return `${year}년 ${Number(month)}월 ${Number(day)}일`;
  };

  return (
    <>
      <Helmet>
        <title>초전도체 관련주</title>
      </Helmet>
      <Header>
        <Title>초전도체 관련주</Title>
      </Header>
      {isLoading ? (
        <InLoading>불러오는 중...⏳</InLoading>
      ) : (
        <>
          <Date>{formatDate(data?.response.body.items.item[0].basDt)}</Date>

          <Wrapper>
            <SeoNam />
            <SinSeong />
            <PowerLogics />
            <DukSung />
            <Mobis />
            <WonikPNE />
            <Kiswire />
            <LSElectric />
            <InziControls />
            <Lscnsasia />
          </Wrapper>
          <FloatButton />
        </>
      )}
    </>
  );
}

export default Stocks;
