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
  username: "서태준",
  title: "안녕하세요, 서태준입니다",
  subTitle: emoji(
    "제조업 DX 추진 이력을 가진 개발자입니다. 🚀 케이조선에서 생산 부문을 담당하며 현장 데이터를 ERP 시스템과 웹 프로그래밍을 통해 효과적으로 관리할 수 있도록 지원하는 소프트웨어 개발 및 유지보수 업무를 수행했습니다."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saltae",
  gmail: "poppo99@naver.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "보유 기술",
  subTitle: "업무에 활용 가능한 기술 스택입니다.",
  skills: [
    emoji(
      "⚡ 생산관리, 제조, 생산기술, 품질관리, 공정관리 등 제조업 도메인 지식"
    ),
    emoji("⚡ Oracle ERP, Oracle DB, MS-SQL 등 데이터베이스 활용 능력"),
    emoji(
      "⚡ Jquery, Spring, 전자정부 프레임워크, C#, .Net, React 등 다양한 프레임워크를 활용한 개발 능력"
    )
  ],

  softwareSkills: [
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MS-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: ".Net",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "창원대학교",
      // logo: require("./assets/images/changwon_logo.png"),
      subHeader: "컴퓨터공학과 학사",
      duration: "2012.03 ~ 2018.08",
      desc: "영상처리를 이용한 차선이탈 감지 시스템 논문 작성",
      descBullets: [
        "학점: 3.49/4.5",
        "분산멀티미디어 연구실에서 학생연구원 활동"
      ]
    },
    {
      schoolName: "경상고등학교",
      // logo: require("./assets/images/kyungsang_logo.png"),
      subHeader: "이과계열",
      duration: "2008.03 ~ 2011.02",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "제조업 DX", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "웹 개발",
      progressPercentage: "80%"
    },
    {
      Stack: "데이터베이스",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "정보운영팀 대리",
      company: "포스텍",
      companylogo: require("./assets/images/postech_logo.png"),
      date: "2019.10 ~ 재직중",
      desc: "케이조선(STX 조선해양) 생산 품질 파트 ERP 관리, QMS 운영 관리, SCM 생산 파트 운영 관리, APS 운영 담당 등 다양한 업무를 수행했습니다.",
      descBullets: [
        "케이조선 생산 파트 ERP 화면개발 및 유지 보수 관리 담당 : 품질,공정,외주계약등 생산 전반 시스템 관리",
        "케이조선 QMS 신규 화면 개발 및 유지보수 관리 담당 : ISO9001심사 지원 및 케이조선 업무 프로세스 관리",
        "케이조선 SCM 생산 파트 신규 화면 개발 및 유지보수 관리 담당 : 품질,공정,외주계약등 생산 전반 시스템 관리"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "주요 프로젝트",
  subtitle: "회사에서 진행했던 주요 프로젝트입니다.",
  projects: [
    {
      // image: require("./assets/images/kship_logo.png"),
      projectName: "밀폐구역 작업자 관리 Main개발",
      projectDesc: "선박 밀폐구역 작업자 출입 정보 및 유해가스 검출 모니터링 시스템을 개발했습니다.",
      footerLink: [
      ]
    },
    {
      // image: require("./assets/images/kship_logo.png"),
      projectName: "중장비 스마트 모니터링 Main개발",
      projectDesc: "사내 중장비 실시간 운행이력 및 관리 모니터링 시스템을 개발했습니다.",
      footerLink: [
      ]
    },
    {
      // image: require("./assets/images/dhs_logo.png"),
      projectName: "대한조선 ERP 신규 개발",
      projectDesc: "대한조선 사내 신규 ERP 시스템을 구축했습니다.",
      footerLink: [
      ]
    },
    {
      // image: require("./assets/images/dhs_logo.png"),
      projectName: "LG 사이언스 공정 모니터링 개발",
      projectDesc: "LG 창원 공단 제품 공정 실시간 모니터링 및 관리 시스템을 개발했습니다.",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("자격 및 수상 🏆 "),
  subtitle:
    "자격증, 수상 내역 등 제가 이루어낸 것들입니다.",

  achievementsCards: [
    {
      title: "정보처리기사",
      subtitle: "한국산업인력공단"
    },
    {
      title: "MOS Master",
      subtitle: "Microsoft"
    },
    {
      title: "특허등록",
      subtitle: "특허청"
    },
    {
      title: "기술사업화 전문코디네이터",
      subtitle: "Korea Valuation Association (KVA)"
    },
    {
      title: "데이터분석준전문가(ADsP)",
      subtitle: "한국데이터베이스진흥원"
    },
    {
      title: "SQL개발자(SQLD자격)",
      subtitle: "한국데이터베이스진흥센터"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "010-5198-7912",
  email_address: "poppo99@naver.com"
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
