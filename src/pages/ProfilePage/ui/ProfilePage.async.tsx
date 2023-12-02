import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy loading
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
