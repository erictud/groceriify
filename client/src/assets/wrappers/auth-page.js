import styled from "styled-components";

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    border: 1px solid var(--primary-100);
    border-top: 5px solid var(--primary-400);
    background-color: white;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .change-state {
      text-decoration: underline;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
