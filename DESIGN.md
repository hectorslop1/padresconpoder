---
name: Empowered Consulting System
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#434752'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#737783'
  outline-variant: '#c3c6d4'
  surface-tint: '#285bb5'
  primary: '#1e54ae'
  on-primary: '#ffffff'
  primary-container: '#3e6dc8'
  on-primary-container: '#f3f4ff'
  inverse-primary: '#afc6ff'
  secondary: '#006d40'
  on-secondary: '#ffffff'
  secondary-container: '#76fcb0'
  on-secondary-container: '#007445'
  tertiary: '#854800'
  on-tertiary: '#ffffff'
  tertiary-container: '#a85d00'
  on-tertiary-container: '#fff3eb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#afc6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#004299'
  secondary-fixed: '#76fcb0'
  secondary-fixed-dim: '#57de96'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb779'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  grid-gutter: 24px
  container-max-width: 1280px
---

## Brand & Style

The brand personality is established as **Empowering, Compassionate, and Trustworthy**. It bridges the gap between grassroots nonprofit work and high-level strategic consulting. The design avoids the "nursery" aesthetic often associated with parenting organizations, instead opting for a **Corporate / Modern** style with a **Minimalist** soul. 

The visual narrative is built on the concept of "Structured Support"—where high-end SaaS polish meets human-centric warmth. The UI should evoke a sense of professional reliability and calm authority, ensuring that parents and stakeholders feel they are in capable hands. 

Key visual principles include:
- **Strategic Polish:** Using layout techniques from fintech and venture capital to elevate the consulting aspect.
- **Organic Professionalism:** Balancing rigid grids with soft, organic background shapes or image masking to maintain a compassionate touch.
- **Airy Clarity:** Heavy use of whitespace to allow complex information to breathe, reflecting a clear path forward for the families served.

## Colors

The palette is derived directly from the core brand identity, optimized for a professional digital environment. 

- **Primary Blue (#3E6DC8):** Used for primary actions, navigational headers, and authoritative typography. It represents the "Poder" (Power) and stability of the organization.
- **Secondary Green (#50D890):** Used for success states, growth indicators, and secondary supportive elements. It represents the "Heart" and the nurturing aspect of the mission.
- **Accent Yellow (#F2C94C):** Reserved for high-impact callouts or small decorative elements to draw the eye without overwhelming the professional tone.
- **Neutrals:** We utilize a deep charcoal for text clarity and a range of very cool grays for borders and backgrounds to keep the interface feeling crisp and "airy."
- **Backgrounds:** Pure white (#FFFFFF) is the primary surface, while a subtle off-white (#F8FAFC) is used for section differentiation to maintain a premium, clean look.

## Typography

**Hanken Grotesk** is the sole typeface for this design system, chosen for its exceptional legibility and contemporary, sharp execution. It provides the "SaaS-inspired" precision required to differentiate the organization from traditional, softer nonprofit styles.

- **Headlines:** Use Bold and Semi-Bold weights with tight letter-spacing to create a confident, established presence.
- **Body:** Use Regular weight with generous line-height to ensure accessibility and a calm reading experience.
- **Hierarchy:** Maintain a clear vertical rhythm. Use the `label-lg` style (uppercase with tracking) for small eyebrow text above headlines to establish a highly organized, "consulting report" feel.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Exceptional Whitespace:** Section vertical padding is intentionally large (120px) to create a premium, unhurried pace. 
- **The "Bento" Grid:** For consulting services and impact metrics, use a structured grid of cards with varied column spans (e.g., two 6-column cards followed by three 4-column cards) to create visual interest while maintaining order.
- **Safe Margins:** Use a minimum side margin of 24px on mobile and 48px+ on tablet to ensure the content feels contained and focused.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of refined depth.

- **Cards:** Surfaces are primarily white with a very thin, low-opacity border (1px #E2E8F0).
- **Shadows:** Use a "Large & Soft" shadow profile for interactive elements: a 20px blur with only 4-6% opacity using the Primary Blue as the shadow tint. This prevents the "muddy" look of gray shadows and adds a high-end glow.
- **Interactions:** On hover, cards should subtly lift (shadow opacity increases slightly) rather than changing color, maintaining the professional calm of the interface.

## Shapes

The shape language is **Rounded**, using a 0.5rem (8px) base to soften the professional grid.

- **Soft Organic Accents:** Large, abstract "blob" shapes in low-opacity Primary Blue or Secondary Green are used as background decorations. These should be behind content and never interfere with legibility.
- **Image Treatment:** Use `rounded-xl` (1.5rem / 24px) for all photography. For hero sections, consider a "pill" or "teardrop" mask on one corner to inject the "compassionate" organic feel into the structured layout.

## Components

- **Buttons:** Primary buttons use the Primary Blue with white text. Secondary buttons use a transparent background with a 1.5px Primary Blue border. All buttons use `rounded-lg` for a sophisticated but approachable look.
- **Cards:** Content is grouped in white cards with subtle shadows. Use "Internal Padding" of at least 32px to maintain the airy aesthetic.
- **Input Fields:** Use a light gray background (#F1F5F9) instead of a white background with a border. This creates a more modern, "app-like" feel for consulting forms.
- **Chips / Tags:** Used for categorizing services or blog topics. Use a subtle tint of the Primary Blue (5% opacity) with Primary Blue text to keep them legible but secondary in hierarchy.
- **Progress Indicators:** When showing impact or consulting phases, use the Secondary Green to denote progress and completion, reinforcing the "Growth" narrative.