import styled from "styled-components";

export const Select = styled.select`
  -moz-appearance: none;
  margin: 0 0 1rem 0.5rem;
  width: calc(100% - 80px);
  background: transparent;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #3a3b3c;
  color: #3a3b3c;
  font-size: 0.85rem;
  @media (min-width: 676px) {
    font-size: 1.1rem;
  }
  & > option {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  :focus {
    outline: none;
  }
`;
