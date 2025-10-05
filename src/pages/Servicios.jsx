const rooms = [
    {
        id: 1,
        name: 'Suite Deluxe',
        description: 'Amplia habitación con vista panorámica, equipada con living y balcón privado.',
        capacity: 'Hasta 4 huéspedes',
        price: '$220 / noche',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Habitación Familiar',
        description: 'Dos ambientes conectados con kitchenette y zona de juegos para niños.',
        capacity: 'Hasta 5 huéspedes',
        price: '$180 / noche',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Suite Ejecutiva',
        description: 'Pensada para viajes de negocios con escritorio ergonómico y sala de reuniones privada.',
        capacity: 'Hasta 2 huéspedes',
        price: '$200 / noche',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
    }
]

export default function Servicios() {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '2rem 1rem',
            backgroundColor: '#99a1a8ff'
        }}>
            <div style={{ width: '100%', maxWidth: '1100px' }}>
                <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '0.5rem' }}>Servicios</h1>
                    <p style={{ color: '#e0dadaff' }}>
                        Descubrí nuestras habitaciones pensadas para cada tipo de experiencia.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {rooms.map((room) => (
                        <article key={room.id} style={{
                            background: '#2b2222ff',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px -15px rgba(0,0,0,0.2)'
                        }}>
                            <img
                                src={room.image}
                                alt={room.name}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <h2 style={{ margin: 0 }}>{room.name}</h2>
                                <p style={{ margin: 0, color: '#d4d9dfff' }}>{room.description}</p>
                                <p style={{ margin: 0, fontWeight: 600 }}>{room.capacity}</p>
                                <p style={{ margin: 0, color: '#2563eb', fontWeight: 700 }}>{room.price}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
