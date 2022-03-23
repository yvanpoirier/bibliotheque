import { writable } from 'svelte/store';

export const app_version = writable({
    app_name: 'Bibliothèque',
    version: '0.0.1' // !! Penser à modifier la version dans index.html !!!
})