import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--white);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  a {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    h4 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary-900);
      text-transform: capitalize;
    }

    .info-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .info-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 1.7rem;
          color: var(--gray);
        }

        p {
          font-size: 1.5rem;
          text-transform: lowercase;
        }
      }
    }
  }
`;

export default Wrapper;
