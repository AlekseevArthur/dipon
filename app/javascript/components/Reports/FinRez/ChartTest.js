import React from "react";
import { VictoryPie } from "victory";

export const PieChart = () => {
  return <VictoryPie data={[
    { x: "Cats", y: 60 },
    { x: "Dogs", y: 40 },
  ]}/>;
};

export default PieChart