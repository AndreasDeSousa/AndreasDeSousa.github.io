import React, { FC } from "react";
import Footer from "./Footer";
import { ExperienceContent } from "./Content";
import Title from "./Title";
import styled from "styled-components/macro";

const StyledContent = styled.div`
  text-align: left;
  max-width: 800px;
  margin: auto;
  display: inline-block;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 10px;
    img.background {
      display: none;
    }
  }
`;

const ContentBody = styled.div`
  width: 700px;
  font-family: poppins, sans-serif;

  @-webkit-keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  -webkit-animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  animation-delay: 0.3s;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

type ExperienceType = {
  jobs: Array<{
    title: string;
    companyName: string;
    description: string;
    date: string;
    companyImg: string;
  }>;
};

const ExperiencePage: FC<ExperienceType> = ({ jobs }) => {
  return (
    <>
      {jobs && (
        <StyledContent>
          <Title>Experience</Title>
          <ContentBody>
            {jobs.map((job, idx) => (
              <div key={`${job.companyName}-${idx}`}>
                <ExperienceContent contentData={job} />
                <hr />
              </div>
            ))}
          </ContentBody>
        </StyledContent>
      )}
      <Footer />
    </>
  );
};

export default ExperiencePage;
