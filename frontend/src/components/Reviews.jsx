import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Sneha Patel',
    role: 'Diode Laser Hair Reduction Client',
    text: "The results after 4 sessions of the 4-Wavelength Diode Laser have exceeded my expectations. Completely painless thanks to the chill-tip cooling mechanism, and Dr. Kenin's clinic ambiance in Surat is so calming and luxurious!",
    rating: 5,
    treatment: 'Diode Laser Hair Reduction'
  },
  {
    name: 'Vikram Desai',
    role: 'PRP Hair Regrowth Patient',
    text: 'Dr. Kenin A. Jadvani gave me the most honest, scientific consultation. No false promises—just clinical facts and root nourishment. My hair density has drastically improved within 3 months of PRP and Meso therapy.',
    rating: 5,
    treatment: 'PRP & Scalp Mesotherapy'
  },
  {
    name: 'Pooja Shah',
    role: 'Hollywood Carbon Peel & Hydra Facial',
    text: 'Got the Q-Switched Hollywood Carbon Peel done right before my cousin wedding. My pores were noticeably tighter and my skin had an incredible porcelain glow. Highly recommend Luxe Skin Clinic!',
    rating: 5,
    treatment: 'Carbon Peel & Medi-Facial'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" style={{
      padding: '70px 0',
      background: '#FFFFFF'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag">Patient Testimonials &bull; Surat</span>
          <h2 className="section-heading">Client Stories & Transformations</h2>
          <p className="section-subtitle">
            Real feedback from patients who trusted Dr. Kenin Jadvani at Luxe Skin Clinic with their aesthetic journey.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '24px'
        }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: '#FAF6F1',
                borderRadius: '20px',
                padding: 'clamp(20px, 4vw, 30px)',
                border: '1px solid rgba(197, 152, 113, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} size={15} fill="#C59871" color="#C59871" />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#4A443F',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  "{r.text}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid rgba(197, 152, 113, 0.25)',
                paddingTop: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#121212' }}>{r.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#A37550' }}>{r.treatment}</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.7rem',
                  color: '#2E7D32',
                  background: '#E8F5E9',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontWeight: 600
                }}>
                  <CheckCircle size={11} /> Verified Patient
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
