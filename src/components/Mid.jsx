import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 52vh;
`;
const Mid = () => {
  const { html, setHtml, css, setCSS, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="⁕"
        color="#0ebfff"
        value={css}
        onChange={setCSS}
      />
      <Editor
        heading="JavaScript"
        icon="()"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Mid;
