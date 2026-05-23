# PBI 로봇 교육 사이트 구축 계획

## Context
현재 D:\pbi에는 회사 제품 사이트(pbirobot.dreamitbiz.com)의 코드가 복사되어 있음. 이를 **로봇 교육 사이트**(pbi.dreamitbiz.com)로 전면 교체해야 함. 대상: 전 연령(키즈~성인~기업). 콘텐츠: 교육과정 + 온라인학습 + 체험프로그램 종합. 디자인: 전문적/깔끔.

기술 스택(Next.js 16, TypeScript, Tailwind v4, next-intl, Framer Motion 등)과 빌드/배포 인프라(Static Export, GitHub Actions → GitHub Pages)는 그대로 유지.

## 유지할 파일 (수정 없이 그대로)
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`
- `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/i18n/navigation.ts`
- `src/lib/utils.ts` (cn, formatPrice)
- `src/components/ui/Button.tsx`, `Card.tsx`, `Accordion.tsx`, `Input.tsx`
- `src/components/shared/ScrollReveal.tsx`, `SectionTitle.tsx`
- `src/components/layout/LocaleSwitcher.tsx`
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/not-found.tsx`
- `.github/workflows/deploy.yml`
- `src/images/logo.webp` (PBI 로고)

## Phase 1: 기반 파일 수정/생성

### 1-1. `public/CNAME` → `pbi.dreamitbiz.com`

### 1-2. `src/types/education.ts` (신규)
```typescript
export interface Course {
  id: string; slug: string;
  name: { ko: string; en: string };
  description: { ko: string; en: string };
  ageGroup: 'kids' | 'teens' | 'adults' | 'corporate';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  schedule: { ko: string; en: string };
  price: { krw: number; usd: number };
  thumbnail: string;
  features: { icon: string; title: { ko: string; en: string }; description: { ko: string; en: string } }[];
  curriculum: { title: { ko: string; en: string }; description: { ko: string; en: string } }[];
}

export interface LearningContent {
  id: string; slug: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  category: 'video' | 'document' | 'interactive';
  thumbnail: string; duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Program {
  id: string; slug: string;
  name: { ko: string; en: string };
  description: { ko: string; en: string };
  type: 'camp' | 'workshop' | 'field-trip' | 'competition';
  ageGroup: string; duration: string;
  location: { ko: string; en: string };
  thumbnail: string;
  highlights: { ko: string; en: string }[];
}

export interface Instructor {
  id: string; name: { ko: string; en: string };
  title: { ko: string; en: string };
  bio: { ko: string; en: string };
  specialties: string[]; image: string;
}

export interface EduFAQItem {
  id: string;
  question: { ko: string; en: string };
  answer: { ko: string; en: string };
  category: 'general' | 'courses' | 'programs' | 'payment';
}
```

### 1-3. `src/lib/constants.ts` (전면 수정)
- SITE_CONFIG: name → "PBI 로봇 교육센터" / "PBI Robot Education Center"
- NAV_ITEMS: courses, learning, programs, instructors, about, faq, contact (7개)
- COMPANY_INFO → EDUCATION_CENTER_INFO (주소, 전화, 이메일 교육센터용)

### 1-4. `src/lib/images.ts` (수정)
- 교육 관련 이미지 경로 매핑

