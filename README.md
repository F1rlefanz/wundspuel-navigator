# 🏥 Wundspül-Navigator

> **Medizinischer Entscheidungsassistent für die Auswahl der richtigen Wundspüllösung und Antiseptika**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5a0fc8?logo=pwa)](https://web.dev/progressive-web-apps/)

---

## 📋 Übersicht

Der **Wundspül-Navigator** ist eine Progressive Web App (PWA), die medizinisches Fachpersonal bei der evidenzbasierten Auswahl von Wundspüllösungen und Antiseptika unterstützt. Durch einen geführten Entscheidungsbaum werden alle relevanten Parameter (Wundtyp, Kontamination, Schmerzniveau, etc.) abgefragt und die optimale Behandlungsempfehlung gegeben.

### ✨ Features

- 🎯 **Geführter Entscheidungsbaum** mit 21 Knoten
- 💊 **Produktdatenbank** mit 8 medizinischen Produkten
- 📱 **Progressive Web App** - installierbar auf allen Geräten
- 🔄 **Offline-Funktion** - vollständig ohne Internetverbindung nutzbar
- 🎨 **Modernes Glassmorphism-UI** - intuitiv und übersichtlich
- 📲 **Mobile-First Design** - optimiert für Smartphone und Tablet
- ⚡ **Blitzschnell** - keine Ladezeiten, alles lokal gecacht

---

## 🚀 Demo

**Live-Demo:** [wundspuel-navigator.vercel.app](https://wundspuel-navigator.vercel.app)

### Screenshots

_Coming soon_

---

## 🔧 Tech-Stack

- **Frontend:** React 18.3 mit Hooks
- **Build-Tool:** Vite 6.0
- **PWA:** Vite PWA Plugin 0.21 (Workbox)
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React 0.263
- **Deployment:** Vercel (mit automatischem HTTPS)

---

## 📦 Installation & Development

### Voraussetzungen

- Node.js 18+ (empfohlen: v25.0.0)
- npm oder yarn

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/[DEIN-USERNAME]/wundspuel-navigator.git
cd wundspuel-navigator

# Dependencies installieren
npm install

# Development-Server starten
npm run dev
# → http://localhost:5173

# Production-Build erstellen
npm run build

# Build lokal testen
npm run preview
# → http://localhost:4173
```

### Verfügbare Scripts

```json
{
  "dev": "vite",                    // Dev-Server (Port 5173)
  "build": "vite build",             // Production-Build
  "preview": "npm run build && vite preview", // Build + Preview
  "lint": "eslint . --ext .js,.jsx", // Code-Linting
  "format": "prettier --write ..."   // Code-Formatierung
}
```

---

## 📂 Projektstruktur

```
wundspuel-navigator/
├── public/
│   ├── data/
│   │   ├── entscheidungsbaum.json    # 21 Entscheidungsknoten
│   │   └── produktdatenbank.json     # 8 Produkte
│   ├── icon-192.png                  # PWA Icon (192x192)
│   ├── icon-512.png                  # PWA Icon (512x512)
│   └── apple-touch-icon.png          # iOS Icon (180x180)
├── src/
│   ├── components/
│   │   └── WundNavigator.jsx         # Hauptkomponente
│   ├── App.jsx                       # Root-Komponente
│   ├── main.jsx                      # Entry-Point
│   └── index.css                     # Tailwind-Styles
├── scripts/
│   └── generate-icons.js             # Icon-Generator
├── vite.config.js                    # Vite + PWA Config
├── tailwind.config.js                # Tailwind Config
└── package.json                      # Dependencies
```

---

## 🎯 Verwendung

### 1. App öffnen

Rufe die App im Browser auf: [wundspuel-navigator.vercel.app](https://wundspuel-navigator.vercel.app)

### 2. Als App installieren (optional)

**Desktop (Chrome/Edge):**
- Klicke auf das ⊕-Icon in der Adressleiste
- "Installieren" wählen

**Android:**
- Menü → "Zum Startbildschirm hinzufügen"
- App öffnet sich ohne Browser-Leiste

**iOS:**
- Safari: Teilen-Button → "Zum Home-Bildschirm"

### 3. Entscheidungsbaum durchlaufen

- Beantworte die Fragen Schritt für Schritt
- Nutze "Zurück", um Antworten zu korrigieren
- Am Ende erhältst du die passende Produktempfehlung

### 4. Offline nutzen

- Einmal geöffnet → komplett offline verfügbar
- Alle Daten werden lokal gecacht
- Keine Internetverbindung nötig

---

## 📊 Entscheidungslogik

Der Navigator basiert auf evidenzbasierten medizinischen Leitlinien und führt durch folgende Entscheidungskriterien:

1. **Wundtyp** (akut/chronisch)
2. **Kontamination** (sauber/kontaminiert/infiziert)
3. **Wundrand** (vital/nekrotisch/fibrinbelegt)
4. **Biofilm** (vorhanden/nicht vorhanden)
5. **Schmerzen** (ja/nein)
6. **Gewebeart** (Knochen/Sehne/normale Haut)
7. **Allergie-Status** (PVP-Iod, Polihexanid, PHMB)

Basierend auf diesen Kriterien wird die optimale Wundspüllösung und/oder Antiseptikum empfohlen.

---

## 🔐 Datenschutz & Sicherheit

- ✅ **Keine Datenerfassung** - App läuft vollständig lokal
- ✅ **Keine Server-Kommunikation** - alle Daten im Browser
- ✅ **Keine Cookies** - keine Tracking-Technologien
- ✅ **Offline-First** - funktioniert ohne Internet
- ✅ **Open Source** - Code ist vollständig einsehbar

---

## ⚠️ Haftungsausschluss

**WICHTIG:** Diese App dient als **Entscheidungsunterstützung** für medizinisches Fachpersonal und ersetzt **nicht** die klinische Beurteilung durch qualifizierte Ärzte und Pflegekräfte.

- ⚕️ Nur für **medizinisches Fachpersonal**
- 📚 Basiert auf aktuellen Leitlinien (Stand: Oktober 2025)
- 🔄 Regelmäßige Aktualisierung empfohlen
- ⚖️ Keine Haftung für medizinische Entscheidungen

**Bei Unsicherheiten:** Konsultiere Fachliteratur, Leitlinien oder Kollegen!

---

## 🤝 Beitragen

Beiträge sind willkommen! Bitte beachte:

1. **Fork** das Repository
2. **Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **Commit** deine Änderungen (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** öffnen

### Entwicklungs-Richtlinien

- Code-Formatierung mit Prettier
- Linting mit ESLint
- Kommentare in deutscher Sprache
- Medizinische Änderungen mit Quellenangabe

---

## 📝 Changelog

### v0.3 - PWA Beta (30. Oktober 2025)

- ✅ Offline-Funktion vollständig implementiert
- ✅ Service Worker mit Workbox
- ✅ JSON-Daten werden korrekt gecacht
- ✅ Android-Installation erfolgreich getestet

### v0.2 - MVP (29. Oktober 2025)

- ✅ Vollständiger Entscheidungsbaum (21 Knoten)
- ✅ Produktdatenbank (8 Produkte)
- ✅ Glassmorphism-UI implementiert

### v0.1 - Prototype (28. Oktober 2025)

- ✅ Projekt-Setup mit Vite + React
- ✅ Technologie-Stack definiert

---

## 📄 Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

---

## 👨‍💻 Autor

**Christoph**  
Projekt-Start: Oktober 2025

---

## 📧 Kontakt

Bei Fragen oder Anregungen:
- **Issues:** [GitHub Issues](https://github.com/[DEIN-USERNAME]/wundspuel-navigator/issues)
- **Email:** [Deine Email]

---

## 🙏 Danksagungen

- Medizinische Fachliteratur und Leitlinien
- Open-Source-Community (React, Vite, Tailwind)
- Workbox für PWA-Funktionalität

---

**⚕️ Für bessere Wundversorgung - Evidenzbasiert & Offline verfügbar**

