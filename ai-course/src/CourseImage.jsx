import { useState } from 'react'

const EXTENSIONS = ['png', 'jpg', 'jpeg']

/**
 * CourseImage
 * -----------
 * Renders a single course image with zoom/lightbox capability.
 * The parent panel (in AICourse.jsx) handles layout and stacking.
 *
 * Usage in content strings:  {TokensImage}
 * File placement:            public/images/TokensImage.png  (or .jpg / .jpeg)
 *
 * Props:
 *   name  – image filename without extension  e.g. "TokensImage"
 *   color – accent color inherited from the active module
 */
export default function CourseImage({ name, color }) {
  const [extIndex, setExtIndex] = useState(0)
  const [failed, setFailed] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  const src = `${import.meta.env.BASE_URL}images/${name}.${EXTENSIONS[extIndex]}`

  const handleError = () => {
    if (extIndex < EXTENSIONS.length - 1) {
      setExtIndex(i => i + 1)
    } else {
      setFailed(true)
    }
  }

  return (
    <>
      {failed ? (
        /* Placeholder shown before the image file is added */
        <div style={{
          width: '100%', aspectRatio: '4/3',
          border: `2px dashed ${color}55`, borderRadius: '10px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '10px',
          background: `${color}08`, padding: '20px', textAlign: 'center',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" strokeDasharray="3 2"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill={color} opacity="0.6"/>
            <path d="M3 16l5-5 4 4 3-3 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Drop image here
          </div>
          <code style={{
            fontSize: '0.7rem', padding: '4px 10px', borderRadius: '4px',
            background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
            color: color, letterSpacing: '0.3px'
          }}>
            public/images/{name}.png
          </code>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
            .png · .jpg · .jpeg
          </div>
        </div>
      ) : (
        /* Actual image */
        <div style={{ position: 'relative', width: '100%' }}>
          <img
            src={src}
            onError={handleError}
            onClick={() => setZoomed(true)}
            alt={name}
            style={{
              width: '100%', borderRadius: '10px',
              border: `1px solid var(--border-color)`,
              cursor: 'zoom-in', display: 'block',
              transition: 'box-shadow 0.2s, transform 0.2s',
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 4px 24px ${color}44`
              e.currentTarget.style.transform = 'scale(1.01)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
          {/* Zoom hint badge */}
          <div style={{
            position: 'absolute', bottom: '8px', right: '8px',
            background: 'rgba(0,0,0,0.6)', borderRadius: '5px',
            padding: '3px 7px', fontSize: '0.62rem', color: '#fff',
            display: 'flex', alignItems: 'center', gap: '4px',
            pointerEvents: 'none',
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Click to zoom
          </div>
        </div>
      )}

      {/* Lightbox Overlay */}
      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: '32px',
          }}
        >
          <img
            src={src}
            alt={name}
            style={{
              maxWidth: '90vw', maxHeight: '90vh',
              borderRadius: '12px', boxShadow: `0 0 60px ${color}55`,
              border: `1px solid ${color}44`, objectFit: 'contain',
            }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomed(false)}
            style={{
              position: 'fixed', top: '20px', right: '24px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', borderRadius: '50%', width: '36px', height: '36px',
              fontSize: '1.1rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
          <div style={{
            position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.6)', padding: '5px 14px', borderRadius: '20px',
            fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', pointerEvents: 'none',
          }}>
            {name}
          </div>
        </div>
      )}
    </>
  )
}
