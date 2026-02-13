# LawBOX Logo Design Specification

## Visual Design

The LawBOX wordmark consists of two elements working in harmony:

```
┌─────────────────────────────────────┐
│                                     │
│   Law  ┌─────────┐                │
│        │   BOX   │                │
│        └─────────┘                │
│                                     │
└─────────────────────────────────────┘
```

### Element 1: "Law"
- **Font**: Inter Bold (700 weight)
- **Size**: 72px
- **Color**: #000000 (Pure Black) or #FFFFFF (Inverse)
- **Letter Spacing**: -1.5px (tight, modern feel)
- **Positioning**: Left-aligned, baseline at y=75

### Element 2: "BOX" with Square
- **Font**: Inter Bold (700 weight)
- **Size**: 32px (smaller than "Law" for visual hierarchy)
- **Color**: Matches "Law" text
- **Letter Spacing**: -0.5px
- **Positioning**: Center-aligned within square

### Element 3: Elegant Square Border
- **Stroke Width**: 2px
- **Corner Radius**: 2px (subtle rounding)
- **Dimensions**: 88px × 88px
- **Color**: Matches text color
- **Fill**: None (transparent interior)
- **Purpose**: Emphasizes the "box" concept, creates premium enclosed look

## Design Rationale

### Why This Works

1. **Contrast in Scale**
   - "Law" is large and bold (72px)
   - "BOX" is enclosed and smaller (32px)
   - Creates visual interest and hierarchy

2. **Geometric Precision**
   - Perfect square around BOX
   - Consistent spacing and alignment
   - Clean, minimalist aesthetic

3. **Negative Space**
   - The square creates breathing room
   - Emphasizes the concept of "containment"
   - Metaphor: Legal services "boxed up" and delivered

4. **Premium Feel**
   - Thin, elegant stroke (2px)
   - Inter font (Apple SF Pro aesthetic)
   - Pure black color (luxury, authority)

## Typography Details

### Inter Font Characteristics
Inter was chosen to mirror Apple's SF Pro because it offers:
- ✓ Geometric precision
- ✓ Excellent legibility at all sizes
- ✓ Modern, timeless appearance
- ✓ Professional yet approachable
- ✓ Free and open-source
- ✓ Optimized for digital screens

### Weight Selection
**Bold (700)** was chosen because:
- Commands attention
- Conveys authority and confidence
- Maintains legibility when scaled down
- Premium, professional appearance

## Color Philosophy

### Pure Black (#000000)
The choice of pure black is intentional:
- **Authority**: Legal profession demands gravitas
- **Timelessness**: Black never goes out of style
- **Minimalism**: Channels Apple, luxury brands
- **Focus**: No distractions, pure professionalism
- **Versatility**: Works on any light background

### Inverse White (#FFFFFF)
For dark backgrounds:
- Maintains brand consistency
- Same powerful presence
- Ensures accessibility (contrast)

## Spacing & Proportions

### Overall Dimensions
- **Width**: 300px (at default scale)
- **Height**: 105px (at default scale)
- **Aspect Ratio**: ~2.86:1

### Clear Space Rule
Minimum clear space = Height of letter "L" in "Law"
```
    ↕ (clear space)
┌───────────────────────┐
│     Law  [BOX]        │ ← (clear space)
└───────────────────────┘
    ↕ (clear space)
```

### Minimum Sizes
- **Digital**: 150px width minimum
  - Ensures "BOX" text remains legible
  - Square border remains visible at 2px
  
- **Print**: 1.25 inches width minimum
  - Maintains crisp reproduction
  - Text stays sharp and readable

## The Icon Version

For spaces where the full wordmark is too large:

```
┌─────────┐
│         │
│   BOX   │
│         │
└─────────┘
```

- Square format (100×100)
- Just the BOX element
- Perfect for:
  - Favicons (16×16, 32×32, 64×64)
  - App icons
  - Social media avatars
  - Small UI elements

## Comparison to Tech Giants

The design language intentionally references:

### Apple
- Inter font (SF Pro aesthetic)
- Pure black (#000000)
- Minimalist approach
- Geometric precision

### Google
- Clean, modern sans-serif
- Emphasis on legibility
- Simple, memorable mark

### Stripe
- Bold typography
- Technical precision
- Professional minimalism

## Incorrect Usage Examples

### ❌ Don't Do This:

1. **Wrong Colors**
   ```
   Law [BOX]  ← Using random colors (#FF0000)
   ```

2. **Distorted Proportions**
   ```
   L a w [BOX]  ← Stretched horizontally
   ```

3. **Effects Applied**
   ```
   Law [BOX]  ← Shadow/glow effects
   ```

4. **Rotated**
   ```
        Law
      [BOX]  ← Tilted at angle
   ```

5. **Too Small**
   ```
   Law[BOX]  ← Less than 150px width
   ```

6. **Cluttered Background**
   ```
   [Complex pattern]
   Law [BOX]  ← Logo on busy background
   ```

## File Formats Provided

### SVG (Recommended)
- **LawBOX-Logo.svg** - Primary (black)
- **LawBOX-Logo-Inverse.svg** - Inverse (white)
- **LawBOX-Icon.svg** - Icon (black)
- **LawBOX-Icon-Inverse.svg** - Icon (white)

**Advantages:**
- Infinite scalability
- Small file size
- Perfect for web
- Crisp at any resolution

### React Component
- **Logo.jsx** - Dynamic, configurable
- **LogoIcon** export - Simplified version

**Advantages:**
- Programmatic control
- Responsive sizing
- Easy variant switching
- Integrated with codebase

## Technical Specifications

### SVG ViewBox
- Primary Logo: `viewBox="0 0 300 105"`
- Icon: `viewBox="0 0 100 100"`

### Stroke Properties
- Width: 2px (logo), 3px (icon - thicker for smaller size)
- Corner radius: 2-3px
- Line cap: Default
- Line join: Miter

### Text Anchoring
- "Law": Left-aligned (x=0)
- "BOX": Center-aligned (text-anchor="middle")

## Accessibility Notes

### Color Contrast
- Black on white: 21:1 (Exceeds WCAG AAA)
- White on black: 21:1 (Exceeds WCAG AAA)

### Alt Text
- Logo: "LawBOX"
- Full context: "LawBOX - AI-powered operations platform for personal injury firms"

### Screen Readers
- SVG includes proper role="img" attribute
- aria-label provided

## Print Specifications

When preparing for print:

1. **Color Mode**: CMYK
   - Black: C=0, M=0, Y=0, K=100
   - White: C=0, M=0, Y=0, K=0

2. **Resolution**: 300 DPI minimum

3. **Size**: Never smaller than 1.25 inches width

4. **Format**: Vector (PDF, EPS, or SVG)

5. **Bleed**: Add 0.125" bleed if logo extends to edge

## Digital Implementation Checklist

- [x] React component created
- [x] SVG files generated
- [x] Brand colors documented
- [x] Inter font loaded
- [x] Minimum sizes enforced
- [x] Responsive behavior tested
- [x] Accessibility attributes added
- [x] Clear space guidelines documented
- [x] Usage examples provided
- [x] Documentation complete

---

**Design Version**: 1.0  
**Last Updated**: February 2026  
**Designer Reference**: Official LawBOX Brand Guidelines
