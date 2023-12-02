import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy loading
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
