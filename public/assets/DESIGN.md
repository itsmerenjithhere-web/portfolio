---
name: Kinetic Noir
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#0f0f0f'
  on-primary-container: '#7d7b7b'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb68b'
  on-secondary: '#522300'
  secondary-container: '#ff7f1c'
  on-secondary-container: '#602a00'
  tertiary: '#00e1ab'
  on-tertiary: '#003828'
  tertiary-container: '#00130b'
  on-tertiary-container: '#008d6a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68b'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#36ffc4'
  tertiary-fixed-dim: '#00e1ab'
  on-tertiary-fixed: '#002116'
  on-tertiary-fixed-variant: '#00513c'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  accent-italic:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: auto
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
The design system establishes a high-impact, cinematic presence for a multidisciplinary designer. The brand personality is bold, avant-garde, and meticulously crafted, blending the raw energy of **Brutalism** with the sophisticated finish of **Minimalism**. 

The UI prioritizes "visual volume"—using massive typographic scales and deep shadows to create a tangible sense of space. A signature grainy texture is applied to the background to break digital flatness, evoking a premium, analog feel. Motion is a core brand pillar; parallax transitions and smooth easing ensure the interface feels alive and responsive to the user's presence.

## Colors
The palette is rooted in a deep charcoal/navy foundation (`#0F0F0F`), creating a "limitless" canvas that allows project imagery to pop. 

- **Primary:** Deep charcoal for all main backgrounds.
- **Neutrals:** Off-white (`#F5F5F5`) is used for primary text to reduce eye strain compared to pure white, maintaining a premium look.
- **Accents:** High-vibrancy "neon" signals—Orange, Mint, and Purple—are reserved exclusively for category tagging and interactive feedback.
- **Texture:** A 5% opacity noise overlay is applied globally to the primary background to achieve the requested grainy finish.

## Typography
Typography is the primary visual driver of this design system. It uses a high-contrast pairing of a geometric sans-serif and a sophisticated serif.

- **Headlines:** Set in **Plus Jakarta Sans** with extreme weights and tight tracking for a "poster" aesthetic.
- **Accents:** **Playfair Display (Italic)** is used sparingly for emphasis within headlines or as floating descriptors to add an elegant, editorial layer.
- **Body:** **Hanken Grotesk** provides high legibility for long-form text and project descriptions, keeping the interface grounded.
- **Responsive Rule:** Display sizes scale aggressively; the desktop `display-xl` uses a negative letter spacing to create a cohesive typographic block.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to enforce a minimalist, luxury feel. 

- **Grid:** A 12-column layout for desktop, transitioning to a 1-column layout for mobile.
- **Rhythm:** Spacing is defined by a "breathable" philosophy. Large vertical gaps (`section-gap`) separate project stories, ensuring the user focuses on one piece of work at a time.
- **Sticky Elements:** The navigation bar is pinned to the top with a `backdrop-filter: blur(10px)` effect, allowing the grainy background to bleed through while maintaining legibility.
- **Safe Zones:** Content is center-aligned with a max-width of 1440px to ensure the massive typography remains readable on ultra-wide monitors.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows** rather than traditional borders.

- **Project Cards:** Use extremely soft, large-radius shadows (e.g., `box-shadow: 0 40px 80px rgba(0,0,0,0.5)`) to lift work off the charcoal background.
- **Parallax:** Background elements (like floating accent text) move at 0.5x scroll speed, while primary work images move at 1x speed to create a multi-plane depth effect.
- **Overlays:** Hover states on project thumbnails should use a subtle light-gray tint (2-3% opacity) rather than a color change, keeping the focus on the imagery.

## Shapes
The shape language is a study in contrasts: **perfectly circular/pill-shaped** interactive elements set against **large-format rectangular** project containers.

- **Pills:** All badges, tags, and the "Book a Call" button use the maximum roundedness (pill-shape) to create a friendly, modern counter-point to the sharp, aggressive typography.
- **Project Media:** Thumbnails utilize `rounded-lg` (1rem) corners to soften the massive visuals without losing the structural integrity of the grid.

## Components

### Buttons
- **Primary:** Pill-shaped, outlined in white with a 1px border. On hover, fills solid white with charcoal text.
- **Secondary:** Text-only with a persistent underline that expands on hover.

### Badges (Project Categories)
- Small pill-shaped containers with high-vibrancy backgrounds (Orange, Mint, Purple).
- Text inside badges is always black (`#0F0F0F`) for maximum contrast against the bright fills.

### Navigation Bar
- Minimalist, sticky top-bar.
- Links are in `label-caps` style. 
- Active state is indicated by a simple dot beneath the text or a subtle italicization of the font.

### Cards & Work Tiles
- Full-bleed or 10-column width images.
- Captions are placed below the image, using a mix of `body-lg` for the title and `accent-italic` for the role/service.

### Input Fields
- Underline-only style for forms (Contact section).
- Focus state transforms the underline into a primary accent color (Orange).