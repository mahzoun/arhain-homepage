# arhain.mahzoun.me — Personal Portfolio

Personal portfolio website for Mohaddeseh Mahzoun — Game Designer & 3D Artist.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** CSS + Canvas API (particle background)
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts via next/font)
- **Deployment:** GitHub Pages or VPS (Nginx + Node.js)

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, 404)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Games, Art…)
│   └── ui/           # Reusable UI components
├── data/             # All site content (edit here!)
└── types/            # TypeScript interfaces
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

Output is in the `out/` directory (static HTML/CSS/JS).

## Editing Content

All site content lives in `src/data/`. No component files need to be touched.

| File | What it controls |
|------|-----------------|
| `src/data/site.ts` | Name, title, email, social links |
| `src/data/games.ts` | Game portfolio entries |
| `src/data/art.ts` | 3D art gallery entries |
| `src/data/experience.ts` | Work experience + certifications |
| `src/data/education.ts` | Education entries |
| `src/data/skills.ts` | Skills and categories |

## Adding Images

Place images in `public/images/`:
- Game covers: `public/images/games/`
- Art pieces: `public/images/art/`

Reference them in data files as `/images/games/my-image.jpg`.

## Deployment

### GitHub Pages

1. Set your repo to deploy from `gh-pages` branch or `Actions`.
2. In `next.config.ts`, add your `basePath` if deploying to a subfolder:
   ```ts
   basePath: "/repo-name",
   ```
3. Build and push the `out/` directory to `gh-pages`:

```bash
npm run build
npx gh-pages -d out
```

Or use a GitHub Actions workflow.

### VPS with Nginx

1. SSH into your VPS.
2. Install Nginx: `sudo apt install nginx`
3. Build locally: `npm run build`
4. Upload the `out/` folder to your server:
   ```bash
   rsync -avz out/ user@your-server:/var/www/arhain.mahzoun.me/
   ```
5. Configure Nginx:

```nginx
server {
    listen 80;
    server_name arhain.mahzoun.me;
    root /var/www/arhain.mahzoun.me;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

6. Enable HTTPS with Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d arhain.mahzoun.me
```

## Domain Setup

Point your DNS A record to your VPS IP, or CNAME to your GitHub Pages URL.

For GitHub Pages, create a `CNAME` file in `public/` with the domain:
```
arhain.mahzoun.me
```

## License

All rights reserved. © Mohaddeseh Mahzoun.
