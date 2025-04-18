# Platter Tech Landing Page

This is a modern landing page for Platter Tech built with 11ty and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Built with 11ty static site generator
- Styled with Tailwind CSS
- Bilingual support (Tamil and English)
- Modern and clean design
- Optimized for performance

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/platter-tech-landing.git
cd platter-tech-landing
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

To build the site for production, run:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
├── src/                # Source files
│   ├── _includes/      # Layout templates and partials
│   │   ├── layouts/    # Base layouts
│   │   └── partials/   # Reusable components
│   ├── assets/         # Static assets
│   │   ├── css/        # CSS files
│   │   ├── js/         # JavaScript files
│   │   └── images/     # Images
│   └── index.njk       # Home page
├── .eleventy.js        # 11ty configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Project dependencies and scripts
```

## Customization

### Tailwind CSS

To customize the styles, edit the `tailwind.config.js` file. You can add your own custom colors, fonts, and more.

### Content

The content is stored in the `src` directory. You can edit the `.njk` files to change the content.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [11ty](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Figma](https://figma.com/)
  npx tailwindcss -i ./src/css/main.css -o ./\_site/css/styles.css --watch
