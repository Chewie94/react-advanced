import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake page lazy load
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
