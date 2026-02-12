import { DocumentTitle, PageContainer, MarkdownViewer } from '../../components/storybookDocumentation';
import prdContent from '../../../.claude/rules/project_meow_summary.md?raw';

export default {
  title: 'Overview/야옹아 PRD',
  parameters: {
    layout: 'padded',
  },
};

/** PRD 문서 */
export const Doc = {
  render: () => (
    <>
      <DocumentTitle
        title="야옹아 PRD"
        status="In Progress"
        note="「야옹아, 내가 집사라도 괜찮을까?」 인터랙티브 랜딩 페이지 기획서"
        brandName="Project"
        systemName="야옹아"
        version="1.0"
      />
      <PageContainer>
        <MarkdownViewer content={ prdContent } />
      </PageContainer>
    </>
  ),
};
