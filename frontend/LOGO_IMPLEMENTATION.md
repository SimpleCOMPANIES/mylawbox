# LawBOX Logo Implementation Guide

## Overview
This document explains how the LawBOX logo has been implemented in the React application, following the official brand guidelines.

## Logo Components

### 1. Primary Logo Component
**Location:** `src/components/Logo.jsx`

The primary `<Logo />` component features:
- "Law" followed by "BOX" enclosed in a thin, elegant square
- SVG-based for perfect scalability
- Pure black (#000000) as default color
- Inter font family for clean, modern typography

#### Usage:
```jsx
import Logo from './components/Logo';

// Default usage (black, medium size)
<Logo />

// Inverse variant (white, for dark backgrounds)
<Logo variant="inverse" />

// Custom size
<Logo size="large" />

// With custom className
<Logo className="my-custom-class" />
```

#### Props:
- `className` (string): Additional CSS classes
- `color` (string): Custom color (default: #000000)
- `size` (string): 'small' | 'medium' | 'large' | 'xlarge'
- `variant` (string): 'default' | 'inverse'

#### Size Reference:
- **small**: 120px width (minimum digital size per guidelines)
- **medium**: 180px width (default)
- **large**: 240px width
- **xlarge**: 300px width

### 2. Logo Icon Component
**Location:** `src/components/Logo.jsx`

The `<LogoIcon />` component is a simplified version showing just the BOX in a square:
- Perfect for favicons, app icons, or compact spaces
- Maintains the same design language
- Fully customizable size

#### Usage:
```jsx
import { LogoIcon } from './components/Logo';

// Default usage
<LogoIcon size={48} />

// Inverse variant
<LogoIcon size={64} variant="inverse" />
```

## Brand Colors

**Location:** `src/brandConfig.js`

All brand colors are centralized in the brandConfig file:

```javascript
import { brandColors } from './brandConfig';

// Primary black
const primaryColor = brandColors.primary.black; // #000000

// Neutral grays
const darkGray = brandColors.neutral.dark;       // #333333
const mediumGray = brandColors.neutral.medium;   // #888888
const lightGray = brandColors.neutral.light;     // #CCCCCC
const bgGray = brandColors.neutral.background;   // #F5F5F7
```

## Typography

The Inter font family is loaded via Google Fonts and set as the primary typeface:

```javascript
import { typography } from './brandConfig';

// Apply heading styles
const h1Style = {
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.scale.h1.fontSize,
  fontWeight: typography.scale.h1.fontWeight,
};
```

### Available Weights:
- Regular (400) - Body text
- Medium (500) - Captions/Labels
- Semi-Bold (600) - Subheadings
- Bold (700) - Headings

## Implementation in Application

### Navigation Header
The logo is implemented in the navigation header with the inverse variant (white) for visibility on dark backgrounds:

```jsx
<Logo variant="inverse" size="medium" className="h-10 md:h-12 w-auto" />
```

## Best Practices

### DO:
✅ Use the Logo component for all logo instances
✅ Maintain minimum sizes (150px digital, 1.25in print)
✅ Use the inverse variant on dark backgrounds
✅ Preserve clear space around the logo
✅ Use brand colors from brandConfig.js

### DON'T:
❌ Modify the logo's proportions or design
❌ Add effects (shadows, glows, etc.)
❌ Rotate or tilt the logo
❌ Change the font family
❌ Use colors outside the brand palette
❌ Display logo smaller than minimum sizes

## Files Structure

```
frontend/src/
├── components/
│   └── Logo.jsx          # Logo and LogoIcon components
├── brandConfig.js         # Brand colors and typography
├── index.css             # Inter font import
└── Home.jsx              # Logo implementation example
```

## Future Enhancements

Potential additions for comprehensive brand implementation:

1. **Logo Variants:**
   - Horizontal lockup version
   - Stacked version for narrow spaces
   - Monochrome versions

2. **Additional Assets:**
   - Favicon using LogoIcon
   - Social media preview images
   - Email signature logo

3. **Component Library:**
   - Branded buttons using brand colors
   - Branded cards
   - Branded form elements

## Support

For questions about logo usage or brand guidelines, refer to:
- Official Brand Guidelines document
- brandConfig.js for color and typography reference
- Logo.jsx component source for technical implementation
