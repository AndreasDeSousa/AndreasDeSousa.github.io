import React, { FC, useState, useContext } from "react";
import * as d3 from "d3";
import styled from "styled-components/macro";
import { data } from "./data/data";
import StyledGroup from "./StyledGroup";
import { RadarTooltip } from "./StyledTooltip";
import { getRowLength } from "./helpers";
import { RadarContext } from "./RadarContextProvider";

const labels = [
  "Languages",
  "Libraries",
  "Styling",
  "Machine Learning",
  "DevOps",
  "UX/UI",
];

const size = 900;
const outterRadius = size / 2 - 100;
const innerCircleRadius = outterRadius / 2 + 20;
const radius = [330, innerCircleRadius];
const segmentsNum = 6;
const dataPointCircleRadius = 16;
const imageSize = Math.sqrt(2) * dataPointCircleRadius; //square inside circle
const navBtnRadius = size / 2 - 50;

const createArc = d3.arc().padAngle(0);

let techIdx = 9;

const Wrapper = styled.div`
  margin-top: -70px;
  width: 50vw;
  min-width: 700px;
  display: inline-block;
  .arc {
    :hover {
      cursor: pointer;
      transition: 0.7s;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const StyledNav = styled.g`
  cursor: pointer;
  animation: fadeIn 5s;
  font-family: "Poppins", sans-serif;
  -webkit-animation: fadeIn 4s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  path {
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform-origin: -10% 0%;
  }
  :hover {
    path {
      opacity: 1;
      transform-origin: 0% 0%;
    }
    text {
      text-decoration: underline;
    }
  }
