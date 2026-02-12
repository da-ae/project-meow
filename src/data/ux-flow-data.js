/**
 * UX Flow Data
 * 「야옹아, 내가 집사라도 괜찮을까?」 인터랙티브 랜딩 페이지
 */

// 전체 플로우 순서
export const flowOrder = [
  'hero',
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'chapter5',
  'cookie',
  'appendix',
  'cta'
];

// 예상 체험 시간 (초)
export const estimatedTime = {
  hero: 15,
  chapter1: 180,
  chapter2: 180,
  chapter3: 180,
  chapter4: 180,
  chapter5: 180,
  cookie: 30,
  appendix: 120,
  total: 900 // 약 15분
};

// 컬러 톤 변화
export const colorTone = {
  hero: 'mono',
  chapter1: 'mono',
  chapter2: 'mono',
  chapter3: 'mono',
  chapter4: 'dark',
  chapter5: 'pastel',
  cookie: 'pastel',
  appendix: 'pastel'
};

// 히어로 섹션
export const hero = {
  id: 'hero',
  purpose: ['첫인상으로 관심 유도', '만화의 분위기/톤 전달', '스크롤 유도'],
  flow: [
    { step: 1, action: '페이지 진입' },
    { step: 2, action: '검은 고양이가 화면 왼쪽에서 걸어 들어옴', duration: 3000 },
    { step: 3, action: '중앙 도달', trigger: { type: 'sound', id: 'meow' } },
    { step: 4, action: '타이틀 타이핑 등장', text: '야옹아, 내가 집사라도 괜찮을까?' },
    { step: 5, action: '스크롤 유도 화살표 표시' },
    { step: 6, action: '스크롤 시 챕터1로 이동' }
  ],
  components: [
    { name: 'CatEntrance', role: '고양이 걸어오는 애니메이션' },
    { name: 'TitleReveal', role: '타이핑 효과 헤드라인' },
    { name: 'ScrollIndicator', role: '스크롤 유도 화살표' }
  ]
};

// 챕터 1
export const chapter1 = {
  id: 'chapter1',
  subtitle: 'CHAPTER 1',
  title: '처음 만나는 고양이',
  location: '미정의 방 → 공원',
  description: [
    '이혼 후 새로운 곳으로 이사를 간 미정은 한참 이삿짐 정리 중이다.',
    '이리저리 고양이를 찾는 미정의 곁에 초등학생으로 보이는 어린이가 다가와 말을 걸었다.'
  ],
  summary: '이혼 후 거처를 옮긴 미정이 공원에서 고양이 탐정 소녀 "미래"를 만나, 난생처음 고양이에게 다가가는 법을 배우며 작은 설렘을 느낀다.',
  purpose: ['미정의 상황 소개', '첫 고양이와의 만남 체험', '고양이 접근법 체험 (코 인사)'],
  flow: [
    { step: 1, action: '챕터 타이틀 + 디스크립션' },
    { step: 2, action: '이삿짐 정리 만화 컷', effect: '패럴랙스 스크롤' },
    { step: 3, action: '선인장 있는 방, 창밖 고양이' },
    { step: 4, action: '참치캔 들고 나가는 장면' },
    { step: 5, action: '인터랙티브 맵: 공원', interactive: 'parkMap' },
    { step: 6, action: '미래 등장' },
    { step: 7, action: '인터랙티브 게임: 코인사', interactive: 'noseKiss' },
    { step: 8, action: '성공 연출', effect: '분홍빛 온기' },
    { step: 9, action: '챕터 2로 이동' }
  ],
  interactions: {
    parkMap: {
      type: 'map',
      name: '공원',
      cursor: 'tuna-can',
      goal: '고양이 찾기',
      clickableAreas: [
        { id: 'bench', label: '벤치 아래', reaction: '눈 반짝', result: 'cat-found' },
        { id: 'bush', label: '풀숲', reaction: '풀 흔들림', result: 'cat-found' },
        { id: 'tree', label: '나무 뒤', reaction: '꼬리 보임', result: 'cat-found' }
      ],
      completeCondition: '모든 고양이 발견',
      onComplete: '미래 등장'
    },
    noseKiss: {
      type: 'game',
      name: '꽃님이와 코인사',
      description: '천천히 손가락을 꽃님이의 코에 가져다 주세요.',
      cursor: 'finger',
      states: [
        { id: 'idle', condition: '커서가 멀리', catReaction: '경계하며 바라봄', hint: '천천히 손가락을 가져다 주세요' },
        { id: 'approaching', condition: '천천히 다가감', catReaction: '귀가 앞으로', hint: '좋아요, 천천히...' },
        { id: 'tooFast', condition: '급하게 움직임', catReaction: '움츠러듦', hint: '너무 빨라요!' },
        { id: 'success', condition: '코 근처 3초 유지', catReaction: '킁킁 → 핥음', hint: null }
      ],
      successEffect: {
        animation: '분홍빛 온기 퍼짐',
        sound: 'purr'
      }
    }
  },
  components: [
    { name: 'ChapterTitle', role: '챕터 타이틀 + 디스크립션' },
    { name: 'ParkMap', role: '공원 인터랙티브 맵' },
    { name: 'ClickableArea', role: '클릭 가능 영역' },
    { name: 'NoseKiss', role: '코인사 미니게임' },
    { name: 'CustomCursor', role: '참치캔/손가락 커서' }
  ]
};

