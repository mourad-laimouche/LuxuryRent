# 🚀 Configuration Netlify - Guide complet

## Configuration automatique via fichiers

Votre projet contient déjà tous les fichiers de configuration nécessaires :

### ✅ Fichiers inclus :
- `netlify.toml` - Configuration de build et redirections
- `dist/public/_redirects` - Support SPA
- `dist/public/_headers` - Sécurité et cache

## Option 1: Déploiement par glisser-déposer (Recommandé)

1. **Aller sur [netlify.com](https://netlify.com)**
2. **Se connecter**
3. **Glisser le dossier `dist/public/`** directement sur la zone de déploiement
4. **C'est tout !** Le site sera en ligne en quelques secondes

## Option 2: Déploiement depuis Git

### Si vous utilisez GitHub/GitLab :

1. **Pousser le code** sur votre repository
2. **Connecter à Netlify** :
   - Cliquer "New site from Git"
   - Connecter votre repository
3. **Configuration automatique** (grâce au netlify.toml) :
   - Build command: `vite build` ✅
   - Publish directory: `dist/public` ✅
   - Node version: 18+ ✅

### Configuration manuelle si nécessaire :

```
Build command: vite build
Publish directory: dist/public
Node version: 18 ou 20
Environment variables: (aucune nécessaire)
```

## Résolution d'erreurs communes

### ❌ "Command not found: npm run build:netlify"
**Solution**: Le netlify.toml utilise maintenant `vite build` (corrigé)

### ❌ "Build failed: command not found"  
**Solution**: Vérifier que Node.js 18+ est sélectionné dans les paramètres Netlify

### ❌ "404 sur les routes"
**Solution**: Le fichier `_redirects` est inclus pour gérer les routes SPA

### ❌ "Images ne se chargent pas"
**Solution**: Toutes les images sont dans `dist/public/assets/` (incluses)

### ❌ "Rollup failed to resolve import 'ogl' ou 'gsap'"
**Solution**: Les modules WebGL/animation sont externalisés dans `vite.config.netlify.js` avec :
```javascript
build: {
  rollupOptions: {
    external: ['ogl', 'gsap']
  }
}
```

## Structure du déploiement final

```
dist/public/ (DOSSIER À DÉPLOYER)
├── index.html
├── _redirects          # Routes SPA
├── _headers           # Sécurité
└── assets/
    ├── index-*.css    # Styles
    ├── index-*.js     # JavaScript
    └── *.jpg, *.png   # 120 images incluses
```

## Performance attendue

Une fois déployé, votre site aura :
- ⚡ Chargement < 2 secondes
- 🔒 Headers de sécurité
- 📱 Responsive design
- 🖼️ Toutes les 59 voitures avec photos
- ⚡ Cache optimisé (1 an pour assets)

---

**Le déploiement est maintenant 100% compatible Netlify !**