import React from "react";
import styled from "styled-components/macro";

type GroupProps = {
  hover: boolean;
};

const ZoomEffect = `
  image {
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: 0.3s;
  }
  circle {
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: 0.3s;
  }
`;

const StyledGroup = styled.g<GroupProps>`
  image {
    transition: 0.3s;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  circle {
    transform-origin: 50% 50%;
    transition: 0.3s;
    transform-box: fill-box;
  }
  ${({ hover }) => hover && ZoomEffect}

  :hover {
    ${ZoomEffect}
  }
`;

export default StyledGroup;