// 챕터 2 (추후 보충)
export const chapter2 = {
  id: 'chapter2',
  subtitle: 'CHAPTER 2',
  title: null, // 추후 작성
  location: '뜨개공방 "미유"',
  description: [
    '꽃님이와 성공적인 인사 후, 미래에게 뜨개공방의 "고양이 집사"로 추천을 받은 미정은 공방 미유를 찾아가 보기로 한다.'
  ],
  summary: null, // 추후 작성
  status: 'pending', // 추후 보충
  flow: [
    { step: 1, action: '챕터 타이틀 + 디스크립션' },
    { step: 2, action: '공방 도착 만화 컷' },
    { step: 3, action: '인터랙티브 맵: 공방', interactive: 'workshopMap' },
    { step: 4, action: '모로 등장' },
    { step: 5, action: '인터랙티브 게임: 타로카드', interactive: 'tarotGame' },
    { step: 6, action: '"합격" 컷' },
    { step: 7, action: '챕터 3으로 이동' }
  ],
  interactions: {
    workshopMap: {
      type: 'map',
      name: '공방',
      goal: '숨은 고양이 찾기',
      clickableAreas: [
        { id: 'yarn', label: '실타래', reaction: '고양이 굴러나옴' },
        { id: 'cabinet', label: '장식장', reaction: '문 열림' },
        { id: 'cushion', label: '쿠션', reaction: '고양이 기지개' }
      ]
    },
    tarotGame: {
      type: 'game',
      name: '타로카드 뽑기',
      cardCount: 3,
      rule: '어떤 카드를 골라도 원작과 동일한 결과',
      onComplete: '"합격" 메시지'
    }
  },
  components: [
    { name: 'WorkshopMap', role: '공방 인터랙티브 맵' },
    { name: 'TarotGame', role: '타로카드 게임' },
    { name: 'TarotCard', role: '개별 카드 (뒤집기 애니메이션)' }
  ]
};

// 챕터 3 (추후 보충)
export const chapter3 = {
  id: 'chapter3',
  subtitle: 'CHAPTER 3',
  title: null,
  location: '골목길',
  status: 'pending',
  interactions: {
    feedingGame: {
      type: 'game',
      name: '밥그릇 놓기',
      method: '드래그 앤 드롭',
      items: ['밥그릇', '물그릇'],
      rule: '올바른 위치에 배치하면 성공'
    }
  },
  components: [
    { name: 'FeedingGame', role: '밥그릇 놓기 게임' },
    { name: 'DraggableItem', role: '드래그 가능한 그릇' },
    { name: 'DropZone', role: '드롭 영역' }
  ]
};

// 챕터 4 (추후 보충)
export const chapter4 = {
  id: 'chapter4',
  subtitle: 'CHAPTER 4',
  title: null,
  location: '빌라 계단',
  status: 'pending',
  specialEffect: {
    background: 'dark',
    panelEffect: ['shake', 'overlap'],
    mood: '긴박감'
  },
  interactions: {
    staircaseMap: {
      type: 'map',
      name: '빌라 계단',
      goal: '단서 찾기',
      atmosphere: '어두움',
      onComplete: { sound: 'door-creak', action: '다음 진행' }
    }
  },
  components: [
    { name: 'StaircaseMap', role: '빌라 계단 맵' },
    { name: 'ClueHunt', role: '단서 찾기' },
    { name: 'ShakePanel', role: '흔들림 효과 패널' }
  ]
};

