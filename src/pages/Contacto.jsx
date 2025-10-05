import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contacto() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ ok: false, msg: 'Todos los campos son obligatorios.' })
            return
        }

        emailjs.send(
            'service_6tq79cb',      
            'template_vxj5g8f',        
            formData,
            'aOks7HJ0CwJeTN7rQ'         
        )
            .then(() => {
                setStatus({ ok: true, msg: 'Correo enviado correctamente.' })
                setFormData({ name: '', email: '', message: '' })
            })
            .catch(() => {
                setStatus({ ok: false, msg: 'Error al enviar el correo.' })
            })
    }

    return (
        <section style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            padding: '2rem 1rem',
            backgroundColor: '#646d77ff'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '960px',
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'start'
            }}>
                <div style={{
                    background: '#917c7cff',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: '0 18px 40px -24px rgba(15, 23, 42, 0.35)'
                }}>
                    <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Contacto</h1>
                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                padding: '0.75rem',
                                backgroundColor: '#4a78c2ff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Enviar
                        </button>
                    </form>

                    {status && (
                        <p style={{ marginTop: '1rem', color: status.ok ? 'green' : 'crimson', textAlign: 'center' }}>
                            {status.msg}
                        </p>
                    )}
                </div>

                <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    minHeight: '360px',
                    boxShadow: '0 18px 40px -24px rgba(15, 23, 42, 0.35)'
                }}>
                    <iframe
                        title="Ubicación del hotel"
                        src="https://maps.google.com/maps?q=Salta%20Capital%2C%20Argentina&z=13&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
