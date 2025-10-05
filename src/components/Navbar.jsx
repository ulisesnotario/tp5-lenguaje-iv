import { NavLink } from 'react-router-dom'

const baseLinkStyles = {
    padding: '0.5rem 0.75rem',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 600,
    transition: 'background 0.2s ease, color 0.2s ease'
}

const linkStyle = ({ isActive }) => ({
    ...baseLinkStyles,
    color: isActive ? '#fff' : '#1f2937',
    background: isActive ? '#3b82f6' : 'transparent'
})

export default function Navbar() {
    return (
        <header style={{ borderBottom: '1px solid #eee' }}>
            <nav style={{
                display: 'flex',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                alignItems: 'center',
            }}>
                <span style={{ fontWeight: 800 }}>TP — Lenguaje IV</span>
                <NavLink to="/" end style={linkStyle}>Inicio</NavLink>
                <NavLink to="/servicios" style={linkStyle}>Servicios</NavLink>
                <NavLink to="/api" style={linkStyle}>API</NavLink>
                <NavLink to="/contacto" style={linkStyle}>Contacto</NavLink>
            </nav>
        </header>
    )
}
