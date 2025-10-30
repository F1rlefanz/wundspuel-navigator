# PWA Icons

## Aktuell: SVG-Icons (Platzhalter)

Die Icons sind momentan als SVG erstellt:
- `icon-192.svg` - 192x192px App-Icon
- `icon-512.svg` - 512x512px Splash Screen
- `apple-touch-icon.svg` - 180x180px iOS-Icon

**Design:** Cyan/Türkis Gradient mit weißem Kreuz und Wassertropfen-Symbol

---

## Optional: PNG-Konvertierung

Für maximale Kompatibilität können die SVGs zu PNGs konvertiert werden:

### Online-Tools:
- https://cloudconvert.com/svg-to-png
- https://convertio.co/de/svg-png/

### Mit CLI-Tools:
```bash
# Mit ImageMagick
convert icon-192.svg -resize 192x192 icon-192.png
convert icon-512.svg -resize 512x512 icon-512.png
convert apple-touch-icon.svg -resize 180x180 apple-touch-icon.png

# Mit Inkscape
inkscape icon-192.svg --export-type=png --export-width=192
inkscape icon-512.svg --export-type=png --export-width=512
```

---

## Custom Icons erstellen

Falls du eigene Icons möchtest:
1. Erstelle Icons in 512x512px (höchste Qualität)
2. Verwende transparenten Hintergrund ODER festen Hintergrund (#0ea5e9)
3. Exportiere als PNG
4. Benenne um: `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`
5. Passe `manifest.json` an (type: "image/png")

**Empfohlene Tools:**
- Figma (Web-basiert, kostenlos)
- Canva (Templates für App-Icons)
- GIMP (Open Source)
- Photoshop

---

## Browser-Kompatibilität

| Browser	| SVG-Support	| Empfehlung	|
|---------------|---------------|---------------|
| Chrome/Edge	| ✅ Vollständig	| SVG OK	|
| Firefox	| ✅ Vollständig	| SVG OK	|
| Safari iOS	| ⚠️ Limitiert	| PNG besser	|
| Safari macOS	| ✅ Vollständig	| SVG OK	|

**Fazit:** SVGs funktionieren fast überall. Für iOS-Optimierung: PNG verwenden.
