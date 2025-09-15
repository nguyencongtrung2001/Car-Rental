# Car Rental Website 🚗

A modern, responsive car rental website built with React and Vite. This application provides a complete car rental experience with vehicle browsing, detailed car information, and booking functionality.

## 🌟 Features

### Core Functionality
- **Vehicle Catalog**: Browse through a wide selection of rental cars
- **Vehicle Categories**: Filter cars by type (Sedan, SUV, Sports, etc.)
- **Detailed Car Information**: View comprehensive car specifications and gallery
- **Booking System**: Interactive booking form with date selection
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with smooth animations

### Pages & Sections
- **Login Page**: User authentication interface
- **Home Page**: Hero section, features, statistics, and car selection
- **Vehicles Page**: Complete vehicle catalog with filtering
- **Car Details**: Individual car information with specifications
- **About Us**: Company information and customer reviews
- **Contact Us**: Contact information and inquiry form

### UI Components
- **Interactive Header**: Navigation with mobile menu support
- **Hero Section**: Eye-catching banner with booking form
- **Feature Cards**: Highlight key service benefits
- **Statistics Section**: Company achievements and numbers
- **Car Gallery**: Visual car selection interface
- **Download Section**: Mobile app promotion
- **Footer**: Comprehensive site links and contact info

## 🚀 Technologies Used

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: React Icons (Font Awesome, Ionicons, etc.)
- **Styling**: CSS3 with custom properties
- **Fonts**: Google Fonts (Roboto)

## 📦 Project Structure

```
src/
├── assets/
│   ├── brand/          # Brand logos (Toyota, BMW, etc.)
│   └── images/         # Car images and graphics
├── components/
│   ├── car/
│   │   └── InforCar.jsx    # Car detail component
│   ├── home/
│   │   ├── Car-Selection.jsx
│   │   ├── Connect.jsx
│   │   ├── Download.jsx
│   │   ├── Fact.jsx
│   │   ├── Feature.jsx
│   │   ├── Hero.jsx
│   │   └── StatsSection.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── css/
│   ├── car/            # Car-related styles
│   ├── home/           # Home page styles
│   ├── about.css
│   ├── contact.css
│   ├── footer.css
│   ├── header.css
│   ├── login.css
│   └── vehicles.css
├── data/
│   └── dataCar.jsx     # Car data and specifications
├── page/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Vehicles.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-rental-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Features Breakdown

### Vehicle Management
- **Car Data Structure**: Each car includes:
  - Basic info (name, price, type)
  - Specifications (gearbox, fuel, doors, seats, etc.)
  - Image gallery
  - Equipment list
  - Pricing details

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablet screens  
- **Desktop**: Full-featured desktop experience
- **Modern CSS**: Flexbox and Grid layouts

### User Experience
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Lazy loading for images
- **Interactive Elements**: Buttons, forms, and navigation
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Configuration

### Routing Configuration
The app uses React Router for navigation:
- `/` - Login page
- `/home` - Main homepage
- `/vehicles` - Vehicle catalog
- `/car/:id` - Individual car details
- `/about` - About us page
- `/contact` - Contact page

### Styling Architecture
- **Component-based CSS**: Each component has its own CSS file
- **Consistent Design System**: Unified color palette and typography
- **Responsive Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent CSS naming conventions
- Ensure responsive design for all components

### File Organization
- Keep components small and focused
- Separate concerns (logic, styling, data)
- Use meaningful file and folder names
- Maintain consistent import/export patterns

## 🎨 Design Features

- **Color Scheme**: Purple primary (#5937e0), Orange accent (#ff9e0c)
- **Typography**: Roboto font family
- **Icons**: React Icons library for consistency
- **Images**: High-quality car images with lazy loading
- **Animations**: Smooth transitions and hover effects

## 📈 Performance Optimizations

- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: React.lazy() for route-based splitting
- **Optimized Images**: Proper image sizing and formats
- **Minimal Dependencies**: Only essential packages included

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Built with ❤️ using React and Vite**
