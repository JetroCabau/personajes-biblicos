# Personajes Bíblicos

Juego de cartas coleccionables basado en el Perspicacia para comprender las Escrituras (JW.ORG).

## Estructura

```
personajes-biblicos/
├── index.html          ← App principal
├── style.css           ← Estilos
├── app.js              ← Lógica de la app
├── data/
│   └── characters.js   ← Los 84 personajes + rutas de imágenes
└── images/
    ├── abel.jpg
    ├── adan.jpg
    └── ...             ← Tus ilustraciones de Midjourney aquí
```

## Añadir ilustraciones

1. Guarda la imagen en `images/nombre.jpg`
2. Abre `data/characters.js`
3. Descomenta o añade la línea correspondiente en el objeto `IMAGES`:

```js
const IMAGES = {
  'Abel':   'images/abel.jpg',
  'Adán':   'images/adan.jpg',   // ← añade así
};
```

## Paquetes disponibles

| Pack | Libro | Personajes |
|------|-------|-----------|
| P1 | Génesis | 30 |
| P2 | Éxodo · Deuteronomio | 12 |
| P3 | Josué · Jueces · Rut | 12 |
| P4 | Samuel · Reyes | 16 |
| P5 | Escritos · Profetas | 14 |
| **Total** | | **84** |

## Despliegue

```bash
vercel deploy
```
