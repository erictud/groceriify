import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;

  div {
    width: 1rem;
    height: 1rem;
    background-color: var(--white);
    animation: animate 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    animation-delay: -0.12s;
  }

  div:nth-child(2) {
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    animation-delay: 0s;
  }

  @keyframes animate {
    0% {
      height: 1.5rem;
    }

    100% {
      height: 1rem;
    }
  }
`;

export default Wrapper;
