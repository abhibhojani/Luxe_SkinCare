import React, { useState } from 'react';
import { Sparkles, Zap, Flame, Check, ArrowRight, Droplets, ShieldCheck, Sun, Info, Heart, Layers, Clock, Eye } from 'lucide-react';

// Exactly matched from Luxe Skin Clinic's official brochure (all treatments.jpeg)
// Filtered ONLY for Hair & Skin treatments, translated and curated 100% in English
const treatmentCategories = [
  { id: 'all', label: 'All Treatments' },
  { id: 'skin', label: 'Skin & Laser Treatments' },
  { id: 'hair', label: 'Hair Regrowth & Scalp' }
];

export const allTreatmentsList = [
  // --- HAIR REGROWTH (From brochure: Hair Regrowth વ્યક્તિની ટાલમાં વાળ ઉગાડવાની પદ્ધતિ) ---
  {
    id: 'hair-lllt',
    category: 'hair',
    title: 'Low Level Laser Light Therapy (LLLT)',
    tagline: 'Hair Root Photobiostimulation',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Medical-grade laser light stimulates dermal papilla roots at a cellular level, arresting acute hair fall and activating natural dormant follicles into the active anagen growth phase.',
    brochureNote: 'Stimulates hair roots to arrest hair fall and boost active hair regrowth.',
    highlights: [
      'Increases cellular ATP & microcirculation',
      'Arrests sudden & chronic hair thinning',
      'Completely painless, cool laser light technology'
    ],
    duration: '30 - 45 mins',
    price: 'Consultation Included',
    badge: 'Hair Regrowth'
  },
  {
    id: 'hair-prp',
    category: 'hair',
    title: 'PRP (Stem Cell & Growth Factor Therapy)',
    tagline: 'Platelet-Rich Plasma Density Booster',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    description: 'Autologous platelet concentrate enriched with bioactive growth factors is injected into the scalp to reverse follicle miniaturization, dramatically enhance hair density, and stop hair loss.',
    brochureNote: 'Stops hair fall, triggers new hair growth, and increases overall hair density.',
    highlights: [
      'Stops active hair fall within initial sessions',
      'Stimulates thick, natural hair shaft regeneration',
      '100% autologous, biocompatible & natural'
    ],
    duration: '45 - 60 mins',
    price: 'Doctor Administered',
    badge: 'Most Popular'
  },
  {
    id: 'hair-meso',
    category: 'hair',
    title: 'Scalp Mesotherapy',
    tagline: 'Direct Micro-Nutrient Root Infusion',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    description: 'Targeted clinical procedure that delivers specialized vitamin cocktails, biotin, zinc, peptides, and follicle nutrients directly into the hair roots for immediate nourishment.',
    brochureNote: 'Direct vitamin & vital bio-nutrient infusion straight into hair roots.',
    highlights: [
      'Direct dermal delivery with zero systemic side effects',
      'Nourishes weak roots and detoxifies scalp sebum',
      'Ideal for both men and women combating stress hair loss'
    ],
    duration: '40 mins',
    price: 'Targeted Protocol',
    badge: 'Nutrient Infusion'
  },

  // --- SKIN COSMETIC TREATMENTS (From brochure: Skin Cosmetic Treatment Available) ---
  {
    id: 'skin-diode',
    category: 'skin',
    title: 'Diode Laser Hair Reduction',
    tagline: 'US-FDA Approved Gold Standard 4-Wavelength',
    image: 'https://images.unsplash.com/photo-1512290900672-1f4a9b5f5434?auto=format&fit=crop&w=800&q=80',
    description: "The world's most advanced Gold Standard Four Wavelength US-FDA approved laser system. Offers painless, permanent reduction of unwanted facial and body hair with continuous contact cooling.",
    brochureNote: "World's most advanced 4-wavelength US-FDA approved machine for permanent hair reduction.",
    highlights: [
      'Four simultaneous wavelengths for deep follicle destruction',
      'Advanced chill-tip cooling for zero discomfort',
      'Effective on all Indian skin tones and hair textures'
    ],
    duration: '30 - 60 mins',
    price: 'Per Area / Package',
    badge: 'US FDA Approved'
  },
  {
    id: 'skin-peel',
    category: 'skin',
    title: 'Chemical Peeling & Bleaching Meso',
    tagline: 'Dermal Renewal & Pigment Clearance',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Customized clinical peeling combined with bleaching mesotherapy to eradicate active acne (pimples), dark circles around eyes, hyperpigmentation, and provide whole-body & back polishing.',
    brochureNote: 'Effective for Acne (pimples), Glow Back Polishing, Pigmentation, and Dark Circles.',
    highlights: [
      'Rapidly dries out active acne & clears clogged sebum',
      'Lightens stubborn under-eye dark circles',
      'Glow back polishing for weddings and special occasions'
    ],
    duration: '45 mins',
    price: 'Customized Formula',
    badge: 'Acne & Glow'
  },
  {
    id: 'skin-derma',
    category: 'skin',
    title: 'Derma Roller (Clinical Microneedling)',
    tagline: 'Collagen Induction & Scar Subcision',
    image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&w=800&q=80',
    description: 'Micro-precision collagen induction therapy that breaks down fibrous acne scar tissue, fills deep pits, minimizes stretch marks, and promotes full-spectrum epidermal rejuvenation.',
    brochureNote: 'Rebuilds acne scar pits, fades stretch marks, and delivers total skin rejuvenation.',
    highlights: [
      'Levels deep pitted acne scars and uneven texture',
      'Visibly softens body stretch marks',
      'Stimulates fresh, natural elastin and collagen'
    ],
    duration: '50 - 60 mins',
    price: 'Clinical Protocol',
    badge: 'Scar Repair'
  },
  {
    id: 'skin-yag',
    category: 'skin',
    title: 'Q-Switched Nd:YAG Laser & Carbon Peel',
    tagline: 'Hollywood Carbon Facial & Pigment Laser',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Precision nanosecond laser technology to safely shatter tattoo ink, erase congenital birthmarks, lighten hyperpigmentation, and perform the acclaimed Hollywood Carbon Laser Peel for skin tightening.',
    brochureNote: 'Tattoo removal, birthmark clearance, skin lightening, and Hollywood Carbon Peel.',
    highlights: [
      'Effective tattoo removal without scarring',
      'Fades congenital birthmarks and age spots',
      'Hollywood Carbon Peel gives instant porcelain pore tightening'
    ],
    duration: '45 mins',
    price: 'Per Area / Session',
    badge: 'Hollywood Glow'
  },
  {
    id: 'skin-rf',
    category: 'skin',
    title: 'RF Cautery (Radiofrequency Cautery)',
    tagline: 'Scarless Removal of Moles, Warts & Tags',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-high frequency radio waves deliver pinpoint micro-vaporization to safely remove facial & body moles, viral/infectious warts, benign skin tags, and stubborn corns with minimal healing time.',
    brochureNote: 'Safe removal of Moles (તલ), Infectious Warts (ચેપી મસા), Skin Tags (સાદા મસા), and Corns (કપાસી).',
    highlights: [
      'Clean excision with no scalpel cuts or stitches',
      'Permanent removal of contagious warts and tags',
      'Local topical anesthesia for a comfortable procedure'
    ],
    duration: '20 - 40 mins',
    price: 'Per Lesion / Package',
    badge: 'Precision Removal'
  },
  {
    id: 'skin-hydra',
    category: 'skin',
    title: 'Hydra Facial & Microdermabrasion',
    tagline: 'Vortex Deep Cleansing & Skin Polishing',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    description: 'Vortex vacuum suction clears embedded blackheads and dead keratin, while microdermabrasion polishes dull skin and deeply infuses antioxidant peptides and hyaluronic moisture.',
    brochureNote: 'Skin polishing, deep hydration, and removal of acne blemishes & blackheads.',
    highlights: [
      'Painless automated vacuum extractions',
      'Smooths dry flaky skin with medical micro-polish',
      'Leaves skin plump, clear, and glowing with hydration'
    ],
    duration: '60 mins',
    price: 'Signature Facial',
    badge: 'Deep Hydration'
  },
  {
    id: 'skin-whitening',
    category: 'skin',
    title: 'Instant Whitening & Medi-Facial',
    tagline: 'Pre-Occasion & Bridal Radiance Protocol',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    description: 'Formulated for weddings, festivities, and special occasions. Combines clinical brightening serums, vitamin C iontophoresis, and soothing hydrogel masks to reveal instant luminence and flawless radiance.',
    brochureNote: 'Pre-event instant whitening treatment for radiant, glowing skin before celebrations.',
    highlights: [
      'Immediate visible brightening with zero downtime',
      'Restores dull, sun-damaged skin to natural radiance',
      'Favored pre-wedding ritual in Surat'
    ],
    duration: '60 mins',
    price: 'Pre-Event Glow',
    badge: 'Instant Radiance'
  }
];

