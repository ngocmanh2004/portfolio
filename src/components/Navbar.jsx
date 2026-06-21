import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'var(--bg-navbar)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-navbar)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
        }}
      >
        &lt;NNM /&gt;
      </a>

      <div style={{ alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
        <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'var(--text-muted-alt)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted-alt)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ControlBtn onClick={toggleLang} title="Toggle language">
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              {lang.toUpperCase()}
            </span>
          </ControlBtn>

          <ControlBtn onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </ControlBtn>

          <a
            href="/ManhNguyen_CV.pdf"
            download
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
              e.currentTarget.style.transform = 'scale(1.04)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {t.nav.resume}
          </a>
        </div>
      </div>

      <div style={{ alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
        <ControlBtn onClick={toggleLang} title="Toggle language">
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            {lang.toUpperCase()}
          </span>
        </ControlBtn>
        <ControlBtn onClick={toggleTheme} title="Toggle theme">
          {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
        </ControlBtn>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary-light)',
            cursor: 'pointer',
            display: 'flex',
            padding: '4px',
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              background: 'var(--bg-navbar)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.4rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/ManhNguyen_CV.pdf"
              download
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {t.nav.resume}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function ControlBtn({ onClick, title, children }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '6px',
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary-light)'
        e.currentTarget.style.color = 'var(--primary-light)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-muted)'
      }}
    >
      {children}
    </button>
  )
}
