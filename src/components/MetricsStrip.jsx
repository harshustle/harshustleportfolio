import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const metricsEn = [
  { label: 'projects delivered', value: 30, suffix: '+' },
  { label: 'years experience', value: 3, suffix: '+' },
  { label: 'client satisfaction', value: 100, suffix: '%' },
  { label: 'happy clients', value: 25, suffix: '+' },
];

const metricsHin = [
  { label: 'projects poore kiye', value: 30, suffix: '+' },
  { label: 'saal ka anubhav', value: 3, suffix: '+' },
  { label: 'client satisfaction', value: 100, suffix: '%' },
  { label: 'khush clients', value: 25, suffix: '+' },
];

function MetricsStrip() {
  const { language } = useLanguage();
  const metrics = language === 'hin' ? metricsHin : metricsEn;
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const fps = 60;
    const steps = Math.round((duration / 1000) * fps);
    metrics.forEach((m, i) => {
      let count = 0;
      const increment = m.value / steps;
      const timer = setInterval(() => {
        count += increment;
        setCounts(prev => { const u = [...prev]; u[i] = Math.min(Math.floor(count), m.value); return u; });
        if (count >= m.value) clearInterval(timer);
      }, duration / steps);
    });
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'var(--c-grid)' }}>
      {metrics.map((m, i) => (
        <div key={m.label} style={{ background: 'var(--c-bg-card)', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--c-text)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>
            {counts[i]}{m.suffix}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dim)', letterSpacing: '0.05em', fontWeight: 500 }}>{m.label}</p>
        </div>
      ))}
    </div>
  );
}

export default MetricsStrip;
