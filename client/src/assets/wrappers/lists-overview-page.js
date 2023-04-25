import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0 1rem;

  .no-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    img {
      width: 20rem;
    }

    h2 {
      text-transform: lowercase;
      letter-spacing: 0.3rem;
      font-size: 2rem;
      color: var(--red-dark);
    }

    a {
      color: black;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;

      h3 {
        font-size: 1.5rem;
      }

      svg {
        font-size: 2rem;
      }
    }
  }
`;

export default Wrapper;
