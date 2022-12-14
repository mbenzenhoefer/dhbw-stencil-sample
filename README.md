# DHBW StencilJS Webshop Setup

## Aufgabe
- Erstellen Sie einen Online-Shop, welcher aus mind. 2 Komponenten besteht (API kann gemocked werden oder bspw. https://fakestoreapi.com/ dafür verwendet werden)
    - Warenkorb
    - Artikelübersicht 
    - Artikelseite
- Funktionalität:
  - Auflisten aller Artikel des Shops auf der Startseite
  - Anzeige eines Artikels anhand seiner ID aus der URL
  - Hinzufügen eines Artikels zum Warenkorb
  - Anzeige aller Artikel im Warenkorb
  - Der State des Warenkorbs kann in der Session des Browsers gespeichert werden

## Commands for building the application

Run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
