# Scoopster Blog Post Template Guide

## Overview
This template provides a consistent, professional format for all Scoopster blog posts with optimized formatting, SEO, and visual elements.

## File Structure
**Template Location:** `/blog-post-template.html`

**New Post Structure:**
```
/blog/
└── [slug-of-post]/
    └── index.html
```

---

## Design Elements

### 1. Post Header
```html
<header class="post-header">
    <h1>[MAIN ARTICLE TITLE]</h1>
    <p class="post-meta" style="...">
        <span>📅 [Month Day, Year]</span>
        <span>✍️ By Scoopster</span>
        <span style="margin: 0 1rem;">•</span>
        <span>🏷️ [Category]</span>
    </p>
</header>
```

**Features:**
- Clean H1 title
- Post metadata with date, author, and category
- Emoji icons for visual interest

### 2. Hero Image Section
```html
<div class="post-featured-image" style="background: linear-gradient(...); height: 350px; ...">
    <div style="text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">[EMOJI ICONS]</div>
        <p style="font-size: 1.25rem; font-weight: 600;">[Hero Tagline]</p>
    </div>
</div>
```

**Purpose:**
- Visual focal point
- Sets tone with emojis and tagline
- Green gradient matches brand

**Examples:**
- `💧🌊🐕` - Water/environment posts
- `📋⚖️🐕` - Legal/bylaw posts
- `🏞️🐕` - Park/outdoor posts

### 3. Introduction Section
```html
<section class="post-intro" style="font-size: 1.1rem; line-height: 1.8; ...">
    <p>[Hook paragraph]</p>
    <p>[Setup paragraph]</p>
</section>
```

**Guidelines:**
- Slightly larger font (1.1rem)
- 1-2 paragraphs
- Hook reader and set expectations

---

## Content Formatting

### Section Structure
```html
<section class="content-section" style="margin: 0.75rem 0;">
    <h2 style="color: var(--primary-green); font-size: 1.75rem; margin-bottom: 1rem;">
        [Section Title]
    </h2>
    <p style="line-height: 1.8; margin-bottom: 1rem;">[Content]</p>
</section>
```

