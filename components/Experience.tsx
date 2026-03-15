const jobs = [
  {
    company: 'Credilio',
    role: 'Software Engineer',
    location: 'Mumbai, Maharashtra',
    period: 'Apr 2025 – Present',
    current: true,
    points: [
      'Building high-performance web applications in a fast-paced fintech environment.',
      'Working with modern backend and frontend technologies to deliver scalable solutions.',
    ],
  },
  {
    company: 'GlobalVox',
    role: 'Back End Developer',
    location: 'Ahmedabad, Gujarat',
    period: 'Nov 2023 – Apr 2025',
    points: [
      'Developed robust APIs using Node.js, Express.js, Redis, Socket.IO, MongoDB, PostgreSQL, Java, and Spring Boot.',
      'Optimized API response time significantly by implementing Redis caching.',
      'Enhanced code performance and ensured scalability for high-traffic applications.',
    ],
  },
  {
    company: 'GlobalVox',
    role: 'MERN Stack Developer',
    location: 'Ahmedabad, Gujarat',
    period: 'Feb 2023 – Jan 2024',
    points: [
      'Built full-stack features across the MERN ecosystem for production web applications.',
      'Collaborated closely with design and DevOps teams for seamless deployment.',
    ],
  },
  {
    company: 'eDelta Enterprise Solutions',
    role: 'MERN Stack Developer',
    location: 'Ahmedabad, Gujarat',
    period: 'Aug 2022 – Feb 2023',
    points: [
      'Designed and developed a real-time chat dashboard supporting text, images, and documents.',
      'Integrated chatbots and messaging platforms including Facebook and WhatsApp.',
      'Developed RESTful APIs using PostgreSQL, Sequelize, and MongoDB.',
    ],
  },
  {
    company: 'Appsdelite Technology',
    role: 'MERN Stack Developer',
    location: 'Bareilly, Uttar Pradesh',
    period: 'Jan 2022 – Jul 2022',
    points: [
      'Developed responsive dashboards and websites using React.js, HTML, CSS, and Bootstrap.',
      'Created APIs using MySQL, Sequelize, and MongoDB for efficient data management.',
      'Integrated payment gateways for secure transactions.',
    ],
  },
  {
    company: 'NavGurukul',
    role: 'Mentor',
    location: 'Dharamshala, Himachal Pradesh',
    period: 'Mar 2021 – Jan 2022',
    points: [
      'Guided students through programming fundamentals and debugging techniques.',
      'Refined ability to articulate complex concepts clearly and effectively.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#f7f3fe', padding: 'clamp(60px,10vw,96px) 5vw' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Career</span>
        <h2 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, color: '#1a1a2e', marginBottom: '40px', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Work Experience
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {jobs.map((job, i) => (
            <div key={i} className="exp-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 'clamp(15px,2.5vw,18px)', fontWeight: 800, color: '#1a1a2e' }}>{job.company}</h3>
                    {job.current && (
                      <span style={{ background: '#e8f4ff', color: '#3b5bdb', fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Current</span>
                    )}
                  </div>
                  <p style={{ fontSize: '14px', color: '#3b5bdb', fontWeight: 600, marginTop: '2px' }}>{job.role}</p>
                  <p style={{ fontSize: '12px', color: '#8888aa', marginTop: '1px' }}>{job.location}</p>
                </div>
                <span style={{ fontSize: '12px', color: '#8888aa', background: '#f0ecfd', padding: '5px 12px', borderRadius: '50px', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {job.period}
                </span>
              </div>
              <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {job.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: '13px', color: '#5a5a7a', display: 'flex', gap: '10px', lineHeight: 1.7 }}>
                    <span style={{ color: '#a78be8', flexShrink: 0, marginTop: '3px' }}>◆</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
