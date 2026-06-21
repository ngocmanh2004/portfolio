import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer, slideLeftVariant, slideRightVariant } from '../hooks/useScrollReveal'
import { Code2, Briefcase, GraduationCap, Zap } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function SectionLabel({ children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        color: '#a855f7',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '0.6rem',
        padding: '0.25rem 0.75rem',
        borderRadius: '999px',
        background: 'rgba(168,85,247,0.08)',
        border: '1px solid rgba(168,85,247,0.2)',
      }}
    >
      {children}
    </span>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--text), #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
      }}
    >
      {children}
    </h2>
  )
}

export default function About() {
  const { t } = useApp()

  const STATS = [
    { icon: <GraduationCap size={18} />, label: t.about.education, value: t.about.educationValue },
    { icon: <Code2 size={18} />, label: t.about.major, value: t.about.majorValue },
    { icon: <Briefcase size={18} />, label: t.about.experience, value: t.about.experienceValue },
    { icon: <Zap size={18} />, label: t.about.focus, value: t.about.focusValue },
  ]

  return (
    <section
      id="about"
      style={{ padding: '90px 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionLabel>{t.about.label}</SectionLabel>
          <SectionTitle>{t.about.title}</SectionTitle>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          <motion.div variants={slideLeftVariant}>
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <img
                src="/manhnguyenngoc.jpg"
                alt="Nguyễn Ngọc Mạnh"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>Nguyễn Ngọc Mạnh</p>
                <p style={{ color: '#a855f7', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                  Fullstack Developer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideRightVariant} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                {t.about.bio1Part1}{' '}
                <span style={{ color: '#a855f7', fontWeight: 600 }}>{t.about.bio1Accent}</span>
                {t.about.bio1Part2}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
                {t.about.bio2Part1}{' '}
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{t.about.bio2Accent1}</span>{' '}
                {t.about.bio2Part2}{' '}
                <span style={{ color: '#a855f7', fontWeight: 600 }}>{t.about.bio2Accent2}</span>
                {t.about.bio2Part3}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{ color: '#a855f7', marginBottom: '0.35rem' }}>{stat.icon}</div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', marginBottom: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text)', fontWeight: 600 }}>{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
