import React from "react";
import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "./context/DataProvider";
const Container = styled(Box)`
  height: 40vh;
  transition: all 1s ease;
`;
const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [srcCode]);
  return (
    <Container>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder={0}
      />
    </Container>
  );
};

export default Result;