// 챕터 5
export const chapter5 = {
  id: 'chapter5',
  subtitle: 'CHAPTER 5',
  title: '나란히 앉아오는 봄',
  location: '미정의 방 → 공원(피크닉) → 귀갓길',
  description: [
    '사건 이후, 미정은 진정한 홀로서기의 한 걸음을 내디뎌 본다.',
    '미정은 잠시 뜸들이다 입을 열었다.'
  ],
  summary: '사건을 겪으며 성장한 미정이 동물보호 활동 및 새로운 행보를 결심하고, 봄날 벚꽃 아래에서 모로, 미래와 함께 나란히 앉아 따뜻한 일상을 맞이한다.',
  purpose: ['미정의 성장 완결', '감정적 해소 (카타르시스)', '따뜻한 여운'],
  flow: [
    { step: 1, action: '챕터 타이틀 + 디스크립션' },
    { step: 2, action: '미정의 방 — 선인장에 새싹', effect: '컬러 전환 시작' },
    { step: 3, action: '공원에서 모로, 미래와 만남' },
    { step: 4, action: '대화 컷들' },
    { step: 5, action: '인터랙티브 맵: 피크닉', interactive: 'picnicScene' },
    { step: 6, action: '시간 경과' },
    { step: 7, action: '쿠키로 이동' }
  ],
  story: [
    '미정의 방 — 죽은 줄 알았던 선인장이 싹을 틔움 (성장/새 시작 상징)',
    '겨울이 지나 봄 — 모로, 미래와 공원에서 만남, 사건 회포, 새 계획 공유',
    '피크닉 — 셋이 돗자리에 앉아 꽃잎과 눈 즐김',
    '시간 경과, 또다시 봄 — 미정이 새 여정을 마치고 귀갓길에 "겨울이"와 재회'
  ],
  effects: {
    colorTransition: {
      target: 'cactus',
      from: 'grayscale',
      to: 'green',
      trigger: 'scroll'
    },
    particles: ['꽃잎', '눈송이']
  },
  interactions: {
    picnicScene: {
      type: 'map',
      name: '피크닉',
      characters: ['미정', '모로', '미래'],
      effects: {
        onScroll: '흑백 → 파스텔톤 전환',
        onMouseMove: '장면이 입체적으로 기울어짐 (시차 효과)',
        onDrag: '꽃잎/눈송이가 커서 방향으로 휘날림'
      }
    }
  },
  components: [
    { name: 'CactusBloom', role: '선인장 컬러 전환' },
    { name: 'PicnicScene', role: '3D 시차 효과 장면' },
    { name: 'ParticleSystem', role: '꽃잎/눈 파티클' }
  ]
};

// 쿠키 챕터
export const cookie = {
  id: 'cookie',
  flow: [
    { step: 1, action: '피크닉 장면 종료' },
    { step: 2, action: '화면 암전' },
    { step: 3, action: '밝아지며 쿠키 만화' },
    { step: 4, action: '미정이 걷다가 "야옹~"', sound: 'meow' },
    { step: 5, action: '뒤돌아보면 겨울이' },
    { step: 6, action: '"겨울아."' },
    { step: 7, action: '부록으로 이동' }
  ],
  components: [
    { name: 'CookieScene', role: '쿠키 챕터 연출' }
  ]
};

