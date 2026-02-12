import Box from '@mui/material/Box';
import FadeTransition from '../motion/FadeTransition';
import { mono } from '../../data/meow-design-tokens';

import imgPanel02 from '../../assets/chapter1/comic-panel/img_ch1_02.png';
import imgPanel03 from '../../assets/chapter1/comic-panel/img_ch1_03.png';
import imgBubble02 from '../../assets/chapter1/speech-bubble/img_ch1_02_1.png';
import imgBubble03 from '../../assets/chapter1/speech-bubble/img_ch1_03_1.png';

/**
 * ComicPanel 컴포넌트
 *
 * 만화 패널 하나를 렌더링한다. 패널 이미지 위에 말풍선을 절대 위치로 오버레이한다.
 * 높이 기준 레이아웃: 컨테이너 높이에 맞춰 이미지가 스케일되고, 너비는 비율에 따라 자동 결정된다.
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
 *   panelSrc={imgPanel02}
 *   panelAlt="이삿짐 박스들"
 *   bubbleSrc={imgBubble02}
 *   bubbleAlt="정리해야 돼서 이만 끊을게요. 고모."
 *   bubblePosition={{ top: '6%', right: '8%' }}
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
        backgroundColor: mono.background.panel,
        height: '100%',
        flexShrink: 0,
      } }
    >
      {/* 패널 이미지: 높이 100% 기준, 너비는 비율에 따라 자동 */}
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
 * Chapter1Scene02 컴포넌트
 *
 * 챕터 1의 두 번째 장면. 이삿짐 정리 + 선인장 2단(2col) 패널 배치.
 * 레퍼런스: chapter1_03.png
 *
 * 동작 흐름:
 * 1. 두 패널이 동일한 높이로 나란히 배치된다
 * 2. 각 이미지의 원본 비율이 유지되어 너비가 자연스럽게 달라진다
 * 3. 화면에 진입하면 왼쪽 패널(이삿짐)이 페이드인한다
 * 4. 이어서 오른쪽 패널(선인장)이 페이드인한다
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <Chapter1Scene02 />
 */
function Chapter1Scene02({ sx }) {
  return (
    <Box
      sx={ {
        backgroundColor: mono.background.paper,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        ...sx,
      } }
    >
      {/* 높이 기준 flex 컨테이너: 두 패널이 동일 높이, 너비는 비율에 따라 자동 */}
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          height: { xs: 260, sm: 340, md: 420, lg: 480 },
        } }
      >
        {/* 왼쪽 패널: 이삿짐 */}
        <FadeTransition
          isIn
          duration={ 800 }
          direction="up"
          distance={ 20 }
          sx={ { height: '100%' } }
        >
          <ComicPanel
            panelSrc={ imgPanel02 }
            panelAlt="이삿짐 박스들이 쌓여 있는 미정의 새 방"
            bubbleSrc={ imgBubble02 }
            bubbleAlt="정리해야 돼서 이만 끊을게요. 고모."
            bubblePosition={ { top: '6%', right: '8%' } }
            bubbleWidth="45%"
          />
        </FadeTransition>

        {/* 오른쪽 패널: 선인장 */}
        <FadeTransition
          isIn
          duration={ 800 }
          delay={ 200 }
          direction="up"
          distance={ 20 }
          sx={ { height: '100%' } }
        >
          <ComicPanel
            panelSrc={ imgPanel03 }
            panelAlt="시든 선인장을 들고 있는 미정의 손"
            bubbleSrc={ imgBubble03 }
            bubbleAlt="선인장... 이건 왜 가져왔지."
            bubblePosition={ { top: '4%', left: '12%' } }
            bubbleWidth="42%"
          />
        </FadeTransition>
      </Box>
    </Box>
  );
}

export default Chapter1Scene02;
