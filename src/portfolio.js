/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kush Faldu",
  title: "Hi all, I'm Kush",
  subTitle: emoji(
    "I'm a Full Stack Software Developer 🚀 with hands-on experience building web and mobile applications using JavaScript, React.js, Node.js, React Native, and a variety of modern frameworks and libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kushfaldu19",
  linkedin: "https://www.linkedin.com/in/kush-faldu-a2017a19b",
  gmail: "kushfaldu13@gmail.com",
  gitlab: "https://gitlab.com/kushfaldu19",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full-Stack Developer | Machine Learning Enthusiast | Cloud Integrator | Data Explorer",
  skills: [
    // Frontend & Web
    emoji("✨ Craft intuitive front-end experiences with React, Angular, HTML/CSS, and Next.js"),
    emoji("🔧 Build robust and scalable backends with Node.js, Django, Flask, and PHP"),
    emoji("📱 Develop mobile-responsive web apps and Progressive Web Apps (PWAs)"),

    // Cloud & DevOps
    emoji("🔗 Integrate apps with AWS, Google Cloud, and CI/CD pipelines using Docker & Jenkins"),
    emoji("⚙️ Automate workflows with GitHub Actions and container orchestration"),

    // Data & Machine Learning
    emoji("📊 Analyze data with Pandas, NumPy, Tableau, and SQL"),
    emoji("🧠 Develop ML models using Scikit-learn, TensorFlow, Keras, XGBoost"),
    emoji("🧪 Conduct A/B testing and causal inference for product experiments"),
    emoji("🔍 Use SHAP and StatsModels for model interpretability and statistical analysis")
  ],

  softwareSkills: [
    // Web
    { skillName: "HTML", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-python" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },

    // Tools & Platforms
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Google Cloud", fontAwesomeClassname: "fab fa-google" },
    { skillName: "Jupyter", fontAwesomeClassname: "fas fa-book" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie" },

    // Data Science & ML
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-superscript" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "Keras", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "XGBoost", fontAwesomeClassname: "fas fa-rocket" },
    { skillName: "SHAP", fontAwesomeClassname: "fas fa-lightbulb" },
    { skillName: "StatsModels", fontAwesomeClassname: "fas fa-percentage" },

    // Databases
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Oracle", fontAwesomeClassname: "fas fa-database" }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "North Carolina State University",
      logo: require("./assets/images/NCSULogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - May 2025",
      desc: "Participated in the research of AI based Compilers",
     
    },
    {
      schoolName: "University Of North Carolina at Charlotte",
      logo: require("./assets/images/UNCCLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2019 - May 2020",
      desc: "Honors: Dean's List: Fall 2019, Chancellor's List: Spring 2020",
   
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { 
      Stack: "Frontend (React, HTML/CSS)", //Insert stack or technology you have experience in 
      progressPercentage: 900 //Insert relative proficiency in percentage
    },
    { 
      Stack: "Backend (Node.js, Flask)", 
      progressPercentage: 900 
    },
    { 
      Stack: "Data Science (Pandas, scikit-learn)", 
      progressPercentage: 950 
    },
    { 
      Stack: "Machine Learning (TensorFlow, PyTorch)", 
      progressPercentage: 900 
    },
    { 
      Stack: "Cloud & DevOps (AWS, Docker)", 
      progressPercentage: 800 
    },
    { 
      Stack: "Cybersecurity (OWASP, Python)", 
      progressPercentage: 600 
    },
    { 
      Stack: "Programming (Python, C++, Java)", 
      progressPercentage: 1000 
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer – Senior Design Project",
      company: "WolfConnect (Sponsored by K2S) – NCSU",
      companylogo: require("./assets/images/K2SLogo.png"),
      date: "January 2025 - May 2025",
      desc: "Led the development of a full-stack mentorship platform using Laravel, React, and REST APIs within a Dockerized microservices architecture.",
      descBullets: [
        "Built a recommendation engine using weighted scoring for optimized mentor–mentee matchmaking",
        "Created an activity feed and analytics dashboard with SQL and real-time state management",
        "Employed test-driven development with PHPUnit and Jest; resolved 12+ critical issues"
      ]
    },
    {
      role: "Compiler Tool Developer – Academic Project",
      company: "NCSU",
      companylogo: require("./assets/images/NCSULogo.png"),
      date: "August 2024 - December 2024",
      desc: "Developed an LLVM-based tool to detect performance-critical input features in compiled code.",
      descBullets: [
        "Created custom compiler passes in C++ for static and dynamic analysis",
        "Enabled support for loops, branches, and pointers in input tracking",
        "Improved feature detection accuracy and analysis performance"
      ]
    },
    {
      role: "Software Engineer – Web Application",
      company: "CoffeeMaker Project – NCSU",
      companylogo: require("./assets/images/NCSULogo.png"),
      date: "January 2024 - May 2024",
      desc: "Built a beverage ordering web app using AngularJS, Java, and REST APIs.",
      descBullets: [
        "Led frontend integration with secure backend systems using Hibernate and MySQL",
        "Revamped UI with Bootstrap and AngularJS for better UX and dynamic views",
        "Implemented inventory and role-based access features"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "Some personal and academic projects I've worked on recently",
  projects: [
    {
      image: require("./assets/images/movieRecommender.png"),
      projectName: "Personalized Movie Recommender",
      Desc:
        "Built a hybrid movie recommender using Neural Collaborative Filtering, Gradient Boosting, and ensemble models. Deployed via a responsive Flask dashboard for real-time interaction and analysis.\n\n📅 Timeline: November 2024 – December 2024 (1 month)\n📊 Key Contributions:\n- Integrated collaborative + content-based filtering\n- Tuned model using validation RMSE and ensemble averaging\n- Built and deployed interactive Flask dashboard\n🔧 Tools: Python, Flask, Pandas, scikit-learn, Surprise",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/kushfaldu19/movie-recommender"
        }
      ]
    },
    {
      image: require("./assets/images/stockPredictor.png"),
      projectName: "LSTM-Based Stock Price Predictor",
      projectDesc:
        "Engineered a deep learning pipeline using LSTM to predict stock prices with feature normalization and rolling windows. Visualized results using Matplotlib and Seaborn.\n\n📅 Timeline: January 2025 – February 2025 (1 month)\n📊 Key Contributions:\n- Preprocessed time series data with normalization and windowing\n- Designed stacked LSTM model to learn sequential trends\n- Evaluated predictions with MAE and RMSE\n🔧 Tools: Python, TensorFlow/Keras, NumPy, Matplotlib, Seaborn",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/kushfaldu19/stock-price-predictor"
        }
      ]
    },
    {
      image: require("./assets/images/abTestingSimulator.png"),
      projectName: "Product Funnel Analytics & A/B Testing Simulator",
      projectDesc:
        "Designed and analyzed an A/B test to optimize website engagement by comparing two UI variations.\n\n📅 Timeline: February 2025 – March 2025 (1.5 months)\n📊 Key Contributions:\n- Designed Variant A and B with different CTAs and layouts\n- Collected and analyzed click-through rates (CTR), resulting in a 54% success rate for Variant B\n- Interpreted statistical significance and recommended deployment based on user engagement\n🔧 Tools: Python, Pandas, Tableau, Google Optimize",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/kushfaldu19/ab-testing-simulator"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//blog section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
   title: "TALKS",
   subtitle: emoji(
     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
   ),

   talks: [
     {
       title: "Build Actions For Google Assistant",
       subtitle: "Codelab at GDG DevFest Karachi 2019",
       slides_url: "https://bit.ly/saadpasta-slides",
       event_url: "https://www.facebook.com/events/2339906106275053/"
     }
   ],
   display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
   title: emoji("Podcast 🎙️"),
   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
   podcast: [
     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
   ],
   display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel Free to reach out to me using the contact information below.",
  number: "+1(980)-318-2531",
  email_address: "kushfaldu13@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
 illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
