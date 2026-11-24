import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { useScrollToHash } from '../../hooks';
import { HeaderSpacer, LayoutRoot, Main } from './MainLayout.style';

export function MainLayout() {
  useScrollToHash();

  return (
    <LayoutRoot>
      <Header />
      <HeaderSpacer aria-hidden />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutRoot>
  );
}
