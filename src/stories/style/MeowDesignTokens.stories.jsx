import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';
import {
  mono,
  dark,
  pastel,
  colorModes,
  chapterColorMap,
  typography as typoTokens,
  animation,
  particles,
  interaction,
  soundTokens,
} from '../../data/meow-design-tokens';

export default {
  title: 'Style/Meow Design Tokens',
  parameters: {
    layout: 'padded',
  },
};

// ============================================================
// 헬퍼 컴포넌트
// ============================================================

/** 단일 색상 스워치 */
const ColorSwatch = ({ name, color, textColor, hasBorder = false, width = 100, height = 64 }) => (
  <Box
    sx={ {
      width,
      height,
      backgroundColor: color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: hasBorder ? '1px solid rgba(0,0,0,0.12)' : 'none',
    } }
  >
    <Typography
      variant="caption"
      sx={ {
        color: textColor || (hasBorder ? 'rgba(0,0,0,0.7)' : '#FFFFFF'),
        fontSize: 11,
        fontWeight: 700,
      } }
    >
      { name }
    </Typography>
    <Typography
      variant="caption"
      sx={ {
        color: textColor
          ? `${textColor}99`
          : (hasBorder ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)'),
        fontSize: 9,
        fontFamily: 'monospace',
      } }
    >
      { color }
    </Typography>
  </Box>
);

/** 컬러 그룹 (라벨 + 스워치 모음) */
const ColorGroup = ({ label, description, colors, isDark = false }) => (
  <Box sx={ { mb: 3 } }>
    <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 0.5 } }>
      { label }
    </Typography>
    { description && (
      <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
        { description }
      </Typography>
    ) }
    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
      { colors.map((c) => (
        <ColorSwatch
          key={ c.name }
          name={ c.name }
          color={ c.color }
          textColor={ c.textColor }
          hasBorder={ c.hasBorder }
        />
      )) }
    </Box>
  </Box>
);

/** 모드 전체 카드 */
const ModeCard = ({ mode, isDark = false }) => {
  const labelColor = isDark ? mode.ink.primary : undefined;
  return (
    <Box
      sx={ {
        flex: '1 1 320px',
        minWidth: 320,
        backgroundColor: mode.background.page,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      } }
    >
      <Box sx={ { mb: 1 } }>
        <Typography
          variant="h6"
          sx={ { fontWeight: 700, color: mode.ink.primary, mb: 0.5 } }
        >
          { mode.name }
        </Typography>
        <Typography
          variant="body2"
          sx={ { color: mode.ink.secondary, fontSize: 13 } }
        >
          { mode.description }
        </Typography>
        <Box sx={ { display: 'flex', gap: 0.5, mt: 1, flexWrap: 'wrap' } }>
          { mode.chapters.map((ch) => (
            <Chip
              key={ ch }
              label={ ch }
              size="small"
              sx={ {
                fontSize: 10,
                height: 20,
                backgroundColor: mode.interactive.hover,
                color: mode.ink.secondary,
              } }
            />
          )) }
        </Box>
      </Box>

      <Divider sx={ { borderColor: mode.border.divider, my: 1 } } />

      <ColorGroup
        label="Background"
        colors={ [
          { name: 'page', color: mode.background.page, hasBorder: !isDark },
          { name: 'paper', color: mode.background.paper, hasBorder: !isDark },
          { name: 'panel', color: mode.background.panel, hasBorder: !isDark },
        ] }
      />
      <ColorGroup
        label="Ink"
        colors={ [
          { name: 'primary', color: mode.ink.primary, hasBorder: isDark },
          { name: 'secondary', color: mode.ink.secondary },
          { name: 'light', color: mode.ink.light, hasBorder: isDark },
          { name: 'muted', color: mode.ink.muted, hasBorder: isDark },
        ] }
      />
      <ColorGroup
        label="Border"
        colors={ [
          { name: 'panel', color: mode.border.panel, hasBorder: isDark },
          { name: 'subtle', color: mode.border.subtle, hasBorder: !isDark },
          { name: 'divider', color: mode.border.divider, hasBorder: !isDark },
        ] }
      />

      {/* 말풍선 미리보기 */ }
      <Box sx={ { mt: 1 } }>
        <Typography
          variant="caption"
          sx={ { fontWeight: 600, color: mode.ink.secondary, mb: 1, display: 'block' } }
        >
          Speech Bubble
        </Typography>
        <Box
          sx={ {
            backgroundColor: mode.speechBubble.background,
            border: `2px solid ${mode.speechBubble.border}`,
            borderRadius: '16px',
            px: 2,
            py: 1.5,
            maxWidth: 240,
          } }
        >
          <Typography
            variant="body2"
            sx={ { color: mode.speechBubble.text, fontSize: 13 } }
          >
            천천히 손가락을 꽃님이의 코에 가져다 주세요.
          </Typography>
        </Box>
      </Box>

      {/* 액센트 (있을 경우) */ }
      { mode.accent && (
        <Box sx={ { mt: 2 } }>
          <ColorGroup
            label="Accent"
            colors={ Object.entries(mode.accent)
              .filter(([key]) => !key.includes('Glow'))
              .map(([name, color]) => ({
                name,
                color,
                hasBorder: color.startsWith('#E') || color.startsWith('#F'),
              }))
            }
          />
        </Box>
      ) }
    </Box>
  );
};

