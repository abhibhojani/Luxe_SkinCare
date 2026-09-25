import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import DoctorSection from './components/DoctorSection';
import ClickableLocation from './components/ClickableLocation';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileBottomBar from './components/MobileBottomBar';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const handleOpenBooking = (treatment = '') => {
    setSelectedTreatment(treatment);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  // Google OAuth client ID (user can easily replace or provide their own)
  const googleClientId = "199749654862-dh29bgigfukhdb5k0qkb2svihh5mant1.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="luxe-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Hero Section */}
        <main style={{ flexGrow: 1 }}>
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* About Quick Philosophy Strip */}
          <section id="about" style={{
            background: '#121212',
            color: '#FAF6F1',
            padding: '50px 0',
            borderTop: '1px solid rgba(197, 152, 113, 0.3)',
            borderBottom: '1px solid rgba(197, 152, 113, 0.3)'
          }}>
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '30px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#C59871', fontWeight: 700 }}>
                    100% Doctor-Led
                  </div>
                  <div style={{ color: '#DFBF9F', fontSize: '0.85rem', marginTop: '6px' }}>
                    Every treatment protocol is personally customized and monitored by senior doctors.
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#C59871', fontWeight: 700 }}>
                    Sterile Medical Spa
                  </div>
                  <div style={{ color: '#DFBF9F', fontSize: '0.85rem', marginTop: '6px' }}>
                    Hospital-grade sanitation standards in a tranquil, sensory-soothing ambiance.
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#C59871', fontWeight: 700 }}>
                    US-FDA Certified
                  </div>
                  <div style={{ color: '#DFBF9F', fontSize: '0.85rem', marginTop: '6px' }}>
                    Equipped with globally celebrated dermatological laser systems & biologics.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Treatments Section */}
          <Treatments onSelectTreatment={(treatmentTitle) => handleOpenBooking(treatmentTitle)} />

          {/* Doctor Spotlight */}
          <DoctorSection onOpenBooking={(treatmentTitle) => handleOpenBooking(treatmentTitle)} />

          {/* Clickable Location & Contact Info */}
          <ClickableLocation />

        </main>

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Booking Modal with Google Auth */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialTreatment={selectedTreatment}
        />

        {/* Floating Quick Actions for Mobile Visitors */}
        <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
      </div>
    </GoogleOAuthProvider>
  );
}