// 부록: 입양고사 체크리스트
export const appendix = {
  id: 'appendix',
  title: '입양고사 체크리스트',
  purpose: ['책의 핵심 콘텐츠 체험', '자기 점검 기회', '자연스러운 구매 유도'],
  flow: [
    { step: 1, action: '인트로 텍스트' },
    { step: 2, action: '문항 체크', repeat: 9, effect: '체크마다 꽃 1송이' },
    { step: 3, action: '모두 체크 완료' },
    { step: 4, action: '꽃밭 + 완료 메시지' },
    { step: 5, action: 'CTA 버튼 표시' }
  ],
  checklist: [
    '고양이의 식비와 병원비, 필요 물품 등의 유지비(월평균 15만원)를 꾸준히 지출할 수 있는 경제력',
    '하나의 생명을 끝까지 보살필 수 있는 책임감',
    '고양이의 일거수일투족 모든 생활을 돌봐줄 수 있는 체력',
    '함께할 수 있는 시간과 마음의 여유',
    '나의 가족이 고양이 알레르기, 천식 등으로 인해 위험해지지 않는지',
    '주거 공간이 고양이를 키울 수 있는지',
    '가구와 생활 도구가 고양이의 마킹과 호기심으로 망가져도 이해할 수 있는 인내심과 배려',
    '중성화 수술에 대한 필요성 인식과 시행 계획 여부',
    '15년 이상을 함께할 수 있는지, 반려로서의 확고함'
  ],
  interaction: {
    onCheck: { effect: '체크 표시 + 바운스 + 꽃 추가', sound: 'flower-bloom' },
    onComplete: { effect: '꽃잎 흩날림', message: '당신은 이미 꽤 괜찮은 집사입니다' }
  },
  cta: {
    text: '미정의 이야기 전체 보기',
    link: null // 책 구매 사이트 URL
  },
  components: [
    { name: 'AdoptionQuiz', role: '체크리스트 컨테이너' },
    { name: 'ChecklistItem', role: '개별 체크박스' },
    { name: 'FlowerGarden', role: '꽃 피어나는 배경' },
    { name: 'PurchaseCTA', role: '구매 버튼' }
  ]
};

// 전역 컴포넌트
export const globalComponents = {
  layout: [
    { name: 'PageWrapper', role: '종이 텍스처 배경' },
    { name: 'ChapterContainer', role: '챕터별 래퍼 (컬러 톤 관리)' },
    { name: 'ParallaxSection', role: '패럴랙스 섹션' }
  ],
  ui: [
    { name: 'Panel', role: '만화 패널' },
    { name: 'ChapterTitle', role: '챕터 타이틀 + 디스크립션' },
    { name: 'CustomCursor', role: '커스텀 커서' },
    { name: 'ProgressIndicator', role: '진행 표시' },
    { name: 'AudioController', role: '음향 온오프' },
    { name: 'HintTooltip', role: '힌트 표시' }
  ],
  interaction: [
    { name: 'ClickableArea', role: '클릭 가능 영역' },
    { name: 'DraggableItem', role: '드래그 아이템' },
    { name: 'DropZone', role: '드롭 영역' },
    { name: 'HoverReveal', role: '호버 시 나타나는 요소' }
  ]
};

// 사운드
export const sounds = {
  sfx: [
    { id: 'meow', usage: ['히어로', '쿠키(겨울이)'] },
    { id: 'purr', usage: ['코인사 성공'] },
    { id: 'click', usage: ['버튼', '체크박스'] },
    { id: 'card-flip', usage: ['타로카드'] },
    { id: 'door-creak', usage: ['챕터4 문 열림'] },
    { id: 'flower-bloom', usage: ['체크리스트 꽃'] }
  ],
  bgm: [
    { id: 'bgm-calm', usage: ['챕터 1~3', '챕터 5'] },
    { id: 'bgm-tense', usage: ['챕터 4'] },
    { id: 'bgm-warm', usage: ['부록'] }
  ]
};

// 반응형 대응
export const responsive = {
  interactiveMap: { desktop: '클릭', mobile: '탭 (히트박스 확대)' },
  noseKissGame: { desktop: '마우스 이동', mobile: '터치 드래그' },
  feedingGame: { desktop: '드래그 앤 드롭', mobile: '탭 선택 → 탭 배치' },
  picnicParallax: { desktop: '마우스 이동', mobile: '기기 기울기' },
  customCursor: { desktop: '활성', mobile: '비활성' }
};

// 공통 UX 규칙
export const uxRules = {
  scroll: {
    type: '패럴랙스',
    trigger: '특정 지점 도달 시 애니메이션/사운드 자동 재생',
    indicator: '화면 한쪽에 현재 챕터 위치 표시'
  },
  interactiveMap: {
    hover: '클릭 가능 영역에 시각적 힌트',
    click: '애니메이션 + 효과음',
    complete: '필수 요소 발견 시 다음 진행',
    hint: '30초 무반응 시 힌트 표시'
  },
  miniGame: {
    fail: '재시도 가능, 페널티 없음',
    feedback: '성공/실패 시 명확한 반응'
  }
};

// 전체 데이터 export
export default {
  flowOrder,
  estimatedTime,
  colorTone,
  hero,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  cookie,
  appendix,
  globalComponents,
  sounds,
  responsive,
  uxRules
};
