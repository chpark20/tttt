# PBI Robot Education Center - 개발일지

## 2026-03-15 | 상단 메뉴 배경색 흰색으로 변경 (로고 배경과 통일)

### 개요
상단 네비게이션 바의 배경색을 로고(흰색 배경)와 동일한 **불투명 흰색(`bg-white`)**으로 변경.
기존 반투명 글래스모피즘(`rgba(255,255,255,0.85)` + `backdrop-blur`)에서 깔끔한 흰색 배경으로 교체.

---

### 변경 사항

#### `src/components/layout/Header.tsx`
- 기본 상태: `bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px]` → `bg-white`
- 스크롤 시: `bg-white/95 backdrop-blur-xl` → `bg-white` (shadow-md, border 유지)
- 모바일 메뉴: `bg-white/95 backdrop-blur-xl` → `bg-white`

---

### 빌드 결과

```
✓ Compiled successfully in 5.7s
✓ Generating static pages (58/58) in 2.1s
```

---

## 2026-03-15 | 메뉴별 다크 그래디언트 페이지 헤더 적용

### 개요
각 메뉴 페이지(교육과정, 온라인학습, 체험프로그램, 강사진, FAQ, 문의, 소개) 상단에 **다크 블루 그래디언트 페이지 헤더**를 적용하였습니다. 히어로/CTA 섹션과 동일한 디자인 패턴으로 사이트 전체 비주얼 통일감을 확보.

---

### 변경 사항

#### `src/components/shared/PageHeader.tsx` — 신규 공통 컴포넌트
- 배경: `linear-gradient(135deg, #0046C8, #002E8A, #1E3A5F)` (히어로와 동일)
- 패딩: `pt-28 pb-16 lg:pt-32 lg:pb-20` (네비바 높이 고려)
- 타이틀: `text-3xl sm:text-4xl lg:text-5xl font-bold text-white`
- 서브타이틀: `text-lg text-white/75`
- 배경 파티클 3개 (animate-pulse)
- Framer Motion fade-up 애니메이션

#### 적용 페이지 (7개)

| 페이지 | 파일 | 변경 내용 |
|--------|------|----------|
| 교육과정 | `src/app/[locale]/courses/page.tsx` | `SectionTitle` → `PageHeader` |
| 온라인학습 | `src/app/[locale]/learning/page.tsx` | `SectionTitle` → `PageHeader` |
| 체험프로그램 | `src/app/[locale]/programs/page.tsx` | `SectionTitle` → `PageHeader` |
| 강사진 | `src/app/[locale]/instructors/InstructorsContent.tsx` | `SectionTitle` → `PageHeader` |
| FAQ | `src/components/faq/FAQContent.tsx` | `SectionTitle` → `PageHeader` |
| 문의 | `src/components/contact/ContactContent.tsx` | `SectionTitle` → `PageHeader` |
| 소개 | `src/components/about/VisionSection.tsx` | 커스텀 h1 → `PageHeader` |
| 소개(레이아웃) | `src/app/[locale]/about/page.tsx` | `pt-20` 제거 (PageHeader 자체 패딩) |

---

### 수정 파일 (9개)

