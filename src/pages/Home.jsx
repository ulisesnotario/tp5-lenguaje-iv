import UploadImage from '../components/UploadImage.jsx'

export default function Home() {
    return (
        <section style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',           
            textAlign: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',     
                padding: '1rem'
            }}>
                <h1 style={{ marginBottom: '1.5rem' }}>Inicio</h1>
                <p style={{ marginBottom: '1.5rem' }}>
                    Este es el componente del TP2 (subida/visualización de imagen).
                </p>
                <UploadImage />
            </div>
        </section>
    )
}
