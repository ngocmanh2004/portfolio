import { motion } from 'framer-motion'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { useApp } from '../context/AppContext'

const PARTICLE_COUNT = 16

function FloatingParticles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: ['0vh', '-100vh'], opacity: [0, 0.5, 0] }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
          }}
        />
      ))}
    </div>
  )
}

function AvatarRing() {
  return (
    <div style={{ position: 'relative', width: '220px', height: '220px', flexShrink: 0 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '4px',
          borderRadius: '50%',
          background: 'var(--bg)',
        }}
      />
      <img
        src="/manhnguyenngoc.jpg"
        alt="Nguyễn Ngọc Mạnh"
        style={{
          position: 'absolute',
          inset: '8px',
          borderRadius: '50%',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      />
    </div>
  )
}

export default function Hero() {
  const { t } = useApp()
  const typedText = useTypingEffect(t.hero.typingWords)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-hero)',
        padding: '90px 1.5rem 60px',
      }}
    >
      <FloatingParticles />

      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          zIndex: 1,
        }}
        className="hero-inner"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-avatar"
        >
          <AvatarRing />
        </motion.div>

        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '999px',
              border: '1px solid rgba(124,58,237,0.35)',
              background: 'rgba(124,58,237,0.07)',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {t.hero.available}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '0.9rem', color: '#a855f7', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{
              fontSize: 'clamp(2rem, 7vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '0.75rem',
              background: 'linear-gradient(135deg, var(--text) 0%, #a855f7 60%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Nguyễn Ngọc Mạnh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
              minHeight: '1.8em',
            }}
          >
            <span>{typedText}</span>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.1em',
                background: '#a855f7',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'blink 0.8s step-end infinite',
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.54 }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.75rem' }}
          >
            <a
              href="#projects"
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.45)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)'
              }}
            >
              {t.hero.viewWork}
            </a>
            <a
              href="#contact"
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: '8px',
                border: '1.5px solid rgba(168,85,247,0.45)',
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(168,85,247,0.08)'
                e.currentTarget.style.borderColor = '#a855f7'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
              }}
            >
              {t.hero.contactMe}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}
          >
            <SocialLink href="https://github.com/ngocmanh2004" icon={<FaGithub size={18} />} label="GitHub" />
            <SocialLink href="https://www.facebook.com/ngocmanh2004/" icon={<FaFacebook size={18} />} label="Facebook" />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-subtle)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          textDecoration: 'none',
          animation: 'bounce 2s infinite',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
          {t.hero.scroll}
        </span>
        <ArrowDown size={14} />
      </motion.a>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.4 } }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0) }
          50% { transform: translateX(-50%) translateY(-7px) }
        }
        .hero-inner { flex-direction: column !important; }
        @media (min-width: 768px) {
          .hero-inner {
            flex-direction: row-reverse !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
          .hero-inner > div { text-align: left !important; }
          .hero-inner > div div { justify-content: flex-start !important; }
        }
        .hero-avatar { display: flex !important; }
      `}</style>
    </section>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#a855f7'
        e.currentTarget.style.color = '#a855f7'
        e.currentTarget.style.background = 'rgba(168,85,247,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {icon}
    </a>
  )
}
