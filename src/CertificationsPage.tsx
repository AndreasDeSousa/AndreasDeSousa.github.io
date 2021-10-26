import React, { FC } from "react";
import Footer from "./Footer";
import { CertificationsContent } from "./Content";
import Title from "./Title";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: contents;
  margin: 25px 0 100px 0;
  .certification,
  .company {
    line-height: 14;
  }
  hr {
    margin: 0px 0 40px 0;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
    img.background {
      display: none;
    }
  }
  `;
  
  const StyledContent = styled.div`
  text-align: left;
  max-width: 800px;
  margin: auto;
  position: relative;
  :first-child {
    display: inline-block;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const ContentBody = styled.div`
  width: 700px;
  margin: 0 auto;
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


type CertificationsType = {
  projects: Array<{
    name: string;
    companyName?: string;
    description: string;
    url: string;
    github: string;
  }>;
};

const CertificationsPage: FC<CertificationsType> = ({ projects }) => {
  return (
    <>
      <Wrapper>
        {projects && (
          <StyledContent>
            <Title>Certifications</Title>
            <ContentBody>
              {projects.map((project) => (
                <div key={project.name}>
                  <CertificationsContent contentData={project} />
                  <hr />
                </div>
              ))}
            </ContentBody>
          </StyledContent>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default CertificationsPage;
