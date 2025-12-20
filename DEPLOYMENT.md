# Deployment Guide for Scoopster Website

This guide provides step-by-step instructions for deploying the Scoopster website.

## Pre-Deployment Checklist

Before deploying, make sure to update the following:

### 1. Contact Information
- [ ] Update phone number in `index.html` (currently: `+1-905-555-0100`)
- [ ] Update email address (currently: `hello@scoopster.ca`)
- [ ] Update business address if needed
- [ ] Update business hours in structured data

### 2. Domain Configuration
- [ ] Replace `https://scoopster.ca` with your actual domain in:
  - `index.html` (Open Graph meta tags)
  - `sitemap.xml`
  - `robots.txt`

### 3. Analytics & Tracking
- [ ] Add Google Analytics tracking code
- [ ] Add Facebook Pixel (optional)
- [ ] Add conversion tracking

### 4. Form Submission
- [ ] Set up form backend (Formspree, Netlify Forms, or custom)
- [ ] Update form action in `script.js`
- [ ] Test form submissions

### 5. Optional Enhancements
- [ ] Add favicon.png (32x32 or 180x180 recommended)
- [ ] Add og-image.jpg for social sharing (1200x630 recommended)
- [ ] Set up Google Maps integration (if desired)

## Deployment Options

### Option 1: Netlify (Easiest - Recommended)

**Pros**: Free hosting, automatic HTTPS, easy custom domain setup, form handling included

1. **Create Netlify Account**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy via Drag & Drop** (Fastest)
   - Drag the `dogpoop` folder to Netlify's deploy zone
   - Done! Your site is live

3. **Deploy via Git** (Recommended for updates)
   ```bash
   # Initialize git repo
   git init
   git add .
   git commit -m "Initial commit"

   # Push to GitHub
   git remote add origin https://github.com/yourusername/scoopster.git
   git push -u origin main

   # Connect to Netlify
   # Go to Netlify > New site from Git > Choose repository
   ```

4. **Enable Netlify Forms**
   Update the form in `index.html`:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

5. **Add Custom Domain**
   - Go to Site settings > Domain management
   - Add your domain (scoopster.ca)
   - Update DNS settings as instructed

### Option 2: Vercel

**Pros**: Fast deployment, excellent performance, free hosting

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd dogpoop
   vercel
   ```

3. **Follow prompts to configure**

### Option 3: GitHub Pages

**Pros**: Free, integrates with GitHub, simple

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/scoopster.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

3. **Access your site**
   - Available at `https://yourusername.github.io/scoopster`

4. **Custom Domain**
   - Add CNAME file with your domain
   - Configure DNS with your registrar

### Option 4: Traditional Web Hosting (cPanel, etc.)

**Pros**: Full control, works with existing hosting

1. **Connect via FTP/SFTP**
   - Use FileZilla, Cyberduck, or your hosting panel

2. **Upload Files**
   - Upload all files to public_html or www directory
   - `index.html`
   - `styles.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - Any images/assets

3. **Set Permissions**
   - Files: 644
   - Folders: 755

4. **Test**
   - Visit your domain to verify

## Post-Deployment Tasks

### 1. Submit to Google Search Console
```
1. Verify domain ownership
2. Submit sitemap: https://scoopster.ca/sitemap.xml
3. Request indexing for main page
```

### 2. Set Up Google My Business
```
- Create/claim business listing
- Add service areas (Hamilton, Ancaster, etc.)
- Add photos
- Link to website
```

### 3. Test Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Target: 90+ performance score

### 4. Test Mobile Responsiveness
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Test on real devices (iPhone, Android)

### 5. SEO Checklist
- [ ] Verify all meta tags are correct
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Ensure HTTPS is enabled
- [ ] Check for broken links
- [ ] Verify canonical URLs

### 6. Set Up Monitoring
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Form submission notifications

## Form Backend Setup

### Using Formspree (Free Tier Available)

1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Get your form endpoint
4. Update `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Using Netlify Forms (If hosting on Netlify)

1. Add to your form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

3. Enable email notifications in Netlify dashboard

### Custom Backend Option

If you need advanced features, consider:
- AWS Lambda + API Gateway
- Node.js/Express backend
- Firebase Functions
- SendGrid API

## Google Maps Integration

1. **Get API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Enable Maps JavaScript API
   - Create credentials (API key)
   - Restrict key to your domain

2. **Add to index.html** (before `</body>`):
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
   ```

3. **Update map container**:
   Replace `.map-placeholder` div with:
   ```html
   <div id="map" style="width: 100%; height: 400px;"></div>
   ```

4. **Uncomment initMap()** in `script.js`

## Analytics Setup

### Google Analytics 4

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (Optional)

Add before `</head>` in `index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

## SSL/HTTPS Setup

Most modern hosting providers (Netlify, Vercel, GitHub Pages) provide free SSL automatically via Let's Encrypt.

For traditional hosting:
1. Get SSL certificate from your host or Let's Encrypt
2. Install certificate
3. Force HTTPS via .htaccess:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Performance Optimization Tips

1. **Minify CSS/JS** (optional):
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js

   # Minify
   cleancss -o styles.min.css styles.css
   uglifyjs script.js -o script.min.js

   # Update HTML references
   ```

2. **Enable Gzip Compression**
   - Netlify/Vercel: Automatic
   - Traditional hosting: Add to .htaccess
   ```apache
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
   </IfModule>
   ```

3. **Add Caching Headers**
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
   </IfModule>
   ```

## Troubleshooting

### Forms not submitting
- Check browser console for errors
- Verify form action URL
- Test with simple HTML form first

### Styling looks broken
- Clear browser cache
- Check CSS file path is correct
- Verify CSS file uploaded

### Mobile menu not working
- Check JavaScript file is loaded
- Verify no console errors
- Test in different browsers

### SEO not working
- Wait 24-48 hours for Google to index
- Submit sitemap in Search Console
- Check robots.txt isn't blocking

## Support

Need help? Check:
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Web.dev](https://web.dev) for performance tips

---

Good luck with your deployment! 🚀