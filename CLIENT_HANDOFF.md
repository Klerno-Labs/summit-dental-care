# Welcome to Your New Website!

Congratulations! Your new website for **Summit Dental Care** is live and ready to help you connect with patients. This document is your personal guide to managing the site's content.

If you ever get stuck, remember: You can always email us at **showcase@pegrio.com** for support.

---

## 1. What We Built

We have designed a modern, professional website tailored for your practice. Here is a quick tour of the pages:

*   **Home Page**: The main entry point. It features your core services, a quick way to book appointments, and a "Insurance Checker" to reassure patients.
*   **About Us**: Tells your story. We've included sections for your mission, your team's credentials (Doctor Bios), and why patients should choose you.
*   **Services**: A detailed breakdown of the treatments you offer (General, Cosmetic, Restorative).
*   **Contact**: A map to your clinic, your office hours, and a working contact form that sends messages directly to your email.

---

## 2. How to Change Your Images

Good news: **You don't need to be a coder to change photos.** We built this site so that all images are controlled from a single "settings" file.

### The Easy Way (One File Control)

Every image on the site—whether it's the big photo on the homepage or the small team member picture—is listed in one place.

**Step-by-Step Guide:**

1.  Open the file named `images.ts` located in the `src/config` folder.
2.  You will see a list of names like `"hero"`, `"about"`, `"team-1"`, etc.
3.  Find the name that matches the image you want to change.
4.  Replace the web address (URL) inside the quote marks with the link to your new photo.
5.  Update the text next to `"alt"` to describe the photo (this helps Google and blind users understand the image).
6.  Save the file. The website will update automatically!

**Example:**
```typescript
"hero": {
  src: "https://images.unsplash.com/photo-YOUR_NEW_PHOTO_HERE", // Paste your new link here
  alt: "Smiling patient at Summit Dental Care", // Describe the photo here
  ...
}
```

### Where to get good photos?

We recommend using professional photography of your actual clinic and staff. If you need stock photos in the meantime, you can find high-quality ones at [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com).

**Tip:** For best results, use images that are at least **1200 pixels wide**.

---

## 3. How to Change Your Logo

Your logo appears in the top left corner of every page (the Navbar).

1.  Navigate to the folder `src/components/layout`.
2.  Open the file named `navbar.tsx`.
3.  Look for the component that says `<Logo />`.
4.  You can replace this with an image of your logo file (e.g., `logo.png`) which you should place in the `public` folder.

---

## 4. How to Change Colors & Fonts

### Changing Colors
If you want to change the blue color (`#0056b3`) to something else:
1.  Open `tailwind.config.ts` in the main folder.
2.  Look for the section `theme.extend.colors`.
3.  Change the code next to `primary` to your new hex color code.

### Changing Fonts
If you want to use a different font style:
1.  Open `src/app/layout.tsx`.
2.  You will see lines importing `Montserrat` and `Open Sans`.
3.  You can replace these with other Google Fonts names.

---

## 5. How to Update Text Content

Most of the text on your site (headings, paragraphs, phone numbers) is written directly inside the page files.

1.  **For Phone/Address**: Go to `src/config/site.ts`. Changing it here updates it everywhere (Footer, Contact page, etc.).
2.  **For Page Content**: Go to `src/app`. You will see folders for `about`, `services`, `contact`. Open the `page.tsx` file inside those folders to edit the text. It reads just like a document; simply find the text you want to rewrite and save.

---

## 6. Hosting & Updates

*   **Hosting**: Your site is currently hosted on Vercel. It is very fast and secure.
*   **Updates**: When you make changes to the files (like updating a photo), the site updates automatically within a few seconds.

---

## 7. Need Help?

If something breaks or you want a major new feature added (like an online payment system), please don't hesitate to reach out.

**Email:** showcase@pegrio.com

Thank you for choosing Pegrio for your web presence!