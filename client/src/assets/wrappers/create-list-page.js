import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .title {
    text-transform: lowercase;
    letter-spacing: normal;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding-left: 6rem;
  }

  .create_list-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .step {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .form_button-row {
      margin: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    }

    .shops_container {
      .shops_input {
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

        .info {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;

          svg {
            font-size: 2rem;
            color: var(--primary-800);
          }

          p {
            font-size: 1.1rem;
            color: var(--gray);
          }
        }

        .shops_input-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;

          input {
            padding: 0.4rem;
            height: 2.5rem;
            font-size: 1.7rem;
            font-weight: 400;
            outline: none;
          }
        }
      }

      .shops_list {
        padding: 1rem 1rem;
        min-height: 25rem;
        width: 30rem;
        background-color: #f5f6fc;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.5rem;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

        .shops_list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          cursor: pointer;
          border: 1px solid var(--gray);
          border-radius: 20rem;
        }
      }
    }
  }
`;

export default Wrapper;
