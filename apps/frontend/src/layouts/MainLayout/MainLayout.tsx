import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { useScrollToHash } from '../../hooks';
import { LayoutRoot, Main } from './MainLayout.style';

export function MainLayout() {
  useScrollToHash();

  return (
    <LayoutRoot>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutRoot>
  );
}
