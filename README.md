# DateMe — Deine erste eigene App 💌

Herzlichen Glückwunsch — du hast jetzt eine vollwertige **Progressive Web App (PWA)** in der Hand! Das ist die App-Form, die in Safari/Chrome läuft, aber sich auf dem Homescreen verhält wie eine native App.

## Was du jetzt hast

```
dateme-pwa/
├── index.html        ← Die App selbst (HTML, CSS, JavaScript)
├── manifest.json     ← Die "Visitenkarte" der App (Name, Icons, Farben)
├── sw.js             ← Service Worker (macht Offline-Nutzung möglich)
└── icons/            ← Alle App-Icons in den nötigen Größen
    ├── icon-72.png
    ├── icon-96.png
    ├── ... (insgesamt 11 Icons)
    └── apple-touch-icon.png
```

---

## Schritt 1 — Hochladen (5 Minuten)

Eine PWA muss zwingend über HTTPS laufen. Lokales Öffnen mit Doppelklick funktioniert NICHT — du musst sie hosten. Empfehlung wie schon vorher:

1. Öffne **[app.netlify.com/drop](https://app.netlify.com/drop)** im Browser
2. Zieh den **ganzen Ordner `dateme-pwa`** auf die Drop-Zone (nicht nur die index.html — diesmal brauchen wir den ganzen Ordner!)
3. Warte 10 Sekunden — du bekommst deine URL, z.B. `https://dein-name-12345.netlify.app`
4. Optional: Bei Netlify einloggen und dem Projekt einen schönen Namen geben wie `dateme` → URL wird `https://dateme.netlify.app`

---

## Schritt 2 — Auf dem iPhone als App installieren

1. Öffne deine URL in **Safari** (wichtig: nicht Chrome, sonst klappt die Installation nicht)
2. Warte den Splash-Screen ab → du siehst einen Hinweis-Balken unten
3. Tippe unten auf das **Teilen-Symbol** (Quadrat mit Pfeil ↑)
4. Scrolle in der Liste runter zu **"Zum Home-Bildschirm"**
5. Tippe oben rechts auf **"Hinzufügen"**

✨ Schwupps — du hast jetzt ein Herz-Icon auf deinem Homescreen!

Tippst du es an, startet DateMe wie eine native App: **Splash-Screen, kein Browser, eigene App im App-Switcher**.

---

## Schritt 3 — Eine Einladung erstellen & versenden

1. Öffne die App
2. Fülle den Editor aus (Name, Vorschläge, deine E-Mail)
3. Tipp auf **"Link erzeugen 💌"**
4. Kopier den Link und schick ihn ihr per WhatsApp/iMessage

Sie kann den Link einfach im Browser öffnen — **muss aber die App nicht installieren**, um die Einladung anzusehen.

---

## Was diese App technisch alles kann

✅ **Vollständig offline** — Du kannst sie auf dem Homescreen ohne Internet öffnen
✅ **Eigenes Icon** auf iPhone, Android und im Browser-Tab
✅ **Splash-Screen** beim Start
✅ **Safe Area** — keine Überlappung mit der iPhone-Notch
✅ **UTF-8 Encoder** — Umlaute (ö, ä, ü) und Emojis funktionieren überall
✅ **Cross-Platform** — derselbe Code läuft auf iPhone, Android, PC, Mac

---

## Was du als Nächstes lernen könntest

Wenn dich das gepackt hat, sind das die natürlichen nächsten Schritte:

### 🎓 Konzepte vertiefen
- **PWA-Grundlagen** (Manifest, Service Worker, Caching-Strategien) — kostenloser Kurs auf [web.dev/learn/pwa](https://web.dev/learn/pwa/)
- **JavaScript-Grundlagen** — wenn du verstehen willst, wie der Code funktioniert
- **Git/GitHub** — um Versionen deines Projekts zu speichern

### 🚀 Diese App erweitern
- **Bilder hochladen** (Foto von euch zwei einbauen)
- **Mehr Themes** (Geburtstag, Hochzeitstag, Verlobung)
- **Push-Notifications** (geht auf Android, auf iPhone seit iOS 16.4 auch in PWAs)
- **Backend mit Database** — damit du wirklich sehen kannst, *wann* sie das Ja gedrückt hat (nicht nur per Mail-Bestätigung)

### 📱 Als echte App in den Store
- **Capacitor** — verwandelt deine PWA in eine native App. Wenn du irgendwann an einen Mac kommst, ist das der Weg ins App Store
- **PWABuilder.com** — kostenloses Microsoft-Tool, das aus deiner PWA automatisch fertige Store-Pakete für Android baut (sogar ohne Mac!)

---

## Mögliche Probleme & Lösungen

**„Der Banner zum Installieren erscheint nicht"**
→ Klick irgendwo auf die Seite, warte 2 Sekunden. Falls du ihn schon mal weggedrückt hast, ist er weg — du kannst aber trotzdem manuell über das Teilen-Symbol installieren.

**„Die App lädt nicht offline"**
→ Du musst sie einmal mit Internet komplett geladen haben, damit der Service Worker alles im Cache hat. Danach geht's auch offline.

**„Ich möchte ein anderes Icon"**
→ Tausche die Dateien im `icons/`-Ordner aus (gleiche Dateinamen, gleiche Größen). Oder sag mir Bescheid und ich generiere neue.

**„Sie sieht die Vorschläge nicht"**
→ Achte beim Editor darauf, in jedem Vorschlag mindestens ein Feld auszufüllen. Vorschläge ohne Inhalt werden ausgeblendet.

---

## Viel Spaß mit deiner ersten App! 💕

Bei Fragen oder Erweiterungswünschen sag einfach Bescheid.
