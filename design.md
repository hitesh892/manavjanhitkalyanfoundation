# Manav Janhit Kalyan Sansthan Design System

Version: 1.0  
Status: Final brand direction  
Last updated: 1 October 2026  
Applies to: All public website pages, templates, components, responsive states, and future additions

---

## 1. Purpose and Authority

This document is the single source of truth for the Manav Janhit Kalyan Sansthan website. Designers, developers, Elementor implementers, Codex, and other AI tools must follow it before creating or editing any page.

When a local page specification conflicts with this file, this file wins unless the project owner explicitly approves a new exception.

### Rule Labels

- **LOCKED**: Explicitly approved. Do not change, reinterpret, replace, or create alternatives.
- **SYSTEM DEFAULT**: A production value defined where the approved references did not provide an exact numeric value. Use consistently unless the project owner later locks a replacement.
- **CONTENT DEPENDENT**: May change only to suit real content while preserving the surrounding system.

### Non-Negotiable Principles — LOCKED

1. The visual direction is light, warm, premium, minimal, modern, trustworthy, and human.
2. The brand system is Sage Glass Coral, derived from the approved Option 02.
3. Main headings use Libre Baskerville. All other website text uses Manrope.
4. The approved title/subtitle treatment is Style 01: small refined icon beside the uppercase eyebrow, followed by a serif title with selective coral emphasis.
5. The primary CTA is a coral liquid-glass pill button. Its colour, hierarchy, and visual treatment are fixed.
6. Full section backgrounds must be light, warm, soft, and brand-connected.
7. No dark, black, charcoal, navy, cold-grey, neon, or harsh saturated full-section backgrounds.
8. Glassmorphism is selective. It must support content, not turn every element into a floating card.
9. Use authentic, relevant Indian people, projects, locations, and foundation activity imagery.
10. No flowers, decorative bouquets, unrelated illustrations, watermarks, placeholder imagery, or collage-style primary images.
11. Pages must remain spacious but content-led. No clipping, overlap, masked banner content, or excessive blank space.
12. English is the website language unless a page specification explicitly requires another language.

---

## 2. Brand Colour System

### 2.1 Locked Core Palette

| Token | Name | Value | Status | Primary Role |
|---|---|---:|---|---|
| `--color-canvas` | Warm Ivory Canvas | `#F9FCF6` | LOCKED | Global page background and neutral section base |
| `--color-sage-section` | Sage Glass Background | `#F4FAF1` | LOCKED | Primary alternate section background from Option 02 |
| `--color-heading` | Sage Forest | `#315F4B` | LOCKED | H1-H6, major labels, strong icon strokes |
| `--color-accent` | Human Coral | `#E95645` | LOCKED | Primary buttons, eyebrow text, eyebrow icon, highlighted heading words |
| `--color-body` | Deep Slate Sage | `#45564B` | LOCKED | Paragraphs and supporting copy |
| `--color-border-sage` | Sage Divider | `rgba(94, 122, 85, 0.20)` | LOCKED | Dividers, card borders, subtle outlines |
| `--color-white` | Warm White | `#FFFFFF` | SYSTEM DEFAULT | Text on coral, glass highlight, clean surfaces |

### 2.2 Supporting Tints

These values extend the locked palette without adding unrelated colours.

| Token | Name | Value | Status | Permitted Usage |
|---|---|---:|---|---|
| `--color-sage-50` | Mist Sage | `#F7FBF4` | SYSTEM DEFAULT | Quiet section bands and form zones |
| `--color-sage-100` | Pale Sage | `#EAF3E5` | SYSTEM DEFAULT | Icon discs, tags, hover surfaces |
| `--color-sage-200` | Soft Leaf | `#D9E8D2` | SYSTEM DEFAULT | Dividers and muted cards |
| `--color-sage-500` | Mid Sage | `#6F8C73` | SYSTEM DEFAULT | Secondary icons and metadata |
| `--color-sage-700` | Deep Sage | `#315F4B` | LOCKED | Titles and high-emphasis text |
| `--color-coral-50` | Coral Mist | `#FFF1ED` | SYSTEM DEFAULT | Highlight panels and validation backgrounds |
| `--color-coral-100` | Soft Coral Tint | `#FFDCD4` | SYSTEM DEFAULT | Badges, hover glows, icon discs |
| `--color-coral-600` | Human Coral | `#E95645` | LOCKED | Accent and primary CTA |
| `--color-coral-700` | Coral Hover | `#D94738` | SYSTEM DEFAULT | Primary CTA hover and pressed transition |
| `--color-cream` | Warm Cream | `#FFF8EC` | SYSTEM DEFAULT | Warm alternate section band |
| `--color-blush` | Blush Ivory | `#FFF4F0` | SYSTEM DEFAULT | Story, testimonial, or human-impact band |
| `--color-pistachio` | Pale Pistachio | `#F2F8EA` | SYSTEM DEFAULT | Initiative or environmental section band |
| `--color-text-strong` | Strong Sage Ink | `#24483A` | SYSTEM DEFAULT | Compact UI text requiring stronger contrast |
| `--color-text-muted` | Muted Sage Text | `#728078` | SYSTEM DEFAULT | Captions and secondary metadata only |
| `--color-success` | Success Green | `#2F7D50` | SYSTEM DEFAULT | Success feedback only |
| `--color-warning` | Warm Amber | `#B96B32` | SYSTEM DEFAULT | Warning feedback only |
| `--color-error` | Error Coral | `#C83D34` | SYSTEM DEFAULT | Error feedback only |

### 2.3 Background Usage — LOCKED

- Global page canvas: `#F9FCF6`.
- Preferred alternate section: `#F4FAF1`.
- Warm secondary bands may use `#FFF8EC`, `#FFF4F0`, or `#F2F8EA` sparingly.
- Large areas must use colours at the lightness level of the values above.
- Strong coral and dark sage are accents only. They must not become full-page or full-section fills.
- Adjacent sections should not use visually indistinguishable tints. Create rhythm through subtle alternation.
- Never create a dark footer or dark CTA section unless the owner explicitly replaces this locked rule.

### 2.3A Approved Screenshot Background Preservation — LOCKED

Approved section screenshots may contain their own visual background treatment. That treatment is part of the approved section composition and must be preserved when the section is rebuilt.

#### Preserve the Treatment Type

If the approved screenshot uses any of the following, keep the same treatment type:

- Linear gradient.
- Radial gradient.
- Multiple layered gradients.
- Soft glow or light bloom.
- Grain, paper, fabric, or other subtle texture.
- Organic colour wash.
- Image-backed colour overlay.
- Glassy or translucent surface tint.
- Border glow or edge highlight.
- Repeated pattern or low-contrast surface detail.

Do not flatten a gradient into a single solid colour merely because the global palette is light. Do not remove a texture, glow, tonal transition, or surface depth that gives the approved section its identity.

#### Recolour, Do Not Redesign

When adapting an approved screenshot to this brand system:

1. Preserve the layout, gradient direction, gradient focal point, number of colour stops, texture density, glow placement, contrast rhythm, and surface depth.
2. Replace the original colours with light, warm, brand-derived equivalents from the locked Sage Glass Coral palette.
3. Use sage, ivory, pale cream, blush, pale pistachio, and soft coral tints for large surfaces.
4. Reserve `#315F4B` and `#E95645` for headings, icons, highlights, borders, buttons, and small accents.
5. Keep the original visual relationship between lighter and darker areas, but lighten any large dark area into a soft brand-derived tint.
6. If the screenshot contains a linear gradient, produce a light Sage Glass Coral linear gradient with the same direction and comparable stop positions.
7. If the screenshot contains a radial gradient, preserve the radial origin and spread while translating the colours into pale sage, ivory, blush, or cream.
8. If the screenshot contains texture, retain it at low opacity over the recoloured surface. Never substitute a plain flat fill unless the approved screenshot itself is flat.

#### Brand Translation Examples — SYSTEM DEFAULT

```css
/* Preserve an approved linear-gradient direction and stop rhythm. */
background: linear-gradient(135deg, #F9FCF6 0%, #F4FAF1 58%, #FFF4F0 100%);

/* Preserve an approved radial focal point and soft bloom. */
background: radial-gradient(circle at 72% 18%, #FFF4F0 0%, #F4FAF1 42%, #F9FCF6 100%);

/* Preserve layered glow while keeping the surface light. */
background:
  radial-gradient(circle at 18% 24%, rgba(233, 86, 69, 0.10), transparent 30%),
  linear-gradient(120deg, #F9FCF6 0%, #F4FAF1 62%, #FFF8EC 100%);
```

