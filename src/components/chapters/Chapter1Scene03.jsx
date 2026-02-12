import Box from '@mui/material/Box';
import FadeTransition from '../motion/FadeTransition';
import { mono } from '../../data/meow-design-tokens';

import imgPanel04 from '../../assets/chapter1/comic-panel/img_ch1_04.png';
import imgPanel05 from '../../assets/chapter1/comic-panel/img_ch1_05.png';
import imgPanel06 from '../../assets/chapter1/comic-panel/img_ch1_06.png';
import imgPanel07 from '../../assets/chapter1/comic-panel/img_ch1_07.png';
import imgBubble04 from '../../assets/chapter1/speech-bubble/img_ch1_04_1.png';
import imgBubble06 from '../../assets/chapter1/speech-bubble/img_ch1_06_1.png';
import imgBubble07 from '../../assets/chapter1/speech-bubble/img_ch1_07_1.png';

/**
 * ComicPanel 컴포넌트
 *
 * 만화 패널 하나를 렌더링한다. 패널 이미지 위에 말풍선을 절대 위치로 오버레이한다.
 * 높이 기준 레이아웃: 부모 높이에 맞춰 이미지가 스케일되고, 너비는 원본 비율에 따라 자동 결정된다.
 *
 * Props:
 * @param {string} panelSrc - 패널 이미지 경로 [Required]
 * @param {string} panelAlt - 패널 이미지 alt 텍스트 [Required]
 * @param {string} bubbleSrc - 말풍선 이미지 경로 [Optional]
 * @param {string} bubbleAlt - 말풍선 이미지 alt 텍스트 [Optional]
 * @param {object} bubblePosition - 말풍선 위치 (top, right, bottom, left) [Optional]
 * @param {number|string} bubbleWidth - 말풍선 너비 [Optional, 기본값: '35%']
 *
 * Example usage:
 * <ComicPanel
 *   panelSrc={imgPanel04}
 *   panelAlt="선인장 화분을 들고 있는 미정"
 *   bubbleSrc={imgBubble04}
 *   bubbleAlt="이번에도 또 죽어가네.."
 *   bubblePosition={{ top: '4%', left: '8%' }}
 * />
 */
function ComicPanel({
  panelSrc,
  panelAlt,
  bubbleSrc,
  bubbleAlt,
  bubblePosition = {},
  bubbleWidth = '35%',
}) {
  return (
    <Box
      sx={ {
        position: 'relative',
        display: 'inline-block',
        backgroundColor: mono.background.panel,
        height: '100%',
        width: 'auto',
      } }
    >
      {/* 패널 이미지: 높이 100% 기준, 너비는 원본 비율에 따라 자동 */}
      <Box
        component="img"
        src={ panelSrc }
        alt={ panelAlt }
        sx={ {
          display: 'block',
          height: '100%',
          width: 'auto',
        } }
      />

      {/* 말풍선 오버레이 */}
      { bubbleSrc && (
        <Box
          component="img"
          src={ bubbleSrc }
          alt={ bubbleAlt }
          sx={ {
            position: 'absolute',
            width: bubbleWidth,
            height: 'auto',
            pointerEvents: 'none',
            ...bubblePosition,
          } }
        />
      ) }
    </Box>
  );
}

/**
 * Chapter1Scene03 컴포넌트
 *
 * 챕터 1의 세 번째 장면. 자유로운 만화 레이아웃으로 4개 패널을 배치한다.
 * 레퍼런스: chapter1_04.png
 *
 * 동작 흐름:
 * 1. 상단 열: 3개 패널이 동일 높이로 계단식(staircase) 배치된다
 *    - 1번 패널(미정)이 상단 밀착 위치에서 페이드인
 *    - 2번 패널(화분 클로즈업)이 아래로 내려간 위치에서 페이드인
 *    - 3번 패널(참치캔)이 더 아래로 내려간 위치에서 페이드인
 * 2. 하단 열: 4번 패널(미정 클로즈업)이 중앙 정렬로 페이드인한다
 * 3. 모든 패널은 겹침 없이 gap으로 간격을 유지하며, 이미지 고유 비율이 보존된다
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <Chapter1Scene03 />
 */
function Chapter1Scene03({ sx }) {
  /** 상단 3패널 공통 높이 */
  const topPanelHeight = { xs: 220, sm: 280, md: 360, lg: 420 };

  /** 하단 패널 높이 */
  const bottomPanelHeight = { xs: 200, sm: 260, md: 320, lg: 380 };

  return (
    <Box
      sx={ {
        backgroundColor: mono.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        gap: { xs: 3, md: 4 },
        ...sx,
      } }
    >
      {/* ── 상단 열: 3패널 계단식 배치 ── */}
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'flex-start',
          gap: { xs: 1.5, sm: 2, md: 3 },
        } }
      >
        {/* 1번 패널: 선인장 화분을 든 미정 (상단 밀착) */}
        <FadeTransition
          isIn
          duration={ 800 }
          direction="up"
          distance={ 20 }
          sx={ {
            height: topPanelHeight,
            flexShrink: 0,
          } }
        >
          <ComicPanel
            panelSrc={ imgPanel04 }
            panelAlt="시든 선인장 화분을 들고 바라보는 미정"
            bubbleSrc={ imgBubble04 }
            bubbleAlt="이번에도 또 죽어가네.. 언제쯤이면 예쁘게 키울 수 있을까."
            bubblePosition={ { top: '3%', left: '6%' } }
            bubbleWidth="48%"
          />
        </FadeTransition>

        {/* 2번 패널: 화분 내려놓기 클로즈업 (1단 아래) */}
        <FadeTransition
          isIn
          duration={ 800 }
          delay={ 200 }
          direction="up"
          distance={ 20 }
          sx={ {
            height: topPanelHeight,
            flexShrink: 0,
            marginTop: { xs: '60px', sm: '80px', md: '100px', lg: '120px' },
          } }
        >
          <ComicPanel
            panelSrc={ imgPanel05 }
            panelAlt="선인장 화분을 살며시 내려놓는 장면"
          />
        </FadeTransition>

        {/* 3번 패널: 참치캔 꺼내기 (2단 아래) */}
        <FadeTransition
          isIn
          duration={ 800 }
          delay={ 400 }
          direction="up"
          distance={ 20 }
          sx={ {
            height: topPanelHeight,
            flexShrink: 0,
            marginTop: { xs: '120px', sm: '160px', md: '200px', lg: '240px' },
          } }
        >
          <ComicPanel
            panelSrc={ imgPanel06 }
            panelAlt="냉장고에서 참치캔을 꺼내는 미정의 손"
            bubbleSrc={ imgBubble06 }
            bubbleAlt="아, 참치가 있었지."
            bubblePosition={ { top: '2%', left: '5%' } }
            bubbleWidth="52%"
          />
        </FadeTransition>
      </Box>

      {/* ── 하단 열: 4번 패널 중앙 배치 ── */}
      <FadeTransition
        isIn
        duration={ 800 }
        delay={ 600 }
        direction="up"
        distance={ 20 }
        sx={ {
          height: bottomPanelHeight,
          flexShrink: 0,
        } }
      >
        <ComicPanel
          panelSrc={ imgPanel07 }
          panelAlt="참치캔을 바라보며 생각에 잠긴 미정"
          bubbleSrc={ imgBubble07 }
          bubbleAlt="작은 고양이가 배가 많이 고픈 것 같았는데."
          bubblePosition={ { top: '2%', left: '22%' } }
          bubbleWidth="42%"
        />
      </FadeTransition>
    </Box>
  );
}

export default Chapter1Scene03;
