# Scoopster - Dog Poop Pickup Service Website

Professional, SEO-optimized website for Scoopster, a dog poop pickup service in Hamilton, Ontario.

## Features

- **SEO Optimized**: Comprehensive meta tags, structured data (JSON-LD), and semantic HTML targeting "dog poop pickup hamilton"
- **Mobile-First Responsive Design**: Fully responsive across all devices
- **Fast Loading**: Static HTML/CSS/JS with no frameworks for optimal performance
- **Interactive Pricing Calculator**: Real-time price estimates based on yard size, number of dogs, and service frequency
- **Contact Form**: Validated form with email, phone formatting, and success notifications
- **Service Area Map**: Visual representation of coverage areas in Hamilton
- **Earth Tone Branding**: Green and brown color palette for natural, eco-friendly feel

## Project Structure

```
dogpoop/
├── index.html          # Main HTML file
├── styles.css          # All styling with CSS variables
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup with Schema.org structured data
- **CSS3**: Custom properties (variables), Grid, Flexbox, responsive design
- **Vanilla JavaScript**: No frameworks or dependencies
- **Mobile-First Approach**: Optimized for all screen sizes

## SEO Features

### Structured Data
- LocalBusiness schema with complete business information
- Service area coverage details
- Contact information and hours

### Meta Tags
- Title optimized for "dog poop pickup hamilton"
- Meta description targeting local search
- Open Graph tags for social sharing
- Comprehensive keyword targeting

### Performance
- Minimal CSS/JS footprint
- No external dependencies (except optional maps)
- Lazy loading ready
- Optimized asset loading

## Setup & Deployment

### Local Development
1. Simply open `index.html` in a web browser
2. No build process or dependencies required

### Deployment Options

#### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Option 2: GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and root directory
4. Your site will be live at `https://yourusername.github.io/repo-name`

#### Option 3: Traditional Hosting
Upload the following files to your web server:
- index.html
- styles.css
- script.js
- Any additional assets (favicon, images)

## Customization

### Brand Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-green: #4A7C4E;
    --accent-brown: #8B6F47;
    /* ... other colors */
}
```

### Contact Information
Update contact details in `index.html`:
- Phone number (search for `+1-905-555-0100`)
- Email address (search for `hello@scoopster.ca`)
- Business hours in structured data

### Pricing Logic
Modify the calculator in `script.js` function `calculatePrice()` to adjust:
- Base prices per dog count
- Yard size multipliers
- Service frequency pricing

### Service Areas
Edit the area list in the Service Area section to add/remove coverage zones.

## Form Submission

The contact form currently logs data to the console. To connect to a backend:

### Option 1: Formspree (No Backend Required)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Google Forms
Create a Google Form and use the action URL

### Option 3: Custom Backend
Update the form submission handler in `script.js` to POST to your API endpoint:
```javascript
fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## Adding Google Maps

To replace the map placeholder with real Google Maps:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com)

2. Add the script before closing `</body>` tag in `index.html`:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

3. Replace `.map-placeholder` div with:
```html
<div id="map" style="width: 100%; height: 400px;"></div>
```

4. Uncomment and customize the `initMap()` function in `script.js`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minimal HTTP requests
- Inline critical CSS (optional)
- Lazy loading for images
- Smooth scroll with CSS
- Intersection Observer for animations
- No jQuery or heavy frameworks

## License

All rights reserved. This website is proprietary to Scoopster.

## Support

For questions or issues:
- Email: hello@scoopster.ca
- Phone: (905) 555-0100

---

Built with ❤️ for Hamilton's dog owners