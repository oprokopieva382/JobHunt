import { BallTriangle } from "react-loader-spinner";
import Wrapper from "../assets/wrappers/Loader";

export const Loader = () => {
  return (
    <Wrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#af6f39"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </Wrapper>
  );
};
