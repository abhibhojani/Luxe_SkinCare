import React from 'react';
import { Phone, Calendar, MapPin, MessageCircle } from 'lucide-react';

export default function MobileBottomBar({ onOpenBooking }) {
  const whatsappUrl = "https://wa.me/919662670946?text=Hello%20Dr.%20Kenin%20Jadvani,%20I%20would%20like%20to%20book%20a%20skin/hair%20consultation%20at%20Luxe%20Skin%20Clinic.";
  // Direct turn-by-turn GPS Navigation to Luxe Skin Clinic (Yogi Chowk, Surat)
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=21.2111044,72.8896674";

  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile quick actions">
      <a href="tel:+919662670946" className="mobile-bar-btn">
        <Phone size={18} color="#C59871" />
        <span>Call Now</span>
      </a>

      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-bar-btn"
      >
        <MessageCircle size={18} color="#25D366" />
        <span>WhatsApp</span>
      </a>

      <button 
        onClick={() => onOpenBooking()} 
        className="mobile-bar-btn primary"
        type="button"
      >
        <Calendar size={18} color="#FFFFFF" />
        <span>Book Slot</span>
      </button>

      <a 
        href={googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-bar-btn"
      >
        <MapPin size={18} color="#C59871" />
        <span>Directions</span>
      </a>
    </div>
  );
}
