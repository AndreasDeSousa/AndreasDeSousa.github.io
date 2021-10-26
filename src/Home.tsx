import React from "react";
import { data } from "./data/data";
import Grid from "@material-ui/core/Grid";
import Radar from "./Radar";
import BubbleChart from "./BubbleChart";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: relative;
  height: 110vh;
  .mobile {
    text-align: left;
    margin: 30px 20px;
    overflow-y: scroll;
    .tech {
      font-size: 18px;
      padding-bottom: 5px;
      font-family: poppins, sans-serif;
      font-weight: 300;
    }
  }
  @media screen and (min-width: 1000px) {
    .mobile {
      display: none;
      text-align: left;
    }
  }
`;
const OutterWrapper = styled.div`
  display: inline-block;
  .footer {
    top: 110vh;
    @media screen and (max-width: 1000px) {
      top: 0vh;
      padding: 0;
      height: 100px;
      position: inherit;
    }
  }
`;

const Title = styled.div`
  font-size: 26px;
  padding-bottom: 15px;
  font-family: "Bebas Neue", cursive;
`;

const Home = () => {
  return (
    <OutterWrapper>
      <Wrapper>
        <Radar />
        <Grid container spacing={3} className="mobile">
          {data.map(({ name, data }, idx: number) => {
            const technologies = data.preferred.concat(data.learning);
            const bubbleData = data.preferred
              .map((item) => {
                return { ...item, occurence: 150 };
              })
              .concat(
                data.learning.map((item) => {
                  return { ...item, occurence: 30 };
                })
              );
            return (
              <Grid item xs={12} key={`${name} ${idx}`}>
                <Grid container>
                  <Grid item xs={6}>
                    <Title>{name}</Title>
                    {technologies.map(({ name }) => (
                      <div className="tech" key={name}>
                        {name}
                      </div>
                    ))}
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <BubbleChart data={bubbleData} />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </OutterWrapper>
  );
};

export default Home;