/** 타이포 샘플 행 */
const TypoRow = ({ label, style, sampleText }) => (
  <Box sx={ { mb: 3 } }>
    <Typography variant="caption" sx={ { color: 'text.secondary', display: 'block', mb: 0.5 } }>
      { label }
    </Typography>
    <Typography sx={ { ...style, mb: 0.5 } }>
      { sampleText }
    </Typography>
    <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap' } }>
      <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 11 } }>
        { style.fontFamily?.split(',')[0]?.replace(/"/g, '') }
      </Typography>
      <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 11 } }>
        weight: { style.fontWeight }
      </Typography>
      <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 11 } }>
        size: { style.fontSize }
      </Typography>
    </Box>
  </Box>
);

/** 토큰 테이블 (key-value) */
const TokenTable = ({ data }) => (
  <Box sx={ { border: '1px solid', borderColor: 'divider', overflow: 'hidden', mb: 3 } }>
    <Box
      component="table"
      sx={ {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 13,
        fontFamily: 'monospace',
      } }
    >
      <Box component="thead" sx={ { backgroundColor: 'action.hover' } }>
        <Box component="tr">
          <Box component="th" sx={ { p: 1.5, textAlign: 'left', fontWeight: 600 } }>Token</Box>
          <Box component="th" sx={ { p: 1.5, textAlign: 'left', fontWeight: 600 } }>Value</Box>
          <Box component="th" sx={ { p: 1.5, textAlign: 'left', fontWeight: 600 } }>설명</Box>
        </Box>
      </Box>
      <Box component="tbody">
        { data.map((row) => (
          <Box
            component="tr"
            key={ row.token }
            sx={ {
              borderTop: '1px solid',
              borderColor: 'divider',
              '&:hover': { backgroundColor: 'action.hover' },
            } }
          >
            <Box component="td" sx={ { p: 1.5, color: 'primary.main' } }>{ row.token }</Box>
            <Box component="td" sx={ { p: 1.5 } }>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                { row.preview && (
                  <Box
                    sx={ {
                      width: 16,
                      height: 16,
                      backgroundColor: row.preview,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '2px',
                      flexShrink: 0,
                    } }
                  />
                ) }
                <span>{ String(row.value) }</span>
              </Box>
            </Box>
            <Box component="td" sx={ { p: 1.5, color: 'text.secondary' } }>{ row.desc }</Box>
          </Box>
        )) }
      </Box>
    </Box>
  </Box>
);

// ============================================================
// 1. Docs (기본 스토리) — 개요 + 컬러 전환 타임라인
// ============================================================

