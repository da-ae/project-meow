import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FullPageContainer } from '../layout/FullPageContainer';
import FadeTransition from '../motion/FadeTransition';
import { mono, typography as typo } from '../../data/meow-design-tokens';

/**
 * CatPaw 컴포넌트
 *
 * 고양이 발자국 아이콘을 SVG로 렌더링한다.
 *
 * Props:
 * @param {number} size - 아이콘 크기 [Optional, 기본값: 20]
 * @param {string} color - 아이콘 색상 [Optional, 기본값: mono.ink.primary]
 *
 * Example usage:
 * <CatPaw size={20} color="#1A1A1A" />
 */
function CatPaw({ size = 20, color = mono.ink.primary }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={ {
        width: size,
        height: size,
        fill: color,
        flexShrink: 0,
      } }
    >
      {/* 발바닥 패드 */}
      <ellipse cx="12" cy="16" rx="4.5" ry="4" />
      {/* 발가락 패드 */}
      <circle cx="6.5" cy="9.5" r="2.2" />
      <circle cx="12" cy="7.5" r="2.2" />
      <circle cx="17.5" cy="9.5" r="2.2" />
    </Box>
  );
}

/**
 * ChapterInfo 컴포넌트
 *
 * 챕터 정보 섹션. 서브타이틀, 타이틀, 디스크립션을 중앙 정렬로 표시한다.
 * 서브타이틀 앞에 고양이 발자국 아이콘이 포함된다.
 *
 * 동작 흐름:
 * 1. 화면에 진입하면 서브타이틀이 먼저 페이드인한다
 * 2. 이어서 타이틀이 페이드인한다
 * 3. 마지막으로 디스크립션이 페이드인한다
 *
 * Props:
 * @param {string} subtitle - 서브타이틀 (예: 'CHAPTER 1') [Required]
 * @param {string} title - 챕터 타이틀 (예: '처음 만나는 고양이') [Required]
 * @param {string} description - 챕터 설명 텍스트 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ChapterInfo
 *   subtitle="CHAPTER 1"
 *   title="처음 만나는 고양이"
 *   description="이혼 후 새로운 곳으로 이사를 간 미정은\n한참 이삿짐 정리 중이다."
 * />
 */
function ChapterInfo({ subtitle, title, description, sx }) {
  return (
    <FullPageContainer
      sx={ {
        backgroundColor: mono.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      } }
    >
      {/* 서브타이틀 + 발자국 */}
      <FadeTransition
        isIn
        duration={ 800 }
        direction="up"
        distance={ 16 }
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          mb: 1,
        } }
      >
        <CatPaw size={ 26 } color={ mono.ink.primary } />
        <Typography
          sx={ {
            ...typo.chapterSubtitle,
            color: mono.ink.primary,
          } }
        >
          { subtitle }
        </Typography>
      </FadeTransition>

      {/* 타이틀 */}
      <FadeTransition
        isIn
        duration={ 800 }
        delay={ 200 }
        direction="up"
        distance={ 16 }
        sx={ {
          mb: 8,
        } }
      >
        <Typography
          component="h2"
          sx={ {
            ...typo.chapterTitle,
            color: mono.ink.primary,
            textAlign: 'center',
          } }
        >
          { title }
        </Typography>
      </FadeTransition>

      {/* 디스크립션 */}
      <FadeTransition
        isIn
        duration={ 800 }
        delay={ 400 }
        direction="up"
        distance={ 16 }
      >
        <Typography
          sx={ {
            ...typo.description,
            color: mono.ink.secondary,
            textAlign: 'center',
            whiteSpace: 'pre-line',
          } }
        >
          { description }
        </Typography>
      </FadeTransition>
    </FullPageContainer>
  );
}

export default ChapterInfo;
