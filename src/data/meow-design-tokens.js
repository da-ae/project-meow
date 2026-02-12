/**
 * 「야옹아, 내가 집사라도 괜찮을까?」 디자인 토큰
 *
 * 인터랙티브 랜딩 페이지의 시각 언어를 정의하는 디자인 토큰입니다.
 * 챕터별 컬러 모드, 타이포그래피, 텍스처, 인터랙션, 애니메이션 토큰을 포함합니다.
 *
 * 비주얼 키워드: #아날로그 #연필드로잉 #종이질감 #따뜻함 #친근함
 */

// ============================================================
// 1. 컬러 모드 (Chapter-based Color Modes)
// ============================================================

/**
 * Mono — 흑백 연필 드로잉 (히어로 ~ 챕터 3)
 * 거친 종이 위의 연필 선, 만화책을 넘기는 감각
 */
export const mono = {
  id: 'mono',
  name: '흑백 (Mono)',
  description: '연필 드로잉과 종이 질감의 흑백 만화 톤',
  chapters: ['hero', 'chapter1', 'chapter2', 'chapter3'],

  background: {
    page: '#EDE8DF',
    paper: '#F5F0E8',
    panel: '#FFFFFF',
  },

  ink: {
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    light: '#8A8A8A',
    muted: '#B0B0B0',
  },

  border: {
    panel: '#2A2A2A',
    subtle: '#D4CFC8',
    divider: '#C8C2B8',
  },

  speechBubble: {
    background: '#FFFFFF',
    border: '#1A1A1A',
    text: '#1A1A1A',
    tail: '#1A1A1A',
  },

  overlay: {
    dim: 'rgba(0, 0, 0, 0.4)',
    vignette: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.15) 100%)',
  },

  interactive: {
    hover: 'rgba(0, 0, 0, 0.06)',
    active: 'rgba(0, 0, 0, 0.12)',
    hint: 'rgba(0, 0, 0, 0.04)',
  },
};

/**
 * Dark — 어두운 긴박감 (챕터 4)
 * 빌라 계단의 어둠, 패널 흔들림, 긴장감
 */
export const dark = {
  id: 'dark',
  name: '어두운 (Dark)',
  description: '어두운 빌라 계단, 긴박감과 불안의 톤',
  chapters: ['chapter4'],

  background: {
    page: '#06060C',
    paper: '#0C0C14',
    panel: '#14141E',
  },

  ink: {
    primary: '#B8B8C4',
    secondary: '#7A7A88',
    light: '#4A4A56',
    muted: '#2E2E3A',
  },

  border: {
    panel: '#2A2A38',
    subtle: '#1E1E2A',
    divider: '#22222E',
  },

  speechBubble: {
    background: '#1A1A26',
    border: '#3A3A4A',
    text: '#C8C8D4',
    tail: '#3A3A4A',
  },

  overlay: {
    dim: 'rgba(0, 0, 0, 0.7)',
    vignette: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)',
  },

  accent: {
    danger: '#8B2020',
    dangerGlow: 'rgba(139, 32, 32, 0.3)',
    warning: '#8B6B20',
  },

  interactive: {
    hover: 'rgba(255, 255, 255, 0.06)',
    active: 'rgba(255, 255, 255, 0.12)',
    hint: 'rgba(255, 255, 255, 0.04)',
  },
};

/**
 * Pastel — 따뜻한 파스텔 온기 (챕터 5 ~ 부록)
 * 봄, 벚꽃, 새싹, 피크닉의 따뜻함
 */
