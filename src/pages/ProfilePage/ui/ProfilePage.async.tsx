import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake lazy load
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
