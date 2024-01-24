import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 3rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    border: 1px solid black;
    text-align: center;
  
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
