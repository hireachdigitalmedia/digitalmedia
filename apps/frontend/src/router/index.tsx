import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { LEGAL_REDIRECTS, ROUTES } from './routes';

/**
 * Each page is loaded on demand (its own JS chunk), so visitors only download the code
 * for the page they open. The layout (header/footer) is always included.
 */
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        lazy: async () => ({
          Component: (await import('../app/pages/home')).HomePage,
        }),
      },
      {
        path: ROUTES.iptv,
        lazy: async () => ({
          Component: (await import('../app/pages/iptv')).IPTVPage,
        }),
      },
      {
        path: ROUTES.ott,
        lazy: async () => ({
          Component: (await import('../app/pages/ott')).OTTPage,
        }),
      },
      {
        path: ROUTES.entertainment,
        lazy: async () => ({
          Component: (await import('../app/pages/entertainment'))
            .EntertainmentPage,
        }),
      },
      {
        path: ROUTES.partners,
        lazy: async () => ({
          Component: (await import('../app/pages/partners'))
            .DistributionPartnersPage,
        }),
      },
      {
        path: ROUTES.about,
        lazy: async () => ({
          Component: (await import('../app/pages/about')).AboutPage,
        }),
      },
      {
        path: ROUTES.contact,
        lazy: async () => ({
          Component: (await import('../app/pages/contact')).ContactPage,
        }),
      },
      {
        path: ROUTES.legal,
        lazy: async () => ({
          Component: (await import('../app/pages/legal')).LegalPage,
        }),
      },
      ...LEGAL_REDIRECTS.map(({ from, to }) => ({
        path: from,
        element: <Navigate to={to} replace />,
      })),
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('../app/pages/not-found')).NotFoundPage,
        }),
      },
    ],
  },
]);

export * from './routes';
