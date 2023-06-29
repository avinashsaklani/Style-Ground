import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import LOGO from "../logo.png";

const Container = styled(AppBar)`
  background: #060606;
  height: 10;
  align-items: center;
`;

const Header = () => {
  return (
    <Container position="static">
      <Toolbar>
        <img src={LOGO} alt="logo" style={{ width: 250 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
