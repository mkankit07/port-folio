const projects = [
  {
    name: 'Auction-X',
    role: 'Backend Developer',
    emoji: '🔨',
    desc: 'Real-time auction platform supporting Last Plays, Highest/Lowest Unique, and English Auctions. Core bidding engine with live Socket.IO updates and UPI + crypto wallet payment integration.',
    tech: ['Node.js', 'Socket.IO', 'UPI Gateway', 'Block Bolt', 'REST API'],
    color: '#eef2ff',
  },
  {
    name: 'Quick-Connect',
    role: 'MERN Stack Developer',
    emoji: '💬',
    desc: 'Comprehensive real-time chat dashboard for users, businesses, and chatbots. Supports Facebook & WhatsApp messaging, group chats, file sharing, and seamless agent chat transfers.',
    tech: ['Node.js', 'Socket.IO', 'PostgreSQL', 'MongoDB', 'Facebook API', 'WhatsApp API'],
    color: '#f3f0ff',
  },
  {
    name: 'Uu2 E-Commerce',
    role: 'Full Stack Developer',
    emoji: '🛍️',
    desc: 'Multi-vendor e-commerce platform with independent merchant store management. Features a React frontend, iPay88 payment gateway, and real-time order tracking via J&T Express.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Material-UI', 'iPay88', 'J&T Express'],
    color: '#fff0f6',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'clamp(60px,10vw,96px) 5vw' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Portfolio</span>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, color: '#1a1a2e', marginBottom: '40px', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Selected Projects
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {projects.map((p, i) => (
            <div key={i} className="proj-card" style={{ background: p.color }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 'clamp(24px,4vw,28px)', flexShrink: 0 }}>{p.emoji}</span>
                <div style={{ flex: 1, minWidth: '160px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 800, color: '#1a1a2e' }}>{p.name}</h3>
                    <span style={{ fontSize: '12px', color: '#3b5bdb', fontWeight: 700, background: 'rgba(59,91,219,0.08)', padding: '2px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{p.role}</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#5a5a7a', lineHeight: 1.8, marginBottom: '16px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {p.tech.map(t => <span key={t} className="skill-chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
