"use client";
import Disclaimer from '@/components/Disclaimer';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="stack">
      <h1>ReportRx</h1>
      <p className="muted">MVP preview. No personal data stored; backend logs metadata only.</p>

      <section className="section">
        <div className="stack">
          <p>
            Explore the <a href="/health">health</a> page to verify backend connectivity, or try the
            <a href="/parse"> parse</a> page to parse a lab report.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button className="btn-outline" onClick={() => (window.location.href = '/health')}>Check Backend Health</Button>
            <Button className="btn-primary" onClick={() => (window.location.href = '/parse')}>Parse a Report</Button>
          </div>
        </div>
      </section>

      <div className="card">
        <Disclaimer />
      </div>
    </div>
  );
}
