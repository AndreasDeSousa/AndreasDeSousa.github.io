export const personalProjects = [
  {
    name: "Mineral Databse",
    companyName: "",
    description:
      " A React application that allows the user to search for minerals by selecting elements in the periodic table, view the info page of a chosen mineral and a dashboard with statistics tailored to the specific mineral properties. Data used in this application was collected from <a href='https://www.mindat.org'>mindat</a> using Python Request library.",
    url: "https://master.d3psdhyvaqiqz2.amplifyapp.com/",
    github: "https://github.com/XandraV/mineral-database",
  },
  {
    name: "Stock Market Tracker",
    companyName: "",
    description:
      "A React, TypeScript application that allows users to sign up and create watchlists for stocks and view real time intraday and historical data. This project is using the <a href='https://iexcloud.io/'>IEX Cloud Financial Data APIs</a> to access live and historical data on stocks. The backend is built with Node.js and uses a Mongodb database.",
    url: "https://master.dn1vt8xnffhrx.amplifyapp.com/",
    github: "https://github.com/XandraV/stock-market-tracker",
  },
  {
    name: "Quantum Circuit Simulator",
    companyName: "",
    description:
      "A web application that allows the user to graphically build quantum circuits and view the results on a dashboard. This project combines React, TypeScript frontend with a Flask, Python backend using <a href='https://qiskit.org/'>Qiskit</a> library to perform quantum operations.",
    url: "https://master.d3vhvy7iyx12n.amplifyapp.com/",
    github: "https://github.com/XandraV/quantum-circuit-simulator",
  },
  {
    name: "Hieroglyph Image Classifier",
    companyName: "",
    description:
      "Image classifier project that combines React, TypeScript frontend with a Flask, Python backend and uses a predictive model - convolutional neural networks - built in Python with <a href='https://www.tensorflow.org/'>TensorFlow</a> to identify hieroglyphs in uploaded images.",
    url: "https://github.com/XandraV/hieroglyph-image-classifier",
    github: "https://github.com/XandraV/hieroglyph-image-classifier",
  },
];

export const workProjects = [
  {
    name: "Capco Engineering Framework Application",
    companyName: "",
    description:
      "A mobile friendly React, TypeScript application making the Capco performance framework accessible for engineers, new candidates and clients. Designed by Engineers for Engineers at Capco.",
    url: "https://framework.capco.io/",
    github: "https://framework.capco.io/",
  },
  {
    name: "Capco Technology Radar",
    companyName: "",
    description:
      "A responsive React, TypeScript web application displaying the list of technologies used by Capco Engineers on a radial chart, built with D3.js",
    url: "https://master.d3qm5n59wrk3b.amplifyapp.com/",
    github: "https://master.d3qm5n59wrk3b.amplifyapp.com/",
  },
  {
    name: "Capco Challenge Application",
    companyName: "",
    description:
      "An exercise based fundraising app that displays overall team statistics on a progress dashboard. Built with React, Node.js and Mongodb.",
    url: "",
    github: "",
  },
];

export const certificationsData = [
  {
    name: "IBM Machine Learning Professional Certificate",
    companyName: "Coursera",
    description:
      "This <a href='https://www.coursera.org/professional-certificates/ibm-machine-learning'>program</a> consists of 6 courses to develop working skills in Supervised Learning, Unsupervised Learning, Deep Learning, Reinforcement Learning and specialized topics such as Time Series Analysis and Survival Analysis.",
    url: "",
    github:
      "https://github.com/XandraV/ibm-machine-learning-certificate-projects",
    img: `${process.env.REACT_APP_S3_BASE_URL}ibm.png`,
  },
  {
    name: "Introduction to Machine Learning with TensorFlow",
    companyName: "Udacity",
    description:
      "This <a href='https://www.udacity.com/course/intro-to-machine-learning-with-tensorflow-nanodegree--nd230'>nanodegree</a> program by Udacity consists of 3 courses - Supervised Learning, Deep Learning, Unsupervised Learning - to learn foundational machine learning algorithms, data cleaning, supervised, deep and unsupervised learning.",
    url: "",
    github: "https://github.com/XandraV/machine-learning-nanodegree",
    img: `${process.env.REACT_APP_S3_BASE_URL}udacity1.png`,
  },
  {
    name: "Deep Reinforcement Learning Nanodegree",
    companyName: "Udacity",
    description:
      "This <a href='https://www.udacity.com/course/deep-reinforcement-learning-nanodegree--nd893'>nanodegree</a> program by Udacity consists of 4 courses - Foundations of Reinforcement Learning, Value-Based Methods, Policy-Based Methods, Multi-Agent Reinforcement Learning - to learn cutting-edge deep reinforcement learning algorithms from Deep Q-Networks (DQN) to Deep Deterministic Policy Gradients (DDPG) and apply these concepts to train agents to walk, drive, or perform other complex tasks.",
    url: "",
    github: "https://github.com/XandraV/deep-reinforcement-learning-nanodegree",
    img: `${process.env.REACT_APP_S3_BASE_URL}udacity2.png`,
  },
];

