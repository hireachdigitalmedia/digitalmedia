import { createBrowserRouter } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  IPTVPage,
  NotFoundPage,
  ServicesPage,
} from '../app/pages';
import { MainLayout } from '../layouts';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.iptv, element: <IPTVPage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export * from './routes';