export const Docs = {
  render: () => {
    const chapters = [
      { id: 'hero', label: '히어로', mode: 'mono' },
      { id: 'chapter1', label: 'CH1 공원', mode: 'mono' },
      { id: 'chapter2', label: 'CH2 공방', mode: 'mono' },
      { id: 'chapter3', label: 'CH3 골목', mode: 'mono' },
      { id: 'chapter4', label: 'CH4 빌라', mode: 'dark' },
      { id: 'chapter5', label: 'CH5 피크닉', mode: 'pastel' },
      { id: 'cookie', label: '쿠키', mode: 'pastel' },
      { id: 'appendix', label: '부록', mode: 'pastel' },
      { id: 'cta', label: 'CTA', mode: 'pastel' },
    ];

    const modeColors = {
      mono: { bg: mono.background.page, text: mono.ink.primary, border: mono.border.panel },
      dark: { bg: dark.background.page, text: dark.ink.primary, border: dark.border.panel },
      pastel: { bg: pastel.background.page, text: pastel.ink.primary, border: pastel.accent.warmth },
    };

    return (
      <>
        <DocumentTitle
          title="야옹아 Design Tokens"
          status="Draft"
          note="Interactive Landing Page Design Tokens"
          brandName="야옹아, 내가 집사라도 괜찮을까?"
          systemName="Design Tokens"
          version="0.1"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            야옹아 — 디자인 토큰
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 1 } }>
            인터랙티브 랜딩 페이지의 시각 언어를 정의하는 디자인 토큰입니다.
          </Typography>
          <Box sx={ { display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' } }>
            { ['#아날로그', '#연필드로잉', '#종이질감', '#따뜻함', '#친근함'].map((tag) => (
              <Chip key={ tag } label={ tag } size="small" variant="outlined" />
            )) }
          </Box>

          {/* 토큰 구성 */ }
          <SectionTitle title="토큰 구성" description="src/data/meow-design-tokens.js" />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              mb: 4,
            } }
          >
{ `meowDesignTokens
├── colorModes          # 3개 컬러 모드 (mono, dark, pastel)
│   ├── background      # 페이지/종이/패널 배경색
│   ├── ink             # 텍스트/선 색상
│   ├── border          # 테두리/구분선
│   ├── speechBubble    # 말풍선 색상
│   ├── overlay         # 딤/비네팅
│   ├── accent          # 강조색 (dark, pastel만)
│   └── interactive     # hover/active/hint
├── chapterColorMap     # 챕터→컬러모드 매핑
├── typography          # 8종 타이포 스타일
├── texture             # 종이 질감, 패널, 말풍선
├── interaction         # 클릭영역, 코인사, 성공/실패, 힌트, 체크리스트
├── animation           # duration, easing, 패럴랙스, shake, 선인장
├── particles           # 꽃잎, 눈송이, 꽃 피어남
├── cursors             # 참치캔, 손가락, 기본
├── soundTokens         # SFX 6종 + BGM 3종
└── responsive          # 터치타겟, 패널너비, 모바일 대응` }
          </Box>

          {/* 컬러 전환 타임라인 */ }
          <SectionTitle
            title="컬러 전환 타임라인"
            description="스크롤 진행에 따른 컬러 모드 변화"
          />
          <Box sx={ { display: 'flex', gap: 0, mb: 4, overflow: 'auto' } }>
            { chapters.map((ch) => {
              const mc = modeColors[ch.mode];
              return (
                <Box
                  key={ ch.id }
                  sx={ {
                    flex: '1 0 auto',
                    minWidth: 80,
                    backgroundColor: mc.bg,
                    borderBottom: `3px solid ${mc.border}`,
                    px: 1.5,
                    py: 2,
                    textAlign: 'center',
                  } }
                >
                  <Typography
                    variant="caption"
                    sx={ { color: mc.text, fontSize: 10, fontWeight: 600, display: 'block' } }
                  >
                    { ch.label }
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={ { color: `${mc.text}88`, fontSize: 9, fontFamily: 'monospace' } }
                  >
                    { ch.mode }
                  </Typography>
                </Box>
              );
            }) }
          </Box>

          {/* 사용법 */ }
          <SectionTitle title="사용법" description="코드에서 토큰 참조하기" />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.900',
              color: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
            } }
          >
{ `import { getColorMode, typography, animation } from '@/data/meow-design-tokens';

// 챕터별 컬러 모드 가져오기
const mode = getColorMode('chapter1'); // → mono 토큰
const bg = mode.background.page;       // → '#EDE8DF'
const textColor = mode.ink.primary;     // → '#1A1A1A'

// 타이포그래피 적용
<Typography sx={{ ...typography.chapterTitle, color: mode.ink.primary }}>
  처음 만나는 고양이
</Typography>

// 애니메이션 토큰
const catAnimation = {
  duration: animation.duration.catWalk,   // 3000ms
  easing: animation.easing.gentle,
};` }
          </Box>
        </PageContainer>
      </>
    );
  },
};

// ============================================================
// 2. Color Modes — 3개 컬러 모드 상세
// ============================================================

export const ColorModes = {
  name: '1. Color Modes',
  render: () => (
    <>
      <DocumentTitle
        title="Color Modes"
        status="Draft"
        note="Chapter-based color palettes"
        brandName="야옹아"
        systemName="Design Tokens"
        version="0.1"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          컬러 모드 (Color Modes)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          챕터별 분위기에 맞춘 3개의 컬러 모드입니다.
          스크롤 진행에 따라 흑백 → 어두운 → 파스텔로 전환됩니다.
        </Typography>

        <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0 } }>
          <ModeCard mode={ mono } />
          <ModeCard mode={ dark } isDark />
          <ModeCard mode={ pastel } />
        </Box>
      </PageContainer>
    </>
  ),
};

