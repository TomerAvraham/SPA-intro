import styled from "@emotion/styled";

const HEADER_HEIGHT = 60;

export const Header = styled.nav`
  width: 100vw;
  height: ${HEADER_HEIGHT}px;
  background-color: var(--main-navbar-background-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    -3px 3px 15px -2px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #e7e7e7e7, -3px 3px 15px -2px rgba(0, 0, 0, 0);
`;

export const NavbarLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
  width: 250px;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavbarLinkItem = styled.li`
  border-bottom: ${({ active }) =>
    active ? "2px solid var(--main-text-color)" : "none"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom: 2px solid var(--main-text-color);
  }
`;

export const MainContainer = styled.main`
  margin: 0 100px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);

  @media (max-width: 600px) {
    margin: 0;
  }
`;
