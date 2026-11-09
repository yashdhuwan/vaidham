import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { VaidhamAIModal } from './components/VaidhamAIModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { QualityStandardsPage } from './pages/QualityStandardsPage';
import { AuthenticityPage } from './pages/AuthenticityPage';
import { WellnessDeskPage } from './pages/WellnessDeskPage';
import { LibraryPage } from './pages/LibraryPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';

const AppContent: React.FC = () => {
  const { currentView } = useCart();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'story':
        return <OurStoryPage />;
      case 'quality':
        return <QualityStandardsPage />;
      case 'authenticity':
        return <AuthenticityPage />;
      case 'wellness-desk':
        return <WellnessDeskPage />;
      case 'library':
        return <LibraryPage />;
      case 'article-detail':
        return <ArticleDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'track-order':
        return <TrackOrderPage />;
      case 'faq':
        return <FaqPage />;
      case 'legal':
        return <LegalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] text-[#242A26]">
      {/* Slim Top Announcement Bar */}
      <AnnouncementBar />

      {/* Top Bar Contract Navigation */}
      <Header />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Vaidham AI Ayurvedic Consultation Modal */}
      <VaidhamAIModal />

      {/* Floating WhatsApp Support Launcher */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
