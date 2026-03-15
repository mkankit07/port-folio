"use client";
const certs = [
  { icon: '🏅', title: 'javascript algorithms and data structures', org: 'freeCodeCamp' },
  { icon: '🏅', title: 'Core Java', org: 'LearnQuest' },
  { icon: '🏅', title: 'Intermediate Relational Database & SQL', org: 'Coursera' },
  { icon: '🎓', title: 'Web Development', org: 'NavGurukul · 2021–2022' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#f7f3fe', padding: 'clamp(60px,10vw,96px) 5vw' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Contact</span>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, color: '#1a1a2e', marginBottom: '12px', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Let&apos;s Work Together
        </h2>
        <p style={{ fontSize: '15px', color: '#5a5a7a', textAlign: 'center', maxWidth: '440px', margin: '0 auto 48px', lineHeight: 1.75 }}>
          I&apos;m open to new opportunities and interesting projects. Drop me a message!
        </p>

        <div className="two-col-contact">
          {/* Left – reach out */}
          <div>
            <span className="section-label">Reach Out</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ankit-maurya-481890219/', href: 'http://linkedin.com/in/ankit-maurya-481890219/' },
                { icon: '📧', label: 'Email', value: 'mkankit189@gmail.com', href: 'mailto:mkankit189@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Mumbai, Maharashtra, India', href: '#' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 18px', borderRadius: '14px',
                  background: '#fff', border: '1.5px solid #ede8f8',
                  textDecoration: 'none', transition: 'box-shadow 0.2s',
                }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{l.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '11px', color: '#8888aa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l.label}</div>
                    <div style={{ fontSize: '13px', color: '#1a1a2e', fontWeight: 600, marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.value}</div>
                  </div>
                </a>
              ))}
              <a href="mailto:mkankit189@gmail.com" className="pill-btn" style={{ textAlign: 'center', marginTop: '4px' }}>
                Send a Message ✉️
              </a>
            </div>
          </div>

          {/* Right – certifications */}
          <div>
            <span className="section-label">Certifications</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {certs.map((c, i) => (
                <div key={i} style={{
                  padding: '13px 16px', borderRadius: '14px',
                  background: '#fff', border: '1.5px solid #ede8f8',
                  display: 'flex', gap: '12px', alignItems: 'center',
                }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e' }}>{c.title}</div>
                    <div style={{ fontSize: '11px', color: '#8888aa', marginTop: '1px' }}>{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
