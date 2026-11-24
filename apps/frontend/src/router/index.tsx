import { Navigate, createBrowserRouter } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  DistributionPartnersPage,
  EntertainmentPage,
  HomePage,
  IPTVPage,
  LegalPage,
  NotFoundPage,
  OTTPage,
  ServicesPage,
} from '../app/pages';
import { MainLayout } from '../layouts';
import { LEGAL_REDIRECTS, ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.iptv, element: <IPTVPage /> },
      { path: ROUTES.ott, element: <OTTPage /> },
      { path: ROUTES.entertainment, element: <EntertainmentPage /> },
      { path: ROUTES.partners, element: <DistributionPartnersPage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.legal, element: <LegalPage /> },
      ...LEGAL_REDIRECTS.map(({ from, to }) => ({
        path: from,
        element: <Navigate to={to} replace />,
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export * from './routes';
