/**
 * LawBOX Brand Colors
 * Based on official brand guidelines
 * 
 * Our color palette is intentionally minimalist to convey 
 * sophistication and focus. Pure black is the primary color, 
 * creating a powerful and timeless look.
 */

export const brandColors = {
  // Primary Color
  primary: {
    black: '#000000', // Pure Black - Primary brand color
  },

  // Secondary Palette (Neutrals)
  neutral: {
    dark: '#333333',       // Gray 1 - Dark backgrounds and borders
    medium: '#888888',     // Gray 2 - Supporting text
    light: '#CCCCCC',      // Gray 3 - Dividers and subtle elements
    background: '#F5F5F7', // Gray 4 - Page backgrounds
  },

  // Semantic Colors (for UI states)
  semantic: {
    white: '#FFFFFF',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  }
};

/**
 * Typography Scale
 * Based on brand guidelines using Inter font family
 */
export const typography = {
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  scale: {
    h1: {
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '1.3',
    },
    body: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.5',
    },
    caption: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '1.4',
    },
  },
};

/**
 * Logo Specifications
 */
export const logoSpecs = {
  minSize: {
    print: '1.25in', // Minimum width for print
    digital: '150px', // Minimum width for digital
  },
  clearSpace: 'Equal to height of letter "L" in wordmark',
};

export default brandColors;