// ============================================================
// 3. Typography — 타이포그래피 스타일
// ============================================================

export const TypographyTokens = {
  name: '2. Typography',
  render: () => (
    <>
      <DocumentTitle
        title="Typography Tokens"
        status="Draft"
        note="Project-specific text styles"
        brandName="야옹아"
        systemName="Design Tokens"
        version="0.1"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          타이포그래피 (Typography)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          프로젝트에서 사용하는 텍스트 스타일입니다.
          기존 MUI 타이포그래피를 기반으로 프로젝트 맥락에 맞게 확장합니다.
        </Typography>

        <Box
          sx={ {
            backgroundColor: mono.background.paper,
            border: `1px solid ${mono.border.subtle}`,
            p: 4,
            mb: 4,
          } }
        >
          <TypoRow
            label="chapterSubtitle"
            style={ typoTokens.chapterSubtitle }
            sampleText="CHAPTER 1"
          />
          <TypoRow
            label="chapterTitle"
            style={ typoTokens.chapterTitle }
            sampleText="처음 만나는 고양이"
          />
          <TypoRow
            label="heroTitle"
            style={ typoTokens.heroTitle }
            sampleText="야옹아, 내가 집사라도 괜찮을까?"
          />
          <TypoRow
            label="description"
            style={ typoTokens.description }
            sampleText="이혼 후 새로운 곳으로 이사를 간 미정은 한참 이삿짐 정리 중이다."
          />
          <TypoRow
            label="speechBubble"
            style={ typoTokens.speechBubble }
            sampleText="천천히 손가락을 꽃님이의 코에 가져다 주세요."
          />
          <TypoRow
            label="hint"
            style={ typoTokens.hint }
            sampleText="좋아요, 천천히..."
          />
          <TypoRow
            label="cta"
            style={ typoTokens.cta }
            sampleText="미정의 이야기 전체 보기"
          />
          <TypoRow
            label="checklist"
            style={ typoTokens.checklist }
            sampleText="하나의 생명을 끝까지 보살필 수 있는 책임감"
          />
        </Box>
      </PageContainer>
    </>
  ),
};

// ============================================================
// 4. Interaction — 인터랙션 상태
// ============================================================

