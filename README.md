# Peaceway Family Hospital Website

A Next.js 15 website for Peaceway Family Hospital in Soka, Ibadan, Oyo State, Nigeria.

## Project

- **Repository:** `Stevebook001/peaceway-family-hospital`
- **Production site:** https://peaceway-family-hospital.vercel.app
- **Framework:** Next.js App Router, TypeScript, React
- **Content source:** `lib/blog-posts.ts`

## Public pages

- `/` — homepage and hospital contact details
- `/about` — about the hospital
- `/services` — service enquiries; visitors must confirm current availability by phone
- `/blog` — published health-literacy and patient-resource articles
- `/blog/[slug]` — individual articles
- `/contact` — phone, address and directions
- `/faq` — frequently asked questions
- `/editorial-policy` — publication and clinical review standards
- `/privacy` — draft privacy notice that needs hospital/legal review
- `/signup` — registration preview; no account data is collected yet

## Blog publishing workflow

Blog entries are stored in `lib/blog-posts.ts`. Each post has a `status` value:

- `published` — shown in the public library and included in the sitemap
- `draft` — hidden from public article routes and excluded from the sitemap

To add an article, follow the existing `BlogPost` shape: `slug`, `title`, `description`, `date`, `category`, `image`, `alt`, `intro`, `sections`, and `disclaimer`. Use a unique lowercase URL slug, a descriptive image alt text, and accurate publication/update dates.

**Hospital approval remains essential.** Articles about diagnosis, symptoms, treatment, prevention or clinical advice must be reviewed by a suitably qualified clinician designated by the hospital before being presented as official hospital guidance. Hospital announcements, service lists, staff details, images and claims must be approved by an authorised hospital representative. Keep unapproved material as `draft`. The developer may publish general digital-literacy and patient-preparation content, but should not invent hospital services or imply that general information is individual medical advice.

## SEO

- Sitemap: https://peaceway-family-hospital.vercel.app/sitemap.xml
- Robots: https://peaceway-family-hospital.vercel.app/robots.txt
- Canonical URLs currently use the Vercel domain. After the final domain is purchased and connected, update the site URL in `app/layout.tsx`, `app/sitemap.ts`, and page-level Open Graph URLs as needed.
- Search Console verification metadata is configured in `app/layout.tsx`, but ownership verification and sitemap processing must be confirmed in Google Search Console.

## Features not connected yet

The website is currently a public-information website. The following must not be represented as live until implemented and tested:

- Database and persistent storage
- Secure account registration, login and recovery
- Admin/content-management dashboard
- Live appointment booking or patient portal
- Resend email delivery, notifications or newsletters
- Patient messaging and health-record uploads

Build these only after hospital approval, secure architecture, privacy review and configuration. Do not collect sensitive medical information through placeholder pages.

## Local development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

For production validation:

```bash
npm run build
```

## Brand and contact

Peaceway Family Hospital  
Kofero Bus Stop, Faruku Road, Felele Extension, Soka, Ibadan, Oyo State, Nigeria  
Phone: 0701 275 3409

This repository is not a medical service. Website articles are general information and do not replace an assessment by a qualified healthcare professional.
