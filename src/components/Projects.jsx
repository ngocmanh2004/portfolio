import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../hooks/useScrollReveal'
import { SectionLabel, SectionTitle } from './About'
import { PROJECTS } from '../data/projects'
import { ExternalLink, Star } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Projects() {
  const { t } = useApp()

  return (
    <section
      id="projects"
      style={{ padding: '90px 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionLabel>{t.projects.label}</SectionLabel>
          <SectionTitle>{t.projects.title}</SectionTitle>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              description={t.projects.descriptions[project.id]}
              featuredLabel={t.projects.featured}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project, description, featuredLabel }) {
  return (
    <motion.article
      variants={fadeUpVariant}
      whileHover={{ y: -5 }}
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: `1px solid ${project.accentColor}20`,
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.accentColor}50`
        e.currentTarget.style.boxShadow = `var(--shadow-hover)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.accentColor}20`
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {project.featured && (
        <div
          style={{
            position: 'absolute',
            top: '0.6rem',
            left: '0.6rem',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.22rem 0.55rem',
            borderRadius: '999px',
            background: 'rgba(124,58,237,0.88)',
            backdropFilter: 'blur(6px)',
            fontSize: '0.68rem',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          <Star size={10} fill="white" />
          {featuredLabel}
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', overflow: 'hidden', height: '180px', flexShrink: 0 }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.45s ease',
            display: 'block',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </a>

      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '7px',
                border: `1px solid ${project.accentColor}35`,
                color: project.accentColor,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${project.accentColor}12`
                e.currentTarget.style.borderColor = project.accentColor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = `${project.accentColor}35`
              }}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1 }}>
          {description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.25rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.18rem 0.55rem',
                borderRadius: '999px',
                background: `${project.accentColor}10`,
                border: `1px solid ${project.accentColor}28`,
                fontSize: '0.68rem',
                color: project.accentColor,
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
