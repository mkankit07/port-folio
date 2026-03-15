const skills = [
  'Node.js','TypeScript','Express.js','Nest.js','React.js','Socket.IO',
  'PostgreSQL','MongoDB','MySQL','Redis','Java','Spring Boot',
  'Docker','AWS S3','AWS EC2','Git','Prisma','Sequelize',
];

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(60px,10vw,96px) 5vw' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="two-col">
          {/* Left */}
          <div>
            <span className="section-label">About Me</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Passionate about building great software
            </h2>
            <p style={{ fontSize: '15px', color: '#5a5a7a', lineHeight: 1.85, marginBottom: '14px' }}>
              I&apos;m a Software Engineer with 4+ years of experience building high-performance web applications. Currently a Software Engineer at Credilio, Mumbai.
            </p>
            <p style={{ fontSize: '15px', color: '#5a5a7a', lineHeight: 1.85, marginBottom: '28px' }}>
              Proficient in RESTful APIs, real-time communication with Socket.IO, and scalable backend architecture. Strong team player committed to continuous learning.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['📍', 'Mumbai, Maharashtra, India'],
                ['💼', 'Software Engineer @ Credilio'],
                ['📧', 'mkankit189@gmail.com'],
              ].map(([icon, text]) => (
                <div key={text as string} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: '#5a5a7a' }}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <span className="section-label">Tech Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
            </div>
            <div className="stats-grid">
              {[['4+','Years Exp'],['4','Companies'],['10+','Projects'],['Mumbai','Current City']].map(([n,l]) => (
                <div key={l} className="stat-box">
                  <div style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 900, color: '#3b5bdb' }}>{n}</div>
                  <div style={{ fontSize: '12px', color: '#8888aa', marginTop: '2px', fontWeight: 600 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