These examples are not permission to add gradients to a flat approved section. The reference determines whether a gradient or texture exists; the brand system determines the translated colours.

#### Background Decision Order

For every approved section, follow this order:

1. Lock the screenshot's section layout and background treatment.
2. Identify whether the background is flat, linear, radial, layered, textured, image-backed, or glassy.
3. Preserve that treatment type and geometry.
4. Translate only its colours into the approved light brand palette.
5. Verify that text, icons, buttons, images, and glass surfaces still have sufficient contrast.
6. Do not simplify the section into a generic `#F9FCF6` block unless the approved screenshot is itself a flat background.

### 2.4 Semantic Colour Rules

#### Sage Forest `#315F4B` — LOCKED

Permitted: titles, important labels, navigation, benefit headings, line icons, active states, readable text on light surfaces.  
Prohibited: full-section fills, large opaque cards, decorative gradients covering photographs.

#### Human Coral `#E95645` — LOCKED

Permitted: primary liquid-glass buttons, eyebrow text, eyebrow icon, meaningful words highlighted inside headings, small status accents, selected controls.  
Prohibited: body paragraphs, full backgrounds, long text passages, large decorative blocks.

#### Deep Slate Sage `#45564B` — LOCKED

Permitted: paragraph text, supporting copy, descriptions, form help text.  
Prohibited: text smaller than 12px, text over visually busy imagery without a compliant overlay.

### 2.5 Approved Gradient

```css
--gradient-coral-liquid: linear-gradient(135deg, #F56B5C 0%, #E95645 55%, #D94738 100%);
--gradient-sage-wash: linear-gradient(135deg, #F9FCF6 0%, #F4FAF1 58%, #FFF4F0 100%);
```

`--gradient-coral-liquid` is reserved for the primary CTA. `--gradient-sage-wash` may be used only as a subtle section wash with no hard colour divisions.

---

## 3. Typography

### 3.1 Font Families — LOCKED

```css
--font-heading: "Libre Baskerville", Georgia, serif;
--font-ui: "Manrope", Arial, sans-serif;
```

- H1-H6 and editorial display titles: Libre Baskerville.
- Eyebrows, subtitles, body copy, buttons, navigation, forms, captions, tags, metadata, counters, labels, and supporting UI: Manrope.
- No substitute display font may be introduced.
- Fallback fonts are technical fallbacks only, not alternate design directions.

### 3.2 Font Loading — SYSTEM DEFAULT

Load only required weights:

- Libre Baskerville: 400, 700.
- Manrope: 400, 500, 600, 700.
- Use `font-display: swap`.
- Preload the regular Libre Baskerville and regular Manrope WOFF2 files when self-hosted.

### 3.3 Responsive Type Scale

All values below are SYSTEM DEFAULT unless the family is marked LOCKED.

| Style | Large Desktop ≥1440 | Desktop 1200-1439 | Tablet 768-1199 | Mobile 480-767 | Small Mobile ≤479 | Line Height | Weight |
|---|---:|---:|---:|---:|---:|---:|---:|
| Hero H1 | 54px | 54px | 44px | 38px | 34px | 1.12 | 800 |
| Page banner H1 | 52px | 48px | 42px | 34px | 32px | 1.12 | 400 |
| Section H2 | 40px | 40px | 36px | 31px | 29px | 1.16 | 800 |
| H3 | 32px | 30px | 27px | 24px | 23px | 1.22 | 400/700 |
| H4 | 24px | 23px | 22px | 20px | 19px | 1.28 | 700 |
| H5 | 20px | 19px | 18px | 18px | 17px | 1.32 | 700 |
| H6 | 17px | 17px | 16px | 16px | 16px | 1.35 | 700 |
| Lead paragraph | 19px | 18px | 18px | 17px | 16px | 1.70 | 400 |
| Body | 16px | 16px | 16px | 15.5px | 15px | 1.70 | 400 |
| Small body | 14px | 14px | 14px | 14px | 13.5px | 1.60 | 400/500 |
| Eyebrow | 13px | 13px | 12.5px | 12px | 12px | 1.35 | 700 |
| Button | 15px | 15px | 15px | 14.5px | 14px | 1.20 | 700 |
| Navigation | 15px | 15px | 15px | 15px | 15px | 1.30 | 600 |
| Caption/meta | 13px | 13px | 13px | 12.5px | 12px | 1.50 | 500 |

Hero-specific typography: eyebrow is 18px/600 on desktop and tablet, and 14px/600 on mobile. Hero paragraph is 17px desktop, 16px large tablet, 15px tablet, and 14px mobile. Any highlighted hero title text uses weight 700.

### 3.4 Letter Spacing — SYSTEM DEFAULT

- Libre Baskerville titles: `0`.
- Manrope body: `0`.
- Eyebrows: `0.08em`, uppercase.
- Buttons: `0`.
- Navigation: `0`.
- Metadata/tags: `0.02em` only when uppercase.
- Never use negative letter spacing.

### 3.5 Text Width and Wrapping

- Hero title maximum width: `14ch` to `18ch`, depending on approved copy.
- Section title maximum width: `18ch` to `24ch`.
- Paragraph maximum width: `62ch` to `68ch`.
- A title may wrap naturally, but no single orphan word should sit on its own final line when a small width adjustment can prevent it.
- Do not shrink type merely to preserve an arbitrary line count. Adjust container width first.
- Never mask, crop, fade, or truncate essential title or paragraph content.

---

## 4. Locked Heading and Eyebrow System

### 4.1 Standard Section Header — LOCKED

Order:

1. Small refined line icon.
2. Uppercase Manrope eyebrow in `#E95645`.
3. Libre Baskerville title in `#315F4B`.
4. One meaningful title phrase or final two-to-four words may use `#E95645`.
5. Optional supporting paragraph in `#45564B`.

The icon and eyebrow form one inline row. The icon must not overpower the text.

### 4.2 Heading Spacing

| Relationship | Desktop | Tablet | Mobile | Status |
|---|---:|---:|---:|---|
| Icon to eyebrow text | 8px | 8px | 7px | SYSTEM DEFAULT |
| Eyebrow row to title | 12px | 11px | 10px | SYSTEM DEFAULT |
| Title to paragraph | 18px | 16px | 14px | SYSTEM DEFAULT |
| Header block to section content | 32px | 26px | 22px | SYSTEM DEFAULT |

### 4.3 Icon Treatment — LOCKED LANGUAGE, SYSTEM DEFAULT SIZING

- Use one refined human-relevant outline icon: heart, helping hands, leaf, spark, or cause-specific line icon.
- Preferred source: Lucide or the existing approved icon library.
- Size: 22px desktop, 20px tablet, 18px mobile.
- Stroke: 1.75px.
- Colour: `#E95645`.
- Place directly beside the eyebrow, vertically centred.
- Do not place the icon in a heavy badge unless the component specifically calls for an icon disc.

### 4.4 Highlight Rules — LOCKED

- Highlight only one meaningful phrase per title.
- Highlight colour is always `#E95645`.
- Never highlight more than 35% of a title.
- Do not apply gradients, shadows, strokes, or liquid effects to heading text.
- The highlighted text remains the same size, font, weight, and line-height as the rest of the title.

### 4.5 Context Rules

- Hero: icon + eyebrow + H1 + lead paragraph; maximum two CTAs.
- Page banner: compact icon + eyebrow + H1 + short description; avoid oversized empty space.
- Standard section: icon + eyebrow + H2 + paragraph.
- Card: omit eyebrow by default; use H3/H4 and a small cause icon only when useful.
- Form: use H3/H4; eyebrow optional only at the top-level form block.
- Modal: use H3; no highlighted title phrase unless the modal is a donation/story modal.
- Blog article: H1 remains entirely sage by default; coral may highlight a short phrase only in editorial landing cards, not inside long-form article titles.

---

## 5. Layout, Containers, and Grid

### 5.1 Container System — LOCKED

All non-hero section content uses one shared maximum width:

```css
--content-max-width: 1280px;
```

```css
.section-inner {
  width: 100%;
  max-width: var(--content-max-width);
  margin-inline: auto;
}
```

The `1280px` boundary is measured from the left edge of the first content pixel to the right edge of the last content pixel. At a `1280px` viewport, the content starts at `0px` and ends at `1280px`. On larger screens it is centred. Do not add an invisible or arbitrary inner max-width that makes the first card start farther inside the approved boundary.

