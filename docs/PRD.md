# Product Requirements Document (PRD)

## Visualizador 3D de Vectores

**Versión:** 1.0  
**Fecha:** 7 de Febrero, 2026  
**Propósito:** Proyecto personal de aprendizaje para visualización interactiva de vectores en espacio tridimensional

---

## 1. Objetivos

- Proveer una herramienta web interactiva para visualizar vectores en un espacio 3D con planos coordenados
- Servir como proyecto de aprendizaje de Three.js y React Three Fiber
- Permitir exploración intuitiva del espacio mediante controles de cámara personalizados

---

## 2. Stack Tecnológico

- **Frontend:** Vite + React 18 + TypeScript (strict mode)
- **3D Rendering:** Three.js via React Three Fiber (@react-three/fiber, @react-three/drei)
- **Estado:** Zustand (global), Leva (controles efímeros)
- **Styling:** Tailwind CSS
- **Tooling:** ESLint + Prettier
- **Deployment:** GitHub Pages

---

## 3. Requerimientos Funcionales

### 3.1 Visualización del Espacio 3D

**REQ-3D-001 [100%]:** El sistema debe renderizar tres planos perpendiculares (XY, XZ, YZ) con cuadrículas visibles.

**REQ-3D-002 [100%]:** Los planos deben ser semitransparentes para no obstruir la visualización de vectores.

**REQ-3D-003 [100%]:** El sistema debe mostrar ejes coordenados X, Y, Z etiquetados con convención de colores estándar (X=rojo, Y=verde, Z=azul).

**REQ-3D-004 [100%]:** Cada eje debe incluir marcadores numéricos en intervalos unitarios.

**REQ-3D-005 [100%]:** La vista inicial debe ser una perspectiva isométrica centrada en el origen de coordenadas.

### 3.2 Sistema de Cámara

**REQ-CAM-001 [0%]:** El usuario debe poder rotar la vista horizontalmente y verticalmente arrastrando el ratón.

**REQ-CAM-002 [0%]:** El usuario debe poder trasladar la vista sin cambiar orientación presionando la barra espaciadora mientras arrastra.

**REQ-CAM-003 [0%]:** El sistema debe proveer un slider para controlar la rotación sobre el eje óptico (roll/balanceo).

**REQ-CAM-004 [0%]:** El usuario debe poder ajustar el zoom mediante la rueda del ratón.

**REQ-CAM-005 [0%]:** El zoom debe tener límites mínimos y máximos para prevenir valores extremos.

### 3.3 Gestión de Vectores

**REQ-VEC-001 [100%]:** El usuario debe poder agregar vectores mediante entrada de texto con sintaxis flexible (ej: "v1: 1, 2, 3" o "[1, 2, 3]").

**REQ-VEC-002 [100%]:** El sistema debe validar que las coordenadas ingresadas sean números válidos (no NaN ni Infinity).

**REQ-VEC-003 [100%]:** Cada vector debe tener un identificador único y un nombre visible.

**REQ-VEC-004 [100%]:** El sistema debe soportar hasta 20 vectores simultáneos sin degradación de rendimiento.

**REQ-VEC-005 [100%]:** El usuario debe poder eliminar vectores individuales.

**REQ-VEC-006 [100%]:** El usuario debe poder cambiar el color de cada vector.

**REQ-VEC-007 [100%]:** El usuario debe poder ocultar/mostrar vectores individuales sin eliminarlos.

### 3.4 Representación Visual de Vectores

**REQ-VISU-001 [100%]:** Los vectores deben renderizarse como flechas 3D con dirección y magnitud correctas.

**REQ-VISU-002 [100%]:** Cada vector debe mostrar un label con su nombre y coordenadas.

**REQ-VISU-003 [100%]:** Los vectores deben originarse desde el origen de coordenadas (0, 0, 0).

**REQ-VISU-004 [100%]:** Cada vector debe tener un color personalizable asignado.

### 3.5 Interfaz de Usuario

**REQ-UI-001 [100%]:** La aplicación debe tener un sidebar colapsable para controles e inputs.

**REQ-UI-002 [100%]:** El sidebar debe incluir un campo de entrada de texto para agregar vectores.

**REQ-UI-003 [100%]:** El sidebar debe mostrar una lista de todos los vectores actuales con opciones de edición.

**REQ-UI-004 [100%]:** La interfaz debe usar un estilo visual light mode con fondo claro.

**REQ-UI-005 [0%]:** El diseño debe ser minimalista sin animaciones complejas ni efectos decorativos.

**REQ-UI-006 [0%]:** El sistema debe mostrar mensajes de error claros cuando el usuario ingresa datos inválidos.

### 3.6 Persistencia de Datos

**REQ-DATA-001 [0%]:** El usuario debe poder exportar la configuración actual de vectores a formato JSON.

**REQ-DATA-002 [0%]:** El usuario debe poder importar una configuración de vectores desde un archivo JSON.

