import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { HistoryProps, historyRates } from "../../models";

const History: React.FC<HistoryProps> = ({ historyRates }) => {
  const getDate = (el: historyRates) => {
    return new Date(
      +el.x.replace(/^([\d]{4})(\d{1,2})(\d{1,2})$/gm, "$1"),
      +el.x.replace(/^([\d]{4})(\d{1,2})(\d{1,2})$/gm, "$2"),
      +el.x.replace(/^([\d]{4})(\d{1,2})(\d{1,2})$/gm, "$3")
    );
  };

  const data = [
    {
      id: "usd",
      color: "hsl(35, 70%, 50%)",
      data: [
        ...historyRates
          .sort((a, b) => {
            let first: any = getDate(a);
            let second: any = getDate(b);
            return first - second;
          })
          .reverse(),
      ],
    },
  ];

  const tickRotation = data[0].data.length < 8 ? 0 : -25;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 60, bottom: 50, left: 80 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=' >-.2f'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: tickRotation,
        legend: "day",
        legendOffset: 43,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "rate",
        legendOffset: -60,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};

export default React.memo(History);
