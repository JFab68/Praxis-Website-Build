# Praxis Initiative Style Guide

## Colors

### Primary Colors
- Navy Blue: `#000080` - Primary brand color, used for buttons and important UI elements
- Maroon: `#800000` - Used for CTAs and accent elements
- Teal: `#0097A7` - Used for hover states and secondary accents
- New Blue: `#0066CC` - Used for "Learn More" buttons and interactive elements

### Secondary Colors
- Beige: `#F5F5DC` - Used for backgrounds and cards
- Gold: `#FFD700` - Used sparingly for highlights
- Sage: `#BCE3C5` - Used for success states and environmental themes
- Copper: `#B87333` - Used for decorative elements

### Text Colors
- Primary Text: `#000000`
- Secondary Text: `#333333`
- Light Text: `#999999`
- White Text: `#FFFFFF` - Used on dark backgrounds

## Typography

### Fonts
- Headings: Merriweather (serif)
- Body: Open Sans (sans-serif)

### Font Sizes
- h1: 48px
- h2: 36px
- h3: 28px
- Body: 16px
- Small: 14px

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing

### Container
- Max Width: 1400px
- Section Padding: 80px
- Content Padding: 16px (mobile) / 24px (desktop)

### Margins
- Section Margins: 80px
- Component Margins: 24px
- Element Margins: 16px

## Components

### Buttons

#### Primary Button
```html
<button class="bg-navy text-white hover:bg-teal px-6 py-3 rounded-md transition-colors font-semibold">
  Button Text
</button>
```

#### Secondary Button
```html
<button class="border-2 border-maroon text-maroon hover:bg-beige px-6 py-3 rounded-md transition-colors font-semibold">
  Button Text
</button>
```

#### Learn More Button
```html
<button class="bg-new-blue text-white hover:bg-new-blue/90 px-6 py-3 rounded-md transition-colors font-semibold">
  Learn More
</button>
```

### Cards

#### Standard Card
```html
<div class="bg-white rounded-lg shadow-md p-6">
  Content
</div>
```

#### Feature Card
```html
<div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
  Content
</div>
```

## Layout

### Grid System
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns
- Gap: 32px (2rem)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Icons
- Use Lucide React icons
- Standard size: 24x24px
- Small size: 16x16px
- Large size: 32x32px

## Images
- Use Unsplash for stock photos
- Maintain 16:9 or 4:3 aspect ratios
- Use webp format when possible
- Always include alt text
- Max width: 100%
- Object-fit: cover

## Animations

### Transitions
```css
.transition-standard {
  transition: all 0.2s ease-in-out;
}

.transition-slow {
  transition: all 0.3s ease-in-out;
}
```

### Hover Effects
```css
.hover-transform {
  transform: translateY(-2px);
}

.hover-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Accessibility

### Focus States
```css
.focus-visible:focus {
  outline: 2px solid #000080;
  outline-offset: 2px;
}
```

### Text Contrast
- Minimum contrast ratio: 4.5:1
- Large text contrast ratio: 3:1

### Interactive Elements
- Minimum touch target size: 44x44px
- Clear focus indicators
- Keyboard navigation support

## Best Practices

### CSS
- Use Tailwind utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic HTML elements
- Keep specificity low

### Components
- Keep components small and focused
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent naming conventions
- Document complex components

### Accessibility
- Include ARIA labels
- Use semantic HTML
- Ensure keyboard navigation
- Maintain proper heading hierarchy
- Test with screen readers