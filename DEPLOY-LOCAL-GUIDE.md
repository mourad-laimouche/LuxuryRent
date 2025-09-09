# 🚀 Guide de Déploiement Local - Location de Voiture Luxurieux

## 📦 Export et préparation locale

### 1. Dépendances requises en local
```bash
# Node.js 18+ requis
node --version  # Vérifier >= 18.0.0
npm --version   # Vérifier >= 9.0.0
```

### 2. Installation des dépendances
```bash
npm install
```

### 3. Scripts disponibles

```bash
# Développement local
npm run dev

# Build de production pour Netlify
npm run build:netlify

# Build standard
npm run build

# Vérification TypeScript
npm run check
```

## 🌐 Déploiement Netlify

### Option 1: Build et déploiement manuel (Recommandé)

```bash
# 1. Builder le projet pour Netlify
node build-netlify.js

# 2. Le dossier dist/public/ contient tout le site prêt
# 3. Glisser-déposer dist/public/ sur netlify.com
```

### Option 2: Déploiement Git automatique

1. **Pusher le projet sur GitHub/GitLab**
2. **Connecter à Netlify avec ces paramètres** :
   - Build command: `node build-netlify.js`
   - Publish directory: `dist/public`
   - Node version: 18 ou 20

## ⚙️ Configuration Netlify incluse

### Fichiers de configuration
- ✅ `netlify.toml` - Configuration principale de build
- ✅ `build-netlify.js` - Script de build optimisé
- ✅ `vite.config.netlify.js` - Configuration Vite pour prod
- ✅ `_redirects` - Support SPA et routes
- ✅ Headers de sécurité automatiques

### Optimisations activées
- ✅ Minification CSS/JS automatique
- ✅ Cache longue durée pour assets (1 an)
- ✅ Headers de sécurité (CSP, XSS, etc.)
- ✅ Support SPA pour toutes les routes
- ✅ Compression automatique des assets

## 🖼️ Assets et images

### Structure des assets
```
client/public/images/cars/     # Images principales des voitures
attached_assets/               # Assets fournis (logos, etc.)
client/public/                 # Assets statiques publics
```

### Images incluses
- ✅ 59 véhicules avec leurs photos
- ✅ Nouvelle photo Audi RS6 (station essence)
- ✅ Logo et assets du site
- ✅ Optimisation automatique des images

## 🔧 Structure du projet

### Frontend (React + TypeScript)
```
client/
├── src/
│   ├── components/          # Composants réutilisables
│   ├── pages/              # Pages principales
│   ├── data/               # Données des voitures
│   └── lib/                # Utilitaires
└── public/                 # Assets statiques
```

### Configuration de build
```
netlify.toml                 # Config Netlify
build-netlify.js            # Script de build personnalisé
vite.config.netlify.js      # Config Vite pour production
_redirects                  # Routes SPA
```

## 📊 Performance attendue

Après déploiement sur Netlify :
- ⚡ First Contentful Paint < 1.5s
- ⚡ Largest Contentful Paint < 2.5s
- ⚡ Cumulative Layout Shift < 0.1
- 📱 100% responsive sur tous appareils
- 🔒 Score sécurité A+ (headers optimisés)

## 🚨 Points de vérification avant déploiement

### Avant le build local
- [ ] Node.js 18+ installé
- [ ] Toutes les dépendances installées (`npm install`)
- [ ] Images présentes dans `client/public/images/`
- [ ] Assets attachés dans `attached_assets/`

### Après le build
- [ ] Dossier `dist/public/` créé
- [ ] Fichier `index.html` présent
- [ ] Dossier `assets/` avec CSS/JS minifiés
- [ ] Images copiées correctement
- [ ] Fichiers `_redirects` et `_headers` présents

## 🐛 Résolution d'erreurs communes

### ❌ "Module not found" pendant le build
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### ❌ "Command not found: node"
```bash
# Installer Node.js 18+ depuis nodejs.org
# Ou avec nvm:
nvm install 18
nvm use 18
```

### ❌ Images ne s'affichent pas après déploiement
- Vérifier que les images sont dans `client/public/images/`
- Le build copie automatiquement tout le contenu de `public/`

### ❌ Routes 404 sur Netlify
- Le fichier `_redirects` gère automatiquement les routes SPA
- Vérifier qu'il est présent dans `dist/public/_redirects`

## 🎯 Commandes de déploiement rapide

```bash
# Build complet pour Netlify
node build-netlify.js

# Le site est prêt dans dist/public/
# Déployer sur netlify.com par glisser-déposer
```

---

## 📝 Résumé technique

**Type de projet** : Site React statique (SPA)
**Framework** : React 18 + TypeScript + Vite
**Styling** : Tailwind CSS avec thème luxury
**Déploiement** : Statique (Netlify recommandé)
**Performance** : Optimisé pour Core Web Vitals
**SEO** : Balises meta, structure semantic HTML
**Responsive** : Mobile-first design

✅ **Le projet est 100% prêt pour l'export et le déploiement local !**