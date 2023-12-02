import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake page lazy load
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
