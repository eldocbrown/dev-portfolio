export default [
  {
    id: "poli",
    keywords: [
      "django", "js", "css"
    ],
    title: "Poli",
    subtitle: "an appointment manager app",
    imgTitleFilename: "devpoli-cover.png",
    descriptionParagraphs: [
      "Poli is a platform that allows an organization whose work takes place at different locations to establish the capacities to execute different types of tasks in parallel (or not) at user-defined time intervals, within a specific calendar. The model under which tasks and locations are created and configured is based exclusively on the user or organization experience.",
      "Built with Django and Python, using Django's standard authentication services, and models persisted on a PostgreSQL relational database, Poli's backend is coded using TDD as one QA practice. On the frontend side, HTML, CSS and vanilla Javascript is used.",
      "The whole application is governed by a pipeling implemented on GitHub Actions, were deployments are made on Heroku when all tests pass and a code coverage threshold is met, failing the whole process when conditions are not met. Code Coverage report is published on Github Pages as part of the pipeline, on a daily basis at the minimum."
    ],
    imgDescriptionFileNames: [
      "devpoli-01.png"
    ],
    github: "https://github.com/eldocbrown/poli",
    liveLink: "http://poliapp.herokuapp.com"
  },
  {
    id: "portfolio",
    keywords: [
      "react", "css"
    ],
    title: "Portfolio",
    subtitle: "data about myself and my work",
    imgTitleFilename: "devportfolio-cover.jpg",
    descriptionParagraphs: [
      "My work portfolio built with React,as a single page application, making use of React Router Router and PropTypes libraries. The Work section content is built so its content is loaded dynamically by reading a javascript object, so when a new project needs to be published to this portfolio, only the javascript object and images need to be commited to the repository.",
      "Responsive design is accomplished by CSS Media Queries. CSS Custom Properties and Variables are used to maintain style consistency easily over different components. Navigation menu sliding and hamburger transformmation behaviour is built with CSS Transitions. Image overlap on headers is implemented with CSS Grids.",
      "This application is deployed automatically with GitHub Actions on GitHub Pages."
    ],
    imgDescriptionFileNames: [
      "devportfolio-02.png",
      "devportfolio-03.png"
    ],
    github: "https://github.com/eldocbrown/portfolio-dev",
    liveLink: "http://poliapp.herokuapp.com"
  },
  {
    id: "currency",
    keywords: [
      "react", "hooks", "jest"
    ],
    title: "Currency",
    subtitle: "currency exchange rate converter",
    imgTitleFilename: "devcurrency-cover.png",
    descriptionParagraphs: [
      "Online currency converter React application, using rates pulled from Foreign exchange rates API (https://exchangeratesapi.io/). Initial exhange rates loading and change events are handled with React Hooks.",
      "Tests are built with Jest and React Test Renderer, and pipeline is set to deploy the app on +90% code coverage only, and no tests failures.",
      "Application is automatically built, tested and deployed with GitHub Actions and published at the project repository's GitHub Pages."
    ],
    imgDescriptionFileNames: [
      "devcurrency-01.png"
    ],
    github: "https://github.com/eldocbrown/currency",
    liveLink: "https://eldocbrown.github.io/currency/"
  },
  {
    id: "poli4",
    keywords: [
      "django", "javascript", "css"
    ],
    title: "Poli",
    subtitle: "an appointment manager app",
    imgTitleFilename: "portfolio-01.jpg",
    descriptionParagraphs: [
      "Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?",
      "Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?"
    ],
    imgDescriptionFileNames: [
      "portfolio-details.jpg"
    ],
    github: "https://github.com/eldocbrown/poli",
    liveLink: ""
  },
]
