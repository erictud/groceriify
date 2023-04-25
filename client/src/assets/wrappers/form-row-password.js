import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
  width: 30rem;

  label {
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  .password-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    input {
      padding: 0.4rem;
      width: 28rem;
      height: 2.5rem;
      font-size: 1.7rem;
      font-weight: 400;
      outline: none;
    }

    div svg {
      cursor: pointer;
      font-size: 2.2rem;
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 1.7rem;
      color: var(--primary-800);
    }

    p {
      font-size: 1.1rem;
      color: var(--gray);
    }
  }
`;

export default Wrapper;
