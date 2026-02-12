import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme as theme } from './styles/themes';

import Hero from './components/chapters/Hero';
import ChapterInfo from './components/chapters/ChapterInfo';
import Chapter1Scene02 from './components/chapters/Chapter1Scene02';
import Chapter1Scene03 from './components/chapters/Chapter1Scene03';

function HomePage() {
  return (
    <>
      <Hero />
      <ChapterInfo
        subtitle="CHAPTER 1"
        title="처음 만나는 고양이"
        description={ '이혼 후 새로운 곳으로 이사를 간 미정은\n한참 이삿짐 정리 중이다.' }
      />
      <Chapter1Scene02 />
      <Chapter1Scene03 />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
