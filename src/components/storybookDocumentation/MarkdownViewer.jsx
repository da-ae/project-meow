import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

/**
 * MarkdownViewer 컴포넌트
 *
 * Markdown 텍스트를 스타일링된 HTML로 변환하여 표시한다.
 * 스토리북 문서 내에서 .md 파일 내용을 시각적으로 렌더링할 때 사용.
 *
 * 동작 흐름:
 * 1. raw 텍스트로 불러온 Markdown 문자열을 전달받는다
 * 2. 헤더, 테이블, 코드블록, 리스트 등 기본 문법을 HTML로 변환한다
 * 3. MUI 테마 색상을 활용해 스타일링된 문서로 표시한다
 *
 * Props:
 * @param {string} content - Markdown 원본 텍스트 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * import rawMd from './doc.md?raw';
 * <MarkdownViewer content={rawMd} />
 */
function MarkdownViewer({ content, sx }) {
  const theme = useTheme();

  /** Markdown → HTML 변환 */
  const toHtml = (md) => {
    let html = md;

    /** 코드 블록 (```...```) */
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<pre class="md-pre"><code>${escaped}</code></pre>`;
    });

    /** 테이블: 연속된 | 행을 감지하여 <table>로 변환 */
    const lines = html.split('\n');
    const result = [];
    let tableRows = [];
    let isFirstRow = true;

    const flushTable = () => {
      if (tableRows.length > 0) {
        result.push(`<table class="md-table"><tbody>${tableRows.join('')}</tbody></table>`);
        tableRows = [];
        isFirstRow = true;
      }
    };

    for (const line of lines) {
      if (/^\|(.+)\|$/.test(line.trim())) {
        const cells = line.trim().split('|').filter((c) => c !== '');
        /** 구분선 행 (|---|---|) 건너뜀 */
        if (cells.every((c) => /^[\s\-:]+$/.test(c))) {
          continue;
        }
        const tag = isFirstRow ? 'th' : 'td';
        const cellHtml = cells.map((c) => `<${tag}>${c.trim()}</${tag}>`).join('');
        tableRows.push(`<tr>${cellHtml}</tr>`);
        isFirstRow = false;
      } else {
        flushTable();
        result.push(line);
      }
    }
    flushTable();
    html = result.join('\n');

    /** 헤더 */
    html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
    html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
    html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

    /** 수평선 */
    html = html.replace(/^---+$/gm, '<hr />');

    /** 인용 블록 */
    html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

    /** 볼드 */
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    /** 이탤릭 */
    html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');

    /** 인라인 코드 */
    html = html.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>');

    /** 리스트 아이템 (- 또는 숫자.) */
    html = html.replace(/^-\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');

    /** 연속된 <li>를 <ul>로 감싸기 */
    html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

    /** 링크 */
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    return html;
  };

  const palette = theme.palette;

  return (
    <Box
      sx={ {
        fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
        fontSize: 14,
        lineHeight: 1.8,
        color: palette.text.primary,
        '& h1': {
          fontSize: 28,
          fontWeight: 800,
          mt: 5,
          mb: 2,
          pb: 1,
          borderBottom: `2px solid ${palette.divider}`,
        },
        '& h2': {
          fontSize: 22,
          fontWeight: 700,
          mt: 4,
          mb: 1.5,
          pb: 0.5,
          borderBottom: `1px solid ${palette.divider}`,
        },
        '& h3': {
          fontSize: 18,
          fontWeight: 700,
          mt: 3,
          mb: 1,
        },
        '& h4, & h5, & h6': {
          fontSize: 15,
          fontWeight: 600,
          mt: 2.5,
          mb: 1,
        },
        '& .md-table': {
          width: '100%',
          borderCollapse: 'collapse',
          my: 2,
          fontSize: 13,
          '& th': {
            fontWeight: 700,
            textAlign: 'left',
            p: 1,
            borderBottom: `2px solid ${palette.divider}`,
            backgroundColor: palette.grey[50],
          },
          '& td': {
            p: 1,
            borderBottom: `1px solid ${palette.divider}`,
            verticalAlign: 'top',
          },
          '& tr:last-child td': {
            borderBottom: 'none',
          },
        },
        '& .md-pre': {
          backgroundColor: palette.grey[100],
          borderRadius: 1,
          p: 2,
          my: 2,
          overflow: 'auto',
          fontSize: 12,
          lineHeight: 1.6,
          fontFamily: '"Fira Code", "Consolas", monospace',
          '& code': {
            fontFamily: 'inherit',
          },
        },
        '& .md-code': {
          backgroundColor: palette.grey[100],
          px: 0.5,
          py: 0.25,
          borderRadius: 0.5,
          fontSize: 12,
          fontFamily: '"Fira Code", "Consolas", monospace',
          color: palette.primary.main,
        },
        '& ul': {
          pl: 3,
          my: 1,
          listStyleType: 'disc',
        },
        '& li': {
          mb: 0.5,
        },
        '& blockquote': {
          borderLeft: `3px solid ${palette.warning.main}`,
          pl: 2,
          py: 0.5,
          my: 2,
          color: palette.text.secondary,
          backgroundColor: 'rgba(255, 167, 38, 0.06)',
          borderRadius: '0 4px 4px 0',
        },
        '& hr': {
          border: 'none',
          borderTop: `1px solid ${palette.divider}`,
          my: 3,
        },
        '& strong': {
          fontWeight: 700,
        },
        '& a': {
          color: palette.primary.main,
          textDecoration: 'underline',
        },
        ...sx,
      } }
      dangerouslySetInnerHTML={ { __html: toHtml(content) } }
    />
  );
}

export default MarkdownViewer;
