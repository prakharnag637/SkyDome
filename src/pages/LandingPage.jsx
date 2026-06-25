import hero from '../assets/hero.png'

function LandingPage({ goToMap }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <img
        src={hero}
        alt="SkyDome"
        style={{
          width: '65px',
          marginBottom: '20px',
        }}
      />

      <h1
  style={{
    fontSize: '4rem',
    marginTop: '10px',
    marginBottom: '25px',
    color: '#5fa8ff',
    textShadow: '0 0 15px rgba(95,168,255,0.6)',
  }}
>
  SkyDome
</h1>

      <h2
        style={{
          marginTop: '20px',
          fontWeight: '500',
        }}
      >
        Explore the Sky From Anywhere on Earth
      </h2>

      <p
        style={{
          maxWidth: '700px',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginTop: '10px',
          marginBottom: '30px',
        }}
      >
        Track planets, constellations and the International Space Station
        above any location on Earth in real time.
      </p>

      <button
        onClick={goToMap}
        style={{
          padding: '18px 55px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '12px',
          background: '#2f6df6',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(47,109,246,0.4)',
        }}
      >
        🚀 Start Exploring
      </button>

  
    </div>
  )
}
export default LandingPage