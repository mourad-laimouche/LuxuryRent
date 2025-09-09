import { execSync } from 'child_process';
import { copyFileSync, existsSync, writeFileSync } from 'fs';

console.log('🚀 Building for Netlify...');

try {
  // Build avec vite config pour Netlify
  console.log('📦 Building frontend...');
  execSync('npx vite build --config vite.config.netlify.js', { stdio: 'inherit' });
  
  // Copier les images qui ne sont pas dans public (si elles existent dans src)
  if (existsSync('client/src/images')) {
    console.log('📁 Copying images from src...');
    execSync('mkdir -p dist/public/images && cp -r client/src/images/* dist/public/images/', { stdio: 'inherit' });
    console.log('✅ Images from src copied successfully!');
  }
  
  // Les images dans client/public sont déjà copiées automatiquement par Vite
  console.log('✅ Public images already copied by Vite');
  
  // Copier les assets attachés
  if (existsSync('attached_assets')) {
    console.log('📁 Copying attached assets...');
    execSync('cp -r attached_assets dist/public/attached_assets', { stdio: 'inherit' });
    console.log('✅ Attached assets copied successfully!');
  }
  
  // Copier les fichiers de configuration
  console.log('📋 Copying configuration files...');
  
  if (existsSync('_redirects')) {
    copyFileSync('_redirects', 'dist/public/_redirects');
    console.log('✅ _redirects copied');
  }
  
  if (existsSync('dist/public/_headers')) {
    console.log('✅ _headers already exists');
  } else {
    // Créer un fichier _headers simple
    const headers = `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
    writeFileSync('dist/public/_headers', headers);
    console.log('✅ _headers created');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Deploy folder: dist/public');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}