export default function Treatments({ onSelectTreatment }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hydrationSlider, setHydrationSlider] = useState(75);
  const [selectedModalTreatment, setSelectedModalTreatment] = useState(null);

  const filteredTreatments = activeFilter === 'all'
    ? allTreatmentsList
    : allTreatmentsList.filter(t => t.category === activeFilter);

  // Dynamic status text for skincare animation slider
  const getSkinStage = (val) => {
    if (val < 35) return { stage: 'Dry / Congested Barrier', effect: 'Uneven tone, enlarged pores, dull texture', glow: '15%' };
    if (val < 70) return { stage: 'Active Dermal Infusion', effect: 'Hydra-meso hydration surge & pore tightening', glow: '65%' };
    return { stage: 'Glass-Skin Radiance', effect: 'US-FDA laser clarity, collagen plumping & deep glow', glow: '98%' };
  };

  const currentSkinStatus = getSkinStage(hydrationSlider);

  return (
    <section id="treatments" style={{
      padding: '110px 0',
      background: '#FAF6F1',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Dewdrop Skincare Animation Elements */}
      <div className="dewdrop-bubble" style={{ width: '45px', height: '45px', top: '8%', left: '4%', animationDelay: '0s' }} />
      <div className="dewdrop-bubble" style={{ width: '32px', height: '32px', top: '22%', right: '5%', animationDelay: '2s' }} />
      <div className="dewdrop-bubble" style={{ width: '55px', height: '55px', bottom: '15%', left: '2%', animationDelay: '3.5s' }} />
      <div className="dewdrop-bubble" style={{ width: '28px', height: '28px', bottom: '25%', right: '3%', animationDelay: '1.2s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="#C59871" /> Official Clinic Treatment Menu &bull; Surat
          </div>
          <h2 className="section-heading">Skin & Hair Regrowth Treatments</h2>
          <p className="section-subtitle">
            All clinical treatments curated directly from Dr. Kenin Jadvani's official clinic brochure. Focused exclusively on scientific dermatology, laser clarity, and hair restoration.
          </p>

          {/* Filter Pills */}
          <div 
            className="treatment-filter-scroll"
            style={{
              justifyContent: 'center',
              marginTop: '28px',
              padding: '4px 0'
            }}
          >
            {treatmentCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                  background: activeFilter === cat.id ? '#121212' : '#FFFFFF',
                  color: activeFilter === cat.id ? '#FFFFFF' : '#121212',
                  border: activeFilter === cat.id ? '1px solid #121212' : '1px solid rgba(197, 152, 113, 0.4)',
                  boxShadow: activeFilter === cat.id ? '0 8px 20px rgba(18, 18, 18, 0.18)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SKINCARE INTERACTIVE ANIMATION: Skin Glow & Dermal Hydration Simulator */}
        {/* ========================================================================= */}
        <div style={{
          background: 'linear-gradient(135deg, #181818 0%, #121212 100%)',
          borderRadius: '24px',
          padding: 'clamp(20px, 4vw, 36px)',
          color: '#FAF6F1',
          marginBottom: '50px',
          border: '1.5px solid rgba(197, 152, 113, 0.4)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Laser Scanning Beam */}
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(197, 152, 113, 0.8), #FFFFFF, rgba(197, 152, 113, 0.8), transparent)',
            boxShadow: '0 0 15px #C59871, 0 0 30px #DFBF9F',
            animation: 'laserScan 5s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Interactive Controls */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Droplets size={18} color="#C59871" />
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#C59871', fontWeight: 700 }}>
                  Clinical Visualizer &bull; Skincare Radiance Engine
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#FFFFFF', marginBottom: '10px' }}>
                Simulate Your Skin Glow Transformation
              </h3>
              <p style={{ color: '#DFBF9F', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '22px' }}>
                Slide to witness how Dr. Kenin Jadvani's Hydra-infusion, Laser toning, and Meso cocktails revitalize the cellular moisture barrier.
              </p>

              {/* Slider */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '8px', color: '#DFBF9F' }}>
                  <span>Dull & Dehydrated</span>
                  <span style={{ color: '#C59871', fontWeight: 700 }}>Moisture Infusion: {hydrationSlider}%</span>
                  <span>Glass Radiance</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={hydrationSlider}
                  onChange={(e) => setHydrationSlider(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#C59871',
                    cursor: 'pointer',
                    height: '6px',
                    borderRadius: '4px'
                  }}
                />
              </div>

              {/* Status Pill */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '14px 18px',
                border: '1px solid rgba(197, 152, 113, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#A09992', textTransform: 'uppercase' }}>Dermal Health Stage</div>
                  <div style={{ fontWeight: 700, color: '#C59871', fontSize: '1.05rem' }}>{currentSkinStatus.stage}</div>
                  <div style={{ fontSize: '0.82rem', color: '#DFBF9F', marginTop: '2px' }}>{currentSkinStatus.effect}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: '#A09992' }}>Glow Index</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {currentSkinStatus.glow}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Dermal Particle Animation Sphere */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,${hydrationSlider / 120}), rgba(197, 152, 113, ${hydrationSlider / 100}) 45%, rgba(18, 18, 18, 0.95) 90%)`,
                boxShadow: `0 0 ${hydrationSlider / 2}px rgba(197, 152, 113, ${hydrationSlider / 110}), inset 0 0 30px rgba(255,255,255, ${hydrationSlider / 200})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transition: 'all 0.25s ease',
                border: '2px solid rgba(197, 152, 113, 0.6)'
              }}>
                {/* Concentric Pulsing Radiance Rings */}
                <div style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(197, 152, 113, 0.35)',
                  animation: 'spin 20s linear infinite',
                  pointerEvents: 'none'
                }} />
                
                <div style={{ textAlign: 'center', padding: '16px', zIndex: 2 }}>
                  <Sparkles size={28} color="#FFFFFF" style={{ marginBottom: '6px' }} />
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#FAF6F1', fontWeight: 600 }}>
                    Skin Radiance
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {hydrationSlider}% Hydrated
                  </div>
                </div>
              </div>

              {/* Animated Floating Skincare Attributes */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span className="skincare-float-1" style={{
                  background: 'rgba(197, 152, 113, 0.15)',
                  border: '1px solid rgba(197, 152, 113, 0.35)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  color: '#DFBF9F',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  💧 Hyaluronic Lock
                </span>
                <span className="skincare-float-2" style={{
                  background: 'rgba(197, 152, 113, 0.15)',
                  border: '1px solid rgba(197, 152, 113, 0.35)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  color: '#DFBF9F',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  ✨ Collagen Plump
                </span>
                <span className="skincare-float-3" style={{
                  background: 'rgba(197, 152, 113, 0.15)',
                  border: '1px solid rgba(197, 152, 113, 0.35)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  color: '#DFBF9F',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  ⚡ Quad-Wave Diode
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '24px'
        }}>
          {filteredTreatments.map(treatment => (
            <div 
              key={treatment.id}
              className="radiance-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 152, 113, 0.3)',
                boxShadow: '0 8px 24px rgba(18, 18, 18, 0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                
                {/* Category / Highlight Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: treatment.category === 'hair' ? '#121212' : '#C59871',
                  color: '#FFFFFF',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                }}>
                  {treatment.badge}
                </div>

                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(18, 18, 18, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FAF6F1',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={12} color="#C59871" /> {treatment.duration}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#A37550',
                  fontWeight: 700,
                  marginBottom: '6px'
                }}>
                  {treatment.tagline}
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#121212',
                  lineHeight: 1.3
                }}>
                  {treatment.title}
                </h3>

                {/* Brochure Translation Callout */}
                <div style={{
                  background: '#FDF9F5',
                  borderLeft: '3px solid #C59871',
                  padding: '8px 12px',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '14px',
                  fontSize: '0.82rem',
                  color: '#554F4A',
                  fontStyle: 'italic'
                }}>
                  "{treatment.brochureNote}"
                </div>

                <p style={{
                  color: '#635D57',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}>
                  {treatment.description}
                </p>

                {/* Highlights List */}
                <div style={{ marginBottom: '22px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {treatment.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#1E1E1E' }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(197, 152, 113, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A37550',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div style={{
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(197, 152, 113, 0.2)',
                  paddingTop: '18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7E7771' }}>Protocol</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#121212' }}>{treatment.price}</div>
                  </div>
                  <button
                    onClick={() => onSelectTreatment(treatment.title)}
                    className="btn btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                  >
                    Book Slot <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Verification Callout Card */}
        <div style={{
          marginTop: '60px',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px 30px',
          border: '1.5px solid rgba(197, 152, 113, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 8px 24px rgba(18, 18, 18, 0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(197, 152, 113, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#A37550',
              flexShrink: 0
            }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#121212' }}>
                Verified Official Clinic Procedures
              </div>
              <div style={{ fontSize: '0.85rem', color: '#635D57' }}>
                All procedures above are conducted under the supervision of <strong>Dr. Kenin A. Jadvani</strong> (B.H.M.S, Consultant Cosmetologist, Msc. Skin Aesthetics & Trichology).
              </div>
            </div>
          </div>

          <a 
            href="/all-treatments.jpeg"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <Eye size={15} /> View Original Clinic Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
