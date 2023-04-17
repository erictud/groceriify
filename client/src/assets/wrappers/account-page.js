import styled from "styled-components";

const Wrapper = styled.div`
  /* margin-top: 20%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .user-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .user-img {
      padding: 0.5rem 1.25rem;
      border-radius: 100%;
      font-size: 4rem;
      font-weight: 900;
      text-transform: uppercase;
      background-color: var(--primary-400);
    }

    .user-info {
      h3 {
        font-size: 1.4rem;
        text-align: center;
      }

      h4 {
        color: var(--gray);
        font-style: italic;
        font-size: 1.1rem;
      }
    }
  }

  .options-list {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .list {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;

      .list-item a,
      .list-item {
        min-width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        color: black;
        text-decoration: none;

        svg {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Wrapper;
