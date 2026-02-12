import { DocumentTitle, PageContainer, MarkdownViewer } from '../../components/storybookDocumentation';
import uxFlowContent from '../../../.claude/rules/ux-flow.md?raw';

export default {
  title: 'Overview/야옹아 UX Flow',
  parameters: {
    layout: 'padded',
  },
};

/** UX Flow 문서 */
export const Doc = {
  render: () => (
    <>
      <DocumentTitle
        title="야옹아 UX Flow"
        status="In Progress"
        note="챕터별 플로우, 인터랙션, 필요 컴포넌트 정의"
        brandName="Project"
        systemName="야옹아"
        version="1.0"
      />
      <PageContainer>
        <MarkdownViewer content={ uxFlowContent } />
      </PageContainer>
    </>
  ),
};
