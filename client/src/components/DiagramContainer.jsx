import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { VerticalChart, HorizontalChart } from ".";

export const DiagramContainer = ({ data }) => {
  const [verticalChart, setVerticalChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly diagram of submitted applications</h4>
      <button type="button" onClick={() => setVerticalChart(!verticalChart)}>
        {verticalChart ? "Horizontal chart" : "Vertical chart"}
      </button>
      {verticalChart ? (
        <VerticalChart data={data} />
      ) : (
        <HorizontalChart data={data} />
      )}
    </Wrapper>
  );
};
