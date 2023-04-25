import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;
  width: 30rem;

  label {
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    font-weight: 400;
  }

  input {
    padding: 0.4rem;
    width: 30rem;
    height: 2.5rem;
    font-size: 1.7rem;
    font-weight: 400;
    outline: none;
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 1.4rem;
      color: var(--primary-800);
    }

    p {
      font-size: 1.1rem;
      color: var(--gray);
    }
  }
`;

export default Wrapper;
