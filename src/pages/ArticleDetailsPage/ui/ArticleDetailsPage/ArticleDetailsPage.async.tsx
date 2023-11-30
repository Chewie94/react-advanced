import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy load
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
