import React, { useState } from "react";
import { PageContainer } from "../components/common/PageContainer";
import { Button, LinkButton } from "../components/common/Button";
import { H1 } from "../components/common/Typography";

const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <PageContainer isDarkMode={isDarkMode}>
      {/* <Button onClick={handleToggleDarkMode}>Toggle dark mode</Button> */}
      <H1>SPA into - AMAZING!</H1>
      <LinkButton to="/all">All Characters</LinkButton>
    </PageContainer>
  );
};

export default IndexPage;
