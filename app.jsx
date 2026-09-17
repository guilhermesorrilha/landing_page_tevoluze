import React from 'react';
import * as ReactDOM from 'react-dom/client';

const T = {
  black:    '#141414',
  surface:  '#1c1a17',
  muted:    '#9a9082',
  dimmed:   '#5a5448',
  sans:     "'Manrope', sans-serif",
};

const CONTENT = {
  accentColor: "#f2c94c",
  introText: "Sou Daniel Teodozio, barbeiro há mais de 10 anos. Aqui você encontra meus cursos, eventos e bastidores — pra quem quer transformar um melhor caminho.",
  ctaLabel: "Saiba mais",
  showIntro: true,
  whatsappNumber: "5511985298184",
};

const PlaceholderImg = ({ index, style = {} }) => {
  const palettes = [
    { bg: '#1e1a12', line: 'rgba(242,201,76,0.12)' },
    { bg: '#16161a', line: 'rgba(242,201,76,0.08)' },
    { bg: '#1a1512', line: 'rgba(242,201,76,0.15)' },
    { bg: '#181818', line: 'rgba(242,201,76,0.10)' },
    { bg: '#1c1710', line: 'rgba(242,201,76,0.13)' },
    { bg: '#141416', line: 'rgba(242,201,76,0.09)' },
  ];
  const p = palettes[index % palettes.length];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"
         style={{ display:'block', width:'100%', height:'100%', ...style }}>
      <rect width="400" height="400" fill={p.bg} />
      {[-4,-3,-2,-1,0,1,2,3,4,5,6,7,8].map(i => (
        <line key={i}
              x1={i*60-40} y1="0" x2={i*60+360} y2="400"
              stroke={p.line} strokeWidth="1" />
      ))}
      <rect x="172" y="168" width="56" height="56" fill="none"
            stroke="rgba(242,201,76,0.2)" strokeWidth="1" />
      <line x1="172" y1="168" x2="228" y2="224" stroke="rgba(242,201,76,0.12)" strokeWidth="1" />
      <line x1="228" y1="168" x2="172" y2="224" stroke="rgba(242,201,76,0.12)" strokeWidth="1" />
      <text x="200" y="255" textAnchor="middle" fill="rgba(242,201,76,0.25)"
            fontFamily="Manrope,sans-serif" fontSize="9" letterSpacing="2" fontWeight="600">
        IMAGEM
      </text>
    </svg>
  );
};

