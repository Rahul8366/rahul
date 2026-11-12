# Rahul Suresh Balabatti - Premium 3D Matrimonial Biodata Website
### ರಾಹುಲ ಸುರೇಶ ಬಳಬಟ್ಟಿ • ವಿವಾಹ ಪರಿಚಯ ಪತ್ರ

A luxury, interactive 3D digital matrimonial biodata website crafted with **React**, **Vite**, **Tailwind CSS**, **HTML5 3D Canvas / Three-inspired particles**, **3D perspective tilt transforms**, and **Lucide Icons**.

---

## 🌟 Highlights & Features

1. **Authentic Profile & Extracted Photograph**:
   - Rahul Suresh Balabatti's actual portrait photo extracted from the official biodata PDF and loaded with custom 3D metallic gold framing.
   - Zero stock faces, preserving authentic appearance.

2. **3D Visual Design System**:
   - Deep Royal Navy (`#050e1a`, `#08172c`) and Champagne Gold (`#d4af37`, `#f6e8b1`) luxury color palette.
   - Interactive 3D Canvas background with dynamic stardust particles, subtle sacred geometry aura rings, and depth-aware mouse parallax.
   - Realistic 3D Tilt Cards (`TiltCard.jsx`) responding to cursor coordinates with dynamic specular reflections and hover elevation.
   - Light (Royal Ivory) and Dark (Royal Navy) luxury appearance toggle.

3. **Complete Photo Management System (`PhotoEditorModal.jsx`)**:
   - Upload your own high-res photo (`JPG`, `JPEG`, `PNG`, `WebP`).
   - Zoom scale slider (0.8x to 2.5x).
   - Horizontal (X) and Vertical (Y) alignment sliders with `object-fit: cover` to prevent distortion.
   - Live preview frame matching the actual hero frame.
   - Persistent saving to `localStorage`.

4. **Comprehensive Matrimonial Biodata Sections (Kannada & English)**:
   - **ಮುಖಪುಟ (Hero Section)**: Grand name typography, auspicious invocation (`॥ ಶ್ರೀ ಗುರು ಬಸವಲಿಂಗಾಯ ನಮಃ ॥`), 3D gold-framed portrait, key badges, and action CTAs.
   - **ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)**: DOB (21-02-1999), Age (27), Height (5'6" / 168cm), Languages (Kannada, English, Hindi), Native Place (Rudrawadi, Aland, Kalaburagi), Current Location (Bengaluru).
   - **ಶಿಕ್ಷಣ (Education)**: MCA from Karnataka University, Dharwad & BCA from Gulbarga University.
   - **ಉದ್ಯೋಗ (Profession)**: Technical Support Engineer, Bengaluru (₹6.3 Lakhs CTC).
   - **ಕುಟುಂಬ (Family Details)**: Father (Suresh Balabatti), Mother (Suvarna Balabatti), Brother (Rachappa Balabatti), Family Type (Middle-Class), Own House in Village.
   - **ಆಸ್ತಿ ಮತ್ತು ಜೀವನಶೈಲಿ (Assets & Lifestyle)**: 13.10 Acres Agricultural Land, Own House, Pure Vegetarian, Veerashaiva Lingayat community.
   - **ಜಾತಕ ವಿವರಗಳು (Horoscope / Jathaka)**: Mesha Rashi (ಮೇಷ ರಾಶಿ), Ashwini Nakshatra (ಅಶ್ವಿನಿ ನಕ್ಷತ್ರ), Deva Gana (ದೇವ ಗಣ), 3rd Pada (3ನೇ ಪಾದ), Birth Time & Place.
   - **ನನ್ನ ಬಗ್ಗೆ (About Me)**: Articulated persona balancing traditional values with modern IT professional life.
   - **ಜೀವನ ಸಂಗಾತಿಯ ನಿರೀಕ್ಷೆಗಳು (Partner Preferences)**: Preferred age, community, education, values.
   - **ಸಂಪರ್ಕ (Contact)**: Click-to-copy phone numbers, direct one-click WhatsApp message connect, and address.

5. **In-Browser Profile Editor (`ProfileEditModal.jsx`)**:
   - Edit any field across Personal, Career, Family, Assets, Horoscope, Preferences, and Contact.
   - Persists instantly in browser `localStorage`.
   - One-click "Reset to Default" button.

6. **Print & PDF Generator (`PdfBiodataModal.jsx`)**:
   - Matches the exact 2-page royal biodata card reference design.
   - Single-click export as high-resolution printable PDF or direct printer document.
   - Switch between Kannada and English formats.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

Server runs locally at: `http://localhost:5173/` or `http://127.0.0.1:5173/`

---

## 🌐 Deployment Instructions

You can deploy this static website anywhere in seconds:

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**
4. Click **Deploy**.

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "./"` in `vite.config.js`.
3. Add `"deploy": "vite build && gh-pages -d dist"` in `package.json`.
4. Run `npm run deploy`.
