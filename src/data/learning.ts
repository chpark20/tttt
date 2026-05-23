import type { LearningContent } from "@/types/education";

export const learningContents: LearningContent[] = [
  {
    id: "learn-1",
    slug: "understanding-robots",
    title: { ko: "로봇의 이해", en: "Understanding Robots" },
    description: {
      ko: "로봇의 역사부터 현재까지, 로봇 기술의 발전 과정과 기본 원리를 영상으로 쉽게 배울 수 있는 입문 강좌입니다. 다양한 로봇의 종류와 활용 분야를 소개합니다.",
      en: "An introductory video course covering the history and evolution of robotics, from basic principles to modern applications. Introduces various types of robots and their use cases.",
    },
    category: "video",
    thumbnail: "/images/learning-video.svg",
    duration: "45분",
    level: "beginner",
    tags: ["입문", "로봇 역사", "로봇 종류"],
  },
  {
    id: "learn-2",
    slug: "sensors-and-actuators",
    title: { ko: "센서와 액추에이터", en: "Sensors and Actuators" },
    description: {
      ko: "로봇의 감각 기관인 센서와 운동 기관인 액추에이터의 원리와 종류를 상세히 설명합니다. 초음파, 적외선, 라이다 센서와 다양한 모터 시스템을 다룹니다.",
      en: "Detailed explanation of sensors (robot senses) and actuators (robot motors). Covers ultrasonic, infrared, LiDAR sensors and various motor systems.",
    },
    category: "video",
    thumbnail: "/images/learning-video.svg",
    duration: "60분",
    level: "intermediate",
    tags: ["센서", "액추에이터", "하드웨어"],
  },
  {
    id: "learn-3",
    slug: "robot-programming-basics",
    title: { ko: "로봇 프로그래밍 기초", en: "Robot Programming Basics" },
    description: {
      ko: "브라우저에서 직접 코드를 작성하고 가상 로봇을 움직여볼 수 있는 인터랙티브 학습 콘텐츠입니다. 파이썬 기초 문법과 로봇 제어 명령을 단계별로 학습합니다.",
      en: "Interactive learning content where you can write code in the browser and move a virtual robot. Learn Python basics and robot control commands step by step.",
    },
    category: "interactive",
    thumbnail: "/images/learning-interactive.svg",
    duration: "90분",
    level: "beginner",
    tags: ["파이썬", "코딩", "인터랙티브"],
  },
  {
    id: "learn-4",
    slug: "ai-meets-robots",
    title: { ko: "AI와 로봇의 만남", en: "When AI Meets Robots" },
    description: {
      ko: "인공지능 기술이 로봇에 어떻게 적용되는지를 다루는 고급 영상 강좌입니다. 머신러닝, 딥러닝, 강화학습이 로봇의 자율성을 어떻게 향상시키는지 알아봅니다.",
      en: "An advanced video course on how AI technology is applied to robots. Explore how machine learning, deep learning, and reinforcement learning enhance robot autonomy.",
    },
    category: "video",
    thumbnail: "/images/learning-video.svg",
    duration: "75분",
    level: "advanced",
    tags: ["AI", "머신러닝", "딥러닝", "자율 로봇"],
  },
  {
    id: "learn-5",
    slug: "underwater-robot-technology",
    title: { ko: "수중 로봇 기술", en: "Underwater Robot Technology" },
    description: {
      ko: "PBI의 핵심 기술인 수중 로봇의 설계, 방수 처리, 수중 통신 등 특수 기술에 대해 다루는 기술 문서입니다. 수중 환경에서의 로봇 운용 노하우를 공유합니다.",
      en: "Technical documentation covering PBI's core underwater robot technologies including design, waterproofing, and underwater communication. Shares robot operation know-how in underwater environments.",
    },
    category: "document",
    thumbnail: "/images/learning-document.svg",
    duration: "읽기 30분",
    level: "intermediate",
    tags: ["수중 로봇", "방수", "PBI 기술"],
  },
  {
    id: "learn-6",
    slug: "robot-ethics-and-future",
    title: { ko: "로봇 윤리와 미래", en: "Robot Ethics and the Future" },
    description: {
      ko: "로봇 기술의 발전이 사회에 미치는 영향과 로봇 윤리에 대해 생각해보는 교양 문서입니다. 로봇과 일자리, 로봇 권리, AI 윤리 등 다양한 주제를 다룹니다.",
      en: "An educational document exploring the societal impact of robotics and robot ethics. Covers topics including robots and jobs, robot rights, and AI ethics.",
    },
    category: "document",
    thumbnail: "/images/learning-document.svg",
    duration: "읽기 20분",
    level: "beginner",
    tags: ["윤리", "미래", "사회", "교양"],
  },
];

export function getLearningBySlug(slug: string): LearningContent | undefined {
  return learningContents.find((l) => l.slug === slug);
}
