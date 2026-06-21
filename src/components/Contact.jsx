import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { fadeUpVariant, staggerContainer } from '../hooks/useScrollReveal'
import { SectionLabel, SectionTitle } from './About'
import { Send, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { SiZalo } from 'react-icons/si'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { useApp } from '../context/AppContext'

const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', value: 'ngocmanh2004', href: 'https://github.com/ngocmanh2004', icon: <FaGithub size={18} />, color: '#a855f7' },
  { id: 'facebook', label: 'Facebook', value: 'Mạnh Nguyễn', href: 'https://www.facebook.com/ngocmanh2004/', icon: <FaFacebook size={18} />, color: '#1877f2' },
  { id: 'zalo', label: 'Zalo', value: '0779 421 219', href: 'https://zalo.me/0779421219', icon: <SiZalo size={18} />, color: '#0068ff' },
  { id: 'phone', label: 'Phone', value: '0779 421 219', href: 'tel:0779421219', icon: <Phone size={18} />, color: '#22c55e' },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const { t } = useApp()
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await axios.post('/api/contact', formData)
      setStatus('success')
      setFormData(INITIAL_FORM)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={{ padding: '90px 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUpVariant} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>{t.contact.label}</SectionLabel>
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '440px', margin: '0.75rem auto 0', fontSize: '0.9rem' }}>
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <motion.div variants={fadeUpVariant}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>
                {t.contact.connect}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {t.contact.connectDesc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SOCIAL_LINKS.map((link) => (
                  <SocialCard key={link.id} link={link} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <FormField
                  id="contact-name"
                  label={t.contact.name}
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  required
                />
                <FormField
                  id="contact-email"
                  label={t.contact.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    {t.contact.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: '8px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontSize: '0.875rem',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.55)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                {status === 'success' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e', fontSize: '0.825rem' }}>
                    <CheckCircle size={15} />{t.contact.success}
                  </div>
                )}

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444', fontSize: '0.825rem' }}>
                    <AlertCircle size={15} />{t.contact.error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '8px',
                    background: loading ? 'rgba(124,58,237,0.4)' : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 16px rgba(124,58,237,0.25)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <Send size={14} />
                  {loading ? t.contact.sending : t.contact.send}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ id, label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '0.65rem 0.9rem',
          borderRadius: '8px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          fontSize: '0.875rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          fontFamily: 'var(--font-sans)',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.55)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
      />
    </div>
  )
}

function SocialCard({ link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.85rem 1rem',
        borderRadius: '10px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        textDecoration: 'none',
        boxShadow: 'var(--shadow-card)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${link.color}45`
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: `${link.color}12`, color: link.color, flexShrink: 0 }}>
        {link.icon}
      </div>
      <div>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', marginBottom: '0.1rem' }}>{link.label}</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 600 }}>{link.value}</p>
      </div>
    </a>
  )
}
