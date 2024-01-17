import styled from "styled-components";

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-right: 4px solid ${(props) => props.color};
  border-bottom: 7px solid ${(props) => props.color};
  border-radius: var(--border-radius1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    font-size: 1.25rem;
  }
  .icon {
    width: 60px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius5);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
