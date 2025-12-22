# Scoopster - Complete Website Build Document

## Project Overview

Build a complete, SEO-optimized website for Scoopster, a dog poop pickup service in Hamilton, Ontario. The homepage functions as the primary landing page targeting "dog poop pickup hamilton." The site should be clean, fast-loading, and conversion-focused.

---

## Tech Stack

- Static HTML/CSS (or Next.js/Astro if preferred)
- Mobile-first responsive design
- No frameworks unless necessary for functionality
- Vanilla JS only where needed

---

## Brand Colors

```
Navy (base/text/headers): #0B2A3C
Forest Green (primary brand/buttons): #2E7D32
Lime Accent (hover states/highlights): #7ED957
White (backgrounds): #FFFFFF
```

---

## Typography

- Primary Font: Inter (Google Fonts) or similar clean sans-serif
- Headings: 700 weight, Navy (#0B2A3C)
- Body: 400 weight, Navy or dark gray (#0B2A3C or #333)
- Font sizes (mobile / desktop):
  - H1: 32px / 48px
  - H2: 24px / 32px
  - H3: 20px / 24px
  - Body: 16px / 18px
  - Small: 14px

---

## Global Design System

### Buttons

**Primary Button:**
- Background: Forest Green (#2E7D32)
- Text: White
- Padding: 16px 32px
- Border-radius: 8px
- Hover: Lime (#7ED957) background, Navy text
- Transition: 0.2s ease

**Secondary Button:**
- Background: White
- Border: 2px solid Forest Green
- Text: Forest Green
- Padding: 14px 30px
- Border-radius: 8px
- Hover: Forest Green background, White text

**Ghost Button (for dark backgrounds):**
- Background: Transparent
- Border: 2px solid White
- Text: White
- Hover: White background, Navy text

### Cards

- Background: White
- Border-radius: 12px
- Box-shadow: 0 4px 6px rgba(11, 42, 60, 0.08)
- Padding: 24px (mobile) / 32px (desktop)
- Hover lift effect: transform: translateY(-4px), increased shadow

### Section Spacing

- Section padding: 60px 0 (mobile) / 100px 0 (desktop)
- Container max-width: 1200px
- Container padding: 20px (mobile) / 40px (desktop)

### Icons

- Use simple line icons or filled icons consistently
- Icon color: Forest Green or Navy
- Accent icons: Lime
- Consider: Lucide icons, Heroicons, or simple custom SVGs
- Dog/poop emoji (💩🐕) used sparingly for personality

---

## Site Structure

```
/index.html (Homepage - Landing Page)
/services/weekly-dog-poop-pickup/index.html
/services/bi-weekly-dog-poop-pickup/index.html
/services/one-time-yard-cleanup/index.html
/services/commercial-pet-waste-removal/index.html
/service-areas/index.html (hub page)
/service-areas/hamilton-mountain/index.html
/service-areas/stoney-creek/index.html
/service-areas/ancaster/index.html
/service-areas/dundas/index.html
/service-areas/waterdown/index.html
/pricing/index.html
/about/index.html
/contact/index.html
/blog/index.html
```

---

## File Structure

```
/project-root
├── index.html
├── /services
│   ├── weekly-dog-poop-pickup/index.html
│   ├── bi-weekly-dog-poop-pickup/index.html
│   ├── one-time-yard-cleanup/index.html
│   └── commercial-pet-waste-removal/index.html
├── /service-areas
│   ├── index.html
│   ├── hamilton-mountain/index.html
│   ├── stoney-creek/index.html
│   ├── ancaster/index.html
│   ├── dundas/index.html
│   └── waterdown/index.html
├── /pricing/index.html
├── /about/index.html
├── /contact/index.html
├── /blog/index.html
├── /css
│   └── styles.css
├── /js
│   └── main.js
├── /images
│   └── (placeholder folder)
├── sitemap.xml
└── robots.txt
```

---

## Global Components

### Header

**Structure:**
- Sticky on scroll with subtle shadow when scrolled
- Background: White
- Height: 70px (mobile) / 80px (desktop)

**Layout:**
- Logo (left): "Scoopster" text logo or logo with small icon
- Navigation (center/right):
  - Services (dropdown)
  - Service Areas (dropdown)
  - Pricing
  - About
  - Contact
- CTA button (far right): "Get a Quote" (Forest Green)

**Mobile:**
- Hamburger menu icon
- Full-screen overlay menu
- Logo centered or left

**Dropdowns:**
- Services dropdown: Weekly, Bi-Weekly, One-Time, Commercial
- Service Areas dropdown: Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, View All

**Design:**
```
┌─────────────────────────────────────────────────────────────┐
│  🐕 Scoopster    Services ▼  Areas ▼  Pricing  About  Contact  [Get a Quote] │
└─────────────────────────────────────────────────────────────┘
```

### Footer

**Structure:**
- Background: Navy (#0B2A3C)
- Text: White
- Padding: 60px 0 (content) + 20px 0 (copyright bar)

**Layout (4 columns on desktop, stacked on mobile):**

Column 1 - About:
- Scoopster logo (white version)
- 2-3 sentence description
- Phone: 289-698-4155
- Email: info@scoopster.ca

Column 2 - Services:
- Weekly Pickup
- Bi-Weekly Pickup
- One-Time Cleanup
- Commercial Services

Column 3 - Service Areas:
- Hamilton Mountain
- Stoney Creek
- Ancaster
- Dundas
- Waterdown
- View All Areas

Column 4 - Quick Links:
- Pricing
- About Us
- Contact
- Blog

**Copyright Bar:**
- Separator line (subtle, rgba white)
- "© 2024 Scoopster. All rights reserved."
- Optional: Privacy Policy | Terms of Service links

### Breadcrumbs

- Show on all inner pages
- Format: Home > Section > Page
- Text: Small, muted color
- Links: Underline on hover

---

## Technical Requirements

### SEO

- Unique title tags for each page (format: "Primary Keyword | Scoopster")
- Meta descriptions for each page (150-160 characters)
- Proper heading hierarchy (one H1 per page)
- Schema markup:
  - LocalBusiness schema on homepage
  - FAQ schema on homepage, pricing, and service pages
  - Service schema on service pages
- Alt text placeholders for all images
- Clean URL structure
- XML sitemap
- robots.txt
- Canonical URLs

### Performance

- Minimal CSS (single stylesheet)
- Lazy loading for images below fold
- No unnecessary JavaScript
- Optimized for Core Web Vitals
- Preload critical fonts

### Accessibility

- Proper heading structure
- Alt text on images
- Sufficient color contrast (test Navy on White, White on Green)
- Keyboard navigable
- Focus states on interactive elements
- Skip to content link

---

## Placeholder Content

- Logo: "Scoopster" text logo with poop scoop or dog icon
- Phone: 289-698-4155
- Email: info@scoopster.ca
- Website: scoopster.ca
- Address: Hamilton, ON (no specific street address)
- Prices: Weekly $25, Bi-Weekly $20/visit, One-Time from $75

---

# PAGE CONTENT & STRUCTURE

---

## HOMEPAGE (index.html)

**Title Tag:** Dog Poop Pickup in Hamilton | Scoopster

**Meta Description:** Hamilton's trusted dog poop pickup service. Weekly and bi-weekly yard cleaning starting at $25/week. No contracts, satisfaction guaranteed. Get a free quote.

---

### Section 1: Hero

**Layout:** Full-width, Navy background or subtle gradient/pattern. Centered text with CTAs.

**Design Notes:**
- Large, bold H1
- Subheadline in lighter weight
- Two buttons side by side (stack on mobile)
- Optional: subtle background illustration of yard/dog silhouette

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Dog Poop Pickup in Hamilton                    │
│                                                             │
│    Tired of dodging landmines in your own backyard?         │
│    Scoopster handles the dirty work so you can enjoy        │
│    your yard again.                                         │
│                                                             │
│         [Get a Free Quote]    [View Pricing]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H1: Dog Poop Pickup in Hamilton

Subheadline: Tired of dodging landmines in your own backyard? Scoopster handles the dirty work so you can enjoy your yard again.

Primary CTA: Get a Free Quote
Secondary CTA: View Pricing

---

### Section 2: Trust Bar

**Layout:** Horizontal bar, White or light gray background. 3-4 trust indicators with icons.

**Design Notes:**
- Simple icons (checkmark, calendar, heart, shield)
- Lime accent on icons
- Centered, evenly spaced
- Subtle top/bottom border or shadow

```
┌─────────────────────────────────────────────────────────────┐
│   ✓ Serving Hamilton      ★ 500+ Happy       ✓ 100%        │
│     Since 2020              Customers          Guaranteed   │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Serving Hamilton Since 2020
- 500+ Happy Customers
- 100% Satisfaction Guaranteed

---

### Section 3: How It Works

**Layout:** 3 columns with numbered steps. White background.

**Design Notes:**
- Large Forest Green circles with white numbers (1, 2, 3)
- Icon or small illustration below each number
- Short headline + brief description
- Subtle connecting line or arrow between steps (optional)

```
┌─────────────────────────────────────────────────────────────┐
│                    How It Works                             │
│                                                             │
│     ①                    ②                    ③            │
│   Book Your            We Clean             Enjoy Your      │
│   Service              Your Yard            Clean Yard      │
│                                                             │
│   Pick your plan       Same day, every      Fresh, clean,   │
│   and schedule         week. We scoop,      poop-free.      │
│   online or by         bag, and haul        That's it.      │
│   phone.               it all away.                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H2: How It Works

Step 1: Book Your Service
Pick your plan and schedule online or by phone. Takes 2 minutes.

Step 2: We Clean Your Yard
Same day, every week. We scoop, bag, and haul it all away.

Step 3: Enjoy Your Clean Yard
Fresh, clean, poop-free. That's it. No more stepping in surprises.

---

### Section 4: Services Overview

**Layout:** 4 cards in a grid (2x2 on tablet, 4 across on desktop, stacked on mobile)

**Design Notes:**
- Each card has icon, title, brief description, "Learn More" link
- Cards have hover lift effect
- Forest Green icon, Navy text
- Arrow or chevron on "Learn More"

```
┌──────────────────┐  ┌──────────────────┐
│   📅 Weekly      │  │   📆 Bi-Weekly   │
│                  │  │                  │
│   Most popular.  │  │   Budget-        │
│   From $25/week  │  │   friendly.      │
│                  │  │   From $20/visit │
│   Learn More →   │  │   Learn More →   │
└──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐
│   🧹 One-Time    │  │   🏢 Commercial  │
│                  │  │                  │
│   Spring clean   │  │   Apartments,    │
│   or catch-up.   │  │   HOAs, condos.  │
│   From $75       │  │   Custom quote   │
│   Learn More →   │  │   Learn More →   │
└──────────────────┘  └──────────────────┘
```

**Content:**

H2: Our Services

**Card 1: Weekly Pickup**
Icon: Calendar
Our most popular service. We visit the same day every week to keep your yard consistently clean.
Starting at $25/week
Link: Learn More →

**Card 2: Bi-Weekly Pickup**
Icon: Calendar with bi-weekly indicator
Every other week service. Great for single-dog homes and larger yards.
Starting at $20/visit
Link: Learn More →

**Card 3: One-Time Cleanup**
Icon: Sparkle/broom
Catch up on weeks or months of buildup. Perfect for spring cleaning or before starting regular service.
Starting at $75
Link: Learn More →

**Card 4: Commercial Services**
Icon: Building
Reliable pet waste removal for apartment complexes, condos, HOAs, and dog daycares.
Custom pricing
Link: Learn More →

---

### Section 5: Service Areas

**Layout:** Map graphic on one side, list of areas on other (or stacked on mobile)

**Design Notes:**
- Simple illustrated map or actual map placeholder
- Area names as clickable links
- Light background (off-white or very light gray)

```
┌─────────────────────────────────────────────────────────────┐
│                  Areas We Service                           │
│                                                             │
│   ┌─────────────┐    • Hamilton Mountain                    │
│   │             │    • Stoney Creek                         │
│   │   [MAP]     │    • Ancaster                             │
│   │             │    • Dundas                               │
│   └─────────────┘    • Waterdown                            │
│                      • And more...                          │
│                                                             │
│                   [View All Service Areas]                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H2: Areas We Service

Scoopster proudly serves dog owners across Hamilton and surrounding communities.

- Hamilton Mountain
- Stoney Creek
- Ancaster
- Dundas
- Waterdown
- Binbrook
- Winona

CTA: View All Service Areas →

---

### Section 6: Pricing Preview

**Layout:** Centered text with highlighted price, CTA button

**Design Notes:**
- Large, bold price callout
- Forest Green accent on price
- Brief supporting text
- Single CTA button

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                Plans Starting at                            │
│                   $25/week                                  │
│                                                             │
│   Pricing depends on yard size and number of dogs.          │
│   Most Hamilton homes fall between $25-$40/week.            │
│   No contracts. No hidden fees.                             │
│                                                             │
│                  [View Full Pricing]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H2: Simple, Transparent Pricing

Plans Starting at $25/week

Pricing depends on yard size and number of dogs. Most Hamilton homes fall between $25-$40/week for weekly service.

No contracts. No hidden fees. Cancel anytime.

CTA: View Full Pricing

---

### Section 7: Testimonials

**Layout:** 3 testimonial cards in a row (carousel on mobile)

**Design Notes:**
- White cards with subtle shadow
- Star rating (5 stars in Lime/Gold)
- Quote text in italics or with quotation marks
- Customer name and neighbourhood below

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  ★★★★★           │  │  ★★★★★           │  │  ★★★★★           │
│                  │  │                  │  │                  │
│  "Best decision  │  │  "So reliable.   │  │  "Yard has never │
│   we made. Yard  │  │   Same day,      │  │   looked better. │
│   is always      │  │   every week."   │  │   Wish I signed  │
│   perfect."      │  │                  │  │   up sooner."    │
│                  │  │                  │  │                  │
│  — Sarah M.      │  │  — Dave T.       │  │  — Rachel K.     │
│    Ancaster      │  │    The Mountain  │  │    Stoney Creek  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Content:**

H2: What Our Customers Say

**Testimonial 1:**
★★★★★
"Best decision we made for our yard. With two big dogs, it was a constant battle. Now it's always perfect when we get home."
— Sarah M., Ancaster

**Testimonial 2:**
★★★★★
"So reliable. Same day, every week, without fail. Even in winter. Can't recommend Scoopster enough."
— Dave T., Hamilton Mountain

**Testimonial 3:**
★★★★★
"Our yard has never looked better. I used to dread going outside. Now I actually enjoy it. Wish I'd signed up sooner."
— Rachel K., Stoney Creek

---

### Section 8: FAQ

**Layout:** Accordion-style FAQ. Centered, max-width container.

**Design Notes:**
- Clean accordion with + / - toggle icons
- Questions in bold/semibold
- Answers revealed on click
- Implement FAQ schema markup

```
┌─────────────────────────────────────────────────────────────┐
│                  Frequently Asked Questions                 │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ + How does dog poop pickup service work?              │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ + How much does it cost?                              │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ + Do I need to be home?                               │  │
│  └───────────────────────────────────────────────────────┘  │
│                         ...                                 │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H2: Frequently Asked Questions

**Q: How does dog poop pickup service work?**
A: It's simple. You pick a plan (weekly or bi-weekly), we assign you a regular service day, and we show up every scheduled visit to thoroughly clean your yard. All waste is bagged and removed from your property. You don't need to be home — just make sure we can access your yard.

**Q: How much does dog poop pickup cost in Hamilton?**
A: Weekly service starts at $25/week and bi-weekly starts at $20/visit. Your exact price depends on yard size and number of dogs. Most residential customers pay between $25-$40/week. We'll give you an exact quote before starting.

**Q: What areas do you service?**
A: We serve Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, Binbrook, Winona, and surrounding areas. If you're not sure if we cover your neighbourhood, just ask.

**Q: What if I need to skip a week?**
A: No problem. Just let us know 24 hours in advance and we'll skip your visit. No fees, no hassle. You can also pause service anytime for vacations or seasonal breaks.

**Q: Do I need to be home during service?**
A: Nope. As long as we can access your yard (unlocked gate, side access, etc.), we'll take care of everything. We send confirmation after each visit so you know we came.

**Q: What happens in winter?**
A: We scoop year-round, including through Hamilton winters. Snow and cold don't stop us. In fact, frozen poop is easier to pick up. Your yard stays clean no matter the season.

---

### Section 9: Final CTA

**Layout:** Full-width section with Forest Green background. Centered text and CTAs.

**Design Notes:**
- White text on Forest Green
- Large headline
- Phone number prominent
- Two buttons (white ghost button style)

```
┌─────────────────────────────────────────────────────────────┐
│                                                  [GREEN BG] │
│              Ready for a Cleaner Yard?                      │
│                                                             │
│   Stop spending your weekends on poop patrol.               │
│   Scoopster handles the dirty work.                         │
│                                                             │
│        [Get Your Free Quote]    [Call 289-698-4155]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

H2: Ready for a Cleaner Yard?

Stop spending your weekends on poop patrol. Scoopster handles the dirty work so you can actually enjoy your outdoor space.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

### Homepage Schema Markup

Include LocalBusiness schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Scoopster",
  "description": "Professional dog poop pickup service in Hamilton, Ontario",
  "url": "https://scoopster.ca",
  "telephone": "289-698-4155",
  "email": "info@scoopster.ca",
  "areaServed": {
    "@type": "City",
    "name": "Hamilton",
    "containedIn": "Ontario"
  },
  "priceRange": "$$"
}
```

Include FAQ schema for all FAQ questions.

---

---

## SERVICE PAGES

All service pages follow a consistent template structure with unique content.

### Service Page Template Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Breadcrumb: Home > Services > [Service Name]                │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                │
│ - H1                                                        │
│ - Intro paragraph (2-3 sentences)                           │
│ - Two CTA buttons                                           │
├─────────────────────────────────────────────────────────────┤
│ WHAT'S INCLUDED                                             │
│ - H2                                                        │
│ - Icon list or checkmark list (6 items)                     │
├─────────────────────────────────────────────────────────────┤
│ WHO IT'S FOR                                                │
│ - H2                                                        │
│ - 4 icon cards or bullet points                             │
├─────────────────────────────────────────────────────────────┤
│ HOW IT WORKS                                                │
│ - H2                                                        │
│ - 3 steps (abbreviated version)                             │
├─────────────────────────────────────────────────────────────┤
│ PRICING SNAPSHOT                                            │
│ - H2                                                        │
│ - Starting price highlighted                                │
│ - Brief context                                             │
│ - CTA to pricing page                                       │
├─────────────────────────────────────────────────────────────┤
│ SERVICE AREAS                                               │
│ - H2                                                        │
│ - List of areas                                             │
│ - Link to service areas hub                                 │
├─────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                 │
│ - H2                                                        │
│ - 4 service-specific Q&As                                   │
├─────────────────────────────────────────────────────────────┤
│ FINAL CTA                                                   │
│ - H2                                                        │
│ - Short message                                             │
│ - Two CTA buttons                                           │
├─────────────────────────────────────────────────────────────┤
│ RELATED SERVICES                                            │
│ - H2                                                        │
│ - 3 links to other services                                 │
└─────────────────────────────────────────────────────────────┘
```

---

### /services/weekly-dog-poop-pickup/

**Title Tag:** Weekly Dog Poop Pickup in Hamilton | Scoopster

**Meta Description:** Hamilton's most popular dog poop pickup plan. Weekly yard cleaning starting at $25/week. No contracts, no hassle. Book your weekly service today.

**Breadcrumb:** Home > Services > Weekly Dog Poop Pickup

---

**HERO**

H1: Weekly Dog Poop Pickup in Hamilton

Come home to a clean yard every week without lifting a finger. Scoopster's weekly service is our most popular plan — we visit your property on the same day each week, scoop every pile, and haul it away. You get a fresh, poop-free yard and more time to actually enjoy it with your dog.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**WHAT'S INCLUDED**

H2: What's Included in Your Weekly Service

- Thorough yard sweep on your scheduled day
- All waste removed and disposed of properly
- Gate check and secure closure after each visit
- Service confirmation after every visit
- Flexible scheduling (skip weeks anytime, no penalty)
- Satisfaction guaranteed

---

**WHO IT'S FOR**

H2: Who Weekly Pickup is Perfect For

**Multi-dog households** — More dogs means more mess. Weekly keeps up with the volume.

**Busy families** — Kids, work, life. One less chore on the list.

**Smaller yards** — Waste builds up fast when space is limited.

**Dog owners who hate this job** — No judgment. That's literally why we exist.

---

**HOW IT WORKS**

H2: How It Works

1. **Pick Your Day** — Choose the weekly visit day that works for your schedule.

2. **We Show Up** — Same day, every week. Rain or shine (yes, even in Canadian winters).

3. **Yard Cleaned** — We scoop, bag, and remove every pile. You never touch a thing.

---

**PRICING SNAPSHOT**

H2: Weekly Pickup Pricing

Weekly service starts at **$25/week** for yards with one dog.

Pricing depends on yard size and number of dogs. Most Hamilton homes fall between $25–$40/week.

CTA: See Full Pricing

---

**SERVICE AREAS**

H2: We Offer Weekly Pickup Across Hamilton

Scoopster's weekly service is available in Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, Binbrook, Winona, and surrounding areas.

CTA: View All Service Areas

---

**FAQ SECTION**

H2: Frequently Asked Questions

**Q: What day will you come?**
A: You pick your preferred day during signup. We stick to that day every week so you always know when to expect us.

**Q: What if I need to skip a week?**
A: No problem. Just let us know 24 hours in advance. No fees, no hassle.

**Q: Do I need to be home?**
A: Nope. As long as we can access your yard, we'll take care of everything.

**Q: What happens in winter?**
A: We scoop year-round. Snow and cold don't stop us — in fact, frozen poop is easier to pick up.

---

**FINAL CTA**

H2: Ready for a Cleaner Yard Every Week?

Stop dreading the backyard. Scoopster handles the dirty work so you can enjoy your outdoor space again.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

**RELATED SERVICES**

H2: Other Services You Might Need

- Bi-Weekly Pickup — Budget-friendly option for smaller yards
- One-Time Cleanup — Catch up before starting regular service
- Commercial Services — Multi-unit properties and businesses

---

---

### /services/bi-weekly-dog-poop-pickup/

**Title Tag:** Bi-Weekly Dog Poop Pickup in Hamilton | Scoopster

**Meta Description:** Affordable every-other-week dog poop pickup in Hamilton. Great for single-dog homes and smaller yards. Starting at $20/visit. No contracts.

**Breadcrumb:** Home > Services > Bi-Weekly Dog Poop Pickup

---

**HERO**

H1: Bi-Weekly Dog Poop Pickup in Hamilton

Not every yard needs weekly service — and that's okay. Scoopster's bi-weekly plan gives you the same thorough cleanup on an every-other-week schedule. It's a budget-friendly way to keep your yard clean without overpaying for service you don't need.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**WHAT'S INCLUDED**

H2: What's Included in Your Bi-Weekly Service

- Complete yard sweep every other week
- All waste bagged and removed from your property
- Gate secured after every visit
- Visit confirmation so you know we came
- Flexible scheduling — skip or reschedule anytime
- Same great service, just less frequent

---

**WHO IT'S FOR**

H2: Who Bi-Weekly Pickup is Perfect For

**Single-dog homes** — One dog produces less waste. Bi-weekly keeps up just fine.

**Larger yards** — More space means waste is more spread out and less urgent.

**Budget-conscious dog owners** — Save money without giving up a clean yard.

**Snowbirds and travelers** — Great for part-time residents or frequent travelers.

---

**HOW IT WORKS**

H2: How It Works

1. **Pick Your Schedule** — Choose which weeks work for you (Week A or Week B).

2. **We Visit Every Other Week** — Same day, same thorough service.

3. **Enjoy the Savings** — Clean yard at a lower cost than weekly service.

---

**PRICING SNAPSHOT**

H2: Bi-Weekly Pickup Pricing

Bi-weekly service starts at **$20/visit** for yards with one dog.

You get the same quality service as weekly — just on an every-other-week schedule.

CTA: See Full Pricing

---

**SERVICE AREAS**

H2: Bi-Weekly Service Available Across Hamilton

We offer bi-weekly pickup in Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, and all surrounding communities.

CTA: View All Service Areas

---

**FAQ SECTION**

H2: Frequently Asked Questions

**Q: Is bi-weekly enough for my yard?**
A: For most single-dog homes with medium to large yards, bi-weekly works great. If you have multiple dogs or a small yard, weekly might be a better fit.

**Q: Can I switch to weekly later?**
A: Absolutely. Upgrade anytime — we'll just adjust your schedule.

**Q: What if my yard gets too messy between visits?**
A: Book a one-time cleanup anytime, or switch to weekly if it becomes a regular issue.

**Q: Do you still come in bad weather?**
A: Yes. Rain, snow, cold — we're out there. Hamilton weather doesn't stop Scoopster.

---

**FINAL CTA**

H2: Clean Yard, Lower Cost

Get the poop-free yard you want without paying for more service than you need.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

**RELATED SERVICES**

H2: Other Services You Might Need

- Weekly Pickup — For multi-dog homes or smaller yards
- One-Time Cleanup — Get caught up before starting bi-weekly
- Commercial Services — Properties with multiple units

---

---

### /services/one-time-yard-cleanup/

**Title Tag:** One-Time Dog Poop Cleanup in Hamilton | Scoopster

**Meta Description:** Need a yard rescue? Scoopster's one-time cleanup removes weeks or months of dog waste. Perfect for spring cleanup, moving, or getting back on track. Book today.

**Breadcrumb:** Home > Services > One-Time Yard Cleanup

---

**HERO**

H1: One-Time Dog Poop Cleanup in Hamilton

Life gets busy. Yards get neglected. We get it — and we're here to help. Scoopster's one-time cleanup service tackles the mess you've been avoiding. Whether it's months of buildup, a spring cleanup, or prep for a backyard party, we'll get your yard back to clean in a single visit.

CTA 1: Book Your Cleanup
CTA 2: View Pricing

---

**WHAT'S INCLUDED**

H2: What's Included in Your One-Time Cleanup

- Complete yard sweep — every corner, every pile
- All waste bagged and removed from your property
- No judgment, no matter how bad it is
- Same-week booking available (based on availability)
- One flat rate based on yard size and buildup level
- Option to start regular service after cleanup

---

**WHEN TO BOOK**

H2: When You Need a One-Time Cleanup

**Spring thaw** — Winter hides a lot. Spring reveals it all.

**Moving in or out** — Start fresh or leave the yard better than you found it.

**Before an event** — BBQ, birthday party, family visit. No one wants to dodge landmines.

**Catching up** — Fell behind? Happens to everyone. We'll reset your yard.

**Before starting regular service** — Get to a clean baseline, then keep it that way.

---

**HOW IT WORKS**

H2: How It Works

1. **Tell Us About Your Yard** — Size, number of dogs, how long since last cleanup.

2. **Get a Quote** — We'll give you a flat rate. No surprises.

3. **We Handle the Rest** — Show up, scoop everything, haul it away. Done.

---

**PRICING SNAPSHOT**

H2: One-Time Cleanup Pricing

One-time cleanups start at **$75** for standard yards with light to moderate buildup.

Larger yards or heavy buildup may be higher. We'll quote you upfront before we start.

CTA: See Full Pricing

---

**SERVICE AREAS**

H2: One-Time Cleanups Across Hamilton

We offer one-time cleanup service in Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, and surrounding areas.

CTA: View All Service Areas

---

**FAQ SECTION**

H2: Frequently Asked Questions

**Q: How bad is too bad?**
A: There's no such thing. We've seen it all. Months of buildup, multiple dogs, tiny yards packed with waste — we'll handle it.

**Q: How long does a cleanup take?**
A: Depends on the yard. Most residential cleanups take 30–60 minutes. We stay until it's done.

**Q: Can I book same-day service?**
A: Sometimes. Call us and we'll do our best to fit you in.

**Q: Do you offer a discount if I sign up for regular service after?**
A: Yes. Book ongoing weekly or bi-weekly service and we'll reduce your one-time cleanup rate.

---

**FINAL CTA**

H2: Let's Get Your Yard Back

No shame. No lectures. Just a clean yard by the time we leave.

CTA 1: Book Your Cleanup
CTA 2: Call 289-698-4155

---

**RELATED SERVICES**

H2: Keep It Clean After Your Cleanup

- Weekly Pickup — Never fall behind again
- Bi-Weekly Pickup — Affordable maintenance for smaller yards
- Commercial Services — For rental properties and multi-unit buildings

---

---

### /services/commercial-pet-waste-removal/

**Title Tag:** Commercial Pet Waste Removal in Hamilton | Scoopster

**Meta Description:** Professional pet waste removal for apartments, condos, HOAs, dog daycares, and property managers in Hamilton. Custom schedules and volume pricing. Get a quote.

**Breadcrumb:** Home > Services > Commercial Pet Waste Removal

---

**HERO**

H1: Commercial Pet Waste Removal in Hamilton

Dog waste on commercial properties is a liability — for tenant satisfaction, property value, and health. Scoopster provides reliable, scheduled pet waste removal for apartment complexes, condo communities, HOAs, dog daycares, and any property where dogs are welcome. We keep shared spaces clean so you don't have to chase down residents or deal with complaints.

CTA 1: Get a Custom Quote
CTA 2: Call 289-698-4155

---

**WHAT'S INCLUDED**

H2: What's Included in Commercial Service

- Scheduled service (daily, weekly, or custom frequency)
- Complete sweep of all pet areas, green spaces, and walkways
- Waste station monitoring and bag restocking (optional)
- All waste removed and disposed of properly
- Service reports for property managers
- Flexible scheduling for seasonal needs

---

**WHO WE WORK WITH**

H2: Properties We Service

**Apartment complexes** — Keep shared green spaces clean for tenants

**Condo communities** — Common areas, dog runs, and walking paths

**HOAs** — Maintain community standards without volunteer hassle

**Dog daycares and kennels** — Outdoor play areas cleaned on schedule

**Veterinary clinics** — Exterior areas and relief spots

**Parks and public spaces** — Municipal and private properties

---

**WHY CHOOSE SCOOPSTER**

H2: Why Property Managers Choose Scoopster

**Reliable scheduling** — We show up when we say we will. Every time.

**Professional service** — Uniformed, insured, trained staff.

**Flexible contracts** — Monthly, seasonal, or year-round. Adjust as needed.

**Volume pricing** — Competitive rates for larger properties.

**Less tenant complaints** — Clean pet areas mean happier residents.

**One less thing to manage** — We handle it so your team doesn't have to.

---

**HOW IT WORKS**

H2: How Commercial Service Works

1. **Site Assessment** — We visit your property to understand the scope.

2. **Custom Proposal** — You get a quote based on property size, frequency, and services needed.

3. **Scheduled Service Begins** — We show up on schedule and keep your property clean.

4. **Ongoing Communication** — Service reports, easy rebooking, responsive support.

---

**PRICING**

H2: Commercial Pricing

Commercial pricing is custom-quoted based on property size, number of pet areas, and service frequency.

Most properties fall between **$100–$500/month** depending on scope.

CTA: Request a Custom Quote

---

**SERVICE AREAS**

H2: Serving Commercial Properties Across Hamilton

We provide commercial pet waste removal throughout Hamilton, Stoney Creek, Ancaster, Dundas, Waterdown, Burlington, and surrounding areas.

CTA: View All Service Areas

---

**FAQ SECTION**

H2: Frequently Asked Questions

**Q: How often should commercial properties be serviced?**
A: Depends on dog traffic. High-traffic properties often need 2–3 visits per week. Lower traffic might be fine with weekly. We'll recommend the right frequency.

**Q: Can you restock waste bag stations?**
A: Yes. We can monitor and refill stations as part of your service package.

**Q: Do you provide service reports?**
A: Yes. Property managers receive regular reports documenting completed service.

**Q: What about winter?**
A: We operate year-round. Snow doesn't stop service — in fact, keeping up in winter prevents a spring mess.

**Q: Are you insured?**
A: Fully insured for commercial work. We can provide documentation for your records.

---

**FINAL CTA**

H2: Keep Your Property Clean and Tenants Happy

Professional pet waste removal that's reliable, affordable, and one less thing on your plate.

CTA 1: Get a Custom Quote
CTA 2: Call 289-698-4155

---

**RELATED SERVICES**

H2: Residential Services Also Available

- Weekly Pickup — For individual homeowners
- Bi-Weekly Pickup — Budget-friendly residential option
- One-Time Cleanup — Catch-up service for neglected areas

---

---

## LOCATION PAGES

All location pages follow a consistent template structure with unique neighbourhood-specific content.

### Location Page Template Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Breadcrumb: Home > Service Areas > [Location]               │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                │
│ - H1: Dog Poop Pickup in [Location]                         │
│ - Intro paragraph (2-3 sentences, location-specific)        │
│ - Two CTA buttons                                           │
├─────────────────────────────────────────────────────────────┤
│ NEIGHBOURHOODS COVERED                                      │
│ - H2                                                        │
│ - List of specific areas within this location               │
├─────────────────────────────────────────────────────────────┤
│ SERVICES AVAILABLE                                          │
│ - H2                                                        │
│ - 4 services with prices, links                             │
├─────────────────────────────────────────────────────────────┤
│ WHY CHOOSE SCOOPSTER                                        │
│ - H2                                                        │
│ - 5 bullet points                                           │
├─────────────────────────────────────────────────────────────┤
│ PRICING TABLE                                               │
│ - H2                                                        │
│ - Simple table with starting prices                         │
│ - CTA to get quote                                          │
├─────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                 │
│ - H2                                                        │
│ - 3 location-specific Q&As                                  │
├─────────────────────────────────────────────────────────────┤
│ NEARBY AREAS                                                │
│ - H2                                                        │
│ - Links to adjacent location pages                          │
├─────────────────────────────────────────────────────────────┤
│ FINAL CTA                                                   │
│ - H2                                                        │
│ - Location-specific message                                 │
│ - Two CTA buttons                                           │
└─────────────────────────────────────────────────────────────┘
```

---

### /service-areas/ (Hub Page)

**Title Tag:** Service Areas | Dog Poop Pickup in Hamilton | Scoopster

**Meta Description:** Scoopster provides dog poop pickup across Hamilton including the Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, and more. Find your area.

**Breadcrumb:** Home > Service Areas

---

**HERO**

H1: Areas We Service

Scoopster proudly serves dog owners across Hamilton and surrounding communities. From the Mountain to the Lake, and everywhere in between — if you're in our service area, we'll come scoop your yard.

---

**MAP SECTION**

H2: Hamilton & Surrounding Areas

[Placeholder for map graphic showing coverage area]

---

**NEIGHBOURHOODS**

H2: Find Your Neighbourhood

**Hamilton Proper:**
- Hamilton Mountain (link)
- Stoney Creek (link)
- Ancaster (link)
- Dundas (link)
- Waterdown (link)

**Surrounding Communities:**
- Binbrook
- Winona
- Grimsby (limited availability)
- Burlington (select areas)
- Caledonia (coming soon)

*Don't see your area? Contact us — we may still be able to help.*

---

**SERVICES**

H2: Services Available in All Areas

All Scoopster service areas have access to:

- Weekly dog poop pickup
- Bi-weekly dog poop pickup
- One-time yard cleanup
- Commercial pet waste removal

CTA: View Our Services

---

**WHY LOCAL**

H2: Hamilton-Based. Hamilton-Focused.

Scoopster isn't a franchise or a national chain. We're a local Hamilton business, which means:

- We know the neighbourhoods
- We understand the weather (yes, we work in winter)
- We're invested in this community
- Quick response times and flexible service

---

**FINAL CTA**

H2: Ready to Get Started?

Find out if we service your area and get a free quote today.

CTA 1: Get a Free Quote
CTA 2: Call 289-698-4155

---

---

### /service-areas/hamilton-mountain/

**Title Tag:** Dog Poop Pickup on Hamilton Mountain | Scoopster

**Meta Description:** Professional dog poop pickup service on Hamilton Mountain. Weekly, bi-weekly, and one-time cleanups. Local, reliable, affordable. Get a free quote.

**Breadcrumb:** Home > Service Areas > Hamilton Mountain

---

**HERO**

H1: Dog Poop Pickup on Hamilton Mountain

Hamilton Mountain is one of our busiest service areas — and for good reason. With plenty of dog-friendly neighbourhoods, parks, and families with pets, there's no shortage of yards that need regular cleanup. Scoopster keeps Mountain residents' backyards clean so they can actually enjoy their outdoor space.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**NEIGHBOURHOODS**

H2: Neighbourhoods We Service

We provide dog poop pickup throughout Hamilton Mountain, including:

- Upper Gage
- Mountview
- Concession
- Rymal Road area
- Upper Wellington
- Limeridge
- Mountain Brow
- Albion Falls area
- And surrounding Mountain neighbourhoods

---

**SERVICES**

H2: Services for Hamilton Mountain Residents

**Weekly Pickup** — Same day, every week. Starting at $25/week.

**Bi-Weekly Pickup** — Every other week. Starting at $20/visit.

**One-Time Cleanup** — Catch-up service starting at $75.

**Commercial Service** — Apartments, townhouse complexes, and more.

CTA: Learn More About Our Services

---

**WHY CHOOSE**

H2: Why Choose Scoopster

- Local team that knows the Mountain's streets and layout
- Reliable weekly scheduling — we don't miss visits
- Year-round service including winter
- No contracts, cancel anytime
- Satisfaction guaranteed

---

**PRICING**

H2: Pricing

| Service | Starting Price |
|---------|----------------|
| Weekly Pickup | $25/week |
| Bi-Weekly Pickup | $20/visit |
| One-Time Cleanup | $75+ |
| Commercial | Custom quote |

CTA: Get Your Custom Quote

---

**FAQ**

H2: Frequently Asked Questions

**Q: Do you service all parts of the Mountain?**
A: Yes. We cover all Mountain neighbourhoods from the escarpment to Rymal and beyond.

**Q: What day would my pickup be?**
A: We assign days by area for route efficiency. You'll get a consistent weekly day.

**Q: Can you access my backyard if my gate is locked?**
A: We can work with combination locks or hidden keys. Just let us know during signup.

---

**NEARBY AREAS**

H2: We Also Service Nearby Areas

- Stoney Creek
- Ancaster
- Binbrook
- Hamilton Lower City

CTA: View All Service Areas

---

**FINAL CTA**

H2: Get a Cleaner Yard on the Mountain

Join your neighbours who've already handed off this chore. Scoopster makes it easy.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

### /service-areas/stoney-creek/

**Title Tag:** Dog Poop Pickup in Stoney Creek | Scoopster

**Meta Description:** Reliable dog poop pickup in Stoney Creek. Weekly, bi-weekly, and one-time services. Local Hamilton company. Get your free quote today.

**Breadcrumb:** Home > Service Areas > Stoney Creek

---

**HERO**

H1: Dog Poop Pickup in Stoney Creek

Stoney Creek's mix of established neighbourhoods and newer developments means lots of families — and lots of dogs. Whether you're near the lake, up on the escarpment, or somewhere in between, Scoopster provides reliable yard cleanup so you can enjoy your outdoor space without the mess.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**NEIGHBOURHOODS**

H2: Neighbourhoods We Service

We provide dog poop pickup throughout Stoney Creek, including:

- Winona
- Fruitland
- Fifty Point
- Vinemount
- Stoney Creek Mountain
- Battlefield/Stoney Creek Old Town
- Upper Stoney Creek
- Jones Road area
- Millen/Nash Road area

---

**SERVICES**

H2: Services for Stoney Creek Residents

**Weekly Pickup** — Consistent, same-day service. Starting at $25/week.

**Bi-Weekly Pickup** — Every other week. Starting at $20/visit.

**One-Time Cleanup** — Spring cleanup or catch-up service starting at $75.

**Commercial Service** — Townhouse complexes, rentals, and businesses.

CTA: Learn More About Our Services

---

**WHY CHOOSE**

H2: Why Choose Scoopster

- Dedicated routes in Stoney Creek for reliable scheduling
- Local Hamilton company — not a franchise
- Year-round service, even through Lake Ontario winters
- Flexible plans, no long-term contracts
- 100% satisfaction guaranteed

---

**PRICING**

H2: Pricing

| Service | Starting Price |
|---------|----------------|
| Weekly Pickup | $25/week |
| Bi-Weekly Pickup | $20/visit |
| One-Time Cleanup | $75+ |
| Commercial | Custom quote |

CTA: Get Your Custom Quote

---

**FAQ**

H2: Frequently Asked Questions

**Q: Do you come all the way to Fifty Point or Winona?**
A: Yes. We cover all of Stoney Creek from Winona to the Hamilton border.

**Q: What about winter service?**
A: We operate year-round. Cold and snow don't stop us.

**Q: How do I know you came?**
A: We send confirmation after each visit so you always know your yard was serviced.

---

**NEARBY AREAS**

H2: We Also Service Nearby Areas

- Hamilton Mountain
- Grimsby (limited)
- Binbrook
- Winona

CTA: View All Service Areas

---

**FINAL CTA**

H2: Stoney Creek's Trusted Poop Pickup Service

Your neighbours are already enjoying cleaner yards. Ready to join them?

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

### /service-areas/ancaster/

**Title Tag:** Dog Poop Pickup in Ancaster | Scoopster

**Meta Description:** Professional dog poop pickup in Ancaster. Weekly and bi-weekly service for Ancaster homes. Reliable, local, affordable. Free quotes available.

**Breadcrumb:** Home > Service Areas > Ancaster

---

**HERO**

H1: Dog Poop Pickup in Ancaster

Ancaster's beautiful properties and dog-friendly community make it one of the best places to own a pet in the Hamilton area. But with great yards come great piles. Scoopster helps Ancaster dog owners maintain their outdoor spaces without the dirty work.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**NEIGHBOURHOODS**

H2: Neighbourhoods We Service

We provide dog poop pickup throughout Ancaster, including:

- Ancaster Village
- Meadowlands
- Southcote/Scenic Woods
- Ancaster Heights
- Tiffany Falls area
- Wilson Street corridor
- Fiddler's Green
- Ancaster Business Park area (commercial)

---

**SERVICES**

H2: Services for Ancaster Residents

**Weekly Pickup** — Most popular. Starting at $25/week.

**Bi-Weekly Pickup** — Great for larger lots. Starting at $20/visit.

**One-Time Cleanup** — Spring cleanup or reset. Starting at $75.

**Commercial Service** — Office parks, townhouse complexes, and more.

CTA: Learn More About Our Services

---

**WHY CHOOSE**

H2: Why Choose Scoopster

- Familiar with Ancaster's larger lots and unique layouts
- Consistent, reliable scheduling
- Locally owned — we live and work in Hamilton
- No contracts, easy to pause or adjust
- Service guarantee on every visit

---

**PRICING**

H2: Pricing

| Service | Starting Price |
|---------|----------------|
| Weekly Pickup | $25/week |
| Bi-Weekly Pickup | $20/visit |
| One-Time Cleanup | $75+ |
| Commercial | Custom quote |

*Note: Larger Ancaster properties may be quoted slightly higher based on yard size.*

CTA: Get Your Custom Quote

---

**FAQ**

H2: Frequently Asked Questions

**Q: Do larger Ancaster lots cost more?**
A: Sometimes. We quote based on yard size and number of dogs, so larger properties may be slightly higher than our starting rates.

**Q: Do you service the rural edges of Ancaster?**
A: Most of Ancaster is within our service area. If you're on the outskirts, reach out and we'll confirm.

**Q: Can I book service for just spring and summer?**
A: Absolutely. Seasonal service is available, and you can pause or restart anytime.

---

**NEARBY AREAS**

H2: We Also Service Nearby Areas

- Dundas
- Hamilton Mountain
- Waterdown
- Brantford area (coming soon)

CTA: View All Service Areas

---

**FINAL CTA**

H2: Ancaster's Go-To Yard Cleanup Service

More time enjoying your property. Less time picking up after your dog.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

### /service-areas/dundas/

**Title Tag:** Dog Poop Pickup in Dundas | Scoopster

**Meta Description:** Dog poop pickup in Dundas, Ontario. Weekly and bi-weekly yard cleaning for Dundas homes. Local service, fair pricing. Get your free quote.

**Breadcrumb:** Home > Service Areas > Dundas

---

**HERO**

H1: Dog Poop Pickup in Dundas

Dundas may be known for its valley views and small-town charm, but it's also home to a lot of dogs — and a lot of backyards that need regular attention. Scoopster provides reliable poop pickup for Dundas residents so you can spend less time scooping and more time on the trails.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**NEIGHBOURHOODS**

H2: Neighbourhoods We Service

We provide dog poop pickup throughout Dundas, including:

- Downtown Dundas
- Dundas Valley
- Pleasant View
- University Gardens
- Cootes Paradise area
- Head Street corridor
- Mill Street area

---

**SERVICES**

H2: Services for Dundas Residents

**Weekly Pickup** — Reliable, same-day service. Starting at $25/week.

**Bi-Weekly Pickup** — Every other week. Starting at $20/visit.

**One-Time Cleanup** — Spring reset or catch-up. Starting at $75.

**Commercial Service** — Small businesses and multi-unit properties.

CTA: Learn More About Our Services

---

**WHY CHOOSE**

H2: Why Choose Scoopster

- We know Dundas — including the tricky hillside yards
- Consistent scheduling you can count on
- Local company with real accountability
- No contracts, flexible service
- Satisfaction guaranteed

---

**PRICING**

H2: Pricing

| Service | Starting Price |
|---------|----------------|
| Weekly Pickup | $25/week |
| Bi-Weekly Pickup | $20/visit |
| One-Time Cleanup | $75+ |
| Commercial | Custom quote |

CTA: Get Your Custom Quote

---

**FAQ**

H2: Frequently Asked Questions

**Q: Can you handle hilly or terraced yards?**
A: Yes. Dundas has its share of sloped properties, and we're used to them. We'll clean the whole yard, flat or not.

**Q: How far into the valley do you go?**
A: We service the main residential areas of Dundas. If you're not sure whether we cover your location, just ask.

**Q: What about parking in downtown Dundas?**
A: We figure it out. Tight streets aren't a problem — we show up and get it done.

---

**NEARBY AREAS**

H2: We Also Service Nearby Areas

- Ancaster
- Hamilton West
- Waterdown
- Flamborough (limited)

CTA: View All Service Areas

---

**FINAL CTA**

H2: Dundas Yards Deserve Better

You've got hiking trails to explore and local shops to visit. Let Scoopster take yard cleanup off your list.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

### /service-areas/waterdown/

**Title Tag:** Dog Poop Pickup in Waterdown | Scoopster

**Meta Description:** Dog poop pickup service in Waterdown, Ontario. Weekly and bi-weekly plans. Locally operated, reliable service. Book your free quote today.

**Breadcrumb:** Home > Service Areas > Waterdown

---

**HERO**

H1: Dog Poop Pickup in Waterdown

Waterdown's growing community means more families, more dogs, and more yards that need regular cleanup. Scoopster helps Waterdown dog owners keep their properties clean with reliable, scheduled poop pickup — so you can enjoy your backyard without dodging landmines.

CTA 1: Get a Free Quote
CTA 2: View Pricing

---

**NEIGHBOURHOODS**

H2: Neighbourhoods We Service

We provide dog poop pickup throughout Waterdown, including:

- Downtown Waterdown / Mill Street
- Clappison's Corners
- Burke Village
- Waterdown South
- Parkside Drive area
- Mountain Brow Road
- New subdivisions

---

**SERVICES**

H2: Services for Waterdown Residents

**Weekly Pickup** — Same day every week. Starting at $25/week.

**Bi-Weekly Pickup** — Every other week. Starting at $20/visit.

**One-Time Cleanup** — Catch up or prep for an event. Starting at $75.

**Commercial Service** — New developments, condo communities, and businesses.

CTA: Learn More About Our Services

---

**WHY CHOOSE**

H2: Why Choose Scoopster

- Serving Waterdown's established and new neighbourhoods
- Reliable scheduling week after week
- Hamilton-based company — local and accountable
- No contracts, easy to pause or cancel
- Guaranteed clean yards every visit

---

**PRICING**

H2: Pricing

| Service | Starting Price |
|---------|----------------|
| Weekly Pickup | $25/week |
| Bi-Weekly Pickup | $20/visit |
| One-Time Cleanup | $75+ |
| Commercial | Custom quote |

CTA: Get Your Custom Quote

---

**FAQ**

H2: Frequently Asked Questions

**Q: Do you service the new subdivisions in Waterdown?**
A: Yes. We regularly add new developments to our routes.

**Q: What about Carlisle and Freelton?**
A: We may be able to service these areas. Contact us to confirm.

**Q: Can I get same-day service for a one-time cleanup?**
A: Sometimes. Call us and we'll do our best to accommodate.

---

**NEARBY AREAS**

H2: We Also Service Nearby Areas

- Dundas
- Ancaster
- Hamilton Mountain
- Burlington (select areas)

CTA: View All Service Areas

---

**FINAL CTA**

H2: Keep Your Waterdown Yard Clean

Join your neighbours who've already made the switch. Scoopster handles the mess.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

## SUPPORTING PAGES

---

### /pricing/

**Title Tag:** Dog Poop Pickup Pricing | Hamilton | Scoopster

**Meta Description:** Transparent dog poop pickup pricing for Hamilton. Weekly from $25, bi-weekly from $20, one-time from $75. No contracts, no hidden fees. Get a quote.

**Breadcrumb:** Home > Pricing

---

**HERO**

H1: Dog Poop Pickup Pricing

No surprise fees. No confusing packages. Just straightforward pricing based on your yard and your needs. Below you'll find our starting rates — your exact price depends on yard size and number of dogs, and we'll confirm your quote before any service begins.

---

**PRICING TABLE**

H2: Our Plans

**Design:** Use cards or a clean table format

| Service | Starting Price | Best For |
|---------|----------------|----------|
| Weekly Pickup | $25/week | Multi-dog homes, small yards, busy families |
| Bi-Weekly Pickup | $20/visit | Single-dog homes, larger yards, budget-conscious |
| One-Time Cleanup | $75+ | Spring cleanup, moving, catching up |
| Commercial | Custom | Apartments, condos, HOAs, daycares |

*All prices are per visit. Final quote based on yard size, number of dogs, and access.*

---

**WHAT AFFECTS PRICE**

H2: How We Calculate Your Quote

**Yard size** — Larger yards take more time.

**Number of dogs** — More dogs = more waste.

**Frequency** — Weekly is less per visit than one-time.

**Buildup level** — One-time cleanups are quoted based on how much has accumulated.

**Access** — Gated yards or tricky access may affect pricing.

We quote before we scoop — no surprises.

---

**WHAT'S INCLUDED**

H2: Every Service Includes

- Complete yard sweep
- All waste bagged and removed
- Gate secured after each visit
- Visit confirmation
- Satisfaction guaranteed
- No contracts — cancel or pause anytime

---

**MULTI-DOG**

H2: Save With Multiple Dogs

Have more than one dog? We'll quote you a fair rate based on total waste, not a per-dog multiplier. Most multi-dog homes pay $30–$45/week for weekly service.

---

**COMMERCIAL**

H2: Commercial Properties

Commercial pricing is quoted per property based on:

- Number of pet areas
- Property size
- Service frequency (daily, weekly, custom)
- Optional extras (station restocking, reporting)

Most commercial clients pay **$100–$500/month** depending on scope.

CTA: Request a Commercial Quote

---

**FAQ**

H2: Pricing FAQs

**Q: Do you charge extra for multiple dogs?**
A: We base pricing on yard size and waste volume. Two dogs don't double the price — we'll give you a fair quote.

**Q: Are there any hidden fees?**
A: No. Your quote is your price. No fuel surcharges, no service fees.

**Q: Do I have to sign a contract?**
A: No contracts. Cancel or pause anytime with a quick message.

**Q: Do you offer discounts for prepayment?**
A: Yes. Ask about monthly or seasonal prepay discounts.

**Q: What if I'm not happy with the service?**
A: We'll make it right. If your yard wasn't cleaned to your satisfaction, we'll come back.

**Q: Is there a charge if I skip a week?**
A: No. Just give us 24 hours notice and we'll skip your visit at no charge.

---

**FINAL CTA**

H2: Get Your Free Quote

Tell us about your yard and we'll give you an exact price — no obligation, no pressure.

CTA 1: Get Your Free Quote
CTA 2: Call 289-698-4155

---

---

### /about/

**Title Tag:** About Scoopster | Hamilton's Dog Poop Pickup Service

**Meta Description:** Scoopster is Hamilton's local dog poop pickup company. Reliable service, fair prices, and a commitment to keeping Hamilton yards clean. Learn more.

**Breadcrumb:** Home > About

---

**HERO**

H1: About Scoopster

Scoopster started with a simple idea: nobody should have to spend their free time picking up dog poop. We're a local Hamilton business dedicated to giving dog owners their yards — and their weekends — back.

---

**OUR STORY**

H2: How Scoopster Started

[Placeholder for founder story — adjust based on actual business details]

Like a lot of dog owners, we love our pets but hate the chore that comes with them. After years of stepping in "surprises" and dreading weekend yard cleanup, the idea for Scoopster was born.

What started as a side project for a few neighbours quickly grew into a full service operation. Today, we help hundreds of Hamilton families keep their yards clean — and we're just getting started.

---

**VALUES**

H2: What We Believe

**Reliability** — When we say we'll be there, we're there. Same day, every week, no excuses.

**Transparency** — Clear pricing, honest service. No hidden fees, no bait-and-switch.

**Local First** — We live here. We work here. We're invested in Hamilton.

**No Judgment** — Yard got out of control? We've seen worse. We're here to help, not to lecture.

---

**WHY LOCAL**

H2: Hamilton-Based. Hamilton-Focused.

Scoopster isn't a franchise. We're not a gig-economy app. We're a local Hamilton business with a real team that knows these neighbourhoods.

That means:

- Quick response times
- Consistent service from familiar faces
- An actual person to talk to when you have questions
- A company that cares about this community

---

**SERVICE AREAS**

H2: Where We Work

We currently service:

- Hamilton Mountain
- Stoney Creek
- Ancaster
- Dundas
- Waterdown
- Binbrook
- Winona
- And surrounding areas

CTA: View All Service Areas

---

**TEAM**

H2: Meet the Team

[Placeholder for team photo and short bios if desired]

We're dog people ourselves. The Scoopster team is made up of reliable, friendly folks who don't mind getting their hands dirty (well, gloved) to help you enjoy your yard again.

---

**FINAL CTA**

H2: Ready to Work With Us?

See what Hamilton's trusted poop pickup service can do for your yard.

CTA 1: Get Your Free Quote
CTA 2: View Pricing

---

---

### /contact/

**Title Tag:** Contact Scoopster | Dog Poop Pickup in Hamilton

**Meta Description:** Get in touch with Scoopster for dog poop pickup in Hamilton. Request a free quote, ask questions, or book service. Call, email, or use our contact form.

**Breadcrumb:** Home > Contact

---

**HERO**

H1: Contact Scoopster

Have questions? Ready to book? We're here to help. Reach out by phone, email, or the form below and we'll get back to you quickly — usually within a few hours during business days.

---

**CONTACT INFO**

H2: Get in Touch

**Phone:** 289-698-4155
*Call or text. We respond fast.*

**Email:** info@scoopster.ca

**Hours:**
Monday–Friday: 8am–6pm
Saturday: 9am–3pm
Sunday: Closed

*Service visits happen throughout the week. Office hours are for calls and bookings.*

---

**CONTACT FORM**

H2: Send Us a Message

**Form Fields:**

- Name (required) — text input
- Email (required) — email input
- Phone (optional) — tel input
- Address (required) — text input, with note: "For service area confirmation"
- Number of Dogs — dropdown: 1, 2, 3, 4+
- Service Interested In — dropdown: Weekly Pickup, Bi-Weekly Pickup, One-Time Cleanup, Commercial, Not Sure Yet
- Message (optional) — textarea
- Submit Button: "Send Message"

---

**SERVICE AREA NOTE**

H2: Service Area

We currently serve Hamilton Mountain, Stoney Creek, Ancaster, Dundas, Waterdown, Binbrook, Winona, and surrounding areas.

Not sure if we service your address? Include it in the form and we'll confirm.

CTA: View All Service Areas

---

**FAQ SNIPPET**

H2: Quick Answers

**Q: How quickly will I hear back?**
A: We respond within a few hours on business days, usually faster.

**Q: Can I book online?**
A: Use this form to request service and we'll follow up to confirm details and scheduling.

**Q: What if I just have a question?**
A: That's fine too. Ask away — no commitment needed.

---

**FINAL CTA**

H2: Let's Talk

Ready to get your yard cleaned up? We're just a message away.

CTA: Call 289-698-4155

---

---

### /blog/ (Index Page)

**Title Tag:** Blog | Dog Care Tips & News | Scoopster

**Meta Description:** Tips on dog care, yard maintenance, and pet waste management from Scoopster, Hamilton's dog poop pickup service.

**Breadcrumb:** Home > Blog

---

**HERO**

H1: The Scoopster Blog

Tips, advice, and the occasional dog-related content from Hamilton's poop pickup pros. Whether you're a new dog owner or a seasoned pet parent, we've got helpful info to share.

---

**BLOG GRID**

H2: Latest Posts

**Design:** 3-column grid on desktop, single column on mobile

[Placeholder grid — no posts needed yet]

Each card shows:
- Featured image placeholder
- Post title
- Short excerpt (2 lines max)
- "Read More →" link

Pagination at bottom when posts are added.

---

**CATEGORIES SIDEBAR** (optional)

H2: Categories

- Dog Health & Waste
- Seasonal Tips
- Hamilton Dog Owners
- Service Updates

---

**CTA**

H2: Need Yard Cleanup, Not Just Tips?

We do the dirty work so you don't have to.

CTA 1: Get a Free Quote
CTA 2: View Services

---

---

## INTERNAL LINKING STRATEGY

### Homepage links to:
- All 4 service pages
- Pricing page
- Service areas hub
- Top 3-5 individual location pages
- Contact page

### Service pages link to:
- Other 3 service pages (Related Services section)
- Pricing page
- Service areas hub
- Contact/quote page

### Location pages link to:
- All 4 service pages
- Pricing page
- 3-4 adjacent location pages
- Service areas hub
- Contact/quote page

### Pricing page links to:
- All 4 service pages
- Contact/quote page
- Service areas hub

### Footer links to:
- All 4 service pages
- All 5 location pages + hub
- Pricing
- About
- Contact
- Blog

---

## SEO CHECKLIST

For each page:
- [ ] Unique title tag (under 60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] One H1 per page
- [ ] Logical heading hierarchy (H1 > H2 > H3)
- [ ] Internal links to related pages
- [ ] Alt text on all images
- [ ] Schema markup where applicable
- [ ] Mobile-responsive layout
- [ ] Fast loading (optimize images, minimal JS)

Schema markup needed:
- [ ] LocalBusiness (homepage)
- [ ] FAQPage (homepage, pricing, all service pages)
- [ ] Service (all service pages)
- [ ] BreadcrumbList (all inner pages)

---

## BUILD ORDER

1. Global CSS + components (header, footer, buttons, cards)
2. Homepage
3. Pricing page
4. Service pages (weekly, bi-weekly, one-time, commercial)
5. Service areas hub
6. Location pages (Mountain, Stoney Creek, Ancaster, Dundas, Waterdown)
7. About page
8. Contact page
9. Blog index
10. sitemap.xml + robots.txt
11. Final QA + link checking

---

## PLACEHOLDER ASSETS NEEDED

- Logo: "Scoopster" text with simple icon (poop scoop, dog, or paw)
- Hero backgrounds: Solid Navy or subtle pattern
- Service icons: Calendar, checkmark, building, sparkle
- Map graphic: Simple illustrated map of Hamilton
- Team photo: Placeholder box
- Testimonial avatars: Initials or generic icons
- Blog post thumbnails: Placeholder boxes

---

End of document.