const WhatsAppIcon = ({ size = 22, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.464 3.488"/>
  </svg>
);

const ShareIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CheckIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const HeroLogo = () => (
  <header style={{
    paddingTop: 'clamp(28px, 4.5vw, 56px)',
    paddingBottom: 'clamp(8px, 1.5vw, 18px)',
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
  }}>
    <div style={{
      position: 'absolute',
      top: '40%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 'min(900px, 90vw)',
      height: '420px',
      background: 'radial-gradient(ellipse, rgba(242,201,76,0.06) 0%, transparent 65%)',
      pointerEvents: 'none',
      zIndex: 0,
    }} />

    <img
      src={window.__resources.logoPng}
      alt="Tevoluze Academy"
      className="logo-in"
      style={{
        position: 'relative',
        zIndex: 1,
        width: 'min(720px, 92vw)',
        height: 'auto',
        display: 'block',
        objectFit: 'contain',
        filter: 'drop-shadow(0 6px 24px rgba(242,201,76,0.18))',
      }}
    />
  </header>
);

const IntroSection = ({ text }) => (
  <section style={{
    paddingTop: '0px',
    paddingBottom: 'clamp(40px, 5vw, 60px)',
    paddingLeft: '24px',
    paddingRight: '24px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  }}>
    <p
      className="fade-up fade-up-d1"
      style={{
        fontFamily: T.sans,
        fontSize: 'clamp(14px, 1.6vw, 16px)',
        fontWeight: 400,
        lineHeight: 1.7,
        color: T.muted,
        textWrap: 'pretty',
      }}
    >
      {text}
    </p>
  </section>
);

const FeaturedCard = ({ item, ctaLabel, accentColor }) => {
  const [hovered, setHovered] = React.useState(false);
  const openLink = () => { if (item.link) window.open(item.link, '_blank', 'noopener'); };

  return (
    <section style={{ padding: '0 24px 4px', maxWidth: '1200px', margin: '0 auto' }}>
      <div
        onClick={openLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fade-up fade-up-d2"
        style={{
          position: 'relative',
          cursor: item.link ? 'pointer' : 'default',
          overflow: 'hidden',
          background: T.surface,
          borderRadius: '6px',
          border: `1px solid ${hovered ? 'rgba(242,201,76,0.4)' : 'rgba(242,201,76,0.1)'}`,
          transition: 'border-color 250ms ease, transform 250ms ease',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          aspectRatio: '16/7',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {item.image
          ? <img
              src={item.image}
              alt={item.alt || ''}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                transition: 'transform 500ms ease',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
              }}
            />
          : <div style={{ position: 'absolute', inset: 0 }}>
              <PlaceholderImg index={0} />
            </div>
        }

        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,20,20,0) 30%, rgba(14,12,8,0.85) 100%)',
        }} />

        <div style={{
          position: 'relative', zIndex: 2,
          padding: 'clamp(20px, 3vw, 32px) clamp(20px, 3vw, 40px)',
          display: 'flex', justifyContent: 'flex-end', width: '100%',
        }}>
          <button
            style={{
              background: hovered ? '#ffe066' : accentColor,
              border: 'none', cursor: 'pointer',
              fontFamily: T.sans,
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#161310',
              padding: '12px 28px',
              borderRadius: '999px',
              transition: 'background 200ms ease, transform 120ms ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              boxShadow: '0 4px 14px rgba(242,201,76,0.2)',
            }}
          >
            {ctaLabel} →
          </button>
        </div>
      </div>
    </section>
  );
};

const CardItem = ({ item, index, accentColor }) => {
  const [hov, setHov] = React.useState(false);
  const isComingSoon = !!item.comingSoon;
  const openLink = () => {
    if (isComingSoon) return;
    if (item.link) window.open(item.link, '_blank', 'noopener');
  };

  return (
    <div
      onClick={openLink}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        aspectRatio: '1/1',
        cursor: isComingSoon ? 'default' : (item.link ? 'pointer' : 'default'),
        overflow: 'hidden',
        background: T.surface,
        borderRadius: '6px',
        outline: hov && !isComingSoon ? `1.5px solid ${accentColor}` : '1px solid transparent',
        outlineOffset: hov ? '0px' : '0px',
        transition: 'outline-color 200ms ease',
      }}
    >
      {item.image
        ? <img
            src={item.image}
            alt={item.alt || ''}
            style={{
              display: 'block', width: '100%', height: '100%',
              objectFit: 'cover',
              transition: 'transform 350ms ease',
              transform: hov && !isComingSoon ? 'scale(1.06)' : 'scale(1)',
            }}
          />
        : <PlaceholderImg index={index + 1} />
      }
      <div style={{
        position: 'absolute', inset: 0,
        background: `rgba(242,201,76,${hov && !isComingSoon ? 0.05 : 0})`,
        transition: 'background 200ms ease',
        pointerEvents: 'none',
      }} />

      {isComingSoon && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(10,10,10,0.65)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 16px)',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#d8d0c0',
            }}>
              Em breve
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const CardGrid = ({ items, accentColor }) => (
  <section style={{ padding: '4px 24px 0', maxWidth: '1200px', margin: '0 auto' }}>
    <div className="card-grid">
      {items.map((item, i) => (
        <CardItem key={i} item={item} index={i} accentColor={accentColor} />
      ))}
    </div>
  </section>
);