| 파일 | 변경 |
|------|------|
| `src/components/shared/PageHeader.tsx` | **신규** — 다크 그래디언트 페이지 헤더 컴포넌트 |
| `src/app/[locale]/courses/page.tsx` | PageHeader 적용 |
| `src/app/[locale]/learning/page.tsx` | PageHeader 적용 |
| `src/app/[locale]/programs/page.tsx` | PageHeader 적용 |
| `src/app/[locale]/instructors/InstructorsContent.tsx` | PageHeader 적용 |
| `src/components/faq/FAQContent.tsx` | PageHeader 적용 |
| `src/components/contact/ContactContent.tsx` | PageHeader 적용 |
| `src/components/about/VisionSection.tsx` | PageHeader 적용 |
| `src/app/[locale]/about/page.tsx` | pt-20 제거 |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.8s
✓ Generating static pages (58/58) in 1127.6ms
```

- TypeScript 에러: 0개
- 정적 페이지: 58개

---

## 2026-03-15 | 디자인 개선 — 글래스모피즘 & 다크 그래디언트 (DreamIT Biz 템플릿 참고)

### 개요
D:\templete-ref (DreamIT Biz 템플릿)의 디자인 패턴을 참고하여 PBI 교육 사이트의 비주얼 품질을 개선하였습니다. 회사명, 콘텐츠, 기능은 변경 없이 **디자인/스타일만** 적용.

---

### 변경 사항

#### 1. `src/app/globals.css` — 디자인 토큰 체계화
- 그림자 4단계 CSS 변수 추가: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- 폰트: `Noto Sans KR` fallback 추가 (Pretendard 유지)
- 헤딩 letter-spacing: `-0.02em` 적용
- 네비 링크 밑줄 애니메이션 (`nav-link-underline`, scaleX transition)
- 스크롤 인디케이터 CSS (`.scroll-indicator-mouse`, `.scroll-indicator-wheel`)

#### 2. `src/components/layout/Header.tsx` — 글래스모피즘 네비바
- 기본 배경: `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`
- 스크롤 시: `bg-white/95` + `shadow-[var(--shadow-md)]` + `border-bottom`
- 데스크탑 네비 링크: `nav-link-underline` 클래스 적용 (hover 밑줄 scaleX 애니메이션)

#### 3. `src/components/home/HeroSection.tsx` — 다크 그래디언트 히어로
- 배경: 다크 블루 그래디언트 (`#0046C8 → #002E8A → #1E3A5F`)
- `min-height: min(85vh, 800px)`
- 텍스트: 흰색 기본 + 하이라이트 그래디언트 (sky-300 → blue-200 → white)
- 배지: `bg-white/10 border-white/20` 스타일로 변경
- CTA 버튼: 흰색 배경 + 아웃라인 흰색 (다크 배경 위 가시성)
- Feature 카드: `bg-white/10 backdrop-blur border-white/15`
- 스크롤 인디케이터 (마우스 아이콘 + 휠 애니메이션) 추가
- 배경 파티클 효과 추가 (6개 점, animate-pulse)

#### 4. `src/components/ui/Button.tsx` — hover 리프트 효과
- 공통: `hover:-translate-y-0.5` (2px 상승)
- primary: `hover:shadow-[0_8px_24px_rgba(0,70,200,0.3)]` (블루 글로우)
- secondary: `hover:shadow-[var(--shadow-md)]`
- outline: `hover:shadow-[0_8px_24px_rgba(0,70,200,0.15)]`

#### 5. `src/components/ui/Card.tsx` — hover 리프트 강화
- 기본 shadow: `shadow-[var(--shadow-sm)]`
- hover shadow: `shadow-[var(--shadow-lg)]` (기존 shadow-md → shadow-lg 강화)

#### 6. `src/components/layout/Footer.tsx` — 다크 그래디언트 강화
- 배경: `linear-gradient(180deg, #111827 0%, #0A0F1A 100%)` (기존 단색 → 그래디언트)
- 하단 구분선: `border-[rgba(255,255,255,0.08)]`

#### 7. `src/components/home/CTASection.tsx` — 다크 그래디언트 CTA
- 배경: `linear-gradient(135deg, #0046C8 → #002E8A → #1E3A5F)` (히어로와 통일)
- 텍스트: 흰색 + 하이라이트 그래디언트
- CTA 버튼: 흰색 배경 스타일
- 배경 파티클 3개 추가

---

### 수정 파일 (7개)

