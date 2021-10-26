import React, { FC } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components/macro";

type ProjectContentType = {
  contentData: {
    name: string;
    companyName?: string;
    description: string;
    url: string;
    github: string;
    img?: any;
  };
};

type ExperienceContentType = {
  contentData: {
    title: string;
    companyName: string;
    description: string;
    date: string;
    companyImg: string;
  };
};

const StyledSubContent = styled.div`
  margin-bottom: 20px;
  .content {
    font-size: 16px;
    .title {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .date {
        @media screen and (max-width: 1000px) {
          padding-top: 5px;
          width: 100px;
          font-size: 14px;
        }
      }
    }
    ul {
      padding-inline-start: 20px;
    }

    div:first-child {
      font-size: 18px;
      padding-bottom: 0px;
      font-weight: 600;
    }
    div:nth-child(2) {
      font-size: 14px;
      padding-bottom: 8px;
      font-weight: 300;
    }
    font-weight: 300;
    padding-bottom: 12px;
  }
  a {
    color: white;
    font-weight: 600;
    border-bottom: 1px solid white;
  }
  a.github {
    display: inline-block;
    border: none;
  }
  .MuiSvgIcon-root {
    padding: 3px;
    background: #e6226c;
    border-radius: 50%;
  }

  .visit-project {
    float: right;
    border-bottom: none;
    font-weight: 300;
    :hover {
      text-decoration: underline;
    }
  }
  .experience-content {
    li {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
    .content {
      font-size: 18px;
    }
  }
`;

const StyledGrid = styled(Grid)`
  && {
    @media screen and (max-width: 1000px) {
      width: 90vw;
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`;
export const ProjectContent: FC<ProjectContentType> = ({ contentData }) => (
  <StyledSubContent key={contentData.name}>
    <div className={"content"}>
      <div className="title">
        <div>
          <div>{contentData.name}</div>
          <div>{contentData.companyName}</div>
        </div>
        <a
          className="github"
          href={contentData.github}
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon" width={30} height={30}>
            <circle cx={15} cy={15} r={15} fill={"white"} />
            <image
              x={0}
              y={0}
              href={"https://img.icons8.com/fluent/452/github.png"}
              height={30}
              width={30}
            />
          </svg>
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: contentData.description.replace(
            /href=/g,
            'rel="noreferrer" target="_blank" href='
          ),
        }}
      />
      <a
        className="visit-project"
        target="_blank"
        rel="noreferrer"
        href={contentData.url}
      >
        Visit the app <ArrowForwardIosIcon fontSize="small" />
      </a>
    </div>
  </StyledSubContent>
);

export const CertificationsContent: FC<ProjectContentType> = ({
  contentData,
}) => (
  <Grid container justifyContent="space-between" spacing={3}>
    <StyledGrid item xs={10}>
      <StyledSubContent key={contentData.name}>
        <div className={"content"}>
          <div>
            <div>{contentData.name}</div>
            <div>{contentData.companyName}</div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: contentData.description.replace(
                /href=/g,
                'rel="noreferrer" target="_blank" href='
              ),
            }}
          />
          <a
            className="visit-project"
            target="_blank"
            rel="noreferrer"
            href={contentData.github}
          >
            See Project <ArrowForwardIosIcon fontSize="small" />
          </a>
        </div>
      </StyledSubContent>
    </StyledGrid>
    <Grid item xs={2} className="certification">
      <img
        className="certification"
        src={contentData.img}
        alt={"certification"}
        height={150}
      />
    </Grid>
  </Grid>
);

export const ExperienceContent: FC<ExperienceContentType> = ({
  contentData,
}) => (
  <Grid container justifyContent="space-between" spacing={3}>
    <Grid item xs={2} className="company">
      <img src={contentData.companyImg} alt={"company"} height={80} />
    </Grid>
    <StyledGrid item xs={10}>
      <StyledSubContent>
        <div className={"content"}>
          <div className="title">
            <div>
              <div>{contentData.title}</div>
              <div>{contentData.companyName}</div>
            </div>
            <div className="date">{contentData.date}</div>
          </div>
          <div
            className="experience-content"
            dangerouslySetInnerHTML={{
              __html: contentData.description.replace(
                /href=/g,
                'rel="noreferrer" target="_blank" href='
              ),
            }}
          />
        </div>
      </StyledSubContent>
    </StyledGrid>
  </Grid>
);
