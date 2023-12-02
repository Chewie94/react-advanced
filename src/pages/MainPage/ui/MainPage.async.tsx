import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy loading
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
