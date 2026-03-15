"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(253,246,240,0.92)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(224,214,245,0.5)',
        padding: '0 5vw', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span className="cursive" style={{ fontSize: '28px', color: '#1a1a2e' }}>Ankit</span>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
          <a href="#contact" className="pill-btn" style={{ padding: '8px 22px', fontSize: '13px' }}>Contact</a>
        </div>

        {/* Hamburger – mobile */}
        <button
          onClick={() => setOpen(o => !o)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: '#1a1a2e', borderRadius: '2px',
              transition: 'all 0.2s',
              transform: open
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="mobile-menu-open" style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(253,246,240,0.98)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(224,214,245,0.6)',
          padding: '20px 5vw 24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a2e', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid #ede8f8' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="pill-btn" style={{ textAlign: 'center', marginTop: '4px' }}>
            Contact
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
