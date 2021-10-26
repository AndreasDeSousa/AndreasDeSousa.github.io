import React, { FC } from "react";
import { TypingEffect } from "./PageWrapper";
import styled from "styled-components/macro";

const StyledTitle = styled.div`
  font-size: 54px;
  font-weight: 300;
  padding-right: 40px;
  padding-bottom: 20px;
  ${TypingEffect};
  font-family: "Bebas Neue", cursive;
  @media screen and (max-width: 1000px) {
    font-size: 32px;
  }
`;
const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
