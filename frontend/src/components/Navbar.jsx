import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 14, color = "#C59871" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact Google Maps coordinates for Luxe Skin Clinic (Yogi Chowk, Surat)
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=21.2111044,72.8896674";
  const whatsappUrl = "https://wa.me/919662670946?text=Hello%20Dr.%20Kenin%20Jadvani,%20I%20would%20like%20to%20book%20a%20skin/hair%20consultation%20at%20Luxe%20Skin%20Clinic.";

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: '#121212',
        color: '#EFE4D9',
        fontSize: '0.78rem',
        padding: '7px 0',
        borderBottom: '1px solid rgba(197, 152, 113, 0.2)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={12} color="#C59871" /> Mon - Sat: 9:30 AM - 7:30 PM &bull; Sun: 10:00 AM - 1:00 PM
            </span>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#DFBF9F' }}
              className="mobile-hide"
            >
              <MapPin size={12} color="#C59871" /> Yogi Chowk, Surat
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a 
              href="https://www.instagram.com/luxe.skin.clinic.0702/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#EFE4D9' }}
            >
              <InstagramIcon size={13} color="#C59871" /> @luxe.skin.clinic.0702
            </a>
            <a 
              href="tel:+919662670946" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#C59871', fontWeight: 600 }}
            >
              <Phone size={12} /> +91 96626 70946
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(250, 246, 241, 0.96)' : 'rgba(250, 246, 241, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(197, 152, 113, 0.25)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 8px 30px rgba(18, 18, 18, 0.08)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: scrolled ? '10px 16px' : '14px 16px'
        }}>
          {/* Logo with Brand */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/logo.jpeg" 
              alt="Luxe Skin Clinic Logo" 
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 15px rgba(197, 152, 113, 0.35)',
                border: '2px solid #C59871'
              }} 
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#121212',
                lineHeight: 1
              }}>
                LUXE
              </div>
              <div style={{
                fontSize: '0.64rem',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#A37550',
                marginTop: '3px'
              }}>
                Skin &bull; Laser &bull; Hair &bull; Surat
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }} className="desktop-nav">
            <a href="#about" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1E1E1E' }}>About</a>
            <a href="#treatments" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1E1E1E' }}>Treatments</a>
            <a href="#doctor" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1E1E1E' }}>Dr. Kenin Jadvani</a>
            <a href="#reviews" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1E1E1E' }}>Results</a>
            <a href="#contact" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1E1E1E' }}>Location & Contact</a>
          </nav>

          {/* Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={() => onOpenBooking()}
              className="btn btn-primary mobile-hide"
              style={{ padding: '9px 20px', fontSize: '0.85rem' }}
            >
              <Calendar size={15} /> Book Appointment
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'rgba(197, 152, 113, 0.15)',
                border: '1px solid rgba(197, 152, 113, 0.4)',
                borderRadius: '8px',
                padding: '8px',
                color: '#121212',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Rich Aesthetics */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FAF6F1',
            padding: '24px 20px',
            borderTop: '1px solid rgba(197, 152, 113, 0.25)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }} className="animate-fade">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1rem', fontWeight: 600 }}>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '8px 0', borderBottom: '1px solid rgba(197, 152, 113, 0.15)' }}
              >
                About Luxe Clinic
              </a>
              <a 
                href="#treatments" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '8px 0', borderBottom: '1px solid rgba(197, 152, 113, 0.15)' }}
              >
                Skin & Hair Treatments
              </a>
              <a 
                href="#doctor" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '8px 0', borderBottom: '1px solid rgba(197, 152, 113, 0.15)' }}
              >
                Dr. Kenin A. Jadvani (Specialist)
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '8px 0', borderBottom: '1px solid rgba(197, 152, 113, 0.15)' }}
              >
                Patient Results & Reviews
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '8px 0', borderBottom: '1px solid rgba(197, 152, 113, 0.15)' }}
              >
                Clinic Location & Contact
              </a>
            </div>

            {/* Mobile Menu Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                <Calendar size={16} /> Book Clinic Appointment
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a 
                  href="tel:+919662670946" 
                  className="btn btn-outline"
                  style={{ padding: '10px', fontSize: '0.82rem', justifyContent: 'center' }}
                >
                  <Phone size={14} /> Call Doctor
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{
                    background: '#25D366',
                    color: '#FFF',
                    padding: '10px',
                    fontSize: '0.82rem',
                    justifyContent: 'center'
                  }}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
