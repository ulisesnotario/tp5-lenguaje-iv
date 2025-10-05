import { useState } from 'react'

export default function UploadImage() {
    const [preview, setPreview] = useState(null)
    const [error, setError] = useState('')

    const onFileChange = (e) => {
        const file = e.target.files?.[0]
        setError('')
        setPreview(null)
        if (!file) return

        // Validación: que sea imagen (API File)
        if (!file.type.startsWith('image/')) {
            setError('El archivo debe ser una imagen (jpg, png, etc.)')
            return
        }

        const reader = new FileReader()
        reader.onload = () => setPreview(reader.result)
        reader.readAsDataURL(file)
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <input type="file" accept="image/*" onChange={onFileChange} />
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
            {preview && (
                <div style={{ marginTop: '1rem' }}>
                    <img
                        src={preview}
                        alt="Vista previa"
                        style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #eee' }}
                    />
                </div>
            )}
        </div>
    )
}
