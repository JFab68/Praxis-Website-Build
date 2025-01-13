# Blog Post Styling Guide

This guide explains how to properly style blog content using Tailwind's prose classes while maintaining design consistency.

## Prose Class Usage

### What Prose Handles Automatically
- Headings (h1-h6) styling
- Paragraph spacing and line height
- Link colors and hover states
- Blockquote styling
- List styling (ordered/unordered)
- Code blocks
- Text colors for body content
- Max width constraints

### Safe Customizations
```html
<!-- Grid layouts -->
<div class="grid md:grid-cols-2 gap-8">
  <!-- Content -->
</div>

<!-- Custom content blocks -->
<div class="bg-primary-50 p-6 rounded-lg">
  <!-- Content -->
</div>

<!-- Images with captions -->
<div class="relative my-8">
  <img src="image.jpg" class="rounded-lg shadow-lg w-full">
  <p class="text-sm text-gray-600 mt-2">Caption text</p>
</div>

<!-- Call-to-action blocks -->
<div class="bg-primary-500 text-cta-DEFAULT p-8 rounded-lg text-center">
  <!-- CTA content -->
</div>
```

### Best Practices

1. Always wrap main content in prose container:
```html
<div class="prose prose-lg max-w-none">
  <!-- Blog content -->
</div>
```

2. Use prose modifiers for images:
```html
<img class="prose-img:rounded-lg prose-img:shadow-lg" src="image.jpg">
```

3. For special formatting:
- Use `<strong>` for bold text
- Use `<em>` for italic text
- Use `<code>` for inline code

4. Maintain proper spacing:
- Use `mt-12` for section spacing
- Use `mb-6` for heading spacing
- Use `my-8` for vertical spacing

5. Example structure:
```html
<div class="max-w-4xl mx-auto px-4">
  <h1 class="text-4xl font-bold mb-8 text-center">Title</h1>
  
  <div class="prose prose-lg max-w-none">
    <!-- Main content -->
  </div>

  <div class="grid md:grid-cols-2 gap-8 my-12">
    <!-- Custom grid content -->
  </div>
</div>
```

### Common Mistakes to Avoid
- Overriding prose heading styles
- Adding custom margins to paragraphs
- Changing link colors within prose
- Using custom text colors in body content
- Adding custom padding to blockquotes
- Removing max-width constraints

### Recommended Tailwind Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151', // gray-700
            a: {
              color: '#3b82f6', // blue-500
              '&:hover': {
                color: '#2563eb', // blue-600
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

Following these guidelines will ensure consistent styling across all blog posts while allowing for creative layouts.
