import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  margin: 0 1rem;
  position: absolute;
  bottom: 10%;
  left: 0;
  z-index: 150;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0.5rem;
  padding-bottom: 0.2rem;
  border-radius: 1rem;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  background-color: ${(props) =>
    props.type === "error" ? "var(--red-light-error)" : "var(--green-light-alert)"};

  svg {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
    text-transform: lowercase;
    text-align: center;
  }
`;

export default Wrapper;