export const experienceData = [
  {
    title: "Frontend Engineer",
    companyName: "NatWest",
    description:
      "<ul><li>Implementing user journey enhancements and new features for, NatWest’s online banking platform in React, creating and maintaining unit tests</li><li>Working closely with UX designers, addressing UI improvements and translating wireframes into refined story tickets</li><li>Working in an Agile and Scrum development team with frequently changing requirements</li></ul>",
    date: "April 2021 - present",
    companyImg:
      "https://www.harrowtowncentre.co.uk/wp-content/uploads/2021/05/nw.jpg",
  },
  {
    title: "Software Engineer",
    companyName: "Capco",
    description:
      "<ul><li>Project lead and implemented responsive, mobile friendly UI for <a href='https://framework.capco.io/'>Digital Engineering Framework Application</a> using TypeScript, React</li><li>Automated test execution and deployment to GCP</li><li>Leading the design and development of new React UI for the Capco Challenge Application, built with React, Node.js, MongoDB</li><li>Created <a href='https://master.d3qm5n59wrk3b.amplifyapp.com/'>Capco Tech Radar</a> in React, D3.js, deployed to AWS via CI/CD pipeline</li><li>Created unit tests and E2E tests ensuring coverage above 80%</li><li>Organised brainstorming sessions, lead conversations on technical improvements</li><li>Collaborated with UX/UI designers and assisted with feature designs</li><li>Mentoring junior developers, participating in pair-programming sessions</li></ul>",
    date: "February 2021 - April 2021",
    companyImg:
      "https://media.glassdoor.com/sql/400565/capco-squarelogo-1568295346711.png",
  },
  {
    title: "Associate Software Engineer",
    companyName: "Cancer Research UK",
    description:
      "<ul><li>Implemented new sign up forms in React for fundraising events such as Race for Life and Stand</li><li>Wrote unit tests and automated E2E tests</li><li>Performed accessibility testing to ensure performance</li><li>Reviewed colleagues’ code and taking part in pair programming sessions</li></ul>",
    date: "May 2020 – February 2021",
    companyImg:
      "https://pbs.twimg.com/profile_images/1410531321420582913/-6kqQSRV_400x400.jpg",
  },
  {
    title: "Automation Test Engineer",
    companyName: "Cancer Research UK",
    description:
      "<ul><li>Wrote automated tests in TypeScript, JavaScript and Java</li><li>Contributed to PoC work and assisted with framework migration</li><li>Upskilled a team of 24 testers by pair programming session</li><li>Reported defects, recorded test results and prepared release documents</li></ul>",
    date: "April 2019 – April 2020",
    companyImg:
      "https://pbs.twimg.com/profile_images/1410531321420582913/-6kqQSRV_400x400.jpg",
  },
  {
    title: "Quality Assurance Engineer",
    companyName: "CENTURY Tech",
    description:
      "<ul><li>Created automated tests for an online learning platform in Python and TypeScript</li> </ul>",
    date: "March 2018 – March 2019",
    companyImg:
      "https://pbs.twimg.com/profile_images/1206563816663846913/27e0cG6n_400x400.jpg",
  },
];