**Key Styles:**
- H2 headers in green (#2E7D32)
- Font size: 1.75rem
- Line height: 1.8 for readability
- Consistent spacing

---

## Callout Boxes

### 1. Info Box (Blue) - Key Facts
```html
<div style="background-color: #d1ecf1; border-left: 4px solid #0c5460; padding: 1.5rem; ...">
    <p style="margin: 0; font-weight: 600; color: #0c5460; font-size: 1.05rem;">
        💧 Key Fact
    </p>
    <p style="margin: 0.75rem 0 0 0; color: #0c5460; line-height: 1.7;">
        [Fact content]
    </p>
</div>
```

**Use for:**
- Important statistics
- Key takeaways
- Educational facts

### 2. Warning Box (Yellow) - Important Information
```html
<div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 1.5rem; ...">
    <p style="margin: 0; font-weight: 600; color: #856404; font-size: 1.05rem;">
        ⚠️ Important
    </p>
    <p style="margin: 0.75rem 0 0 0; color: #856404; line-height: 1.7;">
        [Warning content]
    </p>
</div>
```

**Use for:**
- Warnings
- Critical information
- Things to avoid

### 3. Pro Tip Box (Cream) - Helpful Tips
```html
<div style="background-color: var(--cream); padding: 1.5rem; border-radius: 8px; ...">
    <h3 style="margin-top: 0; color: var(--primary-green); font-size: 1.15rem;">
        💡 Pro Tip
    </h3>
    <p style="margin: 0; line-height: 1.7;">[Tip content]</p>
</div>
```

**Use for:**
- Helpful advice
- Pro tips
- Best practices

---

## List Formatting

### Checklist/Items Style
```html
<div style="margin: 1.5rem 0;">
    <div style="background-color: var(--white); padding: 1.5rem; border-left: 4px solid var(--primary-green); ...">
        <h4 style="margin-top: 0; color: var(--primary-green); font-size: 1.1rem;">
            ✅ [Item Title]
        </h4>
        <p style="margin: 0; line-height: 1.7;">[Description]</p>
    </div>
</div>
```

**Icon Options:**
- ✅ - Dos/recommended actions
- ❌ - Don'ts/misconceptions
- 🏢 - Business/commercial
- 🏞️ - Parks/outdoor
- 📋 - Lists/requirements

---

## CTA Box

```html
<aside class="blog-cta-box" style="background: linear-gradient(135deg, #2d5f3f, var(--primary-green)); ...">
    <h3 style="color: white; margin-top: 0; font-size: 1.75rem; margin-bottom: 1rem;">
        [CTA Headline]
    </h3>
    <p style="color: white; font-size: 1.1rem; line-height: 1.7; max-width: 600px; margin: 0 auto 1.5rem auto;">
        [Description with <a href="../../" style="color: var(--accent-yellow); ...">internal link</a>]
    </p>
    <div style="margin-top: 1.5rem;">
        <a href="../../contact/" class="btn" style="background-color: var(--accent-yellow); ...">
            Get Your Free Quote
        </a>
    </div>
</aside>
```

**Placement:**
- Mid-article (after 2-3 sections)
- End of article

**Features:**
- Dark green gradient background
- Yellow button (stands out)
- Internal links in yellow
- Centered, prominent

---

## SEO Checklist

### Required Meta Tags
- ✅ Title tag (≤60 characters)
- ✅ Meta description (150-160 characters)
- ✅ Meta keywords
- ✅ Canonical URL
- ✅ Open Graph tags

### Schema Markup
- ✅ BreadcrumbList schema
- ✅ BlogPosting schema (Article schema)
- ✅ datePublished and dateModified

### Internal Linking
- ✅ At least 1 internal link to homepage or service page
- ✅ Use descriptive anchor text
- ✅ Link to related blog posts (if applicable)

---

## Content Guidelines

### Typography
- **H1:** Main title only (once per page)
- **H2:** Section headers (green, 1.75rem)
- **H3:** Subsections in callout boxes (1.15rem)
- **H4:** List item headers (1.1rem)
- **Body:** 1rem, line-height 1.8

### Spacing
- Sections: 0.75rem vertical margin
- HR divider: 2rem vertical margin
- Paragraphs: 1rem bottom margin
- Callout boxes: 1.5rem vertical margin
- CTA box: 2rem vertical margin

### Color Palette
- **Primary Green:** var(--primary-green) / #2E7D32
- **Accent Yellow:** var(--accent-yellow) / #7ED957
- **Navy:** var(--navy) / #0B2A3C
- **Cream:** var(--cream)
- **White:** var(--white)

---

## Creating a New Blog Post

### Step 1: Copy Template
```bash
cp blog-post-template.html blog/[new-slug]/index.html
```

### Step 2: Replace Placeholders
Search and replace these tags:
- `[SLUG]` - URL slug
- `[SEO TITLE]` - Page title
- `[H1 TITLE]` - Main heading
- `[META DESCRIPTION]` - Meta description
- `[KEYWORDS]` - SEO keywords
- `[YYYY-MM-DD]` - Publication date
- `[Month Day, Year]` - Display date
- `[Category]` - Post category
- `[EMOJI ICONS]` - Hero emojis
- `[Hero Tagline]` - Hero text

### Step 3: Add Content
- Write introduction
- Add sections with H2 headers
- Include callout boxes strategically
- Add CTA box mid or end of article

### Step 4: Add to Blog Index
Update `/blog/index.html` with new post card:
```html
<a href="./[slug]/" class="service-card blog-card">
    <div class="blog-card-image" style="...">
        <div style="font-size: 3rem;">[EMOJIS]</div>
    </div>
    <div class="blog-meta">
        <span>📅 [Date]</span>
    </div>
    <h3>[Title]</h3>
    <p>[Excerpt]</p>
    <div style="...">Read More →</div>
</a>
```

### Step 5: Update Sitemap
Add to `sitemap.xml`:
```xml
<url>
    <loc>https://scoopster.ca/blog/[slug]/</loc>
    <lastmod>[YYYY-MM-DD]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
</url>
```

---

## Best Practices

### Content
✅ Use short paragraphs (2-4 sentences)
✅ Include 3-5 sections minimum
✅ Add visual variety with callout boxes
✅ Use bullet points or lists where appropriate
✅ Include at least 1 internal link
✅ End with actionable takeaway

### SEO
✅ Include target keyword in H1
✅ Use keyword variations in H2s
✅ Add alt text to images (if using real images)
✅ Keep URL slug short and descriptive
✅ Write compelling meta description

### Visual
✅ Use emojis consistently
✅ Choose appropriate callout box colors
✅ Maintain consistent spacing
✅ Break up long text blocks
✅ Use green for all H2 headers

---

## Example Posts

**Well-Formatted Posts:**
- `/blog/hidden-dangers-dog-waste-hamilton-watershed-lake-ontario/`
- `/blog/hamilton-dog-poop-bylaws/`

**Study these for:**
- Callout box usage
- Section structure
- CTA placement
- Overall flow

---

## Questions?

Reference the template file and existing posts for examples. Keep formatting consistent across all blog posts for professional appearance and better user experience.