const LandingFooter = ({ accentColor, whatsappNumber }) => {
  const [waHov, setWaHov] = React.useState(false);
  const waUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <footer style={{
      marginTop: '80px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      background: '#0f0f0f',
      padding: 'clamp(40px, 5vw, 56px) 24px clamp(28px, 3vw, 36px)',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '24px',
      }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setWaHov(true)}
          onMouseLeave={() => setWaHov(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 26px',
            background: waHov ? '#1f8b4c' : '#25D366',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '999px',
            fontFamily: T.sans,
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.01em',
            transition: 'background 200ms ease, transform 150ms ease',
            transform: waHov ? 'translateY(-1px)' : 'translateY(0)',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.25)',
          }}
        >
          <WhatsAppIcon size={20} color="#fff" />
          Fale comigo no WhatsApp
        </a>

        <div style={{
          fontFamily: T.sans,
          fontSize: '11px',
          color: T.dimmed,
          letterSpacing: '0.04em',
          textAlign: 'center',
        }}>
          © 2026 Tevoluze Academy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

const FEATURED = {
  image: null,
  link: 'https://www.sympla.com.br/evento/gestao-de-barbearia-tevoluze-academy/3440361?share_id=copiarlink&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaASFynRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadGQpcqDKXfCH69wYD51SMHAzIqGH2RyLe-cm9ur37wmI40xF_HPWv7dIkwSQ_aem_rtqi88yFY8AzjEyBlY_ZAg&utm_id=97760_v0_s00_e0_tv3&referrer=l.instagram.com&referrer=l.instagram.com',
  alt: 'Curso em destaque',
};

const GRID_ITEMS = [
  { image: null, link: 'https://hotmart.com',          alt: 'Curso 1' },
  { image: null, link: 'https://sympla.com.br',        alt: 'Evento 1' },
  { image: null, link: 'https://wa.me/5511985298184',  alt: 'Produto 3' },
  { image: null, link: 'https://hotmart.com',          alt: 'Curso 2', comingSoon: true },
];

const ShareButton = ({ accentColor }) => {
  const [hov, setHov] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  const handleShare = async () => {
    const data = {
      title: 'Tevoluze Acadeny',
      text: 'Cursos e eventos da Tevoluze',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 1800);
      }
    } catch (e) { /* usuário cancelou */ }
  };

  return (
    <button
      onClick={handleShare}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="Compartilhar página"
      style={{
        position: 'fixed',
        top: 'clamp(16px, 2vw, 24px)',
        right: 'clamp(16px, 2vw, 24px)',
        zIndex: 80,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '9px 14px',
        background: hov ? 'rgba(216,208,192,0.12)' : 'rgba(28,26,23,0.7)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: `1px solid ${hov ? 'rgba(216,208,192,0.5)' : 'rgba(216,208,192,0.18)'}`,
        borderRadius: '999px',
        cursor: 'pointer',
        fontFamily: T.sans,
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.01em',
        color: shared ? '#9be08b' : '#d8d0c0',
        transition: 'all 200ms ease',
      }}
    >
      {shared ? <CheckIcon size={15} color="#9be08b" /> : <ShareIcon size={15} color="#d8d0c0" />}
      <span>{shared ? 'Link copiado' : 'Compartilhar'}</span>
    </button>
  );
};

const App = () => {
  const t = CONTENT;
  const accent = t.accentColor;

  return (
    <div style={{ background: T.black, minHeight: '100vh' }}>
      <ShareButton accentColor={accent} />
      <HeroLogo />

      {t.showIntro && <IntroSection text={t.introText} />}

      <FeaturedCard item={FEATURED} ctaLabel={t.ctaLabel} accentColor={accent} />

      <CardGrid items={GRID_ITEMS} accentColor={accent} />

      <LandingFooter
        accentColor={accent}
        whatsappNumber={t.whatsappNumber}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
