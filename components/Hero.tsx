export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(100px, 15vw, 140px) 5vw clamp(60px, 8vw, 80px)',
      position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      {/* Blobs */}
      <div className="blob" style={{
        position: 'absolute', top: '-60px', right: '-80px',
        width: 'clamp(220px, 35vw, 380px)', height: 'clamp(220px, 35vw, 380px)',
        background: 'linear-gradient(135deg, #c7b2f0, #a78be8)',
        opacity: 0.45, zIndex: 0,
      }} />
      <div className="blob" style={{
        position: 'absolute', bottom: '-80px', left: '-100px',
        width: 'clamp(180px, 28vw, 300px)', height: 'clamp(180px, 28vw, 300px)',
        background: 'linear-gradient(135deg, #f7c5d5, #f0a8c0)',
        opacity: 0.35, zIndex: 0, animationDelay: '4s',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', width: '100%' }}>
        <p className="fade-up d1" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 700, color: '#3b5bdb', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
          👋 Hello, World!
        </p>
        <h1 className="fade-up d2" style={{
          fontSize: 'clamp(44px, 10vw, 88px)',
          fontWeight: 900, lineHeight: 1.08,
          color: '#1a1a2e', marginBottom: '20px', letterSpacing: '-0.03em',
        }}>
          Hi, I&apos;m Ankit
        </h1>
        <p className="fade-up d3" style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: '#5a5a7a', lineHeight: 1.75, maxWidth: '500px', margin: '0 auto 32px' }}>
          I&apos;m a Software Engineer passionate about building high-performance, scalable web applications.
        </p>
        <div className="fade-up d4" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          <a href="#projects" className="pill-btn">View My Work</a>
          <a href="#contact"  className="ghost-btn">Get in Touch</a>
        </div>
        <div className="fade-up d5" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/ankit-maurya-481890219/" target="_blank" rel="noreferrer" className="social-circle" title="LinkedIn">in</a>
          <a href="https://github.com/mkankit07" target="_blank" rel="noreferrer" className="social-circle" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
