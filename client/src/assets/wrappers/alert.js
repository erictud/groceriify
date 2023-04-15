import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.type === "error" ? "var(--red-light)" : "var(--primary-500)"};

  svg {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    text-transform: lowercase;
    text-align: center;
  }
`;

export default Wrapper;
