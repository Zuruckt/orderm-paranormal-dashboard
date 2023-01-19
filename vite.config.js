import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import laravel from "laravel-vite-plugin";


export default defineConfig({
    plugins: [
        laravel([]),
        react()
    ],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'resources/js/ts') }],
    },
});
