interface techType {
  [k: string]: Array<{ name: string; link: string }>;
  preferred: Array<{ name: string; link: string }>;
  learning: Array<{ name: string; link: string }>;
}

export const data: Array<{ name: string; data: techType }> = [
  {
    name: "Languages",
    data: {
      preferred: [
        {
          name: "TypeScript",
          link: "https://img.icons8.com/color/452/typescript.png",
        },
        {
          name: "JavaScript",
          link: "https://d2gdtie5ivbdow.cloudfront.net/media/images/javascript.png",
        },

        { name: "Python", link: "https://img.icons8.com/color/452/python.png" },
      ],
      learning: [
        {
          name: "Java",
          link: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
        },
        {
          name: "MongoDB",
          link: "https://www.iamsteveni.com/static/img/mongodb.png",
        },
        {
          name: "SQL",
          link: "https://www.iamsteveni.com/static/img/mysql.png",
        },
        {
          name: "Q#",
          link: "https://qsharp.community/assets/images/qsharp-comm-logo.png",
        },
      ],
    },
  },
  {
    name: "Libraries",
    data: {
      preferred: [
        {
          name: "React",
          link: "https://img.icons8.com/color/452/react-native.png",
        },
        {
          name: "Redux",
          link: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
        },
        {
          name: "Jest",
          link: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_jest.svg",
        },
        {
          name: "Cypress",
          link: "https://icons-for-free.com/iconfiles/png/512/cypress-1324440144114984250.png",
        },
      ],
      learning: [
        {
          name: "Node",
          link: "https://www.iamsteveni.com/static/img/nodejs.png",
        },
        {
          name: "Flask",
          link: "https://spng.subpng.com/20180508/rie/kisspng-flask-python-web-framework-web-application-tutoria-5af1dbb6d4ea62.8503418315257998628721.jpg",
        },
        {
          name: "D3.js",
          link: "https://symbols.getvecta.com/stencil_78/1_d3js-icon.c055dd1c87.png",
        },
        {
          name: "Three.js",
          link: "https://themightyprogrammer.dev/post/threejs.png",
        },
        {
          name: "GraphQL",
          link: "https://symbols.getvecta.com/stencil_82/66_graphql-icon.291fc05a38.svg",
        },
      ],
    },
  },
  {
    name: "Styling",
    data: {
      preferred: [
        {
          name: "Material UI",
          link: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
        },
        {
          name: "styled-components",
          link: "https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png",
        },
        {
          name: "Bootstrap",
          link: "https://img.icons8.com/color/452/bootstrap.png",
        },
      ],
      learning: [
        {
          name: "Semantic UI",
          link: "https://cdn.worldvectorlogo.com/logos/semantic-ui.svg",
        },
        {
          name: "SASS",
          link: "https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png",
        },
      ],
    },
  },
  {
    name: "Machnine Learning",
    data: {
      preferred: [
        {
          name: "Python",
          link: "https://img.icons8.com/color/452/python.png",
        },
        {
          name: "Numpy",
          link: "https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png",
        },
        {
          name: "Pandas",
          link: "https://pandas.pydata.org/static/img/pandas_mark.svg",
        },
      ],
      learning: [
        {
          name: "TensorFlow",
          link: "https://user-images.githubusercontent.com/13250741/64669187-33b55380-d47e-11e9-8bbf-c02a9d42f9a7.png",
        },
        {
          name: "PyTorch",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/512px-PyTorch_logo_icon.svg.png",
        },
      ],
    },
  },
  {
    name: "DevOps",
    data: {
      preferred: [
        {
          name: "GitHub",
          link: "https://img.icons8.com/fluent/452/github.png",
        },
        {
          name: "Bitbucket",
          link: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg",
        },
        {
          name: "VSCode",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
        },
      ],
      learning: [
        {
          name: "GCP",
          link: "https://img.icons8.com/color/452/google-cloud.png",
        },
        {
          name: "AWS",
          link: "https://img.icons8.com/color/452/amazon-web-services.png",
        },
        {
          name: "Jenkins",
          link: "https://symbols.getvecta.com/stencil_97/67_the-jenkins-project-icon.0141f64fe7.svg",
        },
        {
          name: "TeamCity",
          link: "https://cdn.worldvectorlogo.com/logos/teamcity-icon.svg",
        },
      ],
    },
  },
  {
    name: "UX/UI",
    data: {
      preferred: [
        {
          name: "Figma",
          link: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "AdobeXD",
          link: "https://cdn.iconscout.com/icon/free/png-512/adobe-xd-1869035-1583159.png",
        },
      ],
      learning: [
        {
          name: "Adobe PhotoShop",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNSz_1KXXo7jIJqQgI3GdHsLbzVqyMgzNtPoA011pZBkh-EqjnFijejw40rA4rX5HNdk&usqp=CAU",
        },
        {
          name: "Adobe Illustrator",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png",
        },
      ],
    },
  },
];

export const menuItems = [
  {
    name: "Tech Stack",
    url: "",
    subMenu: [
      {
        subName: "Languages",
        items: {
          preferred: ["TypeScript", "JavaScript", "Python"],
          learning: ["Java", "MongoDB", "SQL", "Q#"],
        },
      },
      {
        subName: "Libraries",
        items: {
          preferred: ["React", "Redux", "Jest", "Cypress"],
          learning: ["Node", "Flask", "D3.js", "Three.js", "GraphQL"],
        },
      },
      {
        subName: "Styling",
        items: {
          preferred: ["Material UI", "styled-components", "Bootstrap"],
          learning: ["Semantic UI", "SASS"],
        },
      },
      {
        subName: "Machine Learning",
        items: {
          preferred: ["Python", "Numpy", "Pandas"],
          learning: ["TensorFlow", "PyTorch"],
        },
      },
      {
        subName: "DevOps",
        items: {
          preferred: ["GitHub", "Bitbucket", "VSCode"],
          learning: ["GCP", "AWS", "Jenkins", "TeamCity"],
        },
      },
      {
        subName: "UX/UI",
        items: {
          preferred: ["Figma", "AdobeXd"],
          learning: ["Adobe PhotoShop", "Adobe Illustrator"],
        },
      },
    ],
  },
  {
    name: "Personal Projects",
    url: "personal-projects",
    subMenu: [
      {
        subName: "Mineral Database",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Stock Market Tracker",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Quantum Circuit Symulator",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Hieroglyp Identifier",
        items: { preferred: [], learning: [] },
      },
    ],
  },
  {
    name: "Work Projects",
    url: "work-projects",
    subMenu: [
      {
        subName: "Capco Engineering Framework",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Capco Technology Radar",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Capco Challenge",
        items: { preferred: [], learning: [] },
      },
    ],
  },
  {
    name: "Certifications",
    url: "certifications",
    subMenu: [
      {
        subName: "IBM Machine Learning",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Machine Learning with TensorFlow",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Deep Reinforcement Learning",
        items: { preferred: [], learning: [] },
      },
    ],
  },
  {
    name: "Experience",
    url: "experience",
    subMenu: [
      {
        subName: "NatWest",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Capco",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "Cancer Research UK",
        items: { preferred: [], learning: [] },
      },
      {
        subName: "CENTURY Tech",
        items: { preferred: [], learning: [] },
      },
    ],
  },
];