`;

const Radar: FC = () => {
  const [hovered, setHovered] = useState("");
  const { category, technology, setCategory } = useContext(RadarContext);

  return (
    <Wrapper>
      <svg viewBox={"0 0 900 900"} style={{ overflow: "visible" }}>
        <g transform={`translate(${size / 2} ${size / 2})`}>
          {/* 2 main rings */}
          <circle
            cx={0}
            cy={0}
            r={outterRadius}
            fill={"#ffffff"}
            stroke={"lightgrey"}
            opacity={0.1}
          />
          <circle
            cx={0}
            cy={0}
            r={innerCircleRadius}
            fill={"#ffffff"}
            opacity={0.1}
          />

          {new Array(8).fill(0).map((d: any, idx: number) => (
            <line
              key={`tech-line-${idx}`}
              transform={`rotate(${(360 / 6) * idx + 30})`}
              x1={0}
              y1={0}
              y2={outterRadius}
              stroke={"white"}
              strokeWidth={0.2}
            />
          ))}
          {/* nav buttons around the radar */}
          {labels.map((name, idx) => {
            return (
              <StyledNav
                key={`${name}-nav`}
                // onClick={() => handleClick(name)}
                transform={`translate(${
                  navBtnRadius *
                    Math.cos(
                      ((2 * Math.PI) / segmentsNum) * idx -
                        (3 * Math.PI) / segmentsNum
                    ) -
                  (idx === 3 ? 130 : idx === 0 ? 100 : idx > 3 ? 120 : 50)
                }, ${
                  navBtnRadius *
                    Math.sin(
                      ((2 * Math.PI) / segmentsNum) * idx -
                        (3 * Math.PI) / segmentsNum
                    ) -
                  (idx === 3 ? 10 : idx === 0 ? 10 : 0)
                })`}
              >
                <text
                  className={name}
                  textAnchor="start"
                  x={60}
                  y={30}
                  fontSize={22}
                  fontWeight={300}
                  fill={"white"}
                >
                  {name}
                </text>
              </StyledNav>
            );
          })}
          {/* labels for rings */}
          {[-1, 1].map((side: number) =>
            ["learning", "preferred"].map(
              (segmentName: string, idx: number) => (
                <g key={`${idx}-line`}>
                  <text
                    textAnchor="middle"
                    y={-5}
                    x={
                      side *
                      (innerCircleRadius * (idx + 1) - innerCircleRadius / 2)
                    }
                    fontSize={16}
                    fill={"white"}
                    opacity={0.5}
                  >
                    {segmentName}
                  </text>
                </g>
              )
            )
          )}

          {labels.map((categorySegment: string, idx: number) => (
            <path
              key={`${categorySegment}-arc`}
              className={`arc ${categorySegment}-segment`}
              data-testid={`${categorySegment}-arc`}
              d={
                createArc({
                  startAngle:
                    -Math.PI / segmentsNum + (Math.PI / segmentsNum) * 2 * idx,
                  endAngle:
                    Math.PI / segmentsNum + (Math.PI / segmentsNum) * 2 * idx,
                  innerRadius: 0,
                  outerRadius: outterRadius,
                })!
              }
              fill={
                categorySegment === hovered || categorySegment === category
                  ? "rgb(255, 255, 255, 0.3)"
                  : "transparent"
              }
              onMouseOver={() => setHovered(categorySegment)}
              onMouseLeave={() => setHovered("")}
              onClick={() => setCategory(categorySegment)}
            />
          ))}

          {data.map((segment: any) => {
            techIdx += 2;
            return ["preferred", "learning"].map(
              (radarCategory: any, catIdx: number) =>
                segment.data[radarCategory].map(
                  (dataPoint: any, idx: number) => {
                    // split data into 2 rows if more than 3 data point
                    let r = idx > 2 ? radius[catIdx] - 90 : radius[catIdx] - 30;
                    let dataLengthPerRow = getRowLength(
                      segment.data[radarCategory].length,
                      idx
                    );

                    return (
                      <StyledGroup
                        key={`${dataPoint.name}-${idx}`}
                        hover={dataPoint.name == technology}
                      >
                        <RadarTooltip
                          title={dataPoint.name}
                          aria-label={dataPoint.name}
                          placement="top"
                          arrow
                        >
                          <g className={`techIcon-${dataPoint.name}`}>
                            {/* background circle for icons */}
                            <circle
                              // r = distance from center
                              // Math.PI/segmentsNum = move points inside a segment otherwise only half of the points would be inside
                              // (2 * Math.PI) / (segmentsNum * dataLengthPerRow)) * (idx > 2 ? idx - 3 : idx) = calculating coordinates
                              // (idx > 2 ? idx - 3 : idx) = start angle at original point after 3rd data point
                              // Math.PI / (segmentsNum * dataLengthPerRow) = evenly distribute inside segment
                              cx={`${
                                r *
                                Math.cos(
                                  11 +
                                    (techIdx * Math.PI) / segmentsNum +
                                    ((2 * Math.PI) /
                                      (segmentsNum * dataLengthPerRow)) *
                                      (idx > 2 ? idx - 3 : idx) +
                                    Math.PI / (segmentsNum * dataLengthPerRow)
                                )
                              }`}
                              cy={`${
                                r *
                                Math.sin(
                                  11 +
                                    (techIdx * Math.PI) / segmentsNum +
                                    ((2 * Math.PI) /
                                      (segmentsNum * dataLengthPerRow)) *
                                      (idx > 2 ? idx - 3 : idx) +
                                    Math.PI / (segmentsNum * dataLengthPerRow)
                                )
                              }`}
                              r={dataPointCircleRadius}
                              fill={"white"}
                            />

                            <image
                              x={`${
                                r *
                                  Math.cos(
                                    11 +
                                      (techIdx * Math.PI) / segmentsNum +
                                      ((2 * Math.PI) /
                                        (segmentsNum * dataLengthPerRow)) *
                                        (idx > 2 ? idx - 3 : idx) +
                                      Math.PI / (segmentsNum * dataLengthPerRow)
                                  ) -
                                imageSize / 2
                              }`}
                              y={`${
                                r *
                                  Math.sin(
                                    11 +
                                      (techIdx * Math.PI) / segmentsNum +
                                      ((2 * Math.PI) /
                                        (segmentsNum * dataLengthPerRow)) *
                                        (idx > 2 ? idx - 3 : idx) +
                                      Math.PI / (segmentsNum * dataLengthPerRow)
                                  ) -
                                imageSize / 2
                              }`}
                              href={dataPoint.link}
                              height={imageSize}
                              width={imageSize}
                            />
                          </g>
                        </RadarTooltip>
                      </StyledGroup>
                    );
                  }
                )
            );
          })}
        </g>
      </svg>
    </Wrapper>
  );
};

export default Radar;
