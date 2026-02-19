# Dmfitness
# DM Fit Coaching Website (dmfitcoaching.com)

A clean, minimal, modern marketing site inspired by the look/structure of caliberstrong.com — built using **only HTML, CSS, and JavaScript** (no frameworks).

This site is designed to drive conversions for:
- **Free 15-minute virtual consultations**
- **$150/month online fitness + nutrition coaching membership**
- Coaching delivered through **Everfit**
- Booking via **Calendly** (embed-ready)

---

## ✅ What Was Created

### Pages (Multi-page site)
- **index.html**
  - Hero section (primary CTA: book a consult)
  - “Why DMFit” value props
  - “How it works” steps
  - Membership callout with pricing
  - Placeholder social proof/testimonials
  - FAQ accordion
  - Email capture form (front-end demo)
  - Pricing modal (opens from hero “View pricing” button)

- **about.html**
  - Coach bio layout for Diego
  - Philosophy / differentiation sections
  - CTA to book consult

- **book.html**
  - **Calendly embed placeholder**
  - CTA reminders for membership after consult
  - Notes included for swapping to official Calendly widget if preferred

- **contact.html**
  - Contact form (front-end demo)
  - Quick info panel with Diego’s email
  - CTA to booking page

### Shared Styling / Components
- **styles.css**
  - Minimal black/white look with a **beige accent**
  - Responsive layout (mobile menu, stacked sections, single-column grids on small screens)
  - Reusable components:
    - Buttons (primary/ghost)
    - Cards, steps, story blocks
    - CTA bands
    - Modal
    - Form styling
  - Sticky header with blur + scroll state

### Site Behavior / Interactions
- **script.js**
  - Sticky header “scrolled” state
  - Mobile navigation open/close (hamburger + Esc + auto-close on link click)
  - FAQ accordion behavior
  - Pricing modal open/close
  - Basic front-end validation and success messages for:
    - Email capture form (index)
    - Contact form (contact)
  - Auto-updates footer copyright year

---

## 🧱 How It Was Built (High Level)

### Tech
- **HTML** for structure and content sections
- **CSS** for layout, typography, components, responsiveness
- **JavaScript** for light interactivity (menu, accordion, modal, basic forms)

### Design Approach (Inspired by CaliberStrong)
- Minimal, premium look with strong contrast
- Clear hierarchy: **headline → benefit → CTA**
- Simple offer positioning (1 plan)
- Conversion-focused sections:
  - Value props
  - “How it works”
  - FAQ
  - CTA bands
  - Booking emphasis

---

## 🚀 How to Run Locally

### Option A (Simple)
Just open `index.html` in your browser.

### Option B (Recommended for testing)
Use a local server so everything behaves like a real site.

**VS Code Live Server**
1. Open folder in VS Code  
2. Install the “Live Server” extension  
3. Right click `index.html` → “Open with Live Server”

---

## 📁 File Structure

