import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .logo {
    margin-top: 15px;
    border: 1px solid white;
    border-radius: 50%;
    width: 50px;
    height: auto;
  }
  .logospan {
    margin-top: 10px;
    padding: 10px;
    font-weight: bold;
    color: var(--primary-500);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -5rem;
  }
  h1 {
    font-weight: 700;
    color: var(--grey-700);
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: fixed;
      height: 80%;
      width: 110%;
      border-radius: 10px;
      opacity: 0.8;
      box-shadow: -40px 40px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;
export default Wrapper;
