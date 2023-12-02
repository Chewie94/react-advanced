import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy loading
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
