# Praxis Website Site Map

## Core Structure
- **Pages**: Organized under `src/pages/`
- **Components**: Modular components under `src/components/`
- **Data**: Content managed through TypeScript files in `src/data/`
- **Services**: API integrations under `src/services/`

## Content Types

### 1. Blog Posts
- **Data Structure**: Defined in `src/data/blog-posts.ts`
- **Components**:
  - BlogList
  - BlogPost
  - BlogEditor
  - BlogRenderer
- **Pages**:
  - BlogPage
  - BlogPostPage

### 2. Call-to-Action Sections
- **Data Structure**: Defined in `src/data/cta-sections.ts`
- **Components**:
  - CTASection
  - Button
  - Typography
- **Used Across**:
  - HomePage
  - AboutPage
  - ProgramsPage
  - ActionCenterPage

### 3. Programs
- **Components**:
  - ProgramCard
  - ProgramHero
  - ProgramsList
  - ProgramsCTA
- **Pages**:
  - ProgramsPage
  - DoulaProgramPage
  - LegalSystemReformPage
  - PrisonOversightPage
  - SubstanceUsePage

### 4. Resources
- **Components**:
  - ResourceLibrary
- **Pages**:
  - ResourcesPage

### 5. Team Members
- **Components**:
  - TeamSection
- **Pages**:
  - AboutPage

### 6. Events
- **Components**:
  - EventCalendar
- **Pages**:
  - EventsPage

## Key Features

### Navigation
- Header
- Footer
- SitemapPage

### Forms
- NewsletterSignup
- AutoSuggestInput
- FormMessage
- ProgressBar

### UI Components
- Accordion
- Button
- Card
- Section
- Typography

## Content Management Patterns

1. **Data-Driven Components**:
   - Content defined in TypeScript files
   - Components consume data through props
   - Example: Blog posts, CTA sections

2. **Modular Design**:
   - Reusable components
   - Consistent styling with Tailwind CSS
   - Example: Button, Card, Section

3. **Page-Specific Variations**:
   - Custom components for unique pages
   - Shared components with page-specific data
   - Example: Program pages

## Technical Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build**: Vite
- **Deployment**: Netlify