| Viewport | Section content rule | Horizontal section padding | Status |
|---|---|---:|---|
| Large desktop ≥1440px | `max-width: 1280px`, centred | `0px` | LOCKED |
| Desktop 1200-1439px | `width: 100%`, max `1280px` | `0px` | LOCKED |
| Laptop 1024-1199px | Full available width inside section | `15px` | LOCKED |
| Tablet landscape 900-1023px | Full available width inside section | `15px` | LOCKED |
| Tablet portrait 768-899px | Full available width inside section | `15px` | LOCKED |
| Mobile landscape 568-767px | Full available width inside section | `15px` | LOCKED |
| Mobile portrait 480-567px | Full available width inside section | `15px` | LOCKED |
| Small mobile ≤479px | Full available width inside section | `15px` | LOCKED |

Rules:

- A section background is always full viewport width unless the approved reference explicitly shows a contained surface.
- The hero background is always full width and is excluded from the normal `1280px` section-content rule.
- Hero content may use the same `1280px` inner alignment, but the hero background/image/video remains edge-to-edge.
- Non-hero cards, grids, media, and content begin at the section-inner boundary; do not add extra left/right padding to individual grids unless required by a documented card component.
- First and last grid items must align with the `0px` to `1280px` content boundary on desktop.
- Background bands may contain a full-width visual layer behind the centred content.

### 5.2 Section Spacing — LOCKED

- Desktop and large desktop: `padding: 50px 0`.
- Laptop, tablet landscape, tablet portrait, mobile landscape, mobile portrait, and small mobile: `padding: 30px 15px`.
- Hero sections are excluded from this default section padding when an approved hero reference defines a different composition.
- Section height is content-led. Add a minimum height only when a specific approved composition requires it.
- Sections should present their main heading, supporting copy, primary image/media, and key action clearly without forcing them into one viewport.
- Let sections expand naturally when content needs more height; never crop, mask, clip, or hide content to constrain section height.
- Never force `overflow: hidden` merely to constrain a section to the viewport.

### 5.3 Grid and Shared Card Gap — LOCKED

Common gaps must remain consistent across the whole website unless an approved section screenshot clearly requires a different optical gap.

```css
--gap-card-desktop: 24px;
--gap-card-tablet: 20px;
--gap-card-mobile: 16px;
```

- Desktop and laptop card/grid gap: `24px`.
- Tablet landscape and portrait card/grid gap: `20px`.
- Mobile landscape, mobile portrait, and small mobile card/grid gap: `16px`.
- The same gap applies to repeated cards, blog cards, cause cards, team cards, benefit rows, form columns, tabs, and standard media grids.
- A specific approved screenshot may use a tighter internal gap, but that is a local exception, not a new global system value.

Grid defaults:

- Desktop: 12 columns, 24px gutters.
- Tablet: 8 columns, 20px gutters.
- Mobile: 4 columns, 16px gutters.
- Standard two-column editorial split: `minmax(0, 1fr) minmax(0, 1fr)`.
- Text-heavy split: 5/7 or 7/5 columns.
- Equal-height alignment is required for paired image/content structures when shown side-by-side.
- Each page should vary section composition. Do not repeat one card grid or split layout across every section.

### 5.4 Spacing Scale — SYSTEM DEFAULT

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 32px;
--space-8: 40px;
--space-9: 50px;
--space-10: 64px;
--space-11: 80px;
--space-12: 96px;
```

Use this scale for all gaps, padding, offsets, and component rhythm. Avoid isolated values unless required for optical alignment.

---

## 6. Glassmorphism and Liquid Surfaces

### 6.1 Standard Light Glass — LOCKED DIRECTION

```css
--glass-bg: rgba(255, 255, 255, 0.58);
--glass-bg-sage: rgba(244, 250, 241, 0.66);
--glass-border: rgba(255, 255, 255, 0.72);
--glass-border-sage: rgba(94, 122, 85, 0.18);
--glass-blur: 18px;
--glass-saturation: 125%;
```

Recommended construction:

```css
background: var(--glass-bg-sage);
border: 1px solid var(--glass-border);
box-shadow: 0 14px 40px rgba(49, 95, 75, 0.10);
backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
-webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
```

### 6.1A Approved LiquidGlass Treatment — LOCKED

When an approved screenshot contains a visibly glassy, distorted, liquified, or refractive surface, reproduce that effect as a real LiquidGlass surface. Do not replace it with a plain `background: rgba(...)` card.

The approved implementation reference is:

```jsx
<LiquidGlass
  backdropBlur={4}
  tintColor="rgba(255, 255, 255, 0.08)"
  displacementScale={150}
  turbulenceBaseFrequency="0.008 0.008"
  turbulenceSeed={1.5}
>
  {children}
</LiquidGlass>
```

#### Locked LiquidGlass Parameters

| Parameter | Value | Status | Meaning |
|---|---:|---|---|
| `backdropBlur` | `4` | LOCKED | Light optical blur behind the surface |
| `tintColor` | `rgba(255, 255, 255, 0.08)` | LOCKED | Very light translucent glass tint |
| `displacementScale` | `150` | LOCKED | Liquified/refractive edge and content distortion |
| `turbulenceBaseFrequency` | `0.008 0.008` | LOCKED | Fine organic distortion frequency |
| `turbulenceSeed` | `1.5` | LOCKED | Stable distortion pattern |

#### LiquidGlass Behaviour

- Preserve the approved panel shape, radius, position, and content hierarchy.
- Preserve the underlying background gradient, texture, glow, or image; LiquidGlass is an additional surface layer.
- Keep the effect light and refined. It must not become a dark frosted panel or a heavy blur block.
- Use a thin warm-white or pale-sage edge highlight and restrained shadow so the panel separates from the background.
- Keep text crisp above the distortion layer. Distortion applies to the surface/background relationship, not to the readable text layer.
- Do not apply LiquidGlass to an entire page or large full-width section unless the approved screenshot clearly does so.
- Do not add displacement to flat text, icons, logos, or photographs that are meant to remain sharp.

#### Fallback Behaviour — SYSTEM DEFAULT

If the LiquidGlass component or SVG displacement filter is unavailable, preserve the visual intent with:

```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(4px) saturate(125%);
-webkit-backdrop-filter: blur(4px) saturate(125%);
border: 1px solid rgba(255, 255, 255, 0.42);
box-shadow: 0 14px 40px rgba(49, 95, 75, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.28);
```

The fallback must remain translucent and layered. Do not fall back to a flat solid fill unless the device cannot support transparency at all; in that case use opaque `#F7FBF4`.

### 6.1B Founder Glass + Liquid Surface — LOCKED

The Founder Message section combines visible glass blur with a separate organic refraction layer, based on the approved glass references.

- Desktop outer-surface padding is exactly `10px`.
- The base surface remains translucent: warm-white tint around `rgba(255,255,255,0.16)` with a light sage/coral gradient wash.
- Use a thin bright rim, a stronger top-edge specular highlight, restrained internal light, and a soft sage shadow.
- Apply turbulence/displacement only to a pseudo-element behind the content. Founder text, portrait, signature, and icons stay sharp above it.
- Use `0.008 0.008` turbulence frequency and seed `1.5`; local CSS/SVG fallback displacement may be optically reduced so the content is never warped.
- The quote panel may use the same combined treatment at a slightly stronger blur while remaining secondary to the main message.
- Founder eyebrow, quote, and decorative motif icons must use clean project-local SVG assets stored in the `assets` directory.
- The eyebrow icon is a coral HandHeart outline; the quote icon is a coral quote outline. Both remain decorative in markup when adjacent text already conveys their meaning.
- When blur or SVG filters are unsupported, use opaque `#F7FBF4` with the same radius, border, and shadow.

### 6.2 Glass Usage

Permitted: hero support panel, donation panel, form panel, selected card group, testimonial quote, modal, sticky action bar, image caption, and any approved screenshot surface that visibly uses glass/liquid treatment.  
Prohibited: every section container, every text block, nested glass cards, glass directly over unreadable high-detail areas.

### 6.3 Fallback

When `backdrop-filter` is unsupported, use an opaque `#F7FBF4` surface with the same border and shadow. Content must never depend on blur for readability.

### 6.4 Liquid-Glass Primary Button — LOCKED

The canonical website button is the approved homepage hero-slider treatment: a coral-red liquid-glass pill with a warm cream circular icon well that travels from left to right on activation. This treatment is inherited by primary CTAs throughout the website unless an approved composition explicitly requires a quieter control.

