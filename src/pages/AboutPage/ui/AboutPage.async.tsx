import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy load
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
