import React, { useState } from "react";
import { PageContainer } from "../components/common/PageContainer";
import { Button, LinkButton } from "../components/common/Button";
import { H1 } from "../components/common/Typography";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <PageContainer isDarkMode={isDarkMode}>
      {/* <Button onClick={handleToggleDarkMode}>Toggle dark mode</Button> */}
      <H1>Welcome to my Rick and Morty API</H1>
      <Link to="/all">All Characters</Link>
    </PageContainer>
  );
};

export default IndexPage;
