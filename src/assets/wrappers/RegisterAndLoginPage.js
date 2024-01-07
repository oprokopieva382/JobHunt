import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: 1px solid white;
    border-radius: 50%;
    width: 50px;
    height: auto;
  }
  .logospan {
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--primary-500);
    text-align: center;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
