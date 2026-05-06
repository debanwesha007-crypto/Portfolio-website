# 🚀 Portfolio Website

A modern, animated, and fully deployable portfolio website.

---

## 📁 File Structure

```
portfolio/
├── index.html     ← Main website (don't edit this)
├── config.js      ← YOUR file to update content
└── README.md      ← This file
```

---

## ✏️ How to Update Your Portfolio

**Just edit `config.js`** — that's it. All your content lives there:

| Section | What to edit |
|---|---|
| Personal info | `name`, `title`, `tagline`, `email`, `location` |
| Photo | `avatar` — paste a URL to your photo |
| Social links | `social.github`, `social.linkedin`, etc. |
| About me | `about.bio` (array of paragraphs) |
| Skills | `about.skills` (array of strings) |
| Projects | `projects` array — add/remove objects |
| Experience | `experience` array — add/remove objects |

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free, Recommended)
1. Create a repo named `yourusername.github.io`
2. Upload `index.html` and `config.js`
3. Go to Settings → Pages → Deploy from branch → main
4. Your site is live at `https://yourusername.github.io`

### Option 2: Netlify (Free, Drag & Drop)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your `portfolio/` folder onto the Netlify dashboard
3. Done — you'll get a free `*.netlify.app` URL instantly

### Option 3: Vercel (Free)
1. Push to a GitHub repo
2. Import at [vercel.com/new](https://vercel.com/new)
3. Click Deploy — live in seconds

### Option 4: Cloudflare Pages (Free)
1. Push to GitHub
2. Connect at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Done — global CDN included for free

---

## 🎨 Customizing Colors

In `index.html`, find the `:root` CSS block and change these variables:

```css
--accent: #6c63ff;      /* Main purple — change to your color */
--accent2: #ff6b9d;     /* Pink highlight */
--accent3: #43e9b8;     /* Teal highlight */
--bg: #0a0a0f;          /* Background dark */
```

---

## 💡 Tips

- To **add a project**, copy an existing object in the `projects` array and fill in your details
- Set `featured: true` to show it in the "Featured" filter tab
- Use a real image URL in `avatar` for a professional look
- Leave `social.dribbble: ""` (empty string) to hide that button

---

Built with vanilla HTML, CSS, and JavaScript — zero dependencies, instant load.