### 1-5. `src/app/globals.css` (수정)
- 교육 테마 색상 토큰 추가: `--color-edu-kids`, `--color-edu-teens`, `--color-edu-adults`, `--color-edu-corporate`
- primary 컬러를 교육에 맞게 조정 (기존 #0056b3 유지 가능, 교육 강조색 추가)

## Phase 2: 데이터 파일

### 2-1. `src/data/courses.ts` (신규) - 8개 교육과정
1. 키즈 로봇 탐험대 (kids/beginner)
2. 주니어 로봇 코딩 (kids/intermediate)
3. 청소년 로봇 공학 입문 (teens/beginner)
4. 청소년 AI 로봇 프로젝트 (teens/advanced)
5. 성인 로봇 프로그래밍 기초 (adults/beginner)
6. 성인 로봇 자동화 실무 (adults/advanced)
7. 기업 로봇 도입 워크숍 (corporate/beginner)
8. 기업 스마트팩토리 로봇 교육 (corporate/advanced)

### 2-2. `src/data/learning.ts` (신규) - 6개 온라인 콘텐츠
1. 로봇의 이해 (video/beginner)
2. 센서와 액추에이터 (video/intermediate)
3. 로봇 프로그래밍 기초 (interactive/beginner)
4. AI와 로봇의 만남 (video/advanced)
5. 수중 로봇 기술 (document/intermediate)
6. 로봇 윤리와 미래 (document/beginner)

### 2-3. `src/data/programs.ts` (신규) - 5개 체험프로그램
1. 여름 로봇 캠프 (camp)
2. 가족 로봇 체험 워크숍 (workshop)
3. 로봇 공장 견학 (field-trip)
4. PBI 로봇 챌린지 대회 (competition)
5. 학교 방문 로봇 교실 (workshop)

### 2-4. `src/data/instructors.ts` (신규) - 6명
### 2-5. `src/data/edu-faq.ts` (신규) - 12개 FAQ (4카테고리)
### 2-6. 삭제: `src/data/products.ts`, `src/data/journey.ts`, `src/data/faq.ts`

## Phase 3: 메시지 파일 (전면 교체)
- `messages/ko.json` - 교육사이트 한국어 메시지
- `messages/en.json` - 교육사이트 영어 메시지
- 섹션: common, nav, home, courses, learning, programs, instructors, about, faq, contact, footer

## Phase 4: 컴포넌트

### 4-1. 홈 컴포넌트 (수정/교체)
- `src/components/home/HeroSection.tsx` → 교육 히어로 (슬라이드쇼 유지, 교육 메시지)
- `src/components/home/ProductShowcase.tsx` → `CourseShowcase.tsx` (인기 교육과정 4개 카드)
- `src/components/home/CompanyHighlights.tsx` → `WhyUsSection.tsx` (교육센터 강점 4가지)
- `src/components/home/CTASection.tsx` → 교육 CTA (수강신청/상담 유도)
- 신규: `src/components/home/TestimonialSection.tsx` (수강 후기)

### 4-2. 교육과정 컴포넌트 (신규)
- `src/components/courses/CourseCard.tsx`
- `src/components/courses/CourseGrid.tsx`
- `src/components/courses/CourseDetail.tsx`
- `src/components/courses/CourseFilter.tsx` (연령대/레벨 필터)

### 4-3. 온라인학습 컴포넌트 (신규)
- `src/components/learning/LearningCard.tsx`
- `src/components/learning/LearningGrid.tsx`
- `src/components/learning/LearningDetail.tsx`

### 4-4. 체험프로그램 컴포넌트 (신규)
- `src/components/programs/ProgramCard.tsx`
- `src/components/programs/ProgramGrid.tsx`
- `src/components/programs/ProgramDetail.tsx`

### 4-5. 강사진 컴포넌트 (신규)
- `src/components/instructors/InstructorCard.tsx`
- `src/components/instructors/InstructorGrid.tsx`

### 4-6. 소개 컴포넌트 (수정)
- `src/components/about/VisionSection.tsx` → 교육 비전
- `src/components/about/ValuesSection.tsx` → 교육 핵심가치
- `src/components/about/CertificationBadges.tsx` → 교육 인증/파트너
- 삭제: `BrandContent.tsx`, `Timeline.tsx`

### 4-7. FAQ 컴포넌트 (수정)
- `src/components/faq/FAQContent.tsx` → 교육 FAQ (4카테고리)

### 4-8. 문의 컴포넌트 (수정)
- `src/components/contact/ContactForm.tsx` → 교육 문의/수강 상담 폼
- `src/components/contact/CompanyInfoCard.tsx` → 교육센터 정보
- `src/components/contact/ContactContent.tsx` → 레이아웃 수정

### 4-9. 레이아웃 (수정)
- `src/components/layout/Header.tsx` → 새 NAV_ITEMS 7개, 장바구니 아이콘 제거
- `src/components/layout/Footer.tsx` → 교육 링크, 교육센터 정보

### 4-10. 삭제할 컴포넌트
- `src/components/products/` (전체 디렉토리)
- `src/components/store/` (전체 디렉토리)
- `src/components/blog/` (전체 디렉토리)
- `src/components/quote/` (전체 디렉토리)
- `src/components/shared/ProductImage.tsx`

## Phase 5: 페이지 파일

### 5-1. 수정
- `src/app/[locale]/layout.tsx` - 메타데이터 교육사이트로 변경
- `src/app/[locale]/page.tsx` - 홈: HeroSection, CourseShowcase, WhyUsSection, TestimonialSection, CTASection
- `src/app/[locale]/about/page.tsx` - 교육 비전/가치/인증
- `src/app/[locale]/faq/page.tsx` - 교육 FAQ
- `src/app/[locale]/contact/page.tsx` - 교육 문의

### 5-2. 신규
- `src/app/[locale]/courses/page.tsx` - 교육과정 목록 (필터 + 그리드)
- `src/app/[locale]/courses/[slug]/page.tsx` - 교육과정 상세 (generateStaticParams)
- `src/app/[locale]/learning/page.tsx` - 온라인학습 목록
- `src/app/[locale]/learning/[slug]/page.tsx` - 온라인학습 상세 (generateStaticParams)
- `src/app/[locale]/programs/page.tsx` - 체험프로그램 목록
- `src/app/[locale]/programs/[slug]/page.tsx` - 체험프로그램 상세 (generateStaticParams)
- `src/app/[locale]/instructors/page.tsx` - 강사진

### 5-3. 삭제
- `src/app/[locale]/products/` (전체)
- `src/app/[locale]/store/` (전체)
- `src/app/[locale]/blog/` (전체)
- `src/app/[locale]/quote/` (전체)
- `src/app/[locale]/about/brand/` (전체)
- `src/app/[locale]/about/journey/` (전체)

## Phase 6: 기타 삭제
- `src/store/cart-store.ts` (장바구니 불필요)
- `src/types/cart.ts`, `src/types/product.ts` → `src/types/education.ts`로 대체
- `src/images/pbi_1~9.webp` (제품 이미지, 교육 이미지로 대체 시 삭제)

## Phase 7: 빌드/배포
1. `npm run build` 로 정적 빌드 확인
2. DEVLOG.md 업데이트 (교육사이트 개발 내역)
3. git add → commit → push
4. GitHub Actions 자동 배포 → pbi.dreamitbiz.com

## 예상 정적 페이지 수
- / (redirect)
- /ko, /en (홈) x 2
- /[locale]/courses x 2
- /[locale]/courses/[slug] x 8 slugs x 2 locales = 16
- /[locale]/learning x 2
- /[locale]/learning/[slug] x 6 x 2 = 12
- /[locale]/programs x 2
- /[locale]/programs/[slug] x 5 x 2 = 10
- /[locale]/instructors x 2
- /[locale]/about x 2
- /[locale]/faq x 2
- /[locale]/contact x 2
- /_not-found x 1
- **총: ~55개 정적 페이지**

## 검증
1. `npm run build` - 에러 0개, 모든 정적 페이지 생성 확인
2. `npx serve out` - 로컬에서 /ko, /en 접속하여 페이지 렌더링 확인
3. git push 후 GitHub Actions 워크플로 성공 확인
