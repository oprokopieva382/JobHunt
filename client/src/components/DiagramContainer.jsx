import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { VerticalChart } from "./VerticalChart";
import { HorizontalChart } from "./HorizontalChart";

export const DiagramContainer = ({ totalApplicationsByMonth }) => {
  const [verticalChart, setVerticalChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly diagram of submitted applications</h4>
      <button type="button" onClick={() => setVerticalChart(!verticalChart)}>
        {verticalChart ? "Horizontal chart" : "Vertical chart"}
      </button>
      {verticalChart ? <VerticalChart /> : <HorizontalChart />}
    </Wrapper>
  );
};
