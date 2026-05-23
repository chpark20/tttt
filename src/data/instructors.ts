import type { Instructor } from "@/types/education";

export const instructors: Instructor[] = [
  {
    id: "inst-1",
    name: { ko: "김정호", en: "Jeongho Kim" },
    title: { ko: "로봇 공학 수석 강사", en: "Senior Robotics Instructor" },
    bio: {
      ko: "KAIST 로봇 공학 박사 출신으로 산업용 로봇 시스템 설계 15년 경력을 보유하고 있습니다. 현재 PBI 교육센터에서 성인 및 기업 교육을 담당하고 있습니다.",
      en: "Ph.D. in Robotics from KAIST with 15 years of experience in industrial robot system design. Currently leads adult and corporate education at PBI Education Center.",
    },
    specialties: ["산업용 로봇", "ROS2", "시스템 설계"],
    image: "/images/instructor-placeholder.svg",
  },
  {
    id: "inst-2",
    name: { ko: "이수연", en: "Sooyeon Lee" },
    title: { ko: "AI 로봇 전문 강사", en: "AI Robotics Specialist Instructor" },
    bio: {
      ko: "서울대 컴퓨터공학 석사 출신으로 AI와 로봇의 융합 분야를 연구하고 있습니다. 청소년 AI 로봇 프로젝트 과정과 온라인 학습 콘텐츠 개발을 담당합니다.",
      en: "M.S. in Computer Science from Seoul National University, researching AI-robotics convergence. Leads the Teen AI Robot Project course and develops online learning content.",
    },
    specialties: ["머신러닝", "컴퓨터 비전", "파이썬"],
    image: "/images/instructor-placeholder.svg",
  },
  {
    id: "inst-3",
    name: { ko: "박민우", en: "Minwoo Park" },
    title: { ko: "키즈 로봇 교육 전문 강사", en: "Kids Robotics Education Specialist" },
    bio: {
      ko: "초등 교육학을 전공하고 로봇 교육 분야에서 8년간 활동하고 있습니다. 아이들의 눈높이에 맞춘 재미있고 효과적인 수업으로 학부모들에게 큰 호응을 얻고 있습니다.",
      en: "Majored in elementary education with 8 years in robotics education. Known for fun and effective classes at children's level, highly praised by parents.",
    },
    specialties: ["블록 코딩", "스크래치", "아동 교육"],
    image: "/images/instructor-placeholder.svg",
  },
  {
    id: "inst-4",
    name: { ko: "최하늘", en: "Haneul Choi" },
    title: { ko: "메카트로닉스 강사", en: "Mechatronics Instructor" },
    bio: {
      ko: "한양대 메카트로닉스공학 석사 출신으로, 아두이노와 3D 프린팅을 활용한 교육에 특화되어 있습니다. 청소년 로봇 공학 입문 과정의 메인 강사입니다.",
      en: "M.S. in Mechatronics from Hanyang University, specialized in Arduino and 3D printing education. Main instructor for the Teen Robot Engineering Intro course.",
    },
    specialties: ["아두이노", "3D 프린팅", "전자회로"],
    image: "/images/instructor-placeholder.svg",
  },
  {
    id: "inst-5",
    name: { ko: "윤서진", en: "Seojin Yoon" },
    title: { ko: "스마트팩토리 교육 전문가", en: "Smart Factory Education Expert" },
    bio: {
      ko: "포항공대 산업경영공학 박사 출신으로, 삼성전자에서 10년간 스마트팩토리 구축 프로젝트를 이끌었습니다. 기업 교육과 스마트팩토리 컨설팅을 담당합니다.",
      en: "Ph.D. in Industrial Engineering from POSTECH. Led smart factory projects at Samsung Electronics for 10 years. Handles corporate training and smart factory consulting.",
    },
    specialties: ["스마트팩토리", "협동 로봇", "공정 자동화"],
    image: "/images/instructor-placeholder.svg",
  },
  {
    id: "inst-6",
    name: { ko: "장예린", en: "Yerin Jang" },
    title: { ko: "수중 로봇 기술 강사", en: "Underwater Robotics Instructor" },
    bio: {
      ko: "해양과학기술원 출신으로 수중 로봇 연구 경력 7년을 보유하고 있습니다. PBI의 수중 로봇 기술을 교육 콘텐츠로 개발하며, 온라인 학습 영상을 제작합니다.",
      en: "From KIOST with 7 years of underwater robot research experience. Develops PBI's underwater robot technology into educational content and produces online learning videos.",
    },
    specialties: ["수중 로봇", "해양 공학", "로봇 설계"],
    image: "/images/instructor-placeholder.svg",
  },
];
