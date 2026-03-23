import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import CourseImage from "./CourseImage";

import modules from './courseData';


export default function AICourse() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [certName, setCertName] = useState('');
  const [showCert, setShowCert] = useState(false);

  const mod = modules[activeModule];
  const section = mod.sections[activeSection];

  const totalSections = modules.reduce((acc, m) => acc + m.sections.length, 0);
  const completedSections = modules.slice(0, activeModule).reduce((acc, m) => acc + m.sections.length, 0) + activeSection + 1;
  const progress = Math.round((completedSections / totalSections) * 100);

  // Extract all {ImageName} tokens from content
  const sectionImageNames = [...section.content.matchAll(/\{(\w+)\}/g)].map(m => m[1]);

  const renderContent = (text, color = mod.color) => {
    // Group lines into blocks: table blocks vs individual lines
    // Strip {ImageName} tokens — they are consumed by CourseImage, not rendered as text
    const lines = text.replace(/\{\w+\}/g, '').split('\n');
    const blocks = [];
    let i = 0;
    while (i < lines.length) {
      if (lines[i].startsWith('|')) {
        const tableLines = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        blocks.push({ type: 'table', lines: tableLines });
      } else if (lines[i].startsWith('```')) {
        i++; // skip opening ```
        const codeLines = [];
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const firstLine = codeLines[0] || '';
        const hasTitle = firstLine.startsWith('title:');
        blocks.push({
          type: 'code',
          title: hasTitle ? firstLine.replace('title:', '').trim() : null,
          body: (hasTitle ? codeLines.slice(1) : codeLines).join('\n'),
        });
      } else {
        blocks.push({ type: 'line', value: lines[i] });
        i++;
      }
    }

    const isSeparator = (row) => row.every(cell => /^[-: ]+$/.test(cell));

    const parseRow = (line) =>
      line.split('|').slice(1, -1).map(cell => cell.trim());

    return blocks.map((block, bi) => {
      if (block.type === 'table') {
        const rows = block.lines.map(parseRow);
        const header = rows[0];
        const dataRows = rows.filter((_, idx) => idx !== 0 && !isSeparator(rows[idx]));
        return (
          <div key={bi} style={{ overflowX: 'auto', margin: '12px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  {header.map((cell, ci) => (
                    <th key={ci} style={{
                      padding: '8px 12px', textAlign: 'left', fontWeight: 600,
                      color: color, borderBottom: `2px solid ${color}`,
                      background: 'var(--bg-secondary)', whiteSpace: 'nowrap'
                    }}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid var(--border-color)', background: ri % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '7px 12px', color: 'var(--text-secondary)', verticalAlign: 'top' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      if (block.type === 'code') {
        return (
          <div key={bi} style={{ margin: '12px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            {block.title && (
              <div style={{ background: `${color}22`, borderBottom: `1px solid ${color}44`, padding: '7px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '3px', height: '14px', background: color, borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: color, letterSpacing: '0.3px' }}>{block.title}</span>
              </div>
            )}
            <pre style={{ background: 'var(--bg-secondary)', padding: '16px', overflowX: 'auto', fontSize: '0.78rem', lineHeight: '1.6', margin: 0, borderLeft: `3px solid ${color}` }}>
              <code style={{ color: 'var(--text-primary)' }}>{block.body}</code>
            </pre>
          </div>
        );
      }

      // individual line rendering
      const line = block.value;

      //Find and Replace the link with the Clickable link to run on the new Tab.
      const parseInline = (str) =>
        str.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((p, j) => {
          if (p.startsWith('**') && p.endsWith('**')) {
            return <strong key={j} style={{ color: color }}>{p.slice(2, -2)}</strong>;
          }
          const linkMatch = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (linkMatch) {
            const isYouTube = /youtu\.be|youtube\.com/.test(linkMatch[2]);
            return (
              <a key={j} href={linkMatch[2]} target="_blank" rel="noopener noreferrer"
                style={{ color: color, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                {isYouTube && (
                  <svg width="18" height="13" style={{ flexShrink: 0, verticalAlign: 'middle' }}>
                    <use href="/icons.svg#youtube-icon" />
                  </svg>
                )}
                {linkMatch[1]}
              </a>
            );
          }
          return p;
        });
      const parseBold = parseInline;

      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <li key={bi} style={{ marginBottom: '4px', marginLeft: '16px' }}>{parseBold(line.replace(/^[-*] /, ''))}</li>;
      }
      if (line.startsWith('  - ') || line.startsWith('  * ')) {
        return <li key={bi} style={{ marginBottom: '3px', marginLeft: '32px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{parseBold(line.replace(/^  [-*] /, ''))}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={bi} style={{ marginBottom: '4px', marginLeft: '20px', listStyleType: 'decimal' }}>{parseBold(line.replace(/^\d+\. /, ''))}</li>;
      }
      if (line.startsWith('#')) {
        const lvl = line.match(/^#+/)[0].length;
        const txt = line.replace(/^#+\s/, '');
        return <div key={bi} style={{ fontSize: lvl === 1 ? '1.2rem' : '1rem', fontWeight: 700, marginTop: '12px', marginBottom: '4px', color: color }}>{txt}</div>;
      }
      if (line.startsWith('[ ] ')) {
        return (
          <div key={bi} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', margin: '4px 0' }}>
            <span style={{ fontSize: '1rem', color: color }}>☐</span>
            <span>{parseBold(line.slice(4))}</span>
          </div>
        );
      }
      if (line.trim() === '') return <div key={bi} style={{ height: '8px' }} />;
      return <p key={bi} style={{ margin: '3px 0', lineHeight: '1.6' }}>{parseBold(line)}</p>;
    });
  };

  const contentRef = useRef(null);
  const certRef = useRef(null);
  const pdfRef = useRef(null);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [pdfImages, setPdfImages] = useState({});

  // Fetch each image as a base64 data URL so html2canvas can render it reliably
  const preloadImages = async () => {
    const names = [...new Set(
      modules.flatMap(m => m.sections.flatMap(s =>
        [...s.content.matchAll(/\{(\w+)\}/g)].map(x => x[1])
      ))
    )];
    const map = {};
    await Promise.all(names.map(async name => {
      for (const ext of ['png', 'jpg', 'jpeg']) {
        try {
          const res = await fetch(`/images/${name}.${ext}`);
          if (!res.ok) continue;
          const blob = await res.blob();
          map[name] = await new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.readAsDataURL(blob);
          });
          break;
        } catch { continue; }
      }
    }));
    return map;
  };

  const downloadPDF = async () => {
    setPdfGenerating(true);
    const imageMap = await preloadImages();
    setPdfImages(imageMap);
    await new Promise(r => setTimeout(r, 400)); // wait for images to render in hidden div
    try {
      const { jsPDF } = await import('jspdf');
      const A4_W = 210;
      const pages = pdfRef.current.querySelectorAll('.pdf-section');
      let pdf = null;
      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], { scale: 1.5, useCORS: true, backgroundColor: '#ffffff' });
        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        const imgH = (canvas.height * A4_W) / canvas.width;
        if (i === 0) {
          pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: [A4_W, imgH] });
        } else {
          pdf.addPage([A4_W, imgH]);
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, A4_W, imgH);
      }
      pdf.save('AI_Field_Guide_Complete.pdf');
    } finally {
      setPdfGenerating(false);
      setPdfImages({});
    }
  };

  const downloadCert = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2, backgroundColor: '#ffffff', useCORS: true });
    const link = document.createElement('a');
    link.download = `${certName.trim().replace(/\s+/g, '_')}_Certificate.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeModule, activeSection]);

  const goNext = () => {
    if (activeSection < mod.sections.length - 1) setActiveSection(s => s + 1);
    else if (activeModule < modules.length - 1) { setActiveModule(m => m + 1); setActiveSection(0); }
  };

  const goPrev = () => {
    if (activeSection > 0) setActiveSection(s => s - 1);
    else if (activeModule > 0) { setActiveModule(m => m - 1); setActiveSection(modules[activeModule - 1].sections.length - 1); }
  };

  const isFirst = activeModule === 0 && activeSection === 0;
  const isLast = activeModule === modules.length - 1 && activeSection === mod.sections.length - 1;

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', height: '100vh', overflow: 'hidden', background: 'var(--bg-primary)', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column' }}>

      {/* Top Nav */}
      <nav style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => setSidebarOpen(o => !o)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '1.2rem', padding: '4px 8px', borderRadius: '6px' }}>☰</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', color: mod.color, textTransform: 'uppercase' }}>Comprehensive AI Course for Senior Engineers</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '1px' }}>{mod.emoji} {mod.title}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          <div style={{ width: '80px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: mod.color, borderRadius: '3px', transition: 'width 0.3s' }} />
          </div>
          <span>{progress}%</span>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Sidebar Overlay (mobile) */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 49 }} />
        )}

        {/* Sidebar */}
        <aside style={{
          width: '260px', flexShrink: 0, borderRight: '1px solid var(--border-color)',
          padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px',
          overflowY: 'auto', background: 'var(--bg-secondary)',
          position: window.innerWidth < 768 ? 'fixed' : 'sticky',
          top: window.innerWidth < 768 ? 0 : 53,
          left: 0, height: window.innerWidth < 768 ? '100vh' : 'calc(100vh - 53px)',
          transform: sidebarOpen || window.innerWidth >= 768 ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease',
          zIndex: 50,
        }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', paddingLeft: '6px' }}>Modules</div>
          {modules.map((m, i) => (
            <div key={i}>
              <button
                onClick={() => { setActiveModule(i); setActiveSection(0); setSidebarOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px',
                  borderRadius: '8px', border: 'none',
                  background: i === activeModule ? `${m.color}20` : 'transparent',
                  color: i === activeModule ? m.color : 'var(--text-secondary)',
                  cursor: 'pointer', textAlign: 'left', fontWeight: i === activeModule ? 700 : 400,
                  fontSize: '0.83rem', transition: 'all 0.2s', width: '100%'
                }}>
                <span style={{ fontSize: '1rem' }}>{m.emoji}</span>
                <span style={{ flex: 1 }}>{m.title}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{m.sections.length}</span>
              </button>
              {i === activeModule && (
                <div style={{ marginLeft: '8px', marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {m.sections.map((s, j) => (
                    <button key={j} onClick={() => { setActiveSection(j); setSidebarOpen(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 10px 5px 28px',
                        borderRadius: '6px', border: 'none',
                        background: j === activeSection ? `${m.color}15` : 'transparent',
                        color: j === activeSection ? m.color : 'var(--text-secondary)',
                        cursor: 'pointer', textAlign: 'left', fontSize: '0.78rem',
                        fontWeight: j === activeSection ? 600 : 400, width: '100%', transition: 'all 0.15s'
                      }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: j === activeSection ? m.color : 'var(--border-color)', flexShrink: 0 }} />
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main ref={contentRef} style={{ flex: 1, padding: '28px 32px', overflowY: 'auto', maxWidth: sectionImageNames.length ? '700px' : '760px', minWidth: 0 }}>
          {/* Section Header */}
          <div style={{ borderLeft: `3px solid ${mod.color}`, paddingLeft: '16px', marginBottom: '24px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: mod.color, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
              Module {mod.id} · Section {activeSection + 1} of {mod.sections.length}
            </div>
            <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{section.title}</h1>
          </div>

          {/* Section Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {mod.sections.map((s, i) => (
              <button key={i} onClick={() => setActiveSection(i)}
                style={{
                  padding: '5px 14px', borderRadius: '20px',
                  border: `1.5px solid ${i === activeSection ? mod.color : 'var(--border-color)'}`,
                  background: i === activeSection ? mod.color : 'transparent',
                  color: i === activeSection ? '#fff' : 'var(--text-secondary)',
                  cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600, transition: 'all 0.2s'
                }}>
                {s.title.length > 22 ? s.title.slice(0, 22) + '…' : s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ lineHeight: '1.7', fontSize: '0.93rem' }}>
            {renderContent(section.content)}
          </div>


          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
            <button onClick={goPrev} disabled={isFirst}
              style={{
                padding: '10px 20px', borderRadius: '8px', border: '1.5px solid var(--border-color)',
                background: 'transparent', color: 'var(--text-primary)', cursor: isFirst ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem', opacity: isFirst ? 0.3 : 1, fontWeight: 500
              }}>
              ← Previous
            </button>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {completedSections} / {totalSections} sections
            </span>
            <button onClick={goNext} disabled={isLast}
              style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none',
                background: isLast ? 'var(--border-color)' : mod.color,
                color: '#fff', cursor: isLast ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem', fontWeight: 600, opacity: isLast ? 0.5 : 1
              }}>
              {isLast ? 'Complete ✓' : 'Next →'}
            </button>
          </div>

          {/* Certificate CTA — shown only on last section */}
          {isLast && (
            <div style={{
              marginTop: '32px', padding: '28px', borderRadius: '16px',
              background: 'linear-gradient(135deg, #6366f122, #7c3aed22)',
              border: '1.5px solid #6366f144', textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎓</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                You've completed the course!
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Enter your name and claim your certificate of completion.
              </div>
              <input
                type="text"
                placeholder="Enter your full name..."
                value={certName}
                onChange={e => setCertName(e.target.value)}
                style={{
                  width: '100%', maxWidth: '320px', padding: '10px 16px',
                  borderRadius: '8px', border: '1.5px solid #6366f155',
                  background: 'var(--bg-secondary)', color: 'var(--text-primary)',
                  fontSize: '0.95rem', marginBottom: '14px', display: 'block', margin: '0 auto 14px',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => certName.trim() && setShowCert(true)}
                  style={{
                    padding: '11px 32px', borderRadius: '8px', border: 'none',
                    background: certName.trim() ? '#6366f1' : 'var(--border-color)',
                    color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                    cursor: certName.trim() ? 'pointer' : 'not-allowed',
                    transition: 'background 0.2s',
                  }}>
                  🏆 Get My Certificate
                </button>
                <button
                  onClick={downloadPDF}
                  disabled={pdfGenerating}
                  style={{
                    padding: '11px 32px', borderRadius: '8px', border: 'none',
                    background: pdfGenerating ? 'var(--border-color)' : '#059669',
                    color: '#fff', fontSize: '0.9rem', fontWeight: 700,
                    cursor: pdfGenerating ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                  }}>
                  {pdfGenerating ? '⏳ Generating PDF...' : '📄 Download AI Course PDF'}
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Certificate Overlay */}
        {showCert && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}>
            {/* Certificate Card */}
            <div ref={certRef} style={{
              background: '#fff', borderRadius: '16px', padding: '52px 60px',
              maxWidth: '680px', width: '100%', textAlign: 'center',
              boxShadow: '0 0 80px #6366f155',
              border: '8px solid #6366f1',
              position: 'relative', fontFamily: 'Georgia, serif',
            }}>
              {/* Corner decoration */}
              {['top-left','top-right','bottom-left','bottom-right'].map(pos => (
                <div key={pos} style={{
                  position: 'absolute',
                  top: pos.includes('top') ? '12px' : 'auto',
                  bottom: pos.includes('bottom') ? '12px' : 'auto',
                  left: pos.includes('left') ? '12px' : 'auto',
                  right: pos.includes('right') ? '12px' : 'auto',
                  fontSize: '1.4rem', opacity: 0.4,
                }}>✦</div>
              ))}

              <div style={{ fontSize: '2.8rem', marginBottom: '4px' }}>🎓</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '4px', color: '#6366f1', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'system-ui' }}>
                Certificate of Completion
              </div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '18px', fontStyle: 'italic' }}>
                This is to certify that
              </div>
              <div style={{
                fontSize: '2rem', fontWeight: 800, color: '#1a1a2e',
                borderBottom: '2px solid #6366f144', paddingBottom: '10px',
                marginBottom: '18px', fontFamily: 'Georgia, serif',
              }}>
                {certName}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#444', marginBottom: '6px' }}>
                has successfully completed
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6366f1', marginBottom: '6px' }}>
                Comprehensive AI Field Guide for Software Engineers
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '28px' }}>
                Covering AI/ML, LLMs, RAG, Prompt Engineering & Practical AI Stack
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a2e' }}>Santhosha 😊</div>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>Course Author</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem' }}>⭐</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a1a2e' }}>
                    {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>Date of Completion</div>
                </div>
              </div>
            </div>

            {/* Controls outside certificate */}
            <div style={{ position: 'fixed', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button onClick={downloadCert} style={{
                background: '#6366f1', border: 'none',
                color: '#fff', borderRadius: '20px', padding: '10px 22px',
                fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '7px',
              }}>
                ⬇️ Download Certificate
              </button>
              <button onClick={() => setShowCert(false)} style={{
                background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', borderRadius: '20px', padding: '10px 18px',
                fontSize: '0.85rem', cursor: 'pointer',
              }}>✕ Close</button>
            </div>
          </div>
        )}

        {/* Image Panel — shown when content has {ImageName} tokens */}
        {sectionImageNames.length > 0 && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '20px',
            padding: '24px 16px', borderLeft: '1px solid var(--border-color)',
            minWidth: '280px', maxWidth: '420px', width: '100%', overflowY: 'auto',
          }}>
            {sectionImageNames.map((name, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px', color: mod.color, textTransform: 'uppercase' }}>
                  {name.replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1 $2').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([a-zA-Z])([0-9])/g, '$1 $2').replace(/([0-9])([a-zA-Z])/g, '$1 $2').trim()}
                </div>
                <CourseImage name={name} color={mod.color} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hidden PDF content — rendered off-screen for html2canvas capture */}
      {pdfGenerating && (
        <div ref={pdfRef} style={{ position: 'fixed', left: '-9999px', top: 0, width: '860px', background: '#fff', zIndex: -1 }}>
          {modules.map((m, mi) =>
            m.sections.map((s, si) => {
              const imageNames = [...s.content.matchAll(/\{(\w+)\}/g)].map(x => x[1]);
              return (
                <div key={`${mi}-${si}`} className="pdf-section" style={{
                  width: '860px', padding: '56px 64px', boxSizing: 'border-box',
                  background: '#ffffff', fontFamily: 'system-ui, sans-serif',
                  borderBottom: '4px solid #f0f0f0',
                }}>
                  {/* Module + Section header */}
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: m.color, textTransform: 'uppercase', marginBottom: '6px' }}>
                    {m.emoji} Module {m.id} — {m.title}
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a2e', borderLeft: `4px solid ${m.color}`, paddingLeft: '14px', marginBottom: '24px', lineHeight: 1.3 }}>
                    {s.title}
                  </div>
                  {/* Content */}
                  <div style={{ fontSize: '13px', lineHeight: '1.75', color: '#222' }}>
                    {renderContent(s.content, m.color)}
                  </div>
                  {/* Images */}
                  {imageNames.filter(name => pdfImages[name]).map((name, ii) => (
                    <div key={ii} style={{ marginTop: '20px' }}>
                      <img src={pdfImages[name]} alt={name}
                        style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                      />
                    </div>
                  ))}
                  {/* Page footer */}
                  <div style={{ marginTop: '32px', paddingTop: '12px', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#999' }}>
                    <span>Complete AI Field Guide for Software Engineers</span>
                    <span>Section {si + 1} of {m.sections.length}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
