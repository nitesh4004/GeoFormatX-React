# GeoFormatX Pro - React + Vercel Edition

A modern web application for geographic data format conversion, interactive mapping, and vector geospatial analysis. This is a React/TypeScript reimplementation of the original Streamlit-based GeoFormatX application.

## Features

### 1. **Administrative Boundaries Module**
- Download and filter geographic boundaries by state, district, subdistrict, and village level
- Support for multiple output formats (Shapefile, GeoJSON, KML, GeoPackage)
- Interactive map visualization with Google Hybrid tiles
- Attribute table viewing for detailed boundary information

### 2. **Postal Code Boundaries**
- Search and filter by pincode
- Direct postal boundary queries
- Multiple format export options
- Interactive map display

### 3. **Parliament Boundaries (Lok Sabha)**
- Filter by state, reservation status, and constituency name
- Search by PC code
- Download constituency boundaries in various formats
- Interactive mapping of parliament regions

### 4. **River Network Analysis**
- Select river basins and individual rivers
- Calculate total river length
- Segment count statistics
- Download river data for analysis

### 5. **Universal Format Converter**
- Support for ZIP, SHP, KML, GPKG, CSV, XLSX formats
- Convert between different geospatial formats
- CRS/EPSG transformation
- Geometry creation from coordinates (LatLon, WKT)

### 6. **Vector Calculator**
- **Geoprocessing**: Buffer, Convex Hull, Dissolve
- **Geometry Operations**: Centroids, Simplify, Explode, Fix Geometries
- **Analysis**: Statistics, Bounding Box, Mean Coordinate
- **Overlay Operations**: Intersection, Difference, Union, Spatial Join
- **Data Management**: Reproject, Merge

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Mapping**: Leaflet + React-Leaflet
- **Geospatial**: Turf.js, Shapely-js, GeoPandas-js
- **State Management**: Zustand/Context API
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Vercel

## Project Structure

```
GeoFormatX-React/
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── AdminBoundaries/
│   │   ├── PostalCodes/
│   │   ├── ParliamentBoundaries/
│   │   ├── RiverAnalysis/
│   │   ├── FormatConverter/
│   │   ├── VectorCalculator/
│   │   ├── MapViewer/
│   │   └── Navigation/
│   ├── hooks/
│   │   ├── useGeoData.ts
│   │   ├── useMapState.ts
│   │   └── useGeometryOps.ts
│   ├── utils/
│   │   ├── geoProcessing.ts
│   │   ├── fileHandlers.ts
│   │   ├── coordinateUtils.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── geospatial.ts
│   ├── store/
│   │   └── appStore.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vercel.json
└── README.md
```

## Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/nitesh4004/GeoFormatX-React.git
cd GeoFormatX-React
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

## Deployment on Vercel

### Automatic Deployment

1. **Connect your GitHub repository**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import the GeoFormatX-React repository

2. **Configure build settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Access your deployed app at: `https://geoformatx-react.vercel.app`

### Manual Deployment (Using Vercel CLI)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Data Sources

The application uses geographic data from multiple sources:
- Administrative boundaries from Google Drive hosted datasets
- Parliament constituency data for India (Lok Sabha)
- River network data from geographic repositories
- Postal code boundaries for Indian regions

## API Integration

The app fetches geospatial data from:
- Google Drive API (via direct download links)
- GeoJSON endpoints
- Local file uploads

## Environment Variables

Create a `.env.local` file:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=GeoFormatX-React
```

## Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types

# Testing
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run coverage     # Generate coverage report
```

## Supported File Formats

**Input Formats:**
- Shapefile (.zip)
- GeoJSON (.geojson, .json)
- KML (.kml)
- GeoPackage (.gpkg)
- CSV (with coordinates)
- Excel (.xlsx)

**Output Formats:**
- ESRI Shapefile (zipped)
- GeoJSON
- KML
- GeoPackage

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers supported with responsive design

## Performance Optimization

- Code splitting with React.lazy
- Lazy loading of map tiles
- Efficient GeoJSON rendering
- Memoization of geometry operations
- Virtual scrolling for large attribute tables

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Changelog

### Version 1.0.0 (Initial Release)
- Initial React conversion from Streamlit
- All core modules implemented
- Vercel deployment configured
- TypeScript support
- Responsive UI with Tailwind CSS

## Acknowledgments

- Original GeoFormatX concept and Streamlit implementation
- Leaflet and React-Leaflet communities
- Turf.js for geometric calculations
- All contributors and users

## Support & Contact

- **Repository**: [GitHub](https://github.com/nitesh4004/GeoFormatX-React)
- **Live Demo**: [Vercel Deployment](https://geoformatx-react.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/nitesh4004/GeoFormatX-React/issues)
- **Author**: Nitesh Kumar

---

**Made with ❤️ for the geospatial community**
