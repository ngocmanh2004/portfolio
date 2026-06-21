import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../hooks/useScrollReveal'
import { SectionLabel, SectionTitle } from './About'
import { SKILL_CATEGORIES } from '../data/skills.jsx'
import { useApp } from '../context/AppContext'

export default function Skills() {
  const { t } = useApp()

  return (
    <section
      id="skills"
      style={{ padding: '90px 1.5rem', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>{t.skills.label}</SectionLabel>
            <SectionTitle>{t.skills.title}</SectionTitle>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {SKILL_CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeUpVariant}
                whileHover={{ y: -3 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: '14px',
                  background: 'var(--bg-card)',
                  border: `1px solid ${category.color}22`,
                  boxShadow: 'var(--shadow-card)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${category.color}55`
                  e.currentTarget.style.boxShadow = `0 6px 24px ${category.color}15`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${category.color}22`
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${category.color}, transparent)`,
                  }}
                />
                <h3
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: category.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    marginBottom: '1rem',
                  }}
                >
                  {category.labelKey}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} color={category.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillItem({ skill, color }) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.4rem 0.6rem',
        borderRadius: '7px',
        cursor: 'default',
        transition: 'background 0.18s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = `${color}10`)}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <span style={{ color, fontSize: '1rem', lineHeight: 1, display: 'flex', alignItems: 'center' }}>
        {skill.icon}
      </span>
      <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{skill.name}</span>
    </motion.div>
  )
}
