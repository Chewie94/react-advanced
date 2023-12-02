import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // fake page lazy load
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
