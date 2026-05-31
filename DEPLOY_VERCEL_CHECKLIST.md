# Deploy to Vercel Checklist

## Pre-deploy

- [ ] `npm install`
- [ ] `npm run build` completes successfully
- [ ] All CTA links work
- [ ] Mobile menu opens/closes and links navigate correctly
- [ ] Newsletter form shows error/success states
- [ ] No placeholder copy in visible sections

## Vercel project settings

- Framework preset: Create React App
- Build command: `npm run build`
- Output directory: `build`
- Install command: `npm install`

## Deploy steps

1. Push repository to GitHub
2. Import project in Vercel
3. Confirm build and output settings
4. Deploy and open preview URL
5. Promote to production

## Post-deploy QA

- [ ] Desktop layout
- [ ] Tablet layout
- [ ] Mobile layout
- [ ] Anchor navigation
- [ ] Social metadata preview (Open Graph)
- [ ] Basic Lighthouse pass

## Maintenance notes

- This project is based on CRA and may show non-blocking legacy toolchain warnings.
- For long-term scalability, consider migrating to Next.js in a future version.