export const InteractionTokens = {
  name: '3. Interaction',
  render: () => {
    const noseKissStates = [
      { ...interaction.noseKiss.idle, id: 'idle', name: '대기' },
      { ...interaction.noseKiss.approaching, id: 'approaching', name: '접근 중' },
      { ...interaction.noseKiss.tooFast, id: 'tooFast', name: '너무 빠름' },
      { ...interaction.noseKiss.success, id: 'success', name: '성공' },
    ];

    return (
      <>
        <DocumentTitle
          title="Interaction Tokens"
          status="Draft"
          note="Interactive state definitions"
          brandName="야옹아"
          systemName="Design Tokens"
          version="0.1"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            인터랙션 상태 (Interaction)
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            인터랙티브 맵과 미니게임의 상태별 피드백 토큰입니다.
          </Typography>

          {/* 코인사 게임 상태 */ }
          <SectionTitle
            title="코인사 게임 상태"
            description="커서 속도에 따른 꽃님이 반응과 힌트 텍스트"
          />
          <Box sx={ { display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' } }>
            { noseKissStates.map((state) => (
              <Box
                key={ state.id }
                sx={ {
                  width: 180,
                  p: 2,
                  border: `2px solid ${state.color}`,
                  backgroundColor: `${state.color}10`,
                  textAlign: 'center',
                } }
              >
                <Box
                  sx={ {
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: state.color,
                    mx: 'auto',
                    mb: 1,
                  } }
                />
                <Typography variant="subtitle2" sx={ { fontWeight: 700, mb: 0.5 } }>
                  { state.name }
                </Typography>
                <Typography variant="caption" sx={ { fontFamily: 'monospace', fontSize: 10, color: 'text.secondary' } }>
                  { state.color }
                </Typography>
                { state.label && (
                  <Typography
                    variant="caption"
                    sx={ { display: 'block', mt: 1, fontStyle: 'italic', color: 'text.secondary' } }
                  >
                    "{ state.label }"
                  </Typography>
                ) }
              </Box>
            )) }
          </Box>

          {/* 성공/실패 피드백 */ }
          <SectionTitle
            title="성공/실패 피드백"
            description="인터랙션 결과에 대한 시각적 피드백"
          />
          <Box sx={ { display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' } }>
            <Box
              sx={ {
                width: 280,
                height: 160,
                background: interaction.success.overlay,
                backgroundColor: mono.background.paper,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${mono.border.subtle}`,
              } }
            >
              <Box
                sx={ {
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: interaction.success.color,
                  boxShadow: `0 0 24px ${interaction.success.glow}`,
                  mb: 1,
                } }
              />
              <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                성공 — 분홍빛 온기
              </Typography>
              <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 10 } }>
                { interaction.success.color }
              </Typography>
            </Box>

            <Box
              sx={ {
                width: 280,
                height: 160,
                backgroundColor: mono.background.paper,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${mono.border.subtle}`,
              } }
            >
              <Box
                sx={ {
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: interaction.fail.color,
                  mb: 1,
                } }
              />
              <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                실패 — 흔들림
              </Typography>
              <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 10 } }>
                { interaction.fail.color } + shake { interaction.fail.shake.duration }ms
              </Typography>
            </Box>
          </Box>

          {/* 힌트 시스템 */ }
          <SectionTitle title="힌트 시스템" description="30초 무반응 시 자동 힌트 표시" />
          <TokenTable
            data={ [
              { token: 'hintSystem.delay', value: `${interaction.hintSystem.delay}ms`, desc: '힌트 표시까지 대기 시간 (30초)' },
              { token: 'hintSystem.fadeInDuration', value: `${interaction.hintSystem.fadeInDuration}ms`, desc: '힌트 페이드인 시간' },
              { token: 'hintSystem.pulseAnimation', value: 'true', desc: '펄스 애니메이션 활성화' },
            ] }
          />

          {/* 체크리스트 인터랙션 */ }
          <SectionTitle title="체크리스트 (부록)" description="체크 시 바운스 + 꽃 추가" />
          <TokenTable
            data={ [
              { token: 'checklist.idle.scale', value: '1', desc: '기본 크기' },
              { token: 'checklist.hover.scale', value: '1.03', desc: '호버 시 살짝 확대' },
              { token: 'checklist.checked.bounceScale', value: '1.15', desc: '체크 시 바운스 최대 크기' },
              { token: 'checklist.checked.bounceDuration', value: '400ms', desc: '바운스 애니메이션 시간' },
            ] }
          />
        </PageContainer>
      </>
    );
  },
};

// ============================================================
// 5. Animation & Effects — 애니메이션, 파티클, 사운드
// ============================================================

export const AnimationEffects = {
  name: '4. Animation & Effects',
  render: () => (
    <>
      <DocumentTitle
        title="Animation & Effects"
        status="Draft"
        note="Motion, particles, and sound tokens"
        brandName="야옹아"
        systemName="Design Tokens"
        version="0.1"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          애니메이션 & 이펙트 (Animation & Effects)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          모션 타이밍, 이징, 파티클, 사운드 토큰입니다.
        </Typography>

        {/* Duration */ }
        <SectionTitle title="Duration" description="애니메이션 지속 시간 (ms)" />
        <TokenTable
          data={ Object.entries(animation.duration).map(([key, val]) => ({
            token: `duration.${key}`,
            value: `${val}ms`,
            desc: {
              instant: '즉각 반응',
              fast: '빠른 전환',
              normal: '기본 전환',
              slow: '느린 전환',
              catWalk: '고양이 걸어오기 (히어로)',
              titleType: '타이핑 효과 (히어로)',
              colorTransition: '컬러 모드 전환 (CH5)',
              panelReveal: '만화 패널 등장',
              particleFall: '꽃잎/눈 낙하 주기',
              hintFadeIn: '힌트 페이드인',
              bloomGrow: '꽃 피어남 (부록)',
              fadeToBlack: '암전 (쿠키 진입)',
              fadeFromBlack: '밝아짐 (쿠키 등장)',
            }[key] || '',
          })) }
        />

        {/* Easing */ }
        <SectionTitle title="Easing" description="이징 함수" />
        <Box sx={ { mb: 4 } }>
          { Object.entries(animation.easing).map(([name, value]) => (
            <Box key={ name } sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 2 } }>
              <Typography
                variant="caption"
                sx={ { fontFamily: 'monospace', color: 'primary.main', minWidth: 80 } }
              >
                { name }
              </Typography>
              <Box sx={ { flex: 1, height: 4, backgroundColor: 'grey.200', position: 'relative', maxWidth: 200 } }>
                <Box
                  sx={ {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'primary.main',
                    transformOrigin: 'left',
                    animation: `easing-demo-${name} 2s ${value} infinite alternate`,
                    [`@keyframes easing-demo-${name}`]: {
                      '0%': { transform: 'scaleX(0)' },
                      '100%': { transform: 'scaleX(1)' },
                    },
                  } }
                />
              </Box>
              <Typography variant="caption" sx={ { fontFamily: 'monospace', color: 'text.secondary', fontSize: 10 } }>
                { value }
              </Typography>
            </Box>
          )) }
        </Box>

        {/* Parallax */ }
        <SectionTitle title="Parallax" description="레이어별 패럴랙스 속도 배수" />
        <TokenTable
          data={ Object.entries(animation.parallax).map(([key, val]) => ({
            token: `parallax.${key}`,
            value: `${val}x`,
            desc: {
              background: '배경 레이어 (가장 느림)',
              midground: '중간 레이어',
              foreground: '전경 레이어 (기본 속도)',
              speechBubble: '말풍선 (살짝 빠르게 → 입체감)',
            }[key] || '',
          })) }
        />

        <Divider sx={ { my: 4 } } />

        {/* 파티클 */ }
        <SectionTitle title="파티클 (Particles)" description="꽃잎, 눈송이, 꽃 피어남 효과" />

        {/* 꽃잎 */ }
        <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
          꽃잎 (Petal) — CH5 피크닉, 부록
        </Typography>
        <Box sx={ { display: 'flex', gap: 0.5, mb: 2 } }>
          { particles.petal.colors.map((color) => (
            <Box
              key={ color }
              sx={ {
                width: 40,
                height: 40,
                backgroundColor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              } }
            >
              <Typography variant="caption" sx={ { fontSize: 8, fontFamily: 'monospace', color: '#3A2E24' } }>
                { color }
              </Typography>
            </Box>
          )) }
        </Box>
        <TokenTable
          data={ [
            { token: 'petal.size', value: `${particles.petal.size.min}–${particles.petal.size.max}px`, desc: '꽃잎 크기 범위' },
            { token: 'petal.count.normal', value: particles.petal.count.normal, desc: '기본 밀도' },
            { token: 'petal.fallSpeed', value: `${particles.petal.fallSpeed.min}–${particles.petal.fallSpeed.max}`, desc: '낙하 속도' },
            { token: 'petal.swayAmplitude', value: `${particles.petal.swayAmplitude}px`, desc: '좌우 흔들림 폭' },
          ] }
        />

        {/* 눈송이 */ }
        <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
          눈송이 (Snowflake) — CH5 겨울 장면
        </Typography>
        <Box sx={ { display: 'flex', gap: 0.5, mb: 2 } }>
          { particles.snowflake.colors.map((color) => (
            <Box
              key={ color }
              sx={ {
                width: 40,
                height: 40,
                backgroundColor: color,
                border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              } }
            >
              <Typography variant="caption" sx={ { fontSize: 8, fontFamily: 'monospace' } }>
                { color }
              </Typography>
            </Box>
          )) }
        </Box>
        <TokenTable
          data={ [
            { token: 'snowflake.size', value: `${particles.snowflake.size.min}–${particles.snowflake.size.max}px`, desc: '눈송이 크기 범위' },
            { token: 'snowflake.count.normal', value: particles.snowflake.count.normal, desc: '기본 밀도' },
            { token: 'snowflake.swayAmplitude', value: `${particles.snowflake.swayAmplitude}px`, desc: '좌우 흔들림 폭' },
          ] }
        />

        <Divider sx={ { my: 4 } } />

        {/* 사운드 */ }
        <SectionTitle title="사운드 토큰" description="효과음 및 배경음악 참조" />

        <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>효과음 (SFX)</Typography>
        <TokenTable
          data={ Object.entries(soundTokens.sfx).map(([key, val]) => ({
            token: `sfx.${key}`,
            value: `vol: ${val.volume}`,
            desc: val.chapters.join(', '),
          })) }
        />

        <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>배경음악 (BGM)</Typography>
        <TokenTable
          data={ Object.entries(soundTokens.bgm).map(([key, val]) => ({
            token: `bgm.${key}`,
            value: `vol: ${val.volume}`,
            desc: val.chapters.join(', '),
          })) }
        />
      </PageContainer>
    </>
  ),
};
