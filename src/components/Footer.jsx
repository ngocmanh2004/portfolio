import { FaGithub, FaFacebook } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '2rem 1.5rem',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.2rem',
            }}
          >
            &lt;NNM /&gt;
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
            © {year} Nguyễn Ngọc Mạnh. {t.footer.rights}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <FooterIcon href="https://github.com/ngocmanh2004" icon={<FaGithub size={16} />} label="GitHub" />
          <FooterIcon href="https://www.facebook.com/ngocmanh2004/" icon={<FaFacebook size={16} />} label="Facebook" />
          <FooterIcon href="https://zalo.me/0779421219" icon={<SiZalo size={16} />} label="Zalo" />
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({ href, icon, label }) {
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
        width: '33px',
        height: '33px',
        borderRadius: '7px',
        border: '1px solid var(--border)',
        color: 'var(--text-subtle)',
        textDecoration: 'none',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
        e.currentTarget.style.color = '#a855f7'
        e.currentTarget.style.background = 'rgba(168,85,247,0.07)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-subtle)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {icon}
    </a>
  )
}
