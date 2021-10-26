import React, { FC } from "react";
import styled from "styled-components/macro";

const StyledPageWrapper = styled.div`
  width: 100%;
  background: radial-gradient(
      110% 63% at 0% 70%,
      #bf096a 0%,
      rgba(230, 35, 109, 0) 100%
    ),
    linear-gradient(223deg, #5b3ac4  13.85%, rgba(85, 58, 170, 0) 78.35%),
    radial-gradient(
      50% 50% at 50% 50%,
      #ffffff38 0%,
      rgba(255, 255, 255, 0) 100%
    );

  text-align: center;
  color: white;
  overflow-x: hidden;
  padding-top: 20px;
  a:hover {
    text-decoration: none;
  }
  hr {
    margin: 50px 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
  }
  @media screen and (max-width: 1000px) {
    .company,
    .certification {
      display: none;
    }
  }
`;

export const TypingEffect = `
  width:0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.05em; /* Adjust as needed */
  animation-name: typing;
  animation-duration: 3s; 
  animation-timing-function: steps(60, end); 
  animation-fill-mode: forwards;
  
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
