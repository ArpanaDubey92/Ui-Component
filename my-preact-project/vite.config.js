import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [preact()],
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
    esbuild: {
        loader: 'jsx',  // Add this line to treat .js files as JSX
        include: /src\/.*\.js$/,  // Process only .js files in the src directory
    },
});
