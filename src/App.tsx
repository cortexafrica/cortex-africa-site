import { CONTACT, hero, etat, capital, roles, cadre, faq, fin, foot } from './content';

/* 40 colonnes x 10 rangées = 400 carrés, 500 actions chacun = 20 000.
   Le fondateur détient 100 % aujourd'hui ; les carrés « ouverts » figurent
   ce qu'une augmentation de capital réservée peut ouvrir. */
const COLS = 40;
const ROWS = 10;
const TOTAL = COLS * ROWS;
const OPEN_FROM = Math.floor(TOTAL * 0.82);

function Shares() {
  return (
    <>
      <div className="shares" role="img"
           aria-label="Grille figurant 20 000 actions : la part détenue aujourd'hui, et celle que les augmentations de capital à venir peuvent ouvrir.">
        {Array.from({ length: TOTAL }, (_, i) => (
          <span
            key={i}
            className={i >= OPEN_FROM ? 'share share--open' : 'share'}
            style={{ animationDelay: `${Math.min(i * 3, 900)}ms` }}
          />
        ))}
      </div>
      <div className="shares__legend">
        <span><i className="swatch" aria-hidden="true" /> {capital.legendHeld}</span>
        <span><i className="swatch swatch--open" aria-hidden="true" /> {capital.legendOpen}</span>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <header className="hero wrap">
        <div className="hero__media" aria-hidden="true">
          <picture>
            <source media="(max-width: 44rem)" srcSet="/images/hero-mobile.webp" />
            <img src="/images/hero.webp" alt="" width={1600} height={900} fetchPriority="high" />
          </picture>
        </div>
        <h1 className="hero__title">
          {hero.title.map((line) => <em key={line}>{line}</em>)}
        </h1>
        <p className="hero__lede">{hero.lede}</p>
        <div className="hero__actions">
          <a className="btn" href={CONTACT}>{hero.cta}</a>
          <a className="btn btn--quiet" href="#etat">{hero.ctaQuiet}</a>
        </div>
      </header>

      <main>
        <section className="section wrap" id="etat">
          <p className="eyebrow">{etat.eyebrow}</p>
          <h2 className="section__title">{etat.title}</h2>
          <div className="stack measure" style={{ marginTop: '1.5rem' }}>
            {etat.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="section wrap capital">
          <p className="eyebrow">{capital.eyebrow}</p>
          <h2 className="section__title">{capital.title}</h2>
          <div className="stack measure" style={{ marginTop: '1.5rem' }}>
            {capital.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Shares />
          <p style={{ marginTop: '1.5rem', fontSize: 'var(--step--1)' }}>{capital.note}</p>
        </section>

        <section className="section wrap">
          <p className="eyebrow">{roles.eyebrow}</p>
          <h2 className="section__title">{roles.title}</h2>
          <div className="roles">
            {roles.items.map((r) => (
              <div className="role" key={r.h}>
                <h3>{r.h}</h3>
                <p>{r.p}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="lieu" aria-hidden="true">
          <img src="/images/lieu.webp" alt="" width={1400} height={787} loading="lazy" />
        </div>

        <section className="section wrap">
          <p className="eyebrow">{cadre.eyebrow}</p>
          <h2 className="section__title">{cadre.title}</h2>
          <dl className="facts">
            {cadre.items.map((f) => (
              <div className="fact" key={f.dt}>
                <dt>{f.dt}</dt>
                <dd>{f.dd}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section wrap">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="section__title">{faq.title}</h2>
          <div className="faq measure">
            {faq.items.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap">
          <h2 className="section__title">{fin.title}</h2>
          <p className="measure" style={{ marginTop: '1rem' }}>{fin.lede}</p>
          <p style={{ marginTop: '2rem' }}>
            <a className="btn" href={CONTACT}>{fin.cta}</a>
          </p>
        </section>
      </main>

      <footer className="foot wrap">
        <p><strong>{foot.company}</strong> — {foot.status}</p>
        <p style={{ marginTop: '0.5rem' }}>
          {foot.place} · <a href={`mailto:${foot.email}`}>{foot.email}</a>
        </p>
      </footer>
    </>
  );
}
