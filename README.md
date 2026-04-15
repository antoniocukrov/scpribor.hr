# SCPRIBOR Website

Static React marketing website for `scpribor.hr`, built with Vite and Tailwind CSS.

## Stack

- React
- React Router
- Tailwind CSS
- Vite

## Pages

- Home
- O nama
- Proizvodi
- Usluge
- Kontakt

## Why this setup

This version is easier to deploy on cPanel shared hosting because it builds into plain static files.

Routing is handled with `HashRouter`, so navigation works without Apache rewrite rules.

## Local setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Run `npm run build` for production output.

## cPanel deployment

This project also supports deployment through cPanel Git Version Control.

1. Build the project with `npm run build`.
2. Commit the generated `dist` folder together with the source code.
3. Push the repository to GitHub or another Git remote.
4. In cPanel, clone the repository with `Git Version Control`.
5. Use `Pull or Deploy` to run the tasks from `.cpanel.yml`, which copy `dist` into `public_html`.

See [DEPLOYMENT.md](/C:/Users/anton/Documents/ScpriborDevelopment/DEPLOYMENT.md) for the full setup.

## Notes

- The contact form currently uses `mailto:` and opens the visitor's email client.
- If you later want clean URLs without `#`, you can switch from `HashRouter` to `BrowserRouter` and add `.htaccess` rewrites on the server.
