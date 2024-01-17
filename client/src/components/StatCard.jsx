import Wrapper from "../assets/wrappers/StatCard";

export const StatCard = ({ count, color, bcg, title, icon }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <h5 className="title">{title}</h5>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
    </Wrapper>
  );
};
