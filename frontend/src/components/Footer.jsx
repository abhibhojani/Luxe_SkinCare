import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const InstagramIcon = ({ size = 18, color = "#C59871" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exact Google Maps coordinates for Luxe Skin Clinic (Yogi Chowk, Surat)
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=21.2111044,72.8896674";

  return (
    <footer style={{
      background: '#121212',
      color: '#EFE4D9',
      padding: '80px 0 30px',
      borderTop: '2px solid rgba(197, 152, 113, 0.3)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <img 
                src="/logo.jpeg" 
                alt="Luxe Skin Clinic" 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #C59871'
                }} 
              />
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '1px'
                }}>
                  LUXE SKIN CLINIC
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  letterSpacing: '2px',
                  color: '#C59871',
                  textTransform: 'uppercase'
                }}>
                  Laser &bull; Hair &bull; Physiotherapy
                </div>
              </div>
            </div>

            <p style={{ color: '#A09992', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Premier aesthetic dermatology, laser, hair restoration, and clinical physiotherapy led by Dr. Kenin Jadvani in Surat.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="https://www.instagram.com/luxe.skin.clinic.0702/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59871',
                  border: '1px solid rgba(197, 152, 113, 0.3)'
                }}
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="tel:+919662670946" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59871',
                  border: '1px solid rgba(197, 152, 113, 0.3)'
                }}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '18px'
            }}>
              Skin & Hair Treatments
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#A09992' }}>
              <a href="#treatments">Diode Laser Hair Reduction</a>
              <a href="#treatments">Q-Switched Nd:YAG & Carbon Peel</a>
              <a href="#treatments">Chemical Peeling & Bleaching Meso</a>
              <a href="#treatments">Derma Roller (Clinical Microneedling)</a>
              <a href="#treatments">RF Cautery (Moles, Warts & Tags)</a>
              <a href="#treatments">Hydra Facial & Microdermabrasion</a>
              <a href="#treatments">Instant Whitening & Medi-Facial</a>
              <a href="#treatments">Low Level Laser Therapy (LLLT)</a>
              <a href="#treatments">PRP Stem Cell Hair Regrowth</a>
              <a href="#treatments">Scalp Mesotherapy Nutrient Infusion</a>
            </div>
          </div>

          {/* Clinic Information */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '18px'
            }}>
              Clinic Information
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#A09992' }}>
              <div>
                <strong style={{ color: '#DFBF9F', display: 'block' }}>Consultant Cosmetologist:</strong>
                Dr. Kenin A. Jadvani (B.H.M.S, Msc. Skin Aesthetics & Trichology)
              </div>
              <div>
                <strong style={{ color: '#DFBF9F', display: 'block' }}>Clinical Timings:</strong>
                Mon &ndash; Sat: 9:30 AM &ndash; 7:30 PM<br />
                Sun: 10:00 AM &ndash; 1:00 PM
              </div>
              <div>
                <strong style={{ color: '#DFBF9F', display: 'block' }}>Appointments & WhatsApp:</strong>
                <a href="tel:+919662670946" style={{ color: '#C59871' }}>+91 96626 70946</a>
              </div>
              <div>
                <strong style={{ color: '#DFBF9F', display: 'block' }}>Clinic Landline:</strong>
                <a href="tel:02614395778" style={{ color: '#C59871' }}>(0261) 4395778</a>
              </div>
              <div>
                <strong style={{ color: '#DFBF9F', display: 'block' }}>Instagram:</strong>
                <a 
                  href="https://www.instagram.com/luxe.skin.clinic.0702/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#C59871' }}
                >
                  @luxe.skin.clinic.0702
                </a>
              </div>
            </div>
          </div>

          {/* Clickable Location Card in Footer */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '18px'
            }}>
              Clickable Location
            </div>
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(197, 152, 113, 0.3)',
                color: '#FAF6F1',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C59871', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                <MapPin size={16} /> Open in Google Maps
              </div>
              <div style={{ fontSize: '0.82rem', color: '#DFBF9F', lineHeight: 1.5 }}>
                401, Pavitra Point, Near Saundarya Heights, Savaliya Circle, Yogi Chowk, Surat - 395011
              </div>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '16px', padding: '12px' }}
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#7E7771'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Luxe Skin Clinic, Surat. All rights reserved. Dr. Kenin Jadvani.
          </div>
          <button 
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              color: '#C59871',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
