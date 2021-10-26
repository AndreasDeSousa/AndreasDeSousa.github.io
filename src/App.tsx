import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
import CertificationsPage from "./CertificationsPage";
import ExperiencePage from "./ExperiencePage";
import PageWrapper from "./PageWrapper";
import Footer from "./Footer";
import Menu from "./Menu";
import {
  personalProjects,
  workProjects,
  certificationsData,
  experienceData,
} from "./data/content";
import { RadarContextProvider } from "./RadarContextProvider";

const App = () => {
  return (
    <Router>
      <Switch>
        <RadarContextProvider>
          <PageWrapper>
            <Menu />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/personal-projects">
              <ProjectsPage
                projects={personalProjects}
                title={"Personal Projects"}
              />
            </Route>
            <Route exact path="/work-projects">
              <ProjectsPage projects={workProjects} title={"Work Projects"} />
            </Route>
            <Route exact path="/certifications">
              <CertificationsPage projects={certificationsData} />
            </Route>
            <Route exact path="/experience">
              <ExperiencePage jobs={experienceData} />
            </Route>
          </PageWrapper>
        </RadarContextProvider>
        <Footer />
      </Switch>
    </Router>
  );
};

export default App;
