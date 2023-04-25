import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .join_list-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;
