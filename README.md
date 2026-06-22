# NoSaveWA

A premium, highly interactive single-page web application that allows you to start WhatsApp chats with any phone number without saving them to your device contacts. Perfect for quick messages, business outreach, and messaging temporary contacts.

🌐 **Demo / Deployment target**: Ready to deploy on [Vercel](https://vercel.com).

## Key Features

- 📱 **Quick Direct Messaging**: Enter any number, press "Start Chat", and open WhatsApp Web/App immediately.
- 🏳️ **Interactive Country Code Picker**: Beautiful country list with flags, codes, and an instant search filter.
- ✍️ **Optional Pre-filled Message templates**: Pre-write a message which will be encoded and loaded directly into the WhatsApp textbox.
- 🔗 **Instant Link Generation & Sharing**: Generate custom `wa.me` links with a single click. Copy them instantly with clean active feedback.
- 🏁 **Dynamic QR Code Generator**: Instantly generate clean, high-density QR codes for scanning on mobile devices, complete with high-quality canvas download.
- 💾 **Local Chat History & Custom Notes**: Save recently messaged numbers in secure, browser-native LocalStorage. Add custom contact names/notes (e.g. "John - Plumber") that persist across visits.
- 🌓 **Persisted Dark & Light Modes**: Seamless theme transitioning matching WhatsApp's official design system (Light/Dark themes). Fully matches system preference by default.
- 🚀 **Ultra-lightweight & Secure**: Written entirely in vanilla HTML5, CSS3, and JavaScript. No tracking, cookies, or database dependencies. Zero server-side data collection.

## Tech Stack

- **Structure**: Semantic HTML5
- **Style**: Custom Vanilla CSS3 (responsive grid, CSS custom properties, glassmorphism UI)
- **Logic**: Vanilla ES6+ Javascript
- **QR Engine**: [QRious Library](https://github.com/neocotic/qrious) (lightweight, client-side QR renderer, loaded via CDNJS)
- **Deployment**: Configured for Vercel Static Hosting (`vercel.json`)

## Directory Structure

```
NoSaveWA/
├── .gitignore         # Prevents committing temporary OS and editor configurations
├── vercel.json        # Configures clean URLs and security headers for Vercel
├── index.html         # Main page skeleton and SVG icons
├── styles.css         # Custom stylesheet (colors, modes, transitions, responsive layouts)
├── app.js             # Core logic (validations, URL compiling, history manager)
└── README.md          # Project documentation
```

## How to Run Locally

You can run this project locally without any complex build steps.

### Method 1: Python HTTP Server (Recommended)
If you have Python installed, open your terminal in this directory and run:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Method 2: Node.js static server
If you have `npx` installed, run:
```bash
npx serve .
```

### Method 3: Direct Open
Since it is a purely static site, you can also double-click on `index.html` to open it directly in any browser (though some local storage features work better over `http://` localhost).

## How to Deploy to Vercel

This project is fully ready for Vercel deployment. 

### Method 1: Vercel CLI (Quickest)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command inside the NoSaveWA folder:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy. To deploy directly to production, run:
   ```bash
   vercel --prod
   ```

### Method 2: Git Integration (Recommended for Continuous Deployment)
1. Push this folder to a new repository on GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and import your Git repository.
4. Vercel will automatically detect it as a static project. Click **Deploy**.
5. Custom domains or subdomains (like `whatsapp.vercel.app`) can be linked in the project settings under the **Domains** tab.