| 파일 | 변경 내용 |
|------|----------|
| `src/app/globals.css` | 그림자 토큰 4단계, Noto Sans KR, 밑줄 애니메이션, 스크롤 인디케이터 |
| `src/components/layout/Header.tsx` | 글래스모피즘 배경, 스크롤 shadow, 링크 밑줄 애니메이션 |
| `src/components/home/HeroSection.tsx` | 다크 그래디언트 배경, 하이라이트 텍스트, 스크롤 인디케이터 |
| `src/components/ui/Button.tsx` | hover translateY(-2px) + 블루 글로우 shadow |
| `src/components/ui/Card.tsx` | shadow-sm → shadow-lg hover 강화 |
| `src/components/layout/Footer.tsx` | 그래디언트 배경 (#111827 → #0A0F1A) |
| `src/components/home/CTASection.tsx` | 다크 그래디언트 + 히어로 스타일 통일 |

---

### 참고 디자인 패턴 (D:\templete-ref)

| 패턴 | 값 |
|------|-----|
| 그림자 sm | `0 1px 3px rgba(0,0,0,0.06)` |
| 그림자 md | `0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)` |
| 그림자 lg | `0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)` |
| 그림자 xl | `0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)` |
| 글래스모피즘 | `rgba(255,255,255,0.85)` + `blur(12px)` |
| 히어로 배경 | `linear-gradient(135deg, #0046C8, #002E8A, #1E3A5F)` |
| 버튼 hover | `translateY(-2px)` + `box-shadow: 0 8px 24px rgba(0,70,200,0.3)` |
| transition | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 푸터 배경 | `linear-gradient(180deg, #111827, #0A0F1A)` |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.1s
✓ Generating static pages (58/58) in 1393.5ms
```

- TypeScript 에러: 0개
- 정적 페이지: 58개

---

## 2026-03-15 | 타이틀 배경색 블루 컬러 적용

### 개요
히어로, 섹션 타이틀, CTA 타이틀의 그래디언트 텍스트를 **메인 블루(primary #0056b3) 배경 + 흰색 텍스트** 스타일로 변경하였습니다.

---

### 변경 사항

#### `src/components/shared/SectionTitle.tsx`
- h2: `gradient-text` → `text-white bg-primary px-6 py-2 rounded-lg`
- `section-title-bar` 장식 제거 → 블루 배경 자체가 시각 강조 역할

#### `src/components/home/HeroSection.tsx`
- h1: `gradient-text-hero` → `text-white bg-primary px-6 py-3 rounded-xl`

#### `src/components/home/CTASection.tsx`
- h2: `gradient-text-hero` → `text-white bg-primary px-6 py-2 rounded-lg`

---

### 빌드 결과

```
✓ Compiled successfully in 4.0s
✓ Generating static pages (58/58) in 1104.2ms
```

---

## 2026-03-15 | Open Graph (OG) 메타 태그 및 미리보기 이미지 추가

### 개요
카카오톡, 페이스북, 트위터 등 소셜 미디어에서 URL 공유 시 미리보기(제목, 설명, 이미지)가 정상 표시되도록 Open Graph 메타 태그와 OG 이미지를 추가하였습니다.

---

### 변경 사항

#### OG 이미지 생성 — `public/images/og/default.png`
- 1200×630px PNG 이미지 (소셜 미디어 권장 규격)
- 3색 그래디언트 배경 (primary → edu-teens → edu-kids)
- 로봇 아이콘 + "PBI 로봇 교육센터" 타이틀 + 부제 + 태그라인
- sharp 라이브러리로 SVG → PNG 변환 생성

#### `src/app/[locale]/layout.tsx` — OG 메타 태그 완성
- `og:url`: `https://pbi.dreamitbiz.com`
- `og:title`: 한/영 사이트 제목
- `og:description`: 한/영 사이트 설명
- `og:type`: `website`
- `og:image`: `/images/og/default.png` (1200×630)
- `og:site_name`: PBI 로봇 교육센터
- `og:locale`: `ko_KR` / `en_US`
- `twitter:card`: `summary_large_image` 추가

#### `src/app/layout.tsx` — 루트 메타데이터 업데이트
- 이전 제품 사이트 제목/설명 → 교육 사이트로 변경

---

### 수정 파일 (3개)

| 파일 | 변경 내용 |
|------|----------|
| `public/images/og/default.png` | OG 미리보기 이미지 신규 생성 (1200×630) |
| `src/app/[locale]/layout.tsx` | OG/Twitter 메타 태그 완성 |
| `src/app/layout.tsx` | 루트 메타데이터 교육 사이트로 변경 |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.5s
✓ Generating static pages (58/58) in 1130.2ms
```

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |
| `style: 히어로 및 섹션 타이틀 그래디언트 컬러 적용` | 그래디언트 텍스트, 교육 테마 색상 강화 6개 파일 |
| `feat: Open Graph 메타 태그 및 OG 이미지 추가` | 소셜 공유 미리보기 지원 |

---

## 2026-03-15 | 히어로 & 타이틀 컬러 강화

### 개요
히어로 섹션과 각 섹션 타이틀이 단색(text-text-primary)으로만 구성되어 밋밋했던 문제를 해결하기 위해 그래디언트 텍스트, 교육 테마 색상, 장식 요소를 전면 적용하였습니다.

---

### 변경 사항

#### `src/app/globals.css` — 그래디언트 CSS 클래스 추가
| 클래스 | 색상 | 용도 |
|--------|------|------|
| `.gradient-text` | primary → accent | 섹션 타이틀 (기존, 미사용→활용) |
| `.gradient-text-warm` | edu-kids(오렌지) → edu-teens(보라) | 따뜻한 톤 강조용 |
| `.gradient-text-cool` | edu-adults(청록) → edu-corporate(초록) | 차가운 톤 강조용 |
| `.gradient-text-hero` | primary → edu-teens → edu-kids | 히어로 타이틀 전용 3색 그래디언트 |
| `.section-title-bar` | primary → accent 가로 바 | 섹션 타이틀 하단 장식 바 |

#### `src/components/home/HeroSection.tsx` — 히어로 컬러 강화
- h1: `text-text-primary` → `gradient-text-hero` (3색 그래디언트)
- 배경 블롭 투명도: 10% → 15~20%로 증가
- edu-corporate 색상 블롭 1개 추가 (총 4개)

#### `src/components/shared/SectionTitle.tsx` — 섹션 타이틀 컬러 강화
- h2: `text-text-primary` → `gradient-text` (primary → accent 그래디언트)
- 타이틀 하단에 `section-title-bar` 그래디언트 컬러바 장식 추가
- 중앙 정렬 시 바도 중앙 정렬 (`section-title-bar-center`)

#### `src/components/home/CTASection.tsx` — CTA 섹션 컬러 강화
- h2: `text-text-primary` → `gradient-text-hero` (3색 그래디언트)
- 배경: `from-primary/5` → `from-primary/10`, `to-accent/5` → `to-edu-teens/10`
- 보더: `border-border` → `border-primary/20`
- 배경 블롭 투명도 증가 + edu-corporate 블롭 추가

#### `src/components/home/WhyUsSection.tsx` — 아이콘 색상 개별화
- 4개 카드 아이콘: 단일 `text-primary` → 각각 다른 교육 테마 색상
  - 전문 강사진: edu-kids (오렌지)
  - 실습 중심: edu-teens (보라)
  - 전 연령 대상: edu-adults (청록)
  - 만족도: edu-corporate (초록)

#### `src/components/home/TestimonialSection.tsx` — 인용 아이콘 색상 변경
- Quote 아이콘: `text-primary/20` → `text-edu-teens/30` (보라 톤)

---

### 수정 파일 (6개)

| 파일 | 변경 내용 |
|------|----------|
| `src/app/globals.css` | 그래디언트 텍스트 4종 + 섹션 타이틀 바 CSS 추가 (+35줄) |
| `src/components/home/HeroSection.tsx` | 히어로 h1 그래디언트 + 배경 블롭 강화 |
| `src/components/shared/SectionTitle.tsx` | h2 그래디언트 + 하단 컬러바 장식 |
| `src/components/home/CTASection.tsx` | CTA h2 그래디언트 + 배경 강화 |
| `src/components/home/WhyUsSection.tsx` | 아이콘 4색 교육 테마 개별 적용 |
| `src/components/home/TestimonialSection.tsx` | Quote 아이콘 보라 톤 변경 |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.6s
✓ Generating static pages (58/58) in 1048.9ms
```

- 컴파일: 4.6초
- 정적 페이지 생성: 58개 / 1048.9ms
- TypeScript 에러: 0개

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |
| `style: 히어로 및 섹션 타이틀 그래디언트 컬러 적용` | 그래디언트 텍스트, 교육 테마 색상 강화 6개 파일 |

---

## 2026-03-15 | 로봇 교육 사이트로 전면 전환

### 개요
기존 PBI Robot 제품 사이트(pbirobot.dreamitbiz.com)를 **로봇 교육 사이트**(pbi.dreamitbiz.com)로 전면 교체하였습니다.
대상: 전 연령(키즈~성인~기업). 콘텐츠: 교육과정 + 온라인학습 + 체험프로그램 종합.

기술 스택(Next.js 16, TypeScript, Tailwind v4, next-intl, Framer Motion 등)과 빌드/배포 인프라(Static Export, GitHub Actions → GitHub Pages)는 그대로 유지.

---

### 변경 사항 요약

#### 삭제된 기능
- 제품 카탈로그 (AquaSense 2 Pro/Ultra)
- 온라인 스토어 + 장바구니 (Zustand cart-store)
- 블로그
- 견적 요청
- 회사 연혁 / 브랜드 페이지
- 제품 이미지 (pbi_1~9.webp)

#### 신규 기능
- **교육과정** (8개): 키즈 로봇 탐험대, 주니어 로봇 코딩, 청소년 로봇 공학 입문, 청소년 AI 로봇 프로젝트, 성인 로봇 프로그래밍 기초, 성인 로봇 자동화 실무, 기업 로봇 도입 워크숍, 기업 스마트팩토리 로봇 교육
- **온라인학습** (6개): 로봇의 이해, 센서와 액추에이터, 로봇 프로그래밍 기초, AI와 로봇의 만남, 수중 로봇 기술, 로봇 윤리와 미래
- **체험프로그램** (5개): 여름 로봇 캠프, 가족 로봇 체험 워크숍, 로봇 공장 견학, PBI 로봇 챌린지 대회, 학교 방문 로봇 교실
- **강사진** (6명): 로봇 공학, AI, 키즈 교육, 메카트로닉스, 스마트팩토리, 수중 로봇 전문가
- **교육 FAQ** (12개): 일반, 교육과정, 체험프로그램, 결제/환불 4개 카테고리
- **수강생 후기** 섹션 (홈페이지)
- **교육 테마 색상**: edu-kids(#ff6b35), edu-teens(#7c3aed), edu-adults(#0891b2), edu-corporate(#059669)

#### 수정된 파일
- `public/CNAME`: pbirobot.dreamitbiz.com → pbi.dreamitbiz.com
- `src/lib/constants.ts`: SITE_CONFIG, NAV_ITEMS(7개), EDUCATION_CENTER_INFO
- `src/lib/images.ts`: 교육 관련 이미지 경로
- `src/app/globals.css`: 교육 테마 색상 토큰 추가
- `messages/ko.json`, `messages/en.json`: 전면 교체 (교육 사이트 메시지)
- `src/app/[locale]/layout.tsx`: 메타데이터 교육 사이트로 변경
- `src/app/[locale]/page.tsx`: 홈 구성 변경 (CourseShowcase, WhyUsSection, TestimonialSection)
- Header: NAV_ITEMS 7개, 장바구니 아이콘 제거, 상담 신청 버튼
- Footer: 교육 링크, 교육센터 정보
- 소개/FAQ/문의 컴포넌트: 교육 콘텐츠로 수정

---

### 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 16.1.6 |
| 언어 | TypeScript | ^5 |
| 스타일링 | Tailwind CSS | v4 |
| 다국어 | next-intl | ^4.8.3 |
| 애니메이션 | Framer Motion | ^12.34.3 |
| 폼 | react-hook-form + Zod | ^7.71.2 / ^4.3.6 |
| 아이콘 | Lucide React | ^0.575.0 |
| 빌드 | Turbopack + Static Export | - |

---

### 프로젝트 구조

```
D:\pbi/
├── messages/              # 다국어 메시지 (ko.json, en.json)
├── public/                # 정적 파일 (CNAME: pbi.dreamitbiz.com)
├── src/
│   ├── app/               # Next.js App Router 페이지
│   │   ├── [locale]/      # 다국어 라우팅
│   │   │   ├── about/     # 교육센터 소개
│   │   │   ├── contact/   # 교육 상담 문의
│   │   │   ├── courses/   # 교육과정 목록 + 상세([slug])
│   │   │   ├── faq/       # 교육 FAQ
│   │   │   ├── instructors/ # 강사진
│   │   │   ├── learning/  # 온라인학습 목록 + 상세([slug])
│   │   │   └── programs/  # 체험프로그램 목록 + 상세([slug])
│   │   ├── globals.css    # 글로벌 스타일 (교육 테마 포함)
│   │   ├── layout.tsx     # 루트 레이아웃
│   │   ├── page.tsx       # 루트 리다이렉트 (/ko)
│   │   └── not-found.tsx  # 404 페이지
│   ├── components/
│   │   ├── about/         # 소개 컴포넌트 (3개)
│   │   ├── contact/       # 문의 컴포넌트 (3개)
│   │   ├── courses/       # 교육과정 컴포넌트 (4개)
│   │   ├── faq/           # FAQ 컴포넌트 (1개)
│   │   ├── home/          # 홈 컴포넌트 (5개)
│   │   ├── instructors/   # 강사진 컴포넌트 (2개)
│   │   ├── layout/        # 레이아웃 컴포넌트 (3개)
│   │   ├── learning/      # 온라인학습 컴포넌트 (3개)
│   │   ├── programs/      # 체험프로그램 컴포넌트 (3개)
│   │   ├── shared/        # 공유 컴포넌트 (2개)
│   │   └── ui/            # UI 기본 컴포넌트 (4개)
│   ├── data/              # 정적 데이터 (교육과정, 학습, 프로그램, 강사, FAQ)
│   ├── i18n/              # 국제화 설정
│   ├── images/            # 이미지 에셋 (logo.webp)
│   ├── lib/               # 유틸리티 (cn, formatPrice, constants, images)
│   └── types/             # TypeScript 타입 (education.ts)
├── PLAN.md                # 구축 계획서
├── DEVLOG.md              # 개발일지
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

### 구현된 페이지 (총 58개 정적 페이지)

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/ko`, `/en` | 히어로, 인기 교육과정, Why Us, 수강생 후기, CTA |
| 교육과정 목록 | `/[locale]/courses` | 연령대/레벨 필터 + 8개 교육과정 그리드 |
| 교육과정 상세 | `/[locale]/courses/[slug]` | 커리큘럼, 특징, 수강 정보 사이드바 (8 slugs × 2) |
| 온라인학습 목록 | `/[locale]/learning` | 카테고리 필터 + 6개 학습 콘텐츠 그리드 |
| 온라인학습 상세 | `/[locale]/learning/[slug]` | 콘텐츠 상세 + 태그 (6 slugs × 2) |
| 체험프로그램 목록 | `/[locale]/programs` | 유형 필터 + 5개 프로그램 그리드 |
| 체험프로그램 상세 | `/[locale]/programs/[slug]` | 프로그램 하이라이트, 정보, CTA (5 slugs × 2) |
| 강사진 | `/[locale]/instructors` | 6명 강사 프로필 그리드 |
| 소개 | `/[locale]/about` | 교육 비전, 핵심 가치, 인증/파트너 |
| FAQ | `/[locale]/faq` | 4개 카테고리 탭 + 아코디언 (12개 Q&A) |
| 문의 | `/[locale]/contact` | 교육 상담 폼 (관심 분야 선택) + 교육센터 정보 |
| 404 | `/_not-found` | 커스텀 404 페이지 |

---

### 주요 기능

1. **전 연령 교육과정**: 키즈(5~10세), 청소년(11~18세), 성인, 기업 4개 연령대별 맞춤 과정
2. **교육과정 필터링**: 연령대 + 레벨(입문/중급/고급) 이중 필터
3. **온라인 학습 콘텐츠**: 영상, 문서, 인터랙티브 3가지 유형
4. **체험 프로그램**: 캠프, 워크숍, 견학, 대회 4가지 유형
5. **전문 강사진**: 6명 강사 프로필 (전문 분야, 약력)
6. **수강생 후기**: 홈페이지 테스티모니얼 섹션
7. **교육 상담 폼**: 관심 분야 선택 포함 상담 신청
8. **다국어 지원**: 한국어/영어 완전 지원
9. **반응형 디자인**: 모바일 ~ 데스크탑 대응
10. **정적 사이트 생성**: 58개 페이지 SSG

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.5s
✓ Generating static pages (58/58) in 1048.9ms
```

- 컴파일: 4.5초
- 정적 페이지 생성: 58개 / 1048.9ms
- TypeScript 에러: 0개

---

### 배포

- **플랫폼**: GitHub Pages
- **도메인**: `pbi.dreamitbiz.com` (CNAME 변경)
- **CI/CD**: GitHub Actions 자동 배포
  - `main` 브랜치 푸시 시 자동 빌드 & 배포
  - 워크플로 파일: `.github/workflows/deploy.yml`
- **빌드 방식**: `next build` → `out/` 디렉토리 정적 export → GitHub Pages 업로드

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |

---

### 향후 계획

- [ ] 교육 관련 실제 이미지/사진 추가
- [ ] 온라인 학습 콘텐츠 플랫폼 연동 (영상 플레이어, 인터랙티브 콘텐츠)
- [ ] 수강 신청/결제 시스템 연동
- [ ] Google Analytics / 카카오맵 연동
- [ ] 수강생 포털 (학습 진도 관리)
- [ ] 블로그/뉴스 섹션 추가 (교육 소식)

---

## 2026-03-14 | 프로젝트 초기 구축

### 개요
PBI Robot(주식회사 피비아이)의 AI 로봇 수영장 청소기 브랜드 사이트를 Next.js 기반으로 개발하였습니다.
(이후 2026-03-15에 교육 사이트로 전면 전환됨)

- 컴파일: 5.1초
- 정적 페이지 생성: 30개 / 918.9ms
- 에러: 0개
- 배포: GitHub Pages (`pbirobot.dreamitbiz.com`)
