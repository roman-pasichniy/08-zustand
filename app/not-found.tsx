import css from './not-found.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - NoteHub',
  description:
    'The page you are looking for does not exist. Return to NoteHub to continue organizing your notes and ideas',
  openGraph: {
    title: 'Page Not Found - NoteHub',
    description:
      'The page you are looking for does not exist. Return to NoteHub to continue organizing your notes and ideas',
    url: 'https://08-zustand-lemon-eta.vercel.app/not-found',
    siteName: 'NoteHub',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - Page Not Found',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found - NoteHub',
    description:
      'The page you are looking for does not exist. Return to NoteHub to continue organizing your notes and ideas',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - Page Not Found',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
    </>
  );
};

export default NotFound;