```css
--button-primary-bg: linear-gradient(135deg, #F87566, #E95645);
--button-primary-active-bg: linear-gradient(135deg, #C8473B, #8F2F2A);
--button-primary-shadow:
  0 13px 25px rgba(233, 86, 69, 0.28),
  inset 0 1px rgba(255, 255, 255, 0.55),
  inset 0 -2px rgba(80, 30, 20, 0.14);
--button-primary-border: rgba(255, 255, 255, 0.46);
--button-secondary-bg: linear-gradient(135deg, #4D8367, #315F4B);
--button-secondary-active-bg: linear-gradient(135deg, #315F4B, #1D3D30);
```

The translucent swipe trail uses `linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.48))`. The icon well uses warm cream `#FFFAF0`, a 3px warm-white rim, sage icon colour, and restrained sage shadow. The full liquid effect belongs only to buttons and explicitly approved interactive controls. Eyebrows, icons, and highlighted title words share `#E95645` but remain flat and crisp.

---

## 7. Buttons and Links

### 7.1 Primary Button — LOCKED

- Background: `--button-primary-bg`.
- Text: `#FFFFFF`.
- Font: Manrope, 700.
- Minimum height: 58px desktop/tablet, 54px mobile.
- Horizontal padding: `7px 56px` desktop/tablet, `7px 52px` mobile.
- Minimum width: 236px where space permits; never exceed the available width.
- Border radius: `999px`.
- Border: `1px solid var(--button-primary-border)`.
- Shadow: `--button-primary-shadow`.
- The icon well starts 8px from the left edge and is 44x44px desktop/tablet or 40x40px mobile.
- Icon well: `3px solid rgba(255,255,255,0.86)`, `#FFFAF0` background, sage icon, circular radius, and `0 4px 10px rgba(25,55,40,0.22)` shadow.
- Centre the label independently of the icon so the moving well never changes label alignment.
- Keep the icon static until the user activates the button. Do not auto-cycle button icons.

### 7.2 Secondary Button — LOCKED

- Use `--button-secondary-bg` with white text for paired hero actions and other approved high-emphasis secondary CTAs.
- Active background: `--button-secondary-active-bg`.
- Shadow: `0 13px 25px rgba(49,95,75,0.26), inset 0 1px rgba(255,255,255,0.55), inset 0 -2px rgba(20,55,38,0.18)`.
- Height, padding, pill radius, icon well, swipe trail, focus treatment, and responsive behaviour match the primary button.
- A pale warm-glass secondary button remains permitted only in quieter cards, forms, or editorial panels where a filled green action would compete with the primary CTA.

### 7.3 Hero-Slider Swipe Interaction — LOCKED

- Activation adds `.is-swipe-active`: change to the active gradient, reveal the translucent trail, and move the icon well to `left: calc(100% - 52px)`.
- The trail expands from the left to `calc(100% - 60px)` and remains behind the label.
- Icon and trail travel duration: `620ms` with `cubic-bezier(.22,.61,.36,1)`.
- Hold the completed state briefly; reset after 1100ms using `.is-swipe-reset` without a visible reverse animation.
- The effect runs only on user activation. It must never autoplay, loop continuously, or compete with carousel timing.
- Navigation links must preserve their destination and must not delay navigation solely to show the animation.

### 7.4 Standard Interaction States — SYSTEM DEFAULT

- Hover: translateY(-2px), slightly stronger shadow, 180-200ms ease-out.
- Active: translateY(0), use the active gradient, and reduce shadow by approximately 20%.
- Keyboard focus: visible 2px warm-white outline plus a 5px `rgba(233, 86, 69, 0.28)` outer ring.
- Disabled: opacity 0.48, no shadow lift, `cursor: not-allowed`.
- Loading: retain width; replace trailing icon with spinner; never shift label geometry.
- Touch target: minimum 44x44px.
- Under `prefers-reduced-motion: reduce`, disable icon/trail travel and show the active colour change immediately.

### 7.5 Canonical CSS Reference — LOCKED

```css
.button-primary {
  --button-bg: var(--button-primary-bg);
  --button-active-bg: var(--button-primary-active-bg);
  position: relative;
  display: inline-flex;
  min-width: 236px;
  min-height: 58px;
  padding: 7px 56px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid var(--button-primary-border);
  border-radius: 999px;
  color: #FFFFFF;
  background: var(--button-bg);
  box-shadow: var(--button-primary-shadow);
  font: 700 15px/1.2 Manrope, sans-serif;
  text-decoration: none;
  transition: transform 200ms ease, background 420ms ease, box-shadow 200ms ease;
}

.button-primary::before {
  position: absolute;
  top: 7px;
  left: 8px;
  width: 0;
  height: 44px;
  content: "";
  opacity: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,255,255,.12), rgba(255,255,255,.48));
  pointer-events: none;
  transition: width 620ms cubic-bezier(.22,.61,.36,1), opacity 200ms ease;
}

.button-primary__icon {
  position: absolute;
  z-index: 2;
  top: 7px;
  left: 8px;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 3px solid rgba(255,255,255,.86);
  border-radius: 50%;
  color: #315F4B;
  background: #FFFAF0;
  box-shadow: 0 4px 10px rgba(25,55,40,.22), inset 0 1px rgba(255,255,255,.95);
  transition: left 620ms cubic-bezier(.22,.61,.36,1), color 250ms ease;
}

.button-primary.is-swipe-active { background: var(--button-active-bg); }
.button-primary.is-swipe-active::before { width: calc(100% - 60px); opacity: 1; }
.button-primary.is-swipe-active .button-primary__icon { left: calc(100% - 52px); color: #E95645; }
```

### 7.6 Text Links

- Default: `#315F4B`, weight 700.
- Hover: `#E95645`.
- Underline appears on hover/focus and is always present in long-form body copy when colour alone could be ambiguous.
- External links may use an external-link icon. Do not use arrows on every inline link.

---

## 8. Borders, Radius, and Shadows

### 8.1 Radius Scale — SYSTEM DEFAULT

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 999px;
```

- Standard repeated cards: 8px.
- Glass feature panels: 16px to 24px.
- Images inside editorial layouts: 8px to 16px.
- Buttons/tags: pill.
- Do not nest multiple large-radius cards inside each other.

### 8.2 Shadow Scale — SYSTEM DEFAULT

```css
--shadow-xs: 0 2px 8px rgba(49, 95, 75, 0.06);
--shadow-sm: 0 8px 24px rgba(49, 95, 75, 0.08);
--shadow-md: 0 14px 40px rgba(49, 95, 75, 0.10);
--shadow-lg: 0 22px 60px rgba(49, 95, 75, 0.14);
```

- Use restrained shadows. Most surfaces use `--shadow-xs` or `--shadow-sm`.
- Hover may move one level stronger.
- Never use opaque black shadows or heavy glow around static cards.

---

## 9. Images and Media

### 9.1 Content Rules — LOCKED

- Use authentic Indian faces, places, volunteers, beneficiaries, facilities, and activities relevant to the adjacent content.
- Images must feel candid, respectful, warm, and documentary-led.
- Do not use watermarked images, generic Western NGO imagery, deity statues, panic/disaster sensationalism, unrelated stock, or text baked into photographs.
- Do not use image collages as a substitute for individual gallery items.
- Every image requires meaningful alt text unless it is decorative.

### 9.2 Crop and Ratio — SYSTEM DEFAULT

- Hero media: 16:9 or full-bleed landscape; subject and focal point must remain visible across responsive crops.
- Editorial split: 4:5 or 3:4.
- Cause/blog card: 16:10 or 4:3.
- Team portrait: 4:5.
- Gallery: mixed editorial rhythm permitted, but each asset remains a separate image.
- Object position should be set per image. Do not rely on universal `center center` cropping.
- Avoid masking banners into decorative blobs. Banner content and subjects must remain fully readable.

### 9.3 Loading

- Hero/LCP image: eager, high priority, correctly sized.
- Below-fold images: lazy loading.
- Always provide intrinsic width/height or `aspect-ratio` to prevent layout shift.
- Use responsive `srcset` and WebP/AVIF with a JPEG fallback where appropriate.

### 9.4 Video

- Poster image required.
- Controls must be keyboard accessible.
- Do not autoplay audio.
- Autoplaying decorative video must be muted, looped, pauseable, and disabled under reduced motion or data-saving conditions.

---

## 10. Core Components

### 10.1 Header

- Light warm surface; never dark.
- Desktop height: 82px. SYSTEM DEFAULT.
- Sticky behaviour permitted after the hero begins scrolling.
- Sticky state: `rgba(249,252,246,0.88)`, 16px blur, subtle bottom border.
- Logo remains clearly visible with adequate clear space.
- Navigation uses Manrope 600, `#315F4B`.
- Active and hover states use `#E95645` through text or a short indicator, not a heavy filled tab.
- Header CTA uses the locked primary button at a compact 46px height.
- Dropdowns use warm light glass, 8px radius, clear 44px minimum items.

### 10.2 Mobile Navigation

- Activate below 1024px unless content fits accessibly.
- Only one of menu or close icons is visible at a time.
- Panel background: `#F9FCF6` or opaque pale sage.
- Navigation links stack with at least 48px row height.
- Trap focus while open; Escape closes; body scroll locks without page jump.
- Do not overlay the logo or clip the final CTA.

### 10.3 Footer

- Light background only: preferred `#F4FAF1`.
- Use a top border `rgba(94,122,85,0.20)`.
- Desktop: 4-column layout. Tablet: 2 columns. Mobile: 1 column.
- Maintain 50/30/20 vertical padding rule.
- Footer headings use Manrope 700 or compact Libre Baskerville H5 when editorial emphasis is required.
- Links follow standard link states. Social icons require accessible names.

### 10.4 Standard Card

- Use cards only for repeated items, not to wrap an entire section.
- Background: warm white or pale sage glass.
- Radius: 8px standard; 16px for an approved glass feature card.
- Border: `1px solid rgba(94,122,85,0.16)`.
- Padding: 24px desktop, 20px tablet, 18px mobile.
- Hover: maximum -3px lift; preserve layout.
- Entire-card links must still expose visible focus and meaningful accessible names.

### 10.5 Cause Card — LOCKED STRUCTURE

Order:

1. Image.
2. Rectangular rounded badge inside the image: exact text `80G Tax Benefit`.
3. Cause title.
4. Concise description.
5. Donate action and social/share action on one line when space permits.

Rules:

- The 80G badge must remain a rounded rectangle, never a circle.
- Badge uses pale coral/sage tint, subtle border, Manrope 700.
- On mobile, actions may wrap only when required; maintain 12px gap.

### 10.6 Blog Card

- Image first, then category/date metadata, title, excerpt, and read-more link.
- Homepage latest blogs: exactly three cards in one row on desktop.
- Tablet: two columns with the third card beginning the next row, or a horizontal scroll only if explicitly approved.
- Mobile: one column.
- Titles should remain visually balanced across the row; descriptions should be similar in length without rewriting facts.

### 10.7 Team Card

- Use a clean portrait-led layout.
- Show name, role, and optional short bio/link.
- Do not place long biography text over the portrait.
- Hover reveals only secondary metadata or a link, never essential content.

### 10.8 Testimonial

- Use a warm light glass quote panel.
- Quote text may use Libre Baskerville at H4 scale.
- Name/role uses Manrope.
- Portrait is optional and must be real/relevant.
- Carousel controls stay outside text and vertically centred.

### 10.9 Counter / Impact Statistics

- Number: Manrope 700 or Libre Baskerville 700, depending on surrounding composition.
- Label: Manrope 600.
- Do not animate from zero when reduced motion is enabled.
- Never publish fabricated metrics. Values must come from verified content.

### 10.10 Process / Journey

- Use a clear ordered sequence with connected steps.
- Desktop may use horizontal or alternating editorial flow.
- Mobile becomes a single vertical path.
- Connecting line must remain continuous and must not run through text or icons.

### 10.11 Gallery and Lightbox

- Use separate images with consistent optical spacing.
- Image-first editorial layout; no unrelated decoration.
- Lightbox opens the selected image, supports next/previous, Escape, visible close control, focus trap, and swipe on touch.
- Captions must not obscure the subject.
- Do not apply a dark site section merely because the lightbox overlay itself requires contrast; the modal overlay may use translucent black as an accessibility utility exception.

### 10.12 Tabs

- Use for genuine content categories such as Projects, Updates, and Products.
- Desktop: horizontal tab list with active coral indicator.
- Mobile: scrollable tab row with visible overflow cue; never compress labels below readability.
- Implement ARIA tab semantics and keyboard arrow navigation.

### 10.13 Accordion / FAQ

- Header rows have 48px minimum height.
- Question uses Manrope 700 and sage text.
- Plus/minus or chevron aligns vertically at the far edge.
- Expanded panel uses body typography and adequate bottom spacing.
- Keyboard support: Enter and Space toggle.
- Do not hide answers through fixed heights.

### 10.14 Slider / Carousel

- Controls sit outside content/image overlap zones whenever possible.
- Arrows are vertically centred relative to the slide card or media.
- Maintain equal left/right edge spacing.
- Provide previous/next labels, keyboard support, pagination state, and pause controls for autoplay.
- Disable autoplay under reduced motion.

### 10.15 Modal

- Warm white or sage glass surface.
- Maximum width: 720px standard; 920px for detailed stories/forms.
- Mobile: 16px viewport margin; maximum height `calc(100dvh - 32px)`; internal scrolling.
- Use focus trap, Escape close, labelled close button, and return focus to the trigger.
- Overlay may use `rgba(20,35,28,0.48)` as a functional contrast exception, not as a page background.

### 10.16 Tooltip

- Use only for unfamiliar icon-only controls.
- Background `#24483A`; white text; 12px Manrope.
- Must also work on keyboard focus.

---

## 11. Forms

### 11.1 Fields — SYSTEM DEFAULT

- Height: 50px standard; textarea minimum 140px.
- Background: `rgba(255,255,255,0.78)`.
- Border: `1px solid rgba(94,122,85,0.24)`.
- Radius: 8px.
- Text: `#24483A`.
- Placeholder: `#7D8981`; never replace a visible label with placeholder-only instructions.
- Horizontal padding: 16px.
- Label: Manrope 600, 14px, `#315F4B`.
- Help text: 13px, `#728078`.

### 11.2 Form States

- Hover: border `rgba(49,95,75,0.38)`.
- Focus: border `#315F4B` plus `0 0 0 3px rgba(49,95,75,0.14)`.
- Error: border `#C83D34`; error text directly below; include icon/text, not colour alone.
- Success: border `#2F7D50`; concise confirmation.
- Disabled: pale sage fill, 55% text opacity, clear disabled cursor.
- Required fields: textual `(required)` or accessible required state; do not rely only on an asterisk.

### 11.3 Form Layout

- Desktop may use two columns for short related fields.
- Full name should remain one field unless the data workflow explicitly needs separate names.
- Email, phone, amount, company, message, consent, and submit follow logical keyboard order.
- Mobile always uses one column.
- Form actions remain visible and must not be covered by sticky UI.

---

## 12. Page and Section Patterns

### 12.1 Hero

- Use one strong, relevant bitmap photograph or video as the primary visual.
- Maintain an emotional, brand-connected foundation message.
- Keep the heading compact enough that the first viewport hints at the following content.
- Do not put the main hero message inside an isolated floating marketing card unless the approved page reference specifically does so.
- CTAs: one primary liquid-glass button and optional pale glass secondary button.
- Overlay/gradient may be used only to protect contrast and must remain warm/light.

### 12.2 Inner-Page Banner

- Compact, content-led, and fully readable.
- Title, eyebrow, and paragraph must have proper top/bottom padding.
- Do not mask the entire banner or crop the main subject aggressively.
- Avoid repeating the page name as both eyebrow and title.

### 12.3 About Page Flow — LOCKED

Recommended page order:

1. Banner with Vision and Mission context.
2. Who We Are.
3. Foundation/founder section.
4. Journey.
5. Team or governance where required.
6. Supporting CTA.

Each section must use a different editorial composition while remaining in the same design system.

### 12.4 Homepage Content Requirement — LOCKED

The homepage must include at least these ten content areas, excluding header and footer:

1. Hero.
2. About Us.
3. Impact Numbers.
4. Our Causes.
5. Journey / What We Do / Initiatives.
6. Gallery.
7. Testimonials.
8. Latest Blogs.
9. Recent Donors.
10. Projects / Updates / Products tabs.

Sections may be expanded with a founder story, video, or support CTA, but mandatory sections must not be removed.

### 12.5 CTA Section

- Light sage, cream, or blush surface only.
- Use the locked heading system and liquid-glass primary CTA.
- Prefer a clear two-column or centred editorial layout.
- Do not use a saturated coral block as the section background.

### 12.6 Donation Interface

- Preserve payment, amount, product, and validation logic.
- Amount choices use clear selectable controls.
- Selected state: coral border/accent with a pale coral background, not full saturated coral behind long labels.
- Donation summary remains visible without obscuring page content.
- Sticky donation actions must reserve page-bottom space and remain above other content via the z-index system.

### 12.7 Policy / Legal Pages

- Follow the same current light background rule.
- Use a readable constrained text column, clear heading hierarchy, and optional light glass table of contents.
- No people, flowers, decorative illustrations, or unnecessary cards.
- Long-form content links and focus states must remain visibly accessible.

### 12.8 Approved Volunteer Feature Section — LOCKED

The uploaded approved reference `122006(1).png` is the source of truth for this section. It is not an About/Belief section and must not be generated as a generic two-column image-and-copy block.

#### Locked Composition

Use one continuous horizontal editorial section with three visual zones:

1. **Volunteer image zone** on the left.
2. **Central sage glass content card** in the middle.
3. **Why Volunteer information zone** on the right, including the inset supporting image.

Approximate desktop proportions from the approved reference:

| Zone | Width | Status |
|---|---:|---|
| Left volunteer photograph | 27% | LOCKED composition ratio |
| Centre glass card | 31% | LOCKED composition ratio |
| Right benefits and inset image | 42% | LOCKED composition ratio |

These percentages are optical proportions, not a reason to crop or squeeze content. The full section must remain readable and may expand vertically when required.

#### Locked Content Order

**Left zone**

- Use the approved volunteer photograph showing a woman engaging with an older man.
- Image is edge-aligned to the section and fills its zone.
- Preserve the faces, hands, and human interaction in the crop.
- Do not replace this with the portrait used in the generated `OUR BELIEF` example.

**Centre glass card**

1. Refined helping-hands/heart line icon.
2. Eyebrow: `VOLUNTEER WITH US`.
3. Title: `Find A Meaningful Place For Your Time And Skills`.
4. Highlight only `Time And Skills` in `#E95645`.
5. Paragraph: `Be part of Manav Janhit Kalyan Sansthan and support elderly and vulnerable people through practical care. Contribute your time and abilities to create a kinder, healthier and more inclusive society.`
6. Primary button: `Join the Work` with arrow.
7. Secondary button: `Discover Our Mission` with play icon.

**Right zone**

1. Heading: `Why Volunteer`.
2. Supporting sentence: `Participation turns good intentions into practical support.`
3. Three benefit rows in this order:
   - `Purpose` — `Make a real difference in people's lives.`
   - `Learning` — `Gain new skills and broaden your perspective.`
   - `Connection` — `Be part of a caring and supportive community.`
4. Small tilted supporting photograph on the far right/bottom of the zone.

#### Locked Typography Hierarchy

| Element | Family | Approximate desktop size | Weight | Colour |
|---|---|---:|---:|---|
| Centre eyebrow | Manrope | 10-12px | 700 | `#E95645` |
| Centre title | Libre Baskerville | 28-34px | 400 | `#315F4B` |
| Highlighted title phrase | Libre Baskerville | same as title | 400 | `#E95645` |
| Centre paragraph | Manrope | 11-13px | 400 | `#45564B` |
| Right heading | Libre Baskerville | 24-30px | 400 | `#315F4B` |
| Right supporting sentence | Manrope | 10-12px | 400 | `#45564B` |
| Benefit heading | Manrope | 11-13px | 700 | `#315F4B` |
| Benefit description | Manrope | 9-11px | 400 | `#45564B` |

The values above are optical measurements inferred from the approved screenshot and are therefore **SYSTEM DEFAULT within this LOCKED composition**. Preserve the visual hierarchy and relative scale first; do not allow generated HTML to enlarge the title into a hero treatment or reduce the benefit text until it becomes illegible.

#### Locked Spacing and Surface Treatment

- Section background: `#F4FAF1` or the approved light sage variation of the global `#F9FCF6` canvas.
- Centre card: pale sage/ivory glass, subtle blur, thin light border, restrained shadow.
- Centre card radius: approximately 16px desktop; 14px tablet; 12px mobile. SYSTEM DEFAULT.
- Centre card internal padding: approximately 22px desktop, 18px tablet, 16px mobile. SYSTEM DEFAULT.
- Eyebrow-to-title gap: approximately 8-10px.
- Title-to-paragraph gap: approximately 10-14px.
- Paragraph-to-buttons gap: approximately 16px.
- Button gap: 8-12px; buttons remain on one line on desktop.
- Right benefit rows use consistent icon discs and 12-16px vertical separation.
- The inset right photograph is slightly tilted and framed with a thin warm-white edge; it must never overlap the benefit text.
- No additional decorative flowers, blobs, or unrelated cards may be added.

#### Locked Button Behaviour

- `Join the Work` keeps the approved coral liquid-glass pill treatment.
- `Discover Our Mission` keeps the approved pale glass pill with green play icon.
- Button colour, height, radius, gloss, blur, arrow/play treatment, and hierarchy are inherited from Section 7.
- Do not convert either button to a flat, outline-only, square, or unrelated CTA style.

#### Responsive Transformation

- **Desktop/laptop:** retain the three-zone horizontal composition.
- **Tablet landscape:** retain three zones only if the central card and right benefit labels remain readable; otherwise use a 36/64 split with the right zone below the image/card pair.
- **Tablet portrait:** stack as image first, central card second, Why Volunteer third.
- **Mobile:** one column in this order: volunteer image, central glass card, Why Volunteer heading/supporting text, benefit rows, inset image. Buttons may stack if needed.
- Never place the inset image over text on mobile.
- Never crop the volunteer faces or hide the approved content to preserve a fixed section height.

#### Anti-Drift Rule

Any generated HTML section that changes this approved Volunteer composition into `OUR BELIEF`, `A kinder tomorrow starts with people`, a single portrait, a generic two-column belief layout, or a different CTA/content order is incorrect, even if its colours and fonts match this document.

---

## 13. Responsive Behaviour

### 13.1 Breakpoints — SYSTEM DEFAULT

```css
--bp-small: 360px;
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-laptop: 1024px;
--bp-desktop: 1200px;
--bp-wide: 1440px;
```

Design mobile-first. Breakpoints respond to content pressure, not device names alone.

### 13.2 Large Desktop ≥1440px

- Cap all non-hero content at 1280px and centre it on viewports wider than 1280px.
- Keep section content padding at `50px 0`.
- Do not stretch paragraphs or grids indefinitely.
- Hero/media may extend visually while text remains constrained.

### 13.3 Desktop and Laptop 1024-1439px

- Preserve intended two-column editorial layouts.
- Desktop at 1200-1439px uses `50px 0` section padding and the 1280px maximum content boundary.
- Laptop at 1024-1199px uses `30px 15px` section padding and a full available content width.
- Reduce gutters before shrinking type.
- Navigation must not wrap; switch to the mobile pattern when it no longer fits.

### 13.4 Tablet 768-1023px

- Use `30px 15px` section padding.
- Let section height follow its content; allow it to expand naturally.
- Use a consistent `20px` gap between cards and grid items.
- Two-column layouts may remain when each column retains at least 320px useful width.
- Otherwise stack with content order chosen for meaning, not visual habit.
- Avoid half-width cards with cramped copy.

### 13.5 Mobile ≤767px

- Use `30px 15px` section padding.
- Let section height follow its content; allow it to expand naturally.
- Use a consistent `16px` gap between cards and grid items.
- Stack primary layouts into one column.
- Image may appear before text when it establishes context; otherwise the heading leads.
- Buttons become full width only when labels or touch spacing require it.
- Maintain at least 12px between stacked actions.
- No horizontal page overflow.
- Carousels, tabs, and tables must expose a clear mobile interaction rather than clipping.

### 13.6 Small Mobile ≤359px

- Preserve 16px page gutter.
- Reduce optional decoration before reducing type below documented minimums.
- Icon and label pairs may wrap as a unit.
- Never allow buttons, price selectors, or form fields to escape the viewport.

### 13.7 Orientation and Dynamic Viewport

- Use `dvh` where viewport height matters.
- Mobile landscape sections remain content-led and must preserve readable content.
- Sticky elements must account for browser UI and safe-area insets.
- Test at 320, 360, 375, 390, 480, 768, 1024, 1280, 1440, and 1920px widths.

---

## 14. Motion and Interaction

### 14.1 Motion Tokens — SYSTEM DEFAULT

```css
--motion-fast: 140ms;
--motion-base: 180ms;
--motion-slow: 320ms;
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
```

- Button and link feedback: 140-180ms.
- Cards and disclosure transitions: 180-240ms.
- Section reveal: maximum 320ms.
- Movement should be subtle: 2-12px, not dramatic slides.
- Never animate layout height in a way that clips text.
- No perpetual decorative motion near reading content.

### 14.2 Reduced Motion — LOCKED ACCESSIBILITY REQUIREMENT

Under `prefers-reduced-motion: reduce`:

- Disable scroll reveal, parallax, counters, autoplay, and smooth scrolling.
- Preserve immediate visible content and functional state changes.
- Do not hide content pending an animation.

---

## 15. Accessibility

### 15.1 Standard — SYSTEM DEFAULT

Target WCAG 2.2 AA.

- Normal text contrast: minimum 4.5:1.
- Large text contrast: minimum 3:1.
- UI component boundaries and focus indicators: minimum 3:1 against adjacent colours.
- Do not use colour alone to communicate meaning.
- Text zoom at 200% must remain usable without loss of content.
- Reflow at 320 CSS px must not introduce two-dimensional scrolling except genuine data tables/media.

### 15.2 Keyboard and Focus

- Every interactive element must be keyboard reachable.
- Use logical DOM order matching the visual reading order.
- Provide a skip-to-content link.
- Never remove focus outlines without a compliant replacement.
- Focus must not be hidden behind sticky header/footer controls.

### 15.3 Semantics

- One H1 per page.
- Heading levels must not skip for styling convenience.
- Use buttons for actions and links for navigation.
- Icon-only buttons require accessible labels and tooltips where meaning is unfamiliar.
- Form errors must associate with their inputs.
- Dynamic status messages use appropriate live regions.

### 15.4 Images and Media

- Informative images require descriptive alt text.
- Decorative images use empty alt text.
- Captions must be programmatically connected where relevant.
- Video requires captions/transcripts when speech is present.

---

## 16. Z-Index and Layering — SYSTEM DEFAULT

```css
--z-base: 0;
--z-raised: 10;
--z-dropdown: 200;
--z-sticky: 300;
--z-header: 400;
--z-overlay: 700;
--z-modal: 800;
--z-toast: 900;
--z-critical: 1000;
```

- Keep z-index values within this scale.
- Sticky donation UI uses `--z-sticky` and must not cover footer or form actions.
- Mobile menu uses `--z-overlay` or higher and must remain above the header contents it replaces.
- Tooltips inside modals must stay inside the modal stacking context.

---

## 17. Overflow and Content Resilience

- Never apply global `overflow-x: hidden` to conceal a broken layout.
- Fix the overflowing component at its source.
- Use `min-width: 0` on grid/flex children containing text.
- Long URLs and user-provided text use `overflow-wrap: anywhere` where necessary.
- Tables use a labelled horizontal scroll wrapper on mobile.
- Images and videos use `max-width: 100%`.
- No fixed-height text cards unless content is guaranteed and fully visible.
- Use `line-clamp` only for optional card excerpts, never titles, legal text, form help, or essential information.

---

## 18. CSS Design Tokens

```css
:root {
  color-scheme: light;

  --font-heading: "Libre Baskerville", Georgia, serif;
  --font-ui: "Manrope", Arial, sans-serif;

  --color-canvas: #F9FCF6;
  --color-sage-section: #F4FAF1;
  --color-heading: #315F4B;
  --color-accent: #E95645;
  --color-body: #45564B;
  --color-text-strong: #24483A;
  --color-text-muted: #728078;
  --color-border-sage: rgba(94, 122, 85, 0.20);
  --color-white: #FFFFFF;
  --color-cream: #FFF8EC;
  --color-blush: #FFF4F0;
  --color-pistachio: #F2F8EA;

  --glass-bg: rgba(255, 255, 255, 0.58);
  --glass-bg-sage: rgba(244, 250, 241, 0.66);
  --glass-border: rgba(255, 255, 255, 0.72);
  --glass-border-sage: rgba(94, 122, 85, 0.18);
  --glass-blur: 18px;

  --gradient-coral-liquid: linear-gradient(135deg, #F56B5C 0%, #E95645 55%, #D94738 100%);
  --gradient-sage-wash: linear-gradient(135deg, #F9FCF6 0%, #F4FAF1 58%, #FFF4F0 100%);

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 999px;

  --shadow-xs: 0 2px 8px rgba(49, 95, 75, 0.06);
  --shadow-sm: 0 8px 24px rgba(49, 95, 75, 0.08);
  --shadow-md: 0 14px 40px rgba(49, 95, 75, 0.10);
  --shadow-lg: 0 22px 60px rgba(49, 95, 75, 0.14);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 50px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 96px;

  --motion-fast: 140ms;
  --motion-base: 180ms;
  --motion-slow: 320ms;
  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

---

## 19. Elementor Implementation Rules

1. Use full-width outer containers for background bands and one constrained inner container for content.
2. Do not apply duplicate horizontal padding to outer and inner containers.
3. Set global fonts and colours through Site Settings/tokens before styling individual widgets.
4. Use CSS classes for shared components; do not duplicate ad hoc widget styling across pages.
5. Avoid negative margins for structural alignment.
6. Keep equal-height card rows through grid/flex alignment, not fixed content heights.
7. Set responsive image object positions deliberately.
8. Do not hide desktop content and recreate it separately for mobile unless semantic order cannot be solved otherwise.
9. Ensure popup/modal close, focus, form submission, and scroll locking work on touch and keyboard.
10. Test tablet breakpoints manually; do not assume desktop-to-mobile interpolation is sufficient.

---

## 20. Content and Editorial Rules

- Use clear, respectful, human language.
- Do not publish dummy text, placeholder names, unverified impact figures, or repeated generic descriptions.
- Titles should be concise and emotionally grounded without sensationalism.
- Avoid repeating the page name in the first heading when the breadcrumb/banner already provides context.
- Card titles and descriptions within a row should have comparable visual length.
- Buttons use specific actions: `Donate Now`, `Join the Work`, `Apply to Volunteer`, `Read the Story`, or another accurate verb-led label.
- Avoid vague CTAs such as `Click Here`.
- Proofread grammar, punctuation, capitalization, spelling, and organization names before release.

---

## 21. Prohibited Patterns

- Any font other than Libre Baskerville and Manrope.
- Dark or cold full-section backgrounds.
- Random unrelated pastel colours.
- Coral body paragraphs or large coral background blocks.
- Liquid effects on ordinary text.
- Flowers, decorative bouquets, irrelevant illustration, bokeh/orbs, or ornamental clutter.
- Excessive border radius or every section inside a floating card.
- Nested glass cards.
- Repeating the exact same layout throughout a page.
- Aggressive image masks, clipped headings, overlapping arrows, or hidden overflow used as a repair.
- Adjacent-category imagery or non-Indian imagery when the subject is an Indian foundation activity.
- Fixed section heights that crop content.
- Tiny low-contrast text.
- Hover-only essential information.
- Auto-playing audio or uncontrolled motion.
- Multiple competing primary CTAs in one view.

---

## 22. QA and Acceptance Checklist

### Visual System

- [ ] Libre Baskerville is used for every H1-H6/editorial heading.
- [ ] Manrope is used for all other text.
- [ ] Heading, eyebrow icon, highlight, and button colours match the locked palette.
- [ ] Coral liquid-glass treatment appears only on buttons/approved controls.
- [ ] Backgrounds remain light, warm, and brand-derived.
- [ ] Section layouts have variety without losing brand consistency.
- [ ] Glass is selective, readable, and has a solid fallback.

### Layout

- [ ] Section padding is `50px 0` on desktop and `30px 15px` on laptop, tablet, and mobile.
- [ ] Non-hero content uses the shared 1280px maximum width.
- [ ] Hero background remains full width.
- [ ] Card/grid gaps use 24px desktop/laptop, 20px tablet, and 16px mobile.
- [ ] Section heights follow content unless an approved composition specifies a minimum height.
- [ ] Sections expand rather than crop or hide content when real content needs more height.
- [ ] No text, arrows, icons, buttons, or images overlap.
- [ ] No essential content is clipped, masked, or truncated.
- [ ] First and last grid items align with the container.
- [ ] Latest blogs display three cards in one row on desktop.

### Components

- [ ] Primary and secondary button styles remain consistent.
- [ ] Cause cards use the exact `80G Tax Benefit` rectangular badge.
- [ ] Accordions, tabs, sliders, modals, forms, and menus support keyboard use.
- [ ] Sticky elements reserve space and do not cover content.
- [ ] Hover, focus, active, disabled, loading, success, and error states are present.

### Content and Media

- [ ] Images are relevant, respectful, Indian, sharp, and watermark-free.
- [ ] Image crops preserve faces and action.
- [ ] No dummy content or unverified statistics remain.
- [ ] Spelling, grammar, and punctuation are correct.
- [ ] Alt text, labels, captions, and link purpose are meaningful.

### Responsive and Accessibility

- [ ] Tested at 320, 360, 375, 390, 480, 768, 1024, 1280, 1440, and 1920px.
- [ ] No horizontal page overflow.
- [ ] Text remains readable at 200% zoom.
- [ ] WCAG 2.2 AA contrast targets are met.
- [ ] Focus is visible and never hidden behind sticky UI.
- [ ] Reduced-motion behaviour is implemented.
- [ ] Touch targets are at least 44x44px.

---

## 23. Final Decision Summary

| System Area | Final Direction | Status |
|---|---|---|
| Brand direction | Sage Glass Coral, Option 02 | LOCKED |
| Global canvas | `#F9FCF6` | LOCKED |
| Primary sage band | `#F4FAF1` | LOCKED |
| Main headings | Libre Baskerville, `#315F4B` | LOCKED |
| Body and UI | Manrope, `#45564B` | LOCKED |
| Eyebrow and icon | Manrope, `#E95645` | LOCKED |
| Highlighted heading words | `#E95645` | LOCKED |
| Primary button | Hero-slider coral liquid-glass pill with left-to-right cream icon well and activation trail | LOCKED |
| Glass direction | Light warm sage/ivory glass | LOCKED |
| Large backgrounds | Light, warm, brand-derived only | LOCKED |
| Section spacing | `50px 0` desktop; `30px 15px` laptop/tablet/mobile | LOCKED |
| Non-hero content width | Maximum `1280px` | LOCKED |
| Hero background | Full viewport width | LOCKED |
| Shared card gap | 24px desktop/laptop; 20px tablet; 16px mobile | LOCKED |
| Major section sizing | Content-led; minimum height only when required by an approved composition | LOCKED |
| Imagery | Authentic relevant Indian imagery, no watermark/collage | LOCKED |

