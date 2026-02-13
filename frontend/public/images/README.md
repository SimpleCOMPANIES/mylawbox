# LawBOX Logo Assets

This directory contains the official LawBOX logo files in various formats, following the official brand guidelines.

## Files

### Primary Wordmark
- **LawBOX-Logo.svg** - Primary wordmark in pure black (#000000)
  - Use on light backgrounds
  - Scalable vector format
  - Recommended for web and digital use

- **LawBOX-Logo-Inverse.svg** - Inverse wordmark in white (#FFFFFF)
  - Use on dark backgrounds
  - Scalable vector format
  - Recommended for web and digital use

### Simplified Icon
- **LawBOX-Icon.svg** - Simplified icon (BOX in square) in pure black
  - Perfect for favicons, app icons, social media avatars
  - Compact square format (100x100)
  - Use on light backgrounds

- **LawBOX-Icon-Inverse.svg** - Simplified icon in white
  - Use on dark backgrounds
  - Perfect for favicons, app icons, social media avatars
  - Compact square format (100x100)

## Usage Guidelines

### Minimum Sizes
- **Digital**: Never display smaller than 150px width
- **Print**: Never reproduce smaller than 1.25 inches width

### Clear Space
Maintain a clear space around the wordmark equal to the height of the letter "L" in the wordmark.

### DO:
✓ Use these official SVG files
✓ Maintain proportions
✓ Use inverse version on dark backgrounds
✓ Ensure adequate clear space
✓ Use on solid, non-competing backgrounds

### DON'T:
✗ Modify the logo design or proportions
✗ Add effects (shadows, glows, etc.)
✗ Rotate or tilt the logo
✗ Change colors (use provided versions only)
✗ Display smaller than minimum sizes
✗ Place on cluttered backgrounds

## Color Specifications

### Primary Color
- **Pure Black**: #000000 (RGB: 0, 0, 0 | CMYK: 0, 0, 0, 100)

### Inverse Color
- **White**: #FFFFFF (RGB: 255, 255, 255 | CMYK: 0, 0, 0, 0)

## Typography
- **Font Family**: Inter
- **Primary Weight**: Bold (700)
- **Secondary Weight**: Bold (700) for BOX text

## Integration

### React Component
For React applications, use the Logo component instead of directly referencing these SVG files:

```jsx
import Logo from '../components/Logo';

// Default (black)
<Logo size="medium" />

// Inverse (white)
<Logo variant="inverse" size="large" />
```

### Direct SVG Usage
If you need to use the SVG files directly (e.g., in HTML emails, print materials):

```html
<!-- For light backgrounds -->
<img src="/images/LawBOX-Logo.svg" alt="LawBOX" width="240" />

<!-- For dark backgrounds -->
<img src="/images/LawBOX-Logo-Inverse.svg" alt="LawBOX" width="240" />
```

## Need Help?
For questions about logo usage or to request additional formats, refer to:
- Official LawBOX Brand Guidelines
- LOGO_IMPLEMENTATION.md in the frontend directory
- Contact the brand team

---

**Last Updated**: February 2026
**Version**: 1.0
