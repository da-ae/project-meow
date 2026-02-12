import ChapterInfo from './ChapterInfo';

export default {
  title: 'Page/야옹아/ChapterInfo',
  component: ChapterInfo,
  parameters: {
    layout: 'fullscreen',
  },
};

/** 챕터 1 정보 섹션 */
export const Chapter1 = {
  render: () => (
    <ChapterInfo
      subtitle="CHAPTER 1"
      title="처음 만나는 고양이"
      description={ '이혼 후 새로운 곳으로 이사를 간 미정은\n한참 이삿짐 정리 중이다.' }
    />
  ),
};
