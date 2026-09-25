import React from 'react';
import { Award, GraduationCap, CheckCircle2, HeartHandshake, Calendar, Phone } from 'lucide-react';

export default function DoctorSection({ onOpenBooking }) {
  return (
    <section id="doctor" style={{
      padding: '100px 0',
      background: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Doctor Portrait Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(18, 18, 18, 0.12)',
              border: '4px solid #FAF6F1',
              position: 'relative'
            }}>
              <img 
                src="/doctor.jpeg" 
                alt="Dr. Kenin A. Jadvani - Consultant Cosmetologist" 
                style={{
                  width: '100%',
                  height: 'clamp(320px, 55vw, 520px)',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.9) 100%)',
                padding: '24px 20px',
                color: '#FFF'
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700 }}>
                  Dr. Kenin A. Jadvani
                </div>
                <div style={{ fontSize: '0.82rem', color: '#DFBF9F', letterSpacing: '0.5px' }}>
                  B.H.M.S &bull; Consultant Cosmetologist &bull; Msc. Skin Aesthetics & Trichology
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#121212',
              color: '#FAF6F1',
              padding: '12px 18px',
              borderRadius: '14px',
              boxShadow: '0 12px 30px rgba(18, 18, 18, 0.25)',
              border: '1px solid #C59871',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', fontWeight: 700, color: '#C59871', lineHeight: 1 }}>
                Luxe
              </div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>
                Expert Care
              </div>
            </div>
          </div>

          {/* Doctor Info & Bio */}
          <div>
            <span className="section-tag">Clinical Leadership</span>
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              Meet Dr. Kenin A. Jadvani
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#554F4A',
              marginBottom: '16px',
              lineHeight: 1.7
            }}>
              <strong>Dr. Kenin A. Jadvani</strong> (B.H.M.S, Consultant Cosmetologist, Msc. Skin Aesthetics & Trichology) is the founding medical director and chief cosmetologist at <strong>Luxe Skin Clinic</strong> in Yogi Chowk, Surat.
            </p>

            <p style={{
              fontSize: '0.96rem',
              color: '#6E6761',
              marginBottom: '24px',
              lineHeight: 1.6
            }}>
              Specializing in US-FDA 4-wavelength laser hair reduction, Q-Switched Nd:YAG laser rejuvenation, clinical chemical peels, and advanced PRP stem-cell hair regrowth protocols, Dr. Jadvani brings world-class aesthetic dermatology and trichology directly to patients across Surat.
            </p>

            {/* Credentials / Accreditations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A37550'
                }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#121212' }}>Msc. Skin Aesthetics & Trichology (B.H.M.S)</div>
                  <div style={{ fontSize: '0.8rem', color: '#7E7771' }}>Specialist in hair regrowth and clinical dermal rejuvenation</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A37550'
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#121212' }}>Advanced US-FDA Technology</div>
                  <div style={{ fontSize: '0.8rem', color: '#7E7771' }}>Medical-grade laser, PRP, and body contouring devices</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(197, 152, 113, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A37550'
                }}>
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#121212' }}>Ethical, Honest Diagnosis</div>
                  <div style={{ fontSize: '0.8rem', color: '#7E7771' }}>Clear guidance on skin health, nutrition, and daily care</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBooking('Consultation with Dr. Kenin Jadvani')}
                className="btn btn-primary"
                style={{ padding: '14px 30px' }}
              >
                <Calendar size={18} /> Schedule Consultation with Dr. Kenin
              </button>
              <a
                href="tel:+919662670946"
                className="btn btn-outline"
                style={{ padding: '14px 26px' }}
              >
                <Phone size={18} /> Call +91 96626 70946
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
