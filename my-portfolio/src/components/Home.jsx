import React from "react";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src="/LogoPB.svg" alt="PB logotipas" />

          <div className="brand-text">
            <span className="brand-name">Pavel Belov </span>
            <span className="brand-role">- Grafikos dizaineris</span>
          </div>
        </div>

        <a
          className="cv-button"
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </header>

      <section className="hero">
        <h1 className="hero-title">
          Kuriu tikslingą vizualinę patirtį, papildytą kūrybine kibirkštimi –
          grafikos dizaino, vizualinio pasakojimo ir apgalvotos prekės ženklo
          komunikacijos pagalba.
        </h1>

        <div className="hero-actions">
          <button className="touch-button" onClick={scrollToContact}>
            Susisiekime <span className="green-dot" />
          </button>

          <span className="availability">
            Esu atviras naujoms galimybėms
          </span>
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="section-heading">Portfolio</h2>

        <p className="case-intro">
          Atrinkti projektai grafikos dizaino, prekės ženklų kūrimo, vizualinio
          identiteto ir kūrybinės komunikacijos srityse.
        </p>

        <div className="book-grid">
          {/* LA FORNO */}
          <a
            className="book-link book-button"
            href="/PIZZA_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atidaryti La Forno portfolio"
          >
            <div className="book-wrap">
              <div className="page-stack">
                <span className="page"></span>
                <span className="page"></span>
                <span className="page"></span>
                <span className="page"></span>
              </div>

              <article className="book red">
                <span className="book-spine-light"></span>
                <span className="book-shape triangle"></span>
                <span className="book-shape circle"></span>

                <h3 className="book-title">
                  La Forno
                  <br />
                  Itališkos picerijos prekės ženklo kūrimas
                </h3>
              </article>
            </div>
          </a>

          {/* PULSE FITNESS */}
          <a
            className="book-link book-button"
            href="/GYM_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atidaryti Pulse Fitness portfolio"
          >
            <div className="book-wrap">
              <div className="page-stack">
                <span className="page"></span>
                <span className="page"></span>
                <span className="page"></span>
                <span className="page"></span>
              </div>

              <article className="book blue">
                <span className="book-spine-light"></span>
                <span className="book-shape blue-rectangle"></span>
                <span className="book-shape triangle"></span>

                <h3 className="book-title">
                  Pulse Fitness
                  <br />
                  Socialinių tinklų dizainas
                </h3>
              </article>
            </div>
          </a>
        </div>
      </section>

      <hr className="divider" />

      <section id="contact" className="about-grid">
        <div className="about-title">Sveiki.</div>

        <p className="about-text">
          Esu Pavelas, grafikos dizaineris, kuriam patinka kurti apgalvotus
          vizualinius sprendimus, jungiančius stiprias idėjas, aiškią
          komunikaciją ir išskirtinį vizualinį stilių.
        </p>

        <div className="about-label">Kaip galiu padėti</div>

        <p className="about-text">
          Padėdu prekių ženklams ir komandoms įgyvendinti idėjas pasitelkiant
          grafikos dizainą, vizualinį identitetą, maketavimą ir kūrybines
          koncepcijas. Nuo pirmųjų idėjų iki galutinio dizaino kuriu aiškius,
          įtraukiančius ir tikslingus vizualinius sprendimus.
        </p>

        <div className="about-label">Susisiekime</div>

        <div className="connect-list">
          {/* EMAIL */}
          <a
            className="connect-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pavelbelov4444@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="connect-left">
              <span className="text-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7.5h16v10H4v-10Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="m4.5 8 7.5 5.6L19.5 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>

              El. paštas
            </span>

            <span>↗</span>
          </a>

          {/* LINKEDIN */}
          <a
            className="connect-link"
            href="https://www.linkedin.com/in/pavel-belov-39b8b7367/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="connect-left">
              <span className="text-icon linkedin-icon">in</span>

              LinkedIn
            </span>

            <span>↗</span>
          </a>

          {/* INSTAGRAM */}
          <a
            className="connect-link"
            href="https://www.instagram.com/__kirschblute__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="connect-left">
              <span className="text-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="5"
                    y="5"
                    width="14"
                    height="14"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="16.4"
                    cy="7.7"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </span>

              Instagram
            </span>

            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Pavel Belov. Visos teisės saugomos.
      </footer>
    </>
  );
}