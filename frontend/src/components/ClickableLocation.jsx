import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Clock, Navigation, CheckCircle } from 'lucide-react';

const InstagramIcon = ({ size = 18, color = "#C59871" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function ClickableLocation() {
  // Exact Google Maps coordinates for Luxe Skin Clinic (Yogi Chowk / Savaliya Circle, Surat)
  // Prevents mobile browsers from opening user's current GPS location
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=21.2111044,72.8896674";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=21.2111044,72.8896674";

  return (
    <section id="contact" style={{
      padding: '100px 0',
      background: '#FAF6F1',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag">Visit Our Clinic in Surat</span>
          <h2 className="section-heading">Location & Contact Details</h2>
          <p className="section-subtitle">
            Conveniently located at Yogi Chowk, Surat. Click on the location badge or map below for direct GPS navigation in Google Maps.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {/* Contact Details Card */}
          <div style={{
            background: '#121212',
            color: '#FAF6F1',
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(18, 18, 18, 0.18)',
            border: '1px solid rgba(197, 152, 113, 0.3)'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#C59871',
                marginBottom: '8px'
              }}>
                LUXE SKIN CLINIC
              </div>
              <p style={{ color: '#DFBF9F', fontSize: '0.9rem', marginBottom: '28px' }}>
                Laser &bull; Hair &bull; Physiotherapy &bull; Led by Dr. Kenin Jadvani
              </p>

              {/* Clickable Location Card with User's Exact Google Maps Link */}
              <a 
                href={googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1.5px solid rgba(197, 152, 113, 0.45)',
                  marginBottom: '28px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(197, 152, 113, 0.18)';
                  e.currentTarget.style.borderColor = '#C59871';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(197, 152, 113, 0.45)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#C59871',
                  color: '#121212',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={24} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#C59871', fontWeight: 700 }}>
                      Verified Location &bull; Click to Open Maps
                    </span>
                    <ExternalLink size={15} color="#C59871" />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFF', marginTop: '4px' }}>
                    401, Pavitra Point
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#DFBF9F', marginTop: '2px', lineHeight: 1.4 }}>
                    Near Saundarya Heights, Savaliya Circle, Yogi Chowk, Surat, Gujarat 395011
                  </div>
                  <div style={{
                    marginTop: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    color: '#C59871',
                    fontWeight: 700
                  }}>
                    <Navigation size={13} /> Open in Google Maps (GPS Navigation) &rarr;
                  </div>
                </div>
              </a>

              {/* Contact Numbers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <a 
                  href="tel:+919662670946" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#FAF6F1',
                    fontSize: '0.95rem'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(197, 152, 113, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C59871'
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#A37550' }}>Primary Appointments Line (Mobile / WhatsApp)</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFF' }}>+91 96626 70946</div>
                  </div>
                </a>

                <a 
                  href="tel:02614395778" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#FAF6F1',
                    fontSize: '0.95rem'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(197, 152, 113, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C59871'
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#A37550' }}>Clinic Landline</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFF' }}>(0261) 4395778</div>
                  </div>
                </a>

                {/* Instagram Handle */}
                <a 
                  href="https://www.instagram.com/luxe.skin.clinic.0702/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#FAF6F1',
                    fontSize: '0.95rem'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(197, 152, 113, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C59871'
                  }}>
                    <InstagramIcon size={20} color="#C59871" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#A37550' }}>Official Instagram Handle</div>
                    <div style={{ fontWeight: 700, color: '#C59871', fontSize: '1.05rem' }}>@luxe.skin.clinic.0702</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '0.85rem',
              color: '#DFBF9F'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontWeight: 600 }}>
                  <Clock size={15} color="#C59871" /> Mon &ndash; Sat Timings:
                </span>
                <span style={{ color: '#C59871', fontWeight: 700 }}>9:30 AM &ndash; 7:30 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF', fontWeight: 600 }}>
                  <Clock size={15} color="#C59871" /> Sunday Timings:
                </span>
                <span style={{ color: '#C59871', fontWeight: 700 }}>10:00 AM &ndash; 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(197, 152, 113, 0.3)',
            boxShadow: '0 10px 30px rgba(18, 18, 18, 0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Clickable Map Link Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(197, 152, 113, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              background: '#FAF6F1'
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#121212' }}>Interactive Clinic Map</div>
                <div style={{ fontSize: '0.78rem', color: '#7E7771' }}>Savaliya Circle, Yogi Chowk, Surat</div>
              </div>
              <a 
                href={directionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                <Navigation size={13} /> GPS Directions
              </a>
            </div>

            {/* Google Map Embedded Iframe with precise pin at Luxe Skin Clinic coordinates */}
            <div style={{ width: '100%', height: '100%', minHeight: 'clamp(260px, 45vw, 380px)', position: 'relative' }}>
              <iframe
                title="Luxe Skin Clinic Surat Location"
                src="https://maps.google.com/maps?q=21.2111044,72.8896674&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
