function RadarPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '30px',
      }}
    >
      <h1>🪐 Solar System Radar</h1>
      <p
  style={{
    opacity: '0.8',
    fontSize: '1.1rem',
    marginBottom: '20px',
  }}
>
    Visualizing Planetary Orbits and Positions
</p>
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '500px',
          margin: '50px auto',
        }}
      >
        {/* Mercury Orbit */}
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            border: '1px solid rgba(95,168,255,0.4)',
            borderRadius: '50%',
            top: '200px',
            left: '200px',
            textShadow: '0 0 20px #87ceeb',       
          }}
        />

        {/* Venus Orbit */}
        <div
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            border: '1px solid rgba(95,168,255,0.4)',
            borderRadius: '50%',
            top: '160px',
            left: '160px',
            textShadow: '0 0 20px gold',
          }}
        />

        {/* Earth Orbit */}
        <div
          style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            border: '1px solid rgba(95,168,255,0.4)',
            borderRadius: '50%',
            top: '120px',
            left: '120px',
            textShadow: '0 0 25px #4da6ff'
          }}
        />

        {/* Mars Orbit */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            border: '1px solid rgba(95,168,255,0.4)',
            borderRadius: '50%',
            top: '80px',
            left: '80px',
            textShadow: '0 0 25px red'
          }}
        />

          {/* Jupiter Orbit */}
<div
  style={{
    position: 'absolute',
    width: '420px',
    height: '420px',
    border: '1px solid rgba(95,168,255,0.25)',
    borderRadius: '50%',
    top: '40px',
    left: '40px',
  }}
/>

{/* Saturn Orbit */}
<div
  style={{
    position: 'absolute',
    width: '480px',
    height: '480px',
    border: '1px solid rgba(95,168,255,0.2)',
    borderRadius: '50%',
    top: '10px',
    left: '10px',
  }}
/>
{/* Uranus Orbit */}
<div
  style={{
    position: 'absolute',
    width: '560px',
    height: '560px',
    border: '1px solid rgba(95,168,255,0.15)',
    borderRadius: '50%',
    top: '-30px',
    left: '-30px',
  }}
/>

{/* Neptune Orbit */}
<div
  style={{
    position: 'absolute',
    width: '640px',
    height: '640px',
    border: '1px solid rgba(95,168,255,0.1)',
    borderRadius: '50%',
    top: '-70px',
    left: '-70px',
  }}
/>

        {/* Sun */}
        <div
          style={{
            position: 'absolute',
            top: '235px',
            left: '235px',
            fontSize: '35px',
            textShadow: '0 0 35px orange'
          }}
        >
          ☀️
        </div>

        {/* Mercury Animation */}
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            top: '200px',
            left: '200px',
            animation: 'rotate 10s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              top: '40px',
              fontSize: '20px',
            }}
          >
            🔵
          </div>
        </div>

        {/* Venus Animation */}
        <div
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            top: '160px',
            left: '160px',
            animation: 'rotate 25s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              top: '80px',
              fontSize: '22px',
            }}
          >
            🟡
          </div>
        </div>

        {/* Earth Animation */}
        <div
          style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            top: '120px',
            left: '120px',
            animation: 'rotate 40s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-12px',
              top: '118px',
              fontSize: '24px',
            }}
          >
            🌍
          </div>
        </div>

        {/* Mars Animation */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            top: '80px',
            left: '80px',
            animation: 'rotate 75s linear infinite',
          }}
        >
          
          <div
            style={{
              position: 'absolute',
              right: '-12px',
              top: '158px',
              fontSize: '24px',
            }}
          >
            🔴
          </div>
        </div>

        {/* Jupiter Animation */}
<div
  style={{
    position: 'absolute',
    width: '420px',
    height: '420px',
    top: '40px',
    left: '40px',
    animation: 'rotate 150s linear infinite',
  }}
>
  <div
    style={{
      position: 'absolute',
      right: '-12px',
      top: '198px',
      fontSize: '28px',
    }}
  >
    🟠
  </div>
</div>

{/* Saturn Animation */}
<div
  style={{
    position: 'absolute',
    width: '480px',
    height: '480px',
    top: '10px',
    left: '10px',
    animation: 'rotate 300s linear infinite',
  }}
>
  {/* Uranus Animation */}
<div
  style={{
    position: 'absolute',
    width: '560px',
    height: '560px',
    top: '-30px',
    left: '-30px',
    animation: 'rotate 500s linear infinite',
  }}
>
  <div
    style={{
      position: 'absolute',
      right: '-12px',
      top: '280px',
      fontSize: '28px',
    }}
  >
    🔷
  </div>
</div>
{/* Neptune Animation */}
<div
  style={{
    position: 'absolute',
    width: '640px',
    height: '640px',
    top: '-70px',
    left: '-70px',
    animation: 'rotate 800s linear infinite',
  }}
>
  <div
    style={{
      position: 'absolute',
      right: '-12px',
      top: '320px',
      fontSize: '28px',
    }}
  >
    🔵
  </div>
</div>

  <div
    style={{
      position: 'absolute',
      right: '-12px',
      top: '228px',
      fontSize: '30px',
    }}
  >
    🪐
  </div>
</div>
      </div>
      
      
      <div
  style={{
    width: '280px',
    margin: '30px auto',
    padding: '20px',
    borderRadius: '15px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 0 20px rgba(95,168,255,0.15)',
  }}
>
  <h2>Planet Positions</h2>

  <p>☀️ Sun</p>
  <p>🔵 Mercury</p>
  <p>🟡 Venus</p>
  <p>🌍 Earth</p>
  <p>🔴 Mars</p>
  <p>🟠 Jupiter</p>
  <p>🪐 Saturn</p>
  <p>🔷 Uranus</p>
  <p>🔵 Neptune</p>
</div>

    <p
  style={{
    opacity: '0.5',
    marginTop: '50px',
    fontSize: '0.9rem',
    textAlign: 'center',
  }}
>
  SkyDome © AstralWeb  🚀
</p>
    </div>
  )
}
export default RadarPage

