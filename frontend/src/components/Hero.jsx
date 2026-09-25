import React from 'react';
import { Calendar, Sparkles, ShieldCheck, Award, Star, ArrowUpRight, Droplets, Zap } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section style={{
      position: 'relative',
      padding: '40px 0 70px',
      background: 'linear-gradient(180deg, rgba(239, 228, 217, 0.45) 0%, rgba(250, 246, 241, 1) 100%)',
      overflow: 'hidden'
    }}>
      {/* Decorative Terracotta Ambient Blurs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197, 152, 113, 0.22) 0%, rgba(197, 152, 113, 0) 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Floating Animated Skincare Dewdrops */}
      <div className="dewdrop-bubble" style={{ width: '35px', height: '35px', top: '10%', left: '4%', animationDelay: '0.5s' }} />
      <div className="dewdrop-bubble" style={{ width: '22px', height: '22px', top: '70%', left: '8%', animationDelay: '2.5s' }} />
      <div className="dewdrop-bubble" style={{ width: '30px', height: '30px', top: '22%', right: '6%', animationDelay: '1.8s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Copy & CTAs */}
          <div>
            <div className="badge" style={{ marginBottom: '16px' }}>
              <Sparkles size={13} color="#C59871" />
              <span>Cosmetic Dermatology &bull; Laser &bull; Hair Regrowth</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 6.5vw, 4.2rem)',
              lineHeight: 1.12,
              marginBottom: '20px',
              color: '#121212',
              fontWeight: 700
            }}>
              Where Science Meets <span className="shimmer-text" style={{ 
                fontStyle: 'italic',
                fontWeight: 600
              }}>Luxe Aesthetics</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.98rem, 2.5vw, 1.12rem)',
              color: '#554F4A',
              marginBottom: '28px',
              maxWidth: '540px',
              lineHeight: 1.65
            }}>
              Personalized, US-FDA medical grade skin, laser, and world-class hair regrowth treatments led by <strong>Dr. Kenin A. Jadvani</strong> in Yogi Chowk, Surat.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <button 
                onClick={() => onOpenBooking()}
                className="btn btn-primary mobile-btn-full"
                style={{ padding: '14px 30px', fontSize: '0.95rem' }}
              >
                <Calendar size={18} /> Book Your Appointment
              </button>
              <a 
                href="#treatments" 
                className="btn btn-outline mobile-btn-full"
                style={{ padding: '14px 26px', fontSize: '0.95rem' }}
              >
                View Treatments <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Skincare Animated Feature Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span className="skincare-float-1" style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(197, 152, 113, 0.35)',
                borderRadius: '30px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#121212',
                boxShadow: '0 3px 10px rgba(197, 152, 113, 0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Droplets size={13} color="#C59871" /> Deep Hydra Infusion
              </span>

              <span className="skincare-float-2" style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(197, 152, 113, 0.35)',
                borderRadius: '30px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#121212',
                boxShadow: '0 3px 10px rgba(197, 152, 113, 0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Zap size={13} color="#C59871" /> 4-Wavelength Diode
              </span>

              <span className="skincare-float-3" style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(197, 152, 113, 0.35)',
                borderRadius: '30px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#121212',
                boxShadow: '0 3px 10px rgba(197, 152, 113, 0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Sparkles size={13} color="#C59871" /> Stem Cell PRP
              </span>
            </div>

            {/* Trust Badges Responsive Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '16px',
              borderTop: '1px solid rgba(197, 152, 113, 0.25)',
              paddingTop: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59871',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#121212' }}>US-FDA Tech</div>
                  <div style={{ fontSize: '0.72rem', color: '#7E7771' }}>Proven Safety</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59871',
                  flexShrink: 0
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#121212' }}>15,000+ Cured</div>
                  <div style={{ fontSize: '0.72rem', color: '#7E7771' }}>Transformations</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59871',
                  flexShrink: 0
                }}>
                  <Star size={18} fill="#C59871" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#121212' }}>4.9/5 Rating</div>
                  <div style={{ fontSize: '0.72rem', color: '#7E7771' }}>Google Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Glowing Aura */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(163, 117, 80, 0.22)',
              border: '4px solid #FFFFFF'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxe Skin Clinic Modern Aesthetic Suite" 
                style={{
                  width: '100%',
                  height: 'clamp(280px, 50vw, 480px)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.05) 40%, rgba(18, 18, 18, 0.75) 100%)'
              }} />

              {/* Floating Treatment Tag Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(197, 152, 113, 0.4)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#A37550', fontWeight: 700 }}>
                    Certified Clinic Menu
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#121212' }}>
                    Diode Laser & Hair Regrowth
                  </div>
                </div>
                <button 
                  onClick={() => onOpenBooking('Diode Laser Hair Reduction')}
                  style={{
                    background: '#C59871',
                    color: '#FFF',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  Book
                </button>
              </div>
            </div>

            {/* Circular Logo Emblem Floating Badge */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '-12px',
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: '#C59871',
              padding: '3px',
              boxShadow: '0 10px 24px rgba(18, 18, 18, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              animation: 'pulseGlow 3s infinite'
            }}>
              <img 
                src="/logo.jpeg" 
                alt="Emblem" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
