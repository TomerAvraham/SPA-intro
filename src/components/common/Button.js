import styled from "@emotion/styled";

export const Button = styled.button`
  width: 80px;
  height: 40px;
  color: var(--main-button-text-color);
  background-color: var(--main-button-background-color);
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: var(--main-button-hover-background-color);
  }
`;
