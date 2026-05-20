# Snake Game

Juego clásico Snake desarrollado con **React + Vite**.

## Descripción

Implementación del juego Snake usando React con arquitectura de componentes, hooks personalizados, manejo de estado y animaciones con Framer Motion.

## Instalación

```bash
npm install
npm run dev
```

## Cómo Jugar

- Usa las **teclas de flecha** para mover la serpiente
- Come la comida roja para crecer y sumar puntos
- Evita chocar con las paredes
- Evita chocar con tu propio cuerpo
- La velocidad aumenta progresivamente con el puntaje

## Tecnologías

- React 18
- Vite 5
- JSX
- useState / useEffect
- Hooks personalizados (`useGameLoop`)
- Framer Motion (animaciones)
- CSS Grid

## Estructura

```
src/
├── components/
│   ├── Board.jsx          # Tablero de juego (CSS Grid)
│   ├── Snake.jsx          # Renderiza la serpiente
│   ├── Food.jsx           # Renderiza la comida
│   ├── Score.jsx          # Marcador y mejor puntaje
│   ├── GameOver.jsx       # Pantalla de fin de juego
│   ├── StartScreen.jsx    # Pantalla de inicio
│   └── animations/
│       ├── AnimatedTitle.jsx
│       └── GlowButton.jsx
├── hooks/
│   └── useGameLoop.js     # Hook para el loop del juego
├── utils/
│   ├── constants.js       # Constantes globales
│   └── gameHelpers.js     # Funciones puras del juego
└── styles/
    └── game.css           # Estilos del juego
```

## Características

- Dificultad progresiva (la velocidad aumenta con cada punto)
- Mejor puntaje de la sesión
- Animaciones con Framer Motion
- Pantalla de inicio y game over animadas
- Indicador de dificultad en tiempo real
