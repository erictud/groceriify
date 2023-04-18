import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 100;
  background-color: var(--primary-50);
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0.4rem;
  border-top: 2px solid var(--primary-500);
  border-bottom: 2px solid var(--primary-500);

  a {
    color: var(--black);
    text-decoration: none;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: all 0.3s ease;

    svg {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      font-weight: 200;
      font-style: italic;
    }
  }

  .active {
    p {
      font-weight: 900;
    }

    svg {
      font-size: 2.3rem;
    }
  }
`;

export default Wrapper;
