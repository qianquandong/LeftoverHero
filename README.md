# 🥗 FridgeEmptier - Don't Waste It, Taste It.

![FridgeEmptier Logo Placeholder - Replace with your actual logo](https://placehold.co/600x150/50C878/FFFFFF/png?text=FridgeEmptier)

**FridgeEmptier** is an intelligent recipe recommendation web application designed to help you easily utilize ingredients in your fridge, reduce food waste, and inspire your cooking creativity. Simply select the ingredients you have, and we'll instantly match you with delicious recipes from around the world!

## ✨ Features

* **Smart Ingredient Selection:** Quickly select vegetables, meats, dairy products, and staples from your fridge.
* **Instant Recipe Matching:** Get instant recommendations for the most feasible recipes based on your selected ingredients.
* **Fuzzy/Strict Matching:** Supports "Strict Match" mode (only shows recipes with all ingredients) and "Fuzzy Match" mode (shows recipes missing a few common ingredients).
* **Reduce Waste:** Core philosophy is to fully utilize leftover ingredients and promote sustainable living.

## 🛠️ Tech Stack

This project is built with modern frontend technologies to provide a fast, efficient, and maintainable development experience.

* **Framework:** [Vite](https://vitejs.dev/) - Lightning-fast frontend build tool.
* **Language:** [TypeScript](https://www.typescriptlang.org/) - Enhanced code quality and maintainability.
* **UI Framework:** [React](https://react.dev/) - JavaScript library for building user interfaces.
* **Routing:** [React Router](https://reactrouter.com/) - Declarative routing management.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
* **Internationalization:** [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) - For text management and future localization support.
* **Icons:** [Lucide React](https://lucide.dev/) - Beautiful icon library.
* **Deployment:** Static deployment on [SiteGround](https://www.siteground.com/).
* **Domain:** [leftoverhero.com](https://leftoverhero.com)
* **Data Source:** Integrating recipe data from open platforms like [TheMealDB](https://www.themealdb.com/api.php).

## 🚀 Getting Started

### Prerequisites

* Node.js (version 18 or higher recommended)
* npm or yarn package manager

### 1. Local Installation

Clone the project to your local machine and install dependencies:

```bash
# Clone the repository
git clone [your-repository-url] fridge-emptier
cd fridge-emptier

# Install dependencies
npm install
# or
yarn install
```

### 2. Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:3000`.

### 3. Build for Production

Build an optimized version for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `out` directory.

### 4. Preview Production Build

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
LeftoverHero/
├── src/
│   ├── pages/          # Page components
│   │   ├── home/       # Home page
│   │   └── NotFound.tsx
│   ├── router/         # Route configuration
│   ├── i18n/           # Internationalization configuration
│   │   └── locales/    # Translation files
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry file
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Project dependencies
```

## 🌍 Internationalization

The project uses i18next for text management. Currently, the application is set to English by default. Translation files are located in the `src/i18n/locales/` directory.

## 📝 Development Notes

* The project uses TypeScript for type checking
* Uses ESLint for code quality checks
* Uses Tailwind CSS for styling
* Uses React Router for route management

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

[Add your license information here]

## 🔗 Related Links

* [TheMealDB API](https://www.themealdb.com/api.php) - Free recipe API
* [Vite Documentation](https://vitejs.dev/)
* [React Documentation](https://react.dev/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Make every ingredient count, make every meal creative!** 🍳✨
