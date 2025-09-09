#!/usr/bin/env node

console.log('🔍 Validation finale du déploiement Netlify...\n');

import { execSync } from 'child_process';
import { existsSync, readdirSync, statSync } from 'fs';
import path from 'path';

const checks = [];
let hasErrors = false;

// ✅ 1. Vérifier que le build fonctionne
console.log('📦 Test du build Netlify...');
try {
  execSync('node build-netlify.js', { stdio: 'pipe' });
  checks.push('✅ Build Netlify réussi');
} catch (error) {
  checks.push('❌ Erreur de build Netlify');
  hasErrors = true;
}

// ✅ 2. Vérifier les fichiers essentiels
const essentialFiles = [
  'dist/public/index.html',
  'dist/public/_redirects', 
  'dist/public/_headers',
  'dist/public/favicon.ico'
];

essentialFiles.forEach(file => {
  if (existsSync(file)) {
    checks.push(`✅ ${file} présent`);
  } else {
    checks.push(`❌ ${file} manquant`);
    hasErrors = true;
  }
});

// ✅ 3. Vérifier les assets JS/CSS
const assetsDir = 'dist/public/assets';
if (existsSync(assetsDir)) {
  const assets = readdirSync(assetsDir);
  const hasJS = assets.some(file => file.endsWith('.js'));
  const hasCSS = assets.some(file => file.endsWith('.css'));
  
  if (hasJS) checks.push('✅ Assets JavaScript générés');
  else { checks.push('❌ Assets JavaScript manquants'); hasErrors = true; }
  
  if (hasCSS) checks.push('✅ Assets CSS générés');
  else { checks.push('❌ Assets CSS manquants'); hasErrors = true; }
} else {
  checks.push('❌ Dossier assets manquant');
  hasErrors = true;
}

// ✅ 4. Vérifier les images des voitures
const imagesDir = 'dist/public/images/cars';
if (existsSync(imagesDir)) {
  const carFolders = readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  if (carFolders.length >= 30) {
    checks.push(`✅ ${carFolders.length} dossiers de voitures trouvés`);
  } else {
    checks.push(`⚠️  Seulement ${carFolders.length} dossiers de voitures`);
  }
} else {
  checks.push('❌ Dossier images/cars manquant');
  hasErrors = true;
}

// ✅ 5. Calculer la taille du build
if (existsSync('dist/public')) {
  const getDirSize = (dir) => {
    const files = readdirSync(dir, { withFileTypes: true });
    return files.reduce((size, file) => {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        return size + getDirSize(filePath);
      } else {
        return size + statSync(filePath).size;
      }
    }, 0);
  };
  
  const buildSize = getDirSize('dist/public');
  const buildSizeMB = (buildSize / 1024 / 1024).toFixed(2);
  checks.push(`📊 Taille du build: ${buildSizeMB} MB`);
}

// 📋 Afficher les résultats
console.log('\n📋 Résultats de la validation:\n');
checks.forEach(check => console.log(check));

console.log('\n' + '='.repeat(50));

if (!hasErrors) {
  console.log('🎉 VALIDATION RÉUSSIE !');
  console.log('✅ Le site est prêt pour le déploiement Netlify');
  console.log('\n🚀 Instructions de déploiement:');
  console.log('1. Connectez votre dépôt Git à Netlify');
  console.log('2. Configurez la commande de build: node build-netlify.js');
  console.log('3. Configurez le dossier de publication: dist/public');
  console.log('4. Déployez !');
  
  process.exit(0);
} else {
  console.log('❌ VALIDATION ÉCHOUÉE !');
  console.log('⚠️  Corrigez les erreurs ci-dessus avant le déploiement');
  process.exit(1);
}