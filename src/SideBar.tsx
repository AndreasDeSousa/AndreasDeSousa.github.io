import React, { useContext, useEffect } from "react";
import { Collapse, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { RadarContext } from "./RadarContextProvider";
import { menuItems } from "./data/data";
import styled from "styled-components/macro";

const StyledSideBar = styled.div`
  margin: 50px 0 0px 50px;
  float: left;
  display: inline-block;
  .MuiList-padding {
    padding: 0;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const StyledList = styled(List)`
  && {
    width: 280px;
    text-align: left;
    font-family: "Bebas Neue", cursive;
    vertical-align: top;
    font-size: 20px;
    margin-top: 5px;
    a {
      text-decoration: none;
      color: white;
    }
    .nested {
      margin-left: 15px;
      .number {
        color: #ffc200;
        margin-right: 10px;
      }
      li.tech.list-item:last-child {
        margin-bottom: 10px;
      }
    }
    .list-item {
      height: 26px;
    }
    .category.list-item {
      font-size: 16px;
      font-weight: bold;
    }
    .tech.list-item {
      font-size: 14px;
      font-family: poppins, sans-serif;
    }
    .MuiListItem-root.Mui-disabled {
      opacity: 1;
    }
    .sub-category {
      font-size: 16px;
      font-family: "Bebas Neue", cursive;
      margin-top: 10px;
    }
    .hovered {
      color: #ffc200;
      cursor: pointer;
    }
  }
`;

const SideBar = () => {
  const {
    mainMenu,
    category,
    technology,
    setMainMenu,
    setCategory,
    setTechnology,
  } = useContext(RadarContext);

  useEffect(() => {
    if (window.location.pathname != "/")
      setMainMenu(window.location.pathname.split("/")[1].replace(/-/g, " "));
  });
  return (
    <StyledSideBar>
      {menuItems.map(({ name, url, subMenu }) => (
        <StyledList className="main-menu" key={name}>
          <Link to={`/${url}`} onClick={() => setMainMenu(name.toLowerCase())}>
            {name}
          </Link>
          <Collapse
            in={name.toLowerCase() === mainMenu}
            timeout="auto"
            unmountOnExit
          >
            <List component="nav" className={"nested"}>
              {subMenu.map(({ subName, items }, idx) => (
                <span key={subName}>
                  <ListItem
                    button
                    disabled={name != "Tech Stack"}
                    className={`category list-item`}
                    onClick={() => setCategory(subName)}
                  >
                    {name != "Experience" && (
                      <span className="number">0{idx + 1}</span>
                    )}
                    {subName}
                  </ListItem>
                  <Collapse
                    in={subName === category}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem className={"nested list-item sub-category"}>
                        preferred
                      </ListItem>
                      {items.preferred.map((tech: string) => (
                        <ListItem
                          key={tech}
                          className={`nested tech list-item ${
                            technology == tech ? "hovered" : ""
                          }`}
                          onMouseOver={() => setTechnology(tech)}
                          onMouseLeave={() => setTechnology("")}
                        >
                          {tech}
                        </ListItem>
                      ))}
                      <ListItem className={"nested list-item sub-category"}>
                        learning
                      </ListItem>
                      {items.learning.map((tech: string) => (
                        <ListItem
                          key={tech}
                          className={`nested tech list-item ${
                            technology == tech ? "hovered" : ""
                          }`}
                          onMouseOver={() => setTechnology(tech)}
                          onMouseLeave={() => setTechnology("")}
                        >
                          {tech}
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </span>
              ))}
            </List>
          </Collapse>
        </StyledList>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
