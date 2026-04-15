# cPanel Git deployment

Ovaj projekt je pripremljen za deploy preko cPanel `Git Version Control` alata.

## Preporuceni flow

1. Lokalno napravis build projekta tako da generiras `dist/`.
2. Commitas source kod i sadrzaj `dist/` u git repozitorij.
3. Pushas repozitorij na GitHub ili drugi remote koji cPanel moze povuci.
4. U cPanelu otvoris `Git Version Control` i kreiras ili kloniras repozitorij.
5. Nakon `Pull or Deploy`, cPanel ce procitati [`.cpanel.yml`](/C:/Users/anton/Documents/ScpriborDevelopment/.cpanel.yml) i kopirati sadrzaj `dist/` u `public_html`.

## Zasto je ovako postavljeno

Shared hosting cesto nema Node.js build pipeline na istoj lokaciji gdje radi Git deployment. Zato je najsigurnije:

- build raditi lokalno
- u repozitorij pushati i gotovi `dist/`
- na cPanelu samo kopirati staticke fajlove u `public_html`

## Vazno prije prvog deploya

- U `.cpanel.yml` je trenutno postavljen `DEPLOYPATH=/home/scpribor/public_html/`
- Ako je tvoj cPanel korisnik drugaciji od `scpribor`, promijeni taj path
- Ako deployas addon domenu ili poddirektorij, promijeni i ciljnu mapu

## Prvi deploy

1. Instaliraj Git i Node.js lokalno ako jos nisu instalirani.
2. U rootu projekta pokreni:

```powershell
npm install
npm run build
git init
git add .
git commit -m "Initial site setup"
git branch -M main
git remote add origin git@github.com:antoniocukrov/scpribor.hr.git
git push -u origin main
```

3. U cPanelu:

```text
Git Version Control -> Create
Clone URL -> git@github.com:antoniocukrov/scpribor.hr.git
Repository Path -> ostavi izvan public_html
Branch -> main
```

4. Nakon clonea klikni `Pull or Deploy`.

## Daljnje izmjene

Kod svake promjene:

1. `npm run build`
2. `git add .`
3. `git commit -m "Opis promjene"`
4. `git push`
5. U cPanelu `Pull or Deploy`

Ako zelis, sljedeci korak mogu ti pripremiti i:

- tocan `.cpanel.yml` prema tvom cPanel usernameu
- `.github/workflows` da GitHub automatski builduje `dist`
- jednostavan deploy flow bez commitanja `node_modules` i bez rucnog kopiranja
