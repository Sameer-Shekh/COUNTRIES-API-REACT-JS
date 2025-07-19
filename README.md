# 🌍 Countries API React App

A modern, responsive React.js application that displays information about countries around the world using the REST Countries API. Features include search functionality, region filtering, detailed country views, and a sleek dark/light theme toggle.

## ✨ Features

- **🔍 Search Functionality**: Search for countries by name with real-time filtering
- **🌎 Region Filtering**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **📄 Detailed Country Views**: Click on any country to view detailed information including:
  - Population, region, and sub-region
  - Capital city(ies)
  - Native name and languages
  - Currencies and top-level domains
  - Border countries with navigation
- **⚡ Loading States**: Shimmer loading effects for better UX
- **🚀 Fast Performance**: Optimized with custom hooks and memoization
- **📍 Client-side Routing**: Smooth navigation with React Router

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with latest features
- **React Router DOM 6.30.1** - Client-side routing
- **Parcel 2.15.2** - Fast, zero-configuration build tool
- **REST Countries API** - Country data source
- **CSS3** - Custom styling with CSS variables for theming
- **Font Awesome** - Icons for enhanced UI
- **Google Fonts (Nunito)** - Typography

## 🏗️ Project Structure

```
13_COUNTRIES_API/
├── components/
│   ├── Contact.jsx          # Contact page component
│   ├── CountriesList.jsx    # Main countries list display
│   ├── CountryCard.jsx      # Individual country card
│   ├── CountryDetail.jsx    # Detailed country view
│   ├── CountryDetail.css    # Styles for country detail page
│   ├── CountryDetailShimmer.jsx    # Loading skeleton for detail page
│   ├── CountryDetailShimmer.css    # Shimmer styles for detail page
│   ├── CountryListShimmer.jsx      # Loading skeleton for countries list
│   ├── CountryListShimmer.css      # Shimmer styles for list
│   ├── Error.jsx            # Error boundary component
│   ├── Header.jsx           # Navigation header with theme toggle
│   ├── Homes.jsx           # Home page component
│   ├── SearchBar.jsx       # Search input component
│   ├── SelectMenu.jsx      # Region filter dropdown
│   └── Test.jsx            # Test component (useReducer example)
├── contexts/
│   └── ThemeContext.js     # Theme context for dark/light mode
├── hooks/
│   ├── useFilter.js        # Custom hook for filtering countries
│   ├── useTheme.js         # Custom hook for theme management
│   └── useWindowSize.js    # Custom hook for responsive behavior
├── App.jsx                 # Main app component
├── App.css                 # Global styles and theming
├── index.jsx              # Application entry point with routing
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sameer-Shekh/COUNTRIES-API-REACT-JS.git
   cd COUNTRIES-API-REACT-JS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Or to start with browser auto-open:
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start development server with auto-open
- `npm run build` - Build for production

## 🔧 Key Components

### App Component
The main application wrapper that provides theme context and routing structure.

### Header Component
- Displays the app title "Where in the world?"
- Theme toggle button with icon and text
- Persistent theme preference using localStorage

### Home Component
- Search and filter container
- Countries list display
- Theme-aware styling

### CountriesList Component
- Fetches data from REST Countries API
- Implements search and region filtering
- Shows loading skeletons while data loads
- Responsive grid layout

### CountryCard Component
- Displays country flag, name, population, region, and capital
- Clickable card that navigates to detailed view
- Hover effects and smooth transitions

### CountryDetail Component
- Comprehensive country information
- Border countries with clickable navigation
- Back button functionality
- Responsive layout for mobile devices

## 🎨 Styling Features

- **CSS Variables**: Dynamic theming with CSS custom properties
- **Responsive Design**: Mobile-first approach with media queries
- **Dark/Light Theme**: Complete theme switching capability
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Shimmer effects for better perceived performance

## 🌐 API Integration

The app integrates with the [REST Countries API](https://restcountries.com/) to fetch:
- All countries data with specific fields
- Individual country details by name
- Border country information by alpha codes

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full grid layout with sidebar filters
- **Tablet**: 768px - Adjusted grid and stacked filters
- **Mobile**: < 768px - Single column layout with stacked components

## 🔍 Custom Hooks

### useTheme
Manages dark/light theme state with localStorage persistence.

### useFilter
Optimized filtering logic using useMemo for performance.

### useWindowSize
Tracks window dimensions for responsive behavior.

## 🚀 Performance Optimizations

- **Memoization**: useMemo for expensive filtering operations
- **Lazy Loading**: Shimmer components for perceived performance
- **Optimized Builds**: Parcel bundler for efficient production builds
- **API Optimization**: Selective field fetching from REST Countries API

## 🎯 Future Enhancements

- [ ] Add favorites functionality
- [ ] Implement country comparison feature
- [ ] Add map integration
- [ ] Include historical data
- [ ] Add unit tests
- [ ] Implement offline support with service workers

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing the data
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the Nunito font family
- React community for the amazing ecosystem

## 📞 Contact

**Sameer Shekh** - [GitHub Profile](https://github.com/Sameer-Shekh)

Project Link: [https://github.com/Sameer-Shekh/COUNTRIES-API-REACT-JS](https://github.com/Sameer-Shekh/COUNTRIES-API-REACT-JS)

---

⭐ **Don't forget to give the project a star if you found it helpful!**
