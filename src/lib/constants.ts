export const SITE_CONFIG = {
  name: {
    ko: "PBI 로봇 교육센터",
    en: "PBI Robot Education Center",
  },
  url: "https://pbi.dreamitbiz.com",
  ogImage: "/images/og/default.png",
  description: {
    ko: "로봇 교육의 미래, PBI 로봇 교육센터 - 키즈부터 성인, 기업까지 맞춤 로봇 교육",
    en: "The Future of Robot Education - PBI Robot Education Center for Kids, Adults & Corporates",
  },
} as const;

export const NAV_ITEMS = [
  { key: "courses", href: "/courses" },
  { key: "learning", href: "/learning" },
  { key: "programs", href: "/programs" },
  { key: "instructors", href: "/instructors" },
  { key: "about", href: "/about" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export const EDUCATION_CENTER_INFO = {
  phone: "02-6949-0136",
  phoneIntl: "+82-2-6949-0136",
  email: "edu@pbirobot.com",
  address: {
    ko: "서울특별시 금천구 가산디지털1로 168, C동 1209호",
    en: "C-1209, 168 Gasan Digital 1-ro, Geumcheon-gu, Seoul, Korea",
  },
  coordinates: {
    lat: 37.4786,
    lng: 126.8873,
  },
} as const;
