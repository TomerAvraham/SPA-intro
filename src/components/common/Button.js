import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

export const LinkButton = styled((props) => <Link {...props} />)`
  padding: 20px;
  color: var(--main-button-text-color);
  background-color: var(--main-button-background-color);
  border: none;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    background-color: var(--main-button-hover-background-color);
  }
`;
