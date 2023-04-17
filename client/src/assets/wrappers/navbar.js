import styled from "styled-components";

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--primary-50);
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary-500);

  h2 {
    font-size: 2rem;
    text-transform: lowercase;
  }
`;

export default Wrapper;
