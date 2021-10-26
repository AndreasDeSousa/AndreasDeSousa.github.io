import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: white;
  padding: 0 100px;
  line-height: 50px;
  bottom: 0;
  a {
    color: inherit;
    float: left;
    transition: all 0.3s ease;
  }
  a:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  div {
    float: right;
  }
  img {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    height: 150px;
    padding-bottom: 100px;
    font-size: 16px;
    a,
    div {
      float: none;
    }
    img {
      display: block;
      margin: auto;
    }
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <a href="https://github.com/xandrav" target="_blank" rel="noreferrer">
      GitHub{" |"}
    </a>
    <a
      href="https://www.linkedin.com/in/alexandra-veres-14974212b/"
      target="_blank"
      rel="noreferrer"
    >
      &nbsp;LinedIn{" |"}
    </a>
    <a href="mailto: veresalexandra95@gmail.com">&nbsp;Email</a>
    <div>Updated 2021</div>
  </StyledFooter>
);

export default Footer;
