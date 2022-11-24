import styled from "@emotion/styled";

export const PageContainer = styled.div`
  background-color: ${(props) =>
    props.isDarkMode
      ? "var(--main-darkMode-background-color)"
      : "var(--main-background-color)"};
  color: ${(props) =>
    props.isDarkMode
      ? "var(--main-darkMode-text-color)"
      : "var(--main-text-color)"};
  min-height: 90vh;
`;
