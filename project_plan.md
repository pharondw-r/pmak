# PMAK Ocean Hub

## 1. Project Description
PMAK Ocean Hub is a premier water sports and scuba diving company based in Fujairah, UAE, offering scuba diving experiences and e-Foil adventures. The website serves as a digital storefront showcasing dive locations, experiences, and booking information for adventure seekers visiting the UAE.

## 2. Page Structure
- `/` - Home (hero, services, dive experiences, locations, e-Foil, contact)
- `/scuba` - Scuba Diving courses, special dives, equipment, dive sites
- `/efoil` - e-Foil experiences, pricing, how it works
- `/gallery` - Photo and video gallery (backed by Supabase)
- `/book` - Book a Dive / e-Foil Session (backed by Supabase)

## 3. Core Features
- [x] Stunning homepage with hero imagery and dive experiences
- [x] Interactive dive location cards with detailed info
- [x] e-Foil video showcase section
- [x] Contact information with social links
- [x] Booking inquiry form — saves to Supabase `bookings` table
- [x] Newsletter subscription in footer — saves to Supabase `newsletter_subscribers`
- [x] Gallery with photo/video upload — saved to Supabase tables
- [x] Responsive design for mobile and desktop
- [x] Smooth animations and transitions

## 4. Data Model Design
- `gallery_photos` — id, src (URL or base64), alt, created_at
- `gallery_videos` — id, src, poster, title, description, created_at
- `bookings` — id, name, phone, email, activity, date, people, location, message, status, created_at
- `newsletter_subscribers` — id, email (unique), created_at

## 5. Backend / Third-party Integration Plan
- **Supabase** — Database + Storage for gallery, bookings, newsletter
- **Shopify** — Not needed (service-based business)
- **Stripe** — Optional for online booking payments (future)

## 6. Development Phase Plan

### Phase 1: Homepage ✅
- Hero, services, dive experiences, locations, e-Foil showcase, footer

### Phase 2: Additional Pages ✅
- Scuba, e-Foil, Gallery, Booking pages with navigation

### Phase 3: Supabase Backend ✅
- Gallery CRUD via Supabase tables
- Booking form submissions to Supabase
- Newsletter subscriptions to Supabase

### Phase 4: Export & Self-Host (domain.com)
- Export project from Readdy
- Build locally and upload `dist/` to domain.com hosting
- Supabase backend continues to work independently