import type { Program } from "@/types/education";

export const programs: Program[] = [
  {
    id: "prog-1",
    slug: "summer-robot-camp",
    name: { ko: "여름 로봇 캠프", en: "Summer Robot Camp" },
    description: {
      ko: "여름방학 기간 5일간 진행되는 집중 로봇 캠프입니다. 매일 다른 주제의 로봇을 만들고 프로그래밍하며, 마지막 날에는 로봇 경진대회를 개최합니다.",
      en: "A 5-day intensive robot camp during summer vacation. Build and program different robots each day, culminating in a robot competition on the final day.",
    },
    type: "camp",
    ageGroup: "초등 3~6학년",
    duration: "5일 (09:00-16:00)",
    location: { ko: "PBI 교육센터 (서울 금천구)", en: "PBI Education Center (Geumcheon-gu, Seoul)" },
    thumbnail: "/images/program-camp.svg",
    highlights: [
      { ko: "5일간 5종 로봇 제작 체험", en: "Build 5 different robots in 5 days" },
      { ko: "마지막 날 로봇 경진대회 개최", en: "Robot competition on the final day" },
      { ko: "점심 식사 및 간식 제공", en: "Lunch and snacks provided" },
      { ko: "완성 로봇 1대 가져가기", en: "Take home one completed robot" },
    ],
  },
  {
    id: "prog-2",
    slug: "family-robot-workshop",
    name: { ko: "가족 로봇 체험 워크숍", en: "Family Robot Workshop" },
    description: {
      ko: "부모와 자녀가 함께 참여하는 반나절 로봇 체험 프로그램입니다. 가족이 협력하여 로봇을 조립하고 간단한 미션을 수행하며 로봇 기술을 체험합니다.",
      en: "A half-day robot experience program for parents and children together. Families collaborate to assemble robots, complete missions, and experience robotics technology.",
    },
    type: "workshop",
    ageGroup: "가족 (자녀 6세 이상)",
    duration: "반나절 (10:00-13:00)",
    location: { ko: "PBI 교육센터 (서울 금천구)", en: "PBI Education Center (Geumcheon-gu, Seoul)" },
    thumbnail: "/images/program-workshop.svg",
    highlights: [
      { ko: "부모+자녀 2인 1팀 협동 활동", en: "Parent-child team collaboration" },
      { ko: "가족이 함께 만드는 로봇 키트 제공", en: "Family robot kit provided" },
      { ko: "로봇 미션 게임 및 가족 대항전", en: "Robot mission games and family competition" },
      { ko: "기념 사진 촬영 및 수료증 발급", en: "Photo session and participation certificate" },
    ],
  },
  {
    id: "prog-3",
    slug: "robot-factory-tour",
    name: { ko: "로봇 공장 견학", en: "Robot Factory Tour" },
    description: {
      ko: "PBI 로봇 생산 시설과 연구소를 직접 방문하여 로봇이 만들어지는 과정을 견학합니다. 현직 연구원의 설명과 함께 최신 로봇 기술을 체험할 수 있습니다.",
      en: "Visit PBI's robot production facility and research lab to see how robots are made. Experience the latest robot technology with explanations from active researchers.",
    },
    type: "field-trip",
    ageGroup: "초등 4학년 이상 ~ 성인",
    duration: "반나절 (14:00-17:00)",
    location: { ko: "PBI 연구소 (경기도 안산시)", en: "PBI Research Lab (Ansan, Gyeonggi-do)" },
    thumbnail: "/images/program-field-trip.svg",
    highlights: [
      { ko: "로봇 생산 라인 견학", en: "Robot production line tour" },
      { ko: "연구원과의 Q&A 세션", en: "Q&A session with researchers" },
      { ko: "최신 로봇 데모 시연", en: "Latest robot demo demonstration" },
      { ko: "기념품 증정", en: "Souvenir gift" },
    ],
  },
  {
    id: "prog-4",
    slug: "pbi-robot-challenge",
    name: { ko: "PBI 로봇 챌린지 대회", en: "PBI Robot Challenge Competition" },
    description: {
      ko: "PBI 교육생과 일반 참가자가 함께하는 연례 로봇 경진대회입니다. 라인 트레이서, 미로 탈출, 자유 과제 등 다양한 부문에서 실력을 겨루며 상금과 상장을 수여합니다.",
      en: "An annual robot competition for PBI students and general participants. Compete in line tracer, maze escape, and free-topic categories for prizes and certificates.",
    },
    type: "competition",
    ageGroup: "초등생 ~ 성인 (부문별)",
    duration: "1일 (09:00-18:00)",
    location: { ko: "서울 코엑스 컨퍼런스룸", en: "COEX Conference Room, Seoul" },
    thumbnail: "/images/program-competition.svg",
    highlights: [
      { ko: "초등/중고등/대학·성인 3개 부문", en: "3 divisions: Elementary, Teen, Adult" },
      { ko: "총 상금 500만원", en: "Total prizes of 5 million KRW" },
      { ko: "우수 참가자 PBI 인턴십 기회", en: "PBI internship opportunities for top performers" },
      { ko: "참가자 전원 기념품 증정", en: "Souvenirs for all participants" },
    ],
  },
  {
    id: "prog-5",
    slug: "school-visit-robot-class",
    name: { ko: "학교 방문 로봇 교실", en: "School Visit Robot Class" },
    description: {
      ko: "PBI 강사가 학교를 직접 방문하여 진행하는 로봇 특별 수업입니다. 학교의 교육 과정에 맞춰 로봇 키트와 커리큘럼을 제공하며, 학생들이 직접 로봇을 만들고 코딩합니다.",
      en: "Special robot classes where PBI instructors visit schools. Robot kits and curriculum are provided to match school education plans, and students build and code robots hands-on.",
    },
    type: "workshop",
    ageGroup: "초등학교 · 중학교",
    duration: "2~4시간 (학교 일정에 맞춤)",
    location: { ko: "신청 학교 방문", en: "Visiting the applying school" },
    thumbnail: "/images/program-workshop.svg",
    highlights: [
      { ko: "학교 교육 과정 연계 맞춤 수업", en: "Curriculum aligned with school education plan" },
      { ko: "학생 1인 1로봇 키트 제공", en: "One robot kit per student" },
      { ko: "교사용 지도 매뉴얼 제공", en: "Teacher guide manual provided" },
      { ko: "최소 20명 ~ 최대 120명 수용", en: "Accommodates 20 to 120 students" },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
