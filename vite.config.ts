import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const portraitSavePlugin = (): Plugin => ({
  name: 'portrait-save-endpoint',
  configureServer(server) {
    server.middlewares.use('/api/save-portrait', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const { dataUrl } = JSON.parse(body);
            if (!dataUrl) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing dataUrl' }));
              return;
            }
            const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            
            // Save permanently across all referenced assets
            fs.writeFileSync(path.resolve(__dirname, 'public/Castro.jpg'), buffer);
            fs.writeFileSync(path.resolve(__dirname, 'public/profile.jpg'), buffer);
            fs.writeFileSync(path.resolve(__dirname, 'public/Jonard.jpg'), buffer);

            if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
              fs.writeFileSync(path.resolve(__dirname, 'dist/Castro.jpg'), buffer);
              fs.writeFileSync(path.resolve(__dirname, 'dist/profile.jpg'), buffer);
              fs.writeFileSync(path.resolve(__dirname, 'dist/Jonard.jpg'), buffer);
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Photo saved permanently to disk' }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), portraitSavePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
