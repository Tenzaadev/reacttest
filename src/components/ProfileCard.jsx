function ProfileCard() {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '350px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            background: '#f9f9f9'
        }}>
            <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>Анна Иванова</h2>
            <h3 style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'normal' }}>
                Веб-разработчик
            </h3>
            <p style={{ color: '#555' }}>
                Люблю писать чистый код и изучать новые технологии
            </p>
            <ul style={{ paddingLeft: '20px' }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default ProfileCard;