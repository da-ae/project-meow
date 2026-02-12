import Hero from './Hero';

export default {
  title: 'Page/야옹아/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

/** 기본 히어로 섹션 */
export const Default = {
  render: () => <Hero />,
};
