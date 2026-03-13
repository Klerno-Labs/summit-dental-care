# Deployment Guide

This guide covers deploying the Summit Dental Care website to **Vercel**, the recommended platform for Next.js applications.

## Prerequisites

1.  A Vercel account (free tier is sufficient).
2.  The project code pushed to a Git repository (GitHub, GitLab, or Bitbucket).
3.  Access to the `src/config/site.ts` and `.env.example` files.

## Step 1: Prepare Environment Variables

Before deploying, ensure you have your environment variables ready.

1.  Copy the provided `.env.example` file to a secure location.
2.  Fill in the values for `NEXT_PUBLIC_SITE_URL` and any email service API keys if used.

## Step 2: Deploy to Vercel

### Option A: Import from Git (Recommended)

1.  Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your Git repository (e.g., `summit-dental-care`).
4.  **Framework Preset**: Vercel should automatically detect **Next.js**.
5.  **Root Directory**: Leave as `./` (unless you are deploying a monorepo).
6.  **Build Command**: `npm run build` (or `yarn build` / `pnpm build`).
7.  **Output Directory**: `.next` (This is handled automatically by Next.js).
8.  Click **"Environment Variables"**.
    -   Add the variables from your `.env` file here (e.g., `NEXT_PUBLIC_SITE_URL`).
9.  Click **"Deploy"**.

Vercel will take a few minutes to build the project. Once complete, you will receive a live URL (e.g., `summit-dental-care.vercel.app`).

### Option B: Vercel CLI

If you prefer command-line deployment:

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to link your project and deploy.

## Step 3: Domain Configuration

### Setting up a Custom Domain

1.  Go to your **Project Settings** in the Vercel Dashboard.
2.  Navigate to the **Domains** tab.
3.  Enter your domain (e.g., `summitdentalcare.com`).
4.  If you bought the domain via Vercel, it will configure automatically.
5.  If you bought it elsewhere (GoDaddy, Namecheap), Vercel will provide DNS records (A Records and CNAME) that you must add to your domain registrar's dashboard.

### DNS Propagation
DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide. Vercel will automatically generate an SSL certificate (HTTPS) for your domain once the DNS is detected.

## Step 4: Post-Deployment Checklist

Once the site is live on your custom domain, verify the following:

- [ ] **SSL Certificate**: The browser shows a lock icon (HTTPS).
- [ ] **Forms**: Test the contact form. Ensure emails are being received (check spam folder).
- [ ] **Maps**: Verify the Google Map on the Contact page is displaying the correct location.
- [ ] **Mobile Responsiveness**: Check the site on a mobile device to ensure the sticky navigation and forms work correctly.
- [ ] **Analytics**: If using Google Analytics, check Real-Time reports to confirm data is flowing.
- [ ] **SEO**: Run the URL through a rich results tester to ensure the Schema/JSON-LD is valid.

## Monitoring

Vercel provides built-in analytics and logging.
- **Logs**: View server logs in the "Deployments" tab of the Vercel dashboard for debugging.
- **Analytics**: Enable Vercel Analytics (Web Vitals) in the project settings to monitor Core Web Vitals (LCP, FID, CLS).

## Rollback

If a new deployment introduces a critical bug:
1.  Go to the **Deployments** tab in Vercel.
2.  Find the previous successful deployment.
3.  Click the three dots (...) -> **Promote to Production**.