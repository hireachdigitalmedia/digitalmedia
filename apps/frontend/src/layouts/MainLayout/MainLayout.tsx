import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { LayoutRoot, Main } from './MainLayout.style';

export function MainLayout() {
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
