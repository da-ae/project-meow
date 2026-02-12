import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FullPageContainer } from '../layout/FullPageContainer';
import FadeTransition from '../motion/FadeTransition';
import { mono } from '../../data/meow-design-tokens';
import heroImage from '../../assets/hero/img_hero.png';

/**
 * Hero 컴포넌트
 *
 * 「야옹아, 내가 집사라도 괜찮을까?」 히어로 섹션.
 * 흑백 만화풍 골목 배경 위에 타이틀이 타이핑 효과로 등장하고,
 * 하단에 스크롤 유도 인디케이터가 표시된다.
 *
 * 동작 흐름:
 * 1. 페이지 진입 시 배경 이미지가 서서히 나타난다
 * 2. 0.8초 후 타이틀이 한 글자씩 타이핑되며 등장한다
 * 3. 타이핑 완료 후 스크롤 유도 화살표가 페이드인된다
 * 4. 사용자가 스크롤하면 챕터 1로 이동한다
 *
 * Props:
 * @param {function} onScrollNext - 스크롤 시 다음 섹션으로 이동하는 콜백 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <Hero />
 * <Hero onScrollNext={() => scrollTo('chapter1')} />
 */
function Hero({ onScrollNext, sx }) {
  const [isImageReady, setIsImageReady] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const fullTitle = '야옹아,\n내가 집사라도\n괜찮을까?';
  const typingDelay = 800;
  const typingSpeed = 80;

  /** 배경 이미지 로드 완료 후 애니메이션 시작 */
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setIsImageReady(true);
  }, []);

  /** 타이핑 효과: 한 글자씩 표시 */
  useEffect(() => {
    if (!isImageReady) return;

    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setDisplayedText(fullTitle.slice(0, index));
        if (index >= fullTitle.length) {
          clearInterval(interval);
          setIsTypingDone(true);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [isImageReady]);

  return (
    <FullPageContainer
      sx={ {
        backgroundColor: mono.background.page,
        ...sx,
      } }
    >
      {/* 배경 이미지 */}
      <FadeTransition
        isIn={ isImageReady }
        duration={ 1200 }
        easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        sx={ {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        } }
      >
        <Box
          sx={ {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          } }
        />
      </FadeTransition>

      {/* 비네팅 오버레이 */}
      <Box
        sx={ {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: mono.overlay.vignette,
          pointerEvents: 'none',
          zIndex: 1,
        } }
      />

      {/* 타이틀 텍스트 */}
      <Box
        sx={ {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          px: 3,
        } }
      >
        <Typography
          component="h1"
          sx={ {
            fontFamily: '"Bohyun", "Outfit", "Pretendard Variable", sans-serif',
            fontWeight: 400,
            fontSize: '120px',
            lineHeight: 0.9,
            color: mono.ink.primary,
            textAlign: 'left',
            whiteSpace: 'pre-line',
            WebkitTextStroke: '5px #fff',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))',
            minHeight: { xs: '8.4rem', sm: '10.5rem', md: '12.6rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          { displayedText }
          { !isTypingDone && (
            <Box
              component="span"
              sx={ {
                display: 'inline-block',
                width: '2px',
                height: '1.2em',
                backgroundColor: mono.ink.primary,
                ml: 0.5,
                animation: 'blink 0.8s step-end infinite',
                verticalAlign: 'text-bottom',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
              } }
            />
          ) }
        </Typography>
      </Box>

      {/* 스크롤 인디케이터 */}
      <FadeTransition
        isIn={ isTypingDone }
        duration={ 800 }
        delay={ 400 }
        direction="up"
        distance={ 12 }
        sx={ {
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          cursor: onScrollNext ? 'pointer' : 'default',
        } }
      >
        <Box onClick={ onScrollNext }>
          <Typography
            variant="caption"
            sx={ {
              color: mono.ink.secondary,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: `0 0 12px ${mono.background.paper}`,
            } }
          >
            Scroll
          </Typography>
          <Box
            sx={ {
              width: 1.5,
              height: 28,
              backgroundColor: mono.ink.secondary,
              mx: 'auto',
              mt: 0.5,
              animation: 'scrollPulse 2s ease-in-out infinite',
              '@keyframes scrollPulse': {
                '0%, 100%': { opacity: 0.4, transform: 'scaleY(1)' },
                '50%': { opacity: 1, transform: 'scaleY(1.3)' },
              },
              transformOrigin: 'top',
            } }
          />
        </Box>
      </FadeTransition>
    </FullPageContainer>
  );
}

export default Hero;
