import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  margin-bottom: 1.5rem;

  label {
    font-size: 1.7rem;
    font-weight: 100;
  }

  input {
    padding: 0.4rem;
    width: 30rem;
    height: 2.5rem;
    font-size: 1.7rem;
    font-weight: 400;
    outline: none;
  }
`;

export default Wrapper;
