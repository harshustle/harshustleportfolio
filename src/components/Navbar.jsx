import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const MOBILE_BREAKPOINT = 768;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // close menu when switching to desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { label: 'services', href: '/services' },
    { label: 'about', href: '/about' },
    { label: 'reviews', href: '/reviews' },
    { label: 'blog', href: '/blog' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? `1px solid var(--c-divider)` : '1px solid transparent',
      background: scrolled ? 'var(--c-nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

          {/* Logo */}
          <Link to="/" style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--c-text)', textDecoration: 'none', flexShrink: 0 }}>
            harsh<span style={{ color: 'var(--accent)' }}>ustle</span>
          </Link>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {links.map(link => (
                <Link key={link.href} to={link.href} style={{
                  fontSize: '0.875rem',
                  color: isActive(link.href) ? 'var(--c-text)' : 'var(--c-text-muted)',
                  fontWeight: 500, letterSpacing: '0.01em',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop Right: Theme Toggle + CTAs */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <Link to="/book-a-call" style={{
                padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 600,
                color: 'var(--c-text-muted)', border: `1px solid var(--c-border)`,
                borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, animation: 'pulse-dot 2s infinite' }} />
                book a call
              </Link>
              <Link to="/contact" style={{
                padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 700,
                color: '#fff', background: 'var(--accent)',
                borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                boxShadow: '0 0 16px rgba(168,85,247,0.35)',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.55)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(168,85,247,0.35)'}>
                get started
              </Link>
            </div>
          )}

          {/* Mobile: Theme Toggle + Hamburger */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px',
                  background: 'var(--c-bg-subtle)', border: `1px solid var(--c-border)`,
                  borderRadius: '8px', color: 'var(--c-text)',
                  fontSize: '1rem', cursor: 'pointer',
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: 'var(--c-bg)',
          borderTop: `1px solid var(--c-divider)`,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {links.map(link => (
            <Link key={link.href} to={link.href} style={{
              fontSize: '1rem', fontWeight: 600, color: 'var(--c-text)',
              textDecoration: 'none', padding: '1rem 0',
              borderBottom: `1px solid var(--c-border-subtle)`,
            }}>
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.25rem' }}>
            <Link to="/book-a-call" style={{
              padding: '0.75rem 1rem', textAlign: 'center', textDecoration: 'none',
              border: `1px solid var(--c-border)`, borderRadius: '8px',
              fontWeight: 600, color: 'var(--c-text)', fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2s infinite' }} />
              book a call · 2 spots left
            </Link>
            <Link to="/contact" style={{
              padding: '0.75rem 1rem', textAlign: 'center', textDecoration: 'none',
              background: 'var(--accent)', color: '#fff',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem',
              boxShadow: '0 0 20px rgba(168,85,247,0.4)',
            }}>
              get started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;