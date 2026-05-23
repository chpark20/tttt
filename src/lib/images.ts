import logo from "@/images/logo.webp";

export const images = {
  logo,
  hero: {
    main: "/images/hero-education.svg",
    kids: "/images/hero-kids.svg",
    teens: "/images/hero-teens.svg",
    adults: "/images/hero-adults.svg",
  },
  courses: {
    kids: "/images/course-kids.svg",
    teens: "/images/course-teens.svg",
    adults: "/images/course-adults.svg",
    corporate: "/images/course-corporate.svg",
  },
  learning: {
    video: "/images/learning-video.svg",
    document: "/images/learning-document.svg",
    interactive: "/images/learning-interactive.svg",
  },
  programs: {
    camp: "/images/program-camp.svg",
    workshop: "/images/program-workshop.svg",
    fieldTrip: "/images/program-field-trip.svg",
    competition: "/images/program-competition.svg",
  },
} as const;