All future work must preserve the locked system above. Any proposed deviation must be presented as an explicit change request and must not be silently introduced during implementation.

<!-- Canonical CTA specification updated 2026-10-07. This section overrides any earlier conflicting button rules. -->

## Canonical Liquid CTA Buttons — Strict Rule

Use this single button system for all prominent primary and paired secondary CTAs. Do not create page-specific variations that change its geometry, icon position, typography, depth, or responsive pairing.

### Required component structure

```html
<div class="mjks-button-group">
  <a class="mjks-liquid-btn mjks-liquid-btn--primary" href="#target">
    <span class="mjks-liquid-btn__icon">[SVG icon]</span>
    <span class="mjks-liquid-btn__label">Primary action</span>
  </a>
  <a class="mjks-liquid-btn mjks-liquid-btn--secondary" href="#target-two">
    <span class="mjks-liquid-btn__icon">[SVG icon]</span>
    <span class="mjks-liquid-btn__label">Secondary action</span>
  </a>
</div>
```

The icon well must always be the first child and must begin on the left. Never place the icon after the label in this component.

### Paired-button layout

```css
.mjks-button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 18px;
}
```

- Desktop and normal tablet: both CTAs stay on one row.
- Do not use `width: 100%` on desktop/tablet buttons.
- Stack only below `540px`, using a `12px` vertical gap and `width: 100%`.
- Never stack prematurely when both buttons fit cleanly.

### Locked button geometry and typography

```css
.mjks-liquid-btn {
  position: relative;
  display: grid;
  grid-template-columns: 44px 1fr;
  align-items: center;
  min-width: 235px;
  width: auto;
  min-height: 58px;
  height: 58px;
  padding: 7px 28px 7px 8px;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(255, 255, 255, .46);
  border-radius: 999px;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0;
  text-decoration: none;
  white-space: nowrap;
}

.mjks-liquid-btn__label {
  position: relative;
  z-index: 1;
  grid-column: 1 / -1;
  display: block;
  padding-inline: 48px;
  text-align: center;
}
```

The label padding is mandatory: it reserves the moving icon’s travel lane and prevents the icon and text from collapsing or overlapping.

### Primary and secondary colors

```css
.mjks-liquid-btn--primary {
  --mjks-button-active-bg: linear-gradient(135deg, #c8473b, #8f2f2a);
  background: linear-gradient(135deg, #f87566 0%, #e95645 100%);
  box-shadow:
    0 13px 25px rgba(233, 86, 69, .28),
    inset 0 1px 0 rgba(255, 255, 255, .55),
    inset 0 -2px 0 rgba(80, 30, 20, .14);
}

.mjks-liquid-btn--secondary {
  --mjks-button-active-bg: linear-gradient(135deg, #315f4b, #1d3d30);
  background: linear-gradient(135deg, #4d8367 0%, #315f4b 100%);
  box-shadow:
    0 13px 25px rgba(49, 95, 75, .22),
    inset 0 1px 0 rgba(255, 255, 255, .42),
    inset 0 -2px 0 rgba(20, 65, 48, .14);
}
```

A paired high-emphasis secondary CTA must be Sage green. Do not make it white, transparent, outline-only, pale green, or Coral.

### Locked icon well

```css
.mjks-liquid-btn__icon {
  position: absolute;
  z-index: 2;
  top: 7px;
  left: 8px;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 3px solid rgba(255, 255, 255, .82);
  border-radius: 50%;
  color: #315f4b;
  background: #fffaf0;
  box-shadow:
    0 4px 12px rgba(49, 95, 75, .10),
    inset 0 1px 0 rgba(255, 255, 255, .90);
}

.mjks-liquid-btn__icon svg {
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  background: none;
  color: currentColor;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}
```

Do not use emoji, white icons inside the cream well, or different icon-well sizes between paired buttons.

### Required click animation

The interaction is click-triggered, never autoplayed. The icon travels from left to right over `620ms`, the liquid highlight expands behind it, the active gradient remains visible, and the component resets at `1100ms`.

```css
.mjks-liquid-btn {
  transition: transform .2s ease, background .42s ease, box-shadow .2s ease;
}

.mjks-liquid-btn::before {
  position: absolute;
  z-index: 0;
  top: 7px;
  left: 8px;
  width: 0;
  height: 44px;
  content: "";
  opacity: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,255,255,.12), rgba(255,255,255,.48));
  pointer-events: none;
  transition: width .62s cubic-bezier(.22,.61,.36,1), opacity .2s ease;
}

.mjks-liquid-btn__icon {
  transition: left .62s cubic-bezier(.22,.61,.36,1), color .25s ease, transform .42s cubic-bezier(.22,.61,.36,1);
}

.mjks-liquid-btn.is-swipe-active {
  background: var(--mjks-button-active-bg);
}

.mjks-liquid-btn.is-swipe-active::before {
  width: calc(100% - 60px);
  opacity: 1;
}

.mjks-liquid-btn.is-swipe-active .mjks-liquid-btn__icon {
  left: calc(100% - 52px);
  color: #e95645;
}

.mjks-liquid-btn.is-swipe-reset .mjks-liquid-btn__icon {
  transition: none !important;
}

.mjks-liquid-btn.is-swipe-reset::before {
  width: 0;
  opacity: 0;
  transition: none !important;
}
```

For same-page anchors, prevent the immediate jump, play the full `1100ms` animation, then update the URL hash and smoothly scroll to the destination. Form actions without navigation use the same animation without redirecting.

### Responsive rules

```css
@media (max-width: 767px) {
  .mjks-liquid-btn {
    grid-template-columns: 40px 1fr;
    min-width: 0;
    min-height: 54px;
    height: 54px;
    padding: 7px 20px 7px 7px;
  }

  .mjks-liquid-btn__icon {
    top: 7px;
    width: 40px;
    height: 40px;
  }

  .mjks-liquid-btn.is-swipe-active .mjks-liquid-btn__icon {
    left: calc(100% - 48px);
  }
}

@media (max-width: 540px) {
  .mjks-button-group {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .mjks-liquid-btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mjks-liquid-btn,
  .mjks-liquid-btn::before,
  .mjks-liquid-btn__icon {
    transition: none !important;
  }
}
```

Reduced-motion users must navigate immediately without waiting for animation.

### Rejection criteria

Reject an implementation if any of the following occurs:

- The icon starts or remains on the right.
- Icon and label overlap or collapse.
- Desktop/tablet paired CTAs stack or wrap.
- Paired buttons have different heights, radii, icon wells, typography, or interaction timing.
- Secondary paired CTA is white, transparent, outline-only, or Coral.
- Buttons use `width: 100%` above the small-mobile breakpoint.
- Navigation happens before the complete `1100ms` animation.
- Animation autoplays, loops continuously, or changes every button when only one was clicked.
- Existing sliders, carousels, forms, FAQs, or unrelated controls are affected.
