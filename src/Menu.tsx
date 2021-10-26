import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { ListItem } from "@material-ui/core";
import SideBar from "./SideBar";
import styled from "styled-components/macro";

const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    box-shadow: none;
    align-items: center;
    .MuiGrid-container {
      justify-content: center;
    }
    .MuiIconButton-root {
      background: #e6236d;
      border-radius: 0;
    }
    @media screen and (min-width: 1000px) {
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  div.MuiPaper-root {
    width: 100%;
    background: #5d5fff;
    color: white;
  }
  .MuiIconButton-root {
    margin: 20px;
    float: right;
  }
  ul {
    height: ${window.innerHeight}px;
    width: 100%;
    padding: 150px 0 0 80px;

    a {
      font-size: 30px;
      font-weight: bold;
      color: inherit;
      font-family: "Bebas Neue", cursive;
      :hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 1000px) {
      padding: 100px 0 0 20px;
      .MuiListItem-root {
        padding-bottom: 0;
      }
    }
  }
`;

const Logo = styled(Grid)`
  padding: 20px 0px 0px 50px;
  text-align: left;
  font-family: poppins, sans-serif;
  div:first-child {
    font-size: 28px;
    font-weight: 600;
    border-bottom: 2px solid #e6236d;
    margin-bottom: 6px;
  }
  div:last-child {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 1000px) {
    padding: 0px 0px 30px 20px;
    div:first-child {
      font-size: 20px;
    }
    div:last-child {
      font-size: 12px;
    }
  }
`;

const menuItems = [
  { name: "Tech Stack", url: "" },
  { name: "Personal Projects", url: "personal-projects" },
  { name: "Work Projects", url: "work-projects" },
  { name: "Certifications", url: "certifications" },
  { name: "Experience", url: "experience" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Grid container style={{ justifyContent: "space-between" }}>
          <Logo item>
            <div>
              Alexandra <br /> Veres
            </div>

            <div>Front-end Engineer</div>
          </Logo>
          <Grid item>
            <IconButton
              onClick={toggleDrawer(true)}
              onKeyDown={toggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </StyledAppBar>

      <SideBar />

      <StyledDrawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            edge="start"
            color="inherit"
            aria-label="clear"
          >
            <ClearIcon fontSize="large" />
          </IconButton>
          <List>
            {menuItems.map(({ name, url }) => (
              <ListItem
                key={`menu-${name}`}
                button
                component={Link}
                to={`/${url}`}
              >
                {name}
              </ListItem>
            ))}
          </List>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Menu;
