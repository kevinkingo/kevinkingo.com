# kevinkingo.com

Source code for [kevinkingo.com](https://kevinkingo.com) - a minimalist academic website built with Next.js.

**Feel free to fork this repo and use it for your own academic website!** Just edit one config file to update all content.

## Features

- **Config-Driven**: All content in `public/config.ts`
- **Smart Filtering**: Custom publication filters (Featured, All, by Topic)
- **Rich Links**: Support for PDFs, project pages, code, awards
- **Static Export**: Fast, works anywhere

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

Edit `public/config.ts` to update:

### Personal Info
```typescript
export const config = {
  name: "Your Name",
  email: "your.email@university.edu",
  googleScholar: "https://scholar.google.com/...",
  photo: "/images/me.jpg",
  bio: `Your bio here...`,
  // ...
}
```

### Publications
```typescript
publications: [
  {
    id: "paper-id",
    title: "Paper Title",
    authors: "Author One, Your Name, Author Three",
    venue: "SIGGRAPH",
    year: "2025",
    image: "/images/2025_paper.png",
    links: [
      { type: "pdf", url: "https://..." },
      { type: "project", url: "https://..." },
      { type: "code", url: "https://github.com/..." }
    ],
    featured: true,
    tags: ["view synthesis"]
  }
]
```

### Filter Categories
```typescript
filterCategories: [
  { id: "featured", label: "Featured", filter: (pub) => pub.featured === true },
  { id: "all", label: "All", filter: () => true },
  { id: "relighting", label: "Relighting", filter: (pub) => pub.tags?.includes("relighting") }
]
```

### News
```typescript
news: [
  {
    date: "Jan 2025",
    text: "Paper accepted to CVPR!",
    link: "#paper-id" // Optional
  }
]
```

## Project Structure

```
├── app/
│   ├── globals.css       # Styles
│   ├── layout.tsx        # Layout
│   └── page.tsx          # Main page
├── public/
│   ├── config.ts         # ⭐ Edit this
│   └── images/           # Your images
└── package.json
```

## Build & Deploy

```bash
npm run build
```

Deploy the `out/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static host

## Tips

- **Images**: Use `YYYY_paper-id.png` naming
- **Author Names**: Your name will be auto-bolded
- **Bio Links**: Use HTML `<a href="...">links</a>`
- **Bio Formatting**: Single line break = space, double line break = new paragraph

## Tech Stack

- Next.js 15
- TypeScript 5
- Tailwind CSS 3

## License

MIT
