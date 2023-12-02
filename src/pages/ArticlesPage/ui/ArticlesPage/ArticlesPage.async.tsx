import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake page lazy load
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
