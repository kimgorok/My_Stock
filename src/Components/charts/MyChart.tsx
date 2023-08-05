import { useQuery } from "react-query";
import { StockData } from "../../routes/Stocks";
import { fetchStockData } from "../../routes/api";
import ApexChart from "react-apexcharts";

export interface ChartProps {
  stockName: string;
}

function MyChart({ stockName }: ChartProps) {
  const { data } = useQuery<StockData>(["stock", stockName], () =>
    fetchStockData(stockName)
  );

  // 시작가격, 최고가격, 최저가격의 평균 계산
  const startingPrice = parseFloat(data?.response.body.items.item[0].mkp);
  const highestPrice = parseFloat(data?.response.body.items.item[0].hipr);
  const lowestPrice = parseFloat(data?.response.body.items.item[0].lopr);
  const averagePrice = (startingPrice + highestPrice + lowestPrice) / 3;

  return (
    <>
      {data && (
        <ApexChart
          type="bar"
          series={[
            {
              name: "price",
              data: [
                {
                  x: "시작 가격",
                  y: data?.response.body.items.item[0].mkp,
                  goals: [
                    {
                      name: "평균",
                      value: averagePrice,
                      strokeWidth: 50,
                      strokeHeight: 4,
                      strokeColor: "#fbc531",
                    },
                  ],
                },
                {
                  x: "최고 가격",
                  y: parseFloat(data?.response.body.items.item[0].hipr),
                  goals: [
                    {
                      name: "평균",
                      value: averagePrice,
                      strokeWidth: 80,
                      strokeHeight: 4,
                      strokeColor: "#fbc531",
                    },
                  ],
                },

                {
                  x: "최저 가격",
                  y: parseFloat(data?.response.body.items.item[0].lopr),
                  goals: [
                    {
                      name: "평균",
                      value: averagePrice,
                      strokeWidth: 50,
                      strokeHeight: 4,
                      strokeColor: "#fbc531",
                    },
                  ],
                },
                {
                  x: "전일 대비 등락",
                  y: parseFloat(data?.response.body.items.item[0].vs),
                },
              ],
            },
          ]}
          options={{
            chart: {
              height: 200,
              background: "transparent",
            },
            grid: { show: true },
            yaxis: {
              show: true,
            },
            xaxis: {
              categories: [
                "시작 가격",
                "최고 가격",
                "최저 가격",
                "전일 대비 등락",
              ],
              labels: {
                style: {
                  colors: ["black"], // 레이블 색상을 테마의 textColor로 설정
                },
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],

            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ["평균"],
              markers: {
                fillColors: ["#fbc531"],
              },
            },
            dataLabels: {
              style: {
                colors: ["#2e1a1a"],
              },
            },
          }}
        />
      )}
    </>
  );
}

export default MyChart;
