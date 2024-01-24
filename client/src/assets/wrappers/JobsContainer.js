import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    width: 50%;
    margin: 0 auto;
    font-weight: 630;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(226, 232, 240, 0.8);
    padding: 1%;
    text-align: center;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-span {
    font-size: 1.5rem;
    padding: 1%;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