**REQ-DATA-003 [0%]:** El sistema debe validar el formato del JSON importado antes de aplicarlo.

---

## 4. Requerimientos No Funcionales

### 4.1 Rendimiento

**REQ-PERF-001 [0%]:** La aplicación debe mantener 60 FPS con hasta 20 vectores renderizados simultáneamente.

**REQ-PERF-002 [0%]:** El tiempo de respuesta de la interfaz a acciones del usuario debe ser menor a 100ms.

### 4.2 Compatibilidad

**REQ-COMPAT-001 [0%]:** La aplicación debe funcionar en navegadores modernos (Chrome, Firefox, Safari, Edge) con soporte WebGL 2.0.

**REQ-COMPAT-002 [0%]:** El diseño inicial debe estar optimizado para desktop (responsive mobile pospuesto a v2).

### 4.3 Código

**REQ-CODE-001 [100%]:** El código debe estar organizado en una estructura modular con separación clara de responsabilidades.

**REQ-CODE-002 [100%]:** Todo el código debe usar TypeScript en modo estricto con tipos completos.

**REQ-CODE-003 [100%]:** El código debe cumplir con las reglas de ESLint y estar formateado con Prettier.

### 4.4 Usabilidad

**REQ-UX-001 [0%]:** Los inputs deben incluir placeholders con ejemplos de sintaxis válida.

**REQ-UX-002 [0%]:** Los mensajes de error deben ser descriptivos e indicar cómo corregir el problema.

**REQ-UX-003 [0%]:** Los controles de cámara deben ser intuitivos y responder de forma predecible.

---

## 5. Alcance del MVP

### Incluido en MVP (v1.0)

- ✅ Sistema de cámara completo (rotación, traslación, roll, zoom)
- ✅ Planos coordenados con grid y marcadores
- ✅ Agregar/eliminar vectores mediante input de texto
- ✅ Visualización de vectores como flechas 3D con labels
- ✅ Lista de vectores con opciones de edición (color, visibilidad)
- ✅ Interfaz sidebar colapsable
- ✅ Export/Import de configuraciones JSON

### Excluido del MVP (v2.0+)

- ❌ Soporte móvil y táctil (tablets/smartphones)
- ❌ Operaciones matemáticas entre vectores (suma, producto punto/cruz)
- ❌ Transformaciones lineales y matrices
- ❌ Modo dark theme
- ❌ Animaciones de vectores
- ❌ Historial de comandos con undo/redo

---

## 6. Estructura del Proyecto

```
src/
├── components/
│   ├── Scene/              # Componentes 3D
│   │   ├── Scene.tsx
│   │   ├── CoordinatePlanes.tsx
│   │   ├── Vector3D.tsx
│   │   └── CameraController.tsx
│   └── UI/                 # Componentes React
│       ├── Sidebar.tsx
│       ├── VectorInput.tsx
│       └── VectorList.tsx
├── store/
│   └── vectorStore.ts      # Zustand store
├── types/
│   └── vector.types.ts
├── utils/
│   ├── vectorParser.ts
│   └── exportImport.ts
├── App.tsx
└── main.tsx
```

---

## 7. Criterios de Aceptación

### Para el MVP

- [x] El usuario puede agregar al menos 10 vectores mediante texto
- [ ] Todos los controles de cámara funcionan correctamente
- [x] Los planos coordenados se visualizan con claridad
- [x] Los vectores se renderizan como flechas 3D precisas
- [x] El sidebar es colapsable y muestra todos los controles
- [ ] El export/import de JSON funciona sin pérdida de datos
- [ ] No hay errores en consola durante uso normal
- [ ] La aplicación está desplegada en GitHub Pages

---

## 8. Dependencias Clave

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "three": "^0.160.x",
    "@react-three/fiber": "^8.x",
    "@react-three/drei": "^9.x",
    "zustand": "^4.x",
    "leva": "^0.9.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "eslint": "^8.x",
    "prettier": "^3.x",
    "gh-pages": "^6.x"
  }
}
```

---

## 9. Riesgos y Mitigaciones

| Riesgo                                         | Probabilidad | Impacto | Mitigación                                        |
| ---------------------------------------------- | ------------ | ------- | ------------------------------------------------- |
| Rendimiento degradado con múltiples vectores   | Baja         | Medio   | Limitar a 20 vectores, usar React.memo            |
| Complejidad de controles de cámara custom      | Media        | Alto    | Implementar incrementalmente, probar con usuarios |
| Incompatibilidad WebGL en navegadores antiguos | Baja         | Bajo    | Mostrar mensaje de navegador no compatible        |

---

## 10. Referencias

- **README.md:** Especificación inicial de mecánica de navegación
- **Three.js Docs:** https://threejs.org/docs/
- **React Three Fiber:** https://docs.pmnd.rs/react-three-fiber/
- **Zustand:** https://docs.pmnd.rs/zustand/
