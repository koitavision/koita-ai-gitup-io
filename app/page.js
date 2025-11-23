'use client';  // ← AJOUTEZ CETTE LIGNE EN HAUT

export default function Home() {
  const handleClick = () => {
    alert('Application Mistral Chat - Bientôt disponible!');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: '32px',
          color: 'white'
        }}>
          🤖
        </div>
        
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '10px'
        }}>
          Mistral AI Chat
        </h1>
        
        <p style={{
          color: '#6b7280',
          marginBottom: '30px',
          fontSize: '16px'
        }}>
          Assistant IA moderne avec technologie Mistral
        </p>

        <div style={{
          background: '#dcfce7',
          border: '1px solid #86efac',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <p style={{ color: '#166534', fontSize: '14px', fontWeight: 'bold', margin: 0 }}>
            ✅ Prêt au déploiement
          </p>
          <p style={{ color: '#374151', fontSize: '12px', margin: '5px 0 0 0' }}>
            Cliquez sur le bouton pour commencer
          </p>
        </div>

        <button 
          onClick={handleClick}
          style={{
            width: '100%',
            background: '#3b82f6',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Démarrer l'Expérience IA
        </button>
      </div>
    </div>
  );
}