export const pastel = {
  id: 'pastel',
  name: '파스텔 (Pastel)',
  description: '봄날의 따뜻한 파스텔톤, 온기와 성장',
  chapters: ['chapter5', 'cookie', 'appendix', 'cta'],

  background: {
    page: '#FFF4EA',
    paper: '#FFF9F2',
    panel: '#FFFFFF',
  },

  ink: {
    primary: '#3A2E24',
    secondary: '#7A6E64',
    light: '#B0A49A',
    muted: '#D0C8C0',
  },

  border: {
    panel: '#E8DED4',
    subtle: '#F0E8E0',
    divider: '#E4DAD0',
  },

  speechBubble: {
    background: '#FFFFFF',
    border: '#D8CEC4',
    text: '#3A2E24',
    tail: '#D8CEC4',
  },

  overlay: {
    dim: 'rgba(58, 46, 36, 0.3)',
    vignette: 'radial-gradient(ellipse at center, transparent 60%, rgba(255, 176, 192, 0.1) 100%)',
  },

  accent: {
    warmth: '#FFB0C0',
    warmthGlow: 'rgba(255, 176, 192, 0.3)',
    sprout: '#8BC88A',
    sproutGlow: 'rgba(139, 200, 138, 0.3)',
    sky: '#A0C8E8',
    bloom: '#FFD0D8',
    sun: '#FFE0A0',
    snow: '#E8E8F4',
  },

  interactive: {
    hover: 'rgba(255, 176, 192, 0.12)',
    active: 'rgba(255, 176, 192, 0.24)',
    hint: 'rgba(255, 176, 192, 0.08)',
  },
};

// ============================================================
// 2. 챕터-컬러 모드 매핑
// ============================================================

export const chapterColorMap = {
  hero: 'mono',
  chapter1: 'mono',
  chapter2: 'mono',
  chapter3: 'mono',
  chapter4: 'dark',
  chapter5: 'pastel',
  cookie: 'pastel',
  appendix: 'pastel',
  cta: 'pastel',
};

export const colorModes = { mono, dark, pastel };

/**
 * 챕터 ID로 해당 컬러 모드 객체를 반환
 *
 * @param {string} chapterId - 챕터 ID (예: 'chapter1', 'hero')
 * @returns {object} 컬러 모드 토큰 객체
 */
export const getColorMode = (chapterId) => {
  const modeId = chapterColorMap[chapterId] || 'mono';
  return colorModes[modeId];
};

// ============================================================
// 3. 타이포그래피 (Typography)
// ============================================================

export const typography = {
  /** 챕터 서브타이틀 (CHAPTER 1, CHAPTER 2...) */
  chapterSubtitle: {
    fontFamily: '"Bohyun", "Outfit", "Pretendard Variable", sans-serif',
    fontWeight: 540,
    fontSize: '1.75rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },

  /** 챕터 타이틀 (처음 만나는 고양이, 나란히 앉아오는 봄...) */
  chapterTitle: {
    fontFamily: '"Bohyun", "Outfit", "Pretendard Variable", sans-serif',
    fontWeight: 400,
    fontSize: '4rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },

  /** 히어로 타이틀 (야옹아, 내가 집사라도 괜찮을까?) */
  heroTitle: {
    fontFamily: '"Bohyun", "Outfit", "Pretendard Variable", sans-serif',
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1.4,
    letterSpacing: '-0.01em',
  },

  /** 디스크립션 (챕터 설명 텍스트) */
  description: {
    fontFamily: '"Nanum Myeongjo", "Pretendard Variable", serif',
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: 2,
    letterSpacing: '0',
  },

  /** 말풍선 텍스트 */
  speechBubble: {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontWeight: 500,
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    letterSpacing: '0',
  },

  /** 힌트 텍스트 (인터랙션 안내) */
  hint: {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontWeight: 400,
    fontSize: '0.8125rem',
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    fontStyle: 'italic',
  },

  /** CTA 버튼 텍스트 */
  cta: {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.02em',
  },

  /** 체크리스트 항목 */
  checklist: {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontWeight: 400,
    fontSize: '0.9375rem',
    lineHeight: 1.7,
    letterSpacing: '0',
  },
};

// ============================================================
// 4. 텍스처 & 배경 (Texture & Background)
// ============================================================

export const texture = {
  /** 종이 질감 (전체 배경) */
  paper: {
    noise: 0.03,
    grain: 'url("/textures/paper-grain.png")',
    blendMode: 'multiply',
    opacity: 0.15,
  },

  /** 만화 패널 */
  panel: {
    borderWidth: 2,
    borderStyle: 'solid',
    shadowBlur: 0,
    maxWidth: 720,
  },

  /** 말풍선 */
  speechBubble: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 16,
    tailSize: 12,
    padding: '12px 16px',
  },

  /** 비네팅 (가장자리 어둡게) */
  vignette: {
    intensity: {
      mono: 0.15,
      dark: 0.5,
      pastel: 0.1,
    },
  },
};

// ============================================================
// 5. 인터랙션 상태 (Interaction States)
// ============================================================

export const interaction = {
  /** 인터랙티브 맵 - 클릭 가능 영역 */
  clickableArea: {
    idle: {
      outline: 'none',
      cursor: 'pointer',
    },
    hover: {
      outline: '2px solid rgba(255, 255, 255, 0.4)',
      transform: 'scale(1.02)',
      transition: 'all 0.2s ease-out',
    },
    active: {
      transform: 'scale(0.98)',
      transition: 'all 0.1s ease-in',
    },
  },

  /** 코인사 게임 - 속도 기반 상태 */
  noseKiss: {
    idle: { color: mono.ink.light, label: '천천히 손가락을 가져다 주세요' },
    approaching: { color: '#8BC88A', label: '좋아요, 천천히...' },
    tooFast: { color: '#D4442A', label: '너무 빨라요!' },
    success: { color: '#FFB0C0', label: null },
    speedThreshold: 8,
    successHoldTime: 3000,
  },

  /** 성공 피드백 (분홍빛 온기) */
  success: {
    color: '#FFB0C0',
    glow: 'rgba(255, 176, 192, 0.3)',
    overlay: 'radial-gradient(ellipse at center, rgba(255, 176, 192, 0.25) 0%, transparent 70%)',
  },

  /** 실패 피드백 */
  fail: {
    color: '#D4442A',
    shake: {
      intensity: 4,
      duration: 400,
    },
  },

  /** 힌트 시스템 (30초 무반응 시 표시) */
  hintSystem: {
    delay: 30000,
    fadeInDuration: 600,
    pulseAnimation: true,
  },

  /** 체크리스트 - 체크 인터랙션 */
  checklist: {
    idle: { scale: 1 },
    hover: { scale: 1.03 },
    checked: {
      scale: 1,
      bounceScale: 1.15,
      bounceDuration: 400,
    },
  },
};

// ============================================================
// 6. 애니메이션 토큰 (Animation Tokens)
// ============================================================

export const animation = {
  /** 지속 시간 (ms) */
  duration: {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 600,
    catWalk: 3000,
    titleType: 2000,
    colorTransition: 2000,
    panelReveal: 600,
    particleFall: 4000,
    hintFadeIn: 600,
    bloomGrow: 800,
    fadeToBlack: 1000,
    fadeFromBlack: 1500,
  },

  /** 이징 함수 */
  easing: {
    gentle: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    dramatic: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  },

  /** 패럴랙스 속도 (레이어별) */
  parallax: {
    background: 0.3,
    midground: 0.6,
    foreground: 1.0,
    speechBubble: 1.1,
  },

  /** 패널 흔들림 (챕터 4) */
  shake: {
    intensity: 4,
    duration: 400,
    easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
  },

  /** 선인장 컬러 전환 (챕터 5) */
  cactusBloom: {
    scrollStart: 0,
    scrollEnd: 0.4,
    fromFilter: 'grayscale(100%)',
    toFilter: 'grayscale(0%)',
    sproutColor: '#8BC88A',
  },
};

// ============================================================
// 7. 파티클 토큰 (Particle Tokens)
// ============================================================

export const particles = {
  /** 꽃잎 (챕터 5 피크닉, 부록 체크리스트) */
  petal: {
    colors: ['#FFB0C0', '#FFD0D8', '#FFC0CC', '#FFE0E8'],
    size: { min: 8, max: 18 },
    count: { sparse: 15, normal: 30, dense: 50 },
    fallSpeed: { min: 1, max: 3 },
    rotationSpeed: { min: 0.5, max: 2 },
    swayAmplitude: 30,
    opacity: { min: 0.5, max: 0.9 },
  },

  /** 눈송이 (챕터 5 겨울 장면) */
  snowflake: {
    colors: ['#FFFFFF', '#F0F0F8', '#E8E8F0'],
    size: { min: 3, max: 8 },
    count: { sparse: 20, normal: 40, dense: 60 },
    fallSpeed: { min: 0.5, max: 2 },
    rotationSpeed: { min: 0, max: 0.5 },
    swayAmplitude: 15,
    opacity: { min: 0.4, max: 0.8 },
  },

  /** 꽃 피어남 (부록 체크리스트) */
  bloom: {
    colors: ['#FFB0C0', '#FFD0D8', '#FFDDE5', '#FFE8EC'],
    growDuration: 800,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    maxScale: 1,
    startScale: 0,
  },
};

// ============================================================
// 8. 커서 토큰 (Cursor Tokens)
// ============================================================

export const cursors = {
  /** 기본 커서 */
  default: 'default',

  /** 참치캔 커서 (챕터 1 공원 맵) */
  tunaCan: {
    image: '/cursors/tuna-can.png',
    hotspot: [16, 16],
    fallback: 'pointer',
  },

  /** 손가락 커서 (코인사 게임) */
  finger: {
    image: '/cursors/finger.png',
    hotspot: [8, 0],
    fallback: 'pointer',
  },

  /** 클릭 가능 표시 */
  interactive: 'pointer',

  /** 모바일에서는 커스텀 커서 비활성 */
  mobileDisabled: true,
};

// ============================================================
// 9. 사운드 토큰 (Sound Tokens - 참조용)
// ============================================================

export const soundTokens = {
  sfx: {
    meow: { file: 'meow.mp3', volume: 0.7, chapters: ['hero', 'cookie'] },
    purr: { file: 'purr.mp3', volume: 0.5, chapters: ['chapter1'] },
    click: { file: 'click.mp3', volume: 0.3, chapters: ['all'] },
    cardFlip: { file: 'card-flip.mp3', volume: 0.5, chapters: ['chapter2'] },
    doorCreak: { file: 'door-creak.mp3', volume: 0.6, chapters: ['chapter4'] },
    flowerBloom: { file: 'flower-bloom.mp3', volume: 0.4, chapters: ['appendix'] },
  },
  bgm: {
    calm: { file: 'bgm-calm.mp3', volume: 0.3, chapters: ['chapter1', 'chapter2', 'chapter3', 'chapter5'] },
    tense: { file: 'bgm-tense.mp3', volume: 0.4, chapters: ['chapter4'] },
    warm: { file: 'bgm-warm.mp3', volume: 0.3, chapters: ['appendix'] },
  },
};

// ============================================================
// 10. 반응형 토큰 (Responsive Tokens)
// ============================================================

export const responsive = {
  /** 인터랙티브 영역 최소 터치 크기 (모바일) */
  minTouchTarget: 44,

  /** 패널 최대 너비 */
  panelMaxWidth: {
    mobile: '100%',
    tablet: 600,
    desktop: 720,
  },

  /** 패럴랙스 효과 모바일 대응 */
  parallaxMobile: {
    enabled: false,
    fallback: 'static',
  },

  /** 피크닉 시차 효과 */
  picnicParallax: {
    desktop: 'mousemove',
    mobile: 'deviceOrientation',
  },
};

// ============================================================
// 전체 Export
// ============================================================

const meowDesignTokens = {
  colorModes,
  chapterColorMap,
  getColorMode,
  typography,
  texture,
  interaction,
  animation,
  particles,
  cursors,
  soundTokens,
  responsive,
};

export default meowDesignTokens;
