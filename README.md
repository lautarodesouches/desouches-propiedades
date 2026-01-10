# 🏠 Desouches Propiedades

![Astro](https://img.shields.io/badge/Astro-5.16.8-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Sitio web moderno y optimizado para inmobiliaria**

[Ver Demo](https://desouchespropiedades.com.ar) • [Reportar Bug](https://github.com/lautarodesouches/desouches-propiedades/issues)

---

## 📋 Descripción

Sitio web profesional para **Desouches Propiedades**, una inmobiliaria especializada en venta, alquiler y tasaciones de propiedades en Argentina. Diseñado con las últimas tecnologías web para ofrecer una experiencia premium, rápida y accesible.

### ✨ Características Principales

- 🎨 **Diseño Premium**: Interfaz moderna con glassmorphism, gradientes y animaciones fluidas
- ⚡ **Alto Rendimiento**: Optimizado para carga rápida (LCP < 2.5s)
- 📱 **Completamente Responsive**: Diseño adaptativo desde mobile hasta 4K
- ♿ **Accesibilidad AAA**: Cumple estándares WCAG 2.1
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, Schema.org y sitemap
- 🎭 **Animaciones de Scroll**: Efectos reveal al hacer scroll
- 🌐 **Multicanal**: Integración con ZonaProp, redes sociales y WhatsApp

---

## 🚀 Tecnologías

- **Framework**: [Astro 5.16.8](https://astro.build) - SSG ultra-rápido
- **Lenguaje**: TypeScript + JavaScript
- **Estilos**: CSS Vanilla (BEM methodology)
- **Fuentes**: Poppins (Google Fonts)
- **Analytics**: Google Analytics 4
- **Hosting**: Compatible con Vercel, Netlify, Cloudflare Pages

---

## 📦 Instalación

### Prerrequisitos

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recomendado) o npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/lautarodesouches/desouches-propiedades.git

# Entrar al directorio
cd desouches-propiedades

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

### Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm preview      # Preview del build
pnpm astro --help # Ayuda de Astro CLI
```

---

## 📁 Estructura del Proyecto

```
desouches-propiedades/
├── public/
│   ├── assets/
│   │   ├── contacto/      # Imágenes sección contacto
│   │   ├── inicio/        # Video hero
│   │   ├── propiedades/   # Imágenes categorías
│   │   └── tasaciones/    # Imágenes tasaciones
│   └── fonts/             # Fuente Poppins
│
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navegación principal
│   │   ├── Hero.astro             # Sección hero con video
│   │   ├── PropertiesSection.astro # Grid de propiedades
│   │   ├── TasacionesSection.astro # Formulario tasaciones
│   │   ├── ContactSection.astro    # Iconos redes sociales
│   │   └── Footer.astro           # Pie de página
│   │
│   ├── layouts/
│   │   └── Layout.astro   # Layout base (SEO, scripts)
│   │
│   ├── pages/
│   │   ├── index.astro    # Página principal
│   │   └── 404.astro      # Página error 404
│   │
│   └── styles/
│       └── global.css     # Estilos globales
│
├── astro.config.mjs       # Configuración Astro
├── tsconfig.json          # Configuración TypeScript
└── package.json           # Dependencias
```

---

## 🎨 Secciones del Sitio

### 1. **Hero** 
- Video de fondo en loop
- CTA principal (Venta/Alquiler)
- Indicador de scroll animado

### 2. **Propiedades**
- 10 categorías: Casas, Departamentos, Quintas, Cocheras, Oficinas, Locales, Galpones, Campos, Terrenos, PH
- Tarjetas con efecto glassmorphism
- Hover effects premium
- Links a ZonaProp

### 3. **Tasaciones**
- Formulario modal glassmorphic
- Validación client-side
- Envío a WhatsApp

### 4. **Contacto**
- Iconos rotativos en escalera
- Links a Facebook, Instagram, Email, Teléfono, WhatsApp

### 5. **Footer**
- Navegación rápida
- Redes sociales
- Copyright dinámico

---

## ⚡ Optimizaciones Implementadas

### Performance
- ✅ Font preloading
- ✅ DNS prefetch para dominios externos
- ✅ `font-display: swap`
- ✅ Video lazy loading (`preload="metadata"`)
- ✅ CSS `will-change` en animaciones
- ✅ Imágenes con `loading="lazy"`

### SEO
- ✅ Meta description optimizada
- ✅ Open Graph tags (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD (RealEstateAgent)
- ✅ Canonical URL
- ✅ Robots.txt y sitemap

### Accesibilidad
- ✅ ARIA labels en todos los elementos interactivos
- ✅ Roles semánticos (banner, navigation, contentinfo)
- ✅ Focus visible para navegación por teclado
- ✅ Alt text descriptivos
- ✅ Skip to main content link
- ✅ Contraste AAA

### UX
- ✅ Scroll reveal animations
- ✅ Glassmorphism effects
- ✅ Smooth scrolling
- ✅ Loading states
- ✅ Página 404 personalizada

---

## 🎯 Métricas de Rendimiento

| Métrica | Score |
|---------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

*Medido con Google Lighthouse en modo incógnito*

---

## 🌐 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build command
pnpm build

# Publish directory
dist
```

### Configuración Manual

1. Ejecutar `pnpm build`
2. Subir carpeta `dist/` a tu hosting
3. Configurar como sitio estático

---

## 📞 Contacto

**Desouches Propiedades**
- 📧 Email: desouchespropiedades@gmail.com
- 📱 WhatsApp: +54 11 6995-2960
- 🌐 Web: [desouchespropiedades.com.ar](https://desouchespropiedades.com.ar)
- 📘 Facebook: [Desouches Propiedades](https://www.facebook.com/people/Desouches-Propiedades/100093328701006/)
- 📸 Instagram: [@desouchespropiedades](https://www.instagram.com/desouchespropiedades/)

---

## 📄 Licencia

© 2026 Desouches Propiedades. Todos los derechos reservados.

---

## 🙏 Agradecimientos

- [Astro](https://astro.build) - Framework increíble
- [ZonaProp](https://www.zonaprop.com.ar) - Portal inmobiliario
- Familia Desouches por confiar en este proyecto

---

**Hecho con ❤️ para el sector inmobiliario argentino**

⭐ Si te gustó este proyecto, dejá una estrella!
