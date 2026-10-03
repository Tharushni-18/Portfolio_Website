(function () {
  "use strict";

  const d = PORTFOLIO_DATA;

  /* ---------------------------------------------------------------------
     Small render helpers
     --------------------------------------------------------------------- */
  function socialLinkHTML(s, small) {
    return `<li><a href="${s.href}" target="${s.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener noreferrer" aria-label="${s.name}">${icon(s.icon)}</a></li>`;
  }

  function renderSocials() {
    const hero = document.getElementById("hero-socials");
    const footer = document.getElementById("footer-socials");
    const html = d.socials.map((s) => socialLinkHTML(s)).join("");
    if (hero) hero.innerHTML = html;
    if (footer) footer.innerHTML = html;
  }

  function renderAbout() {
    document.getElementById("about-text").textContent = d.about;
    document.getElementById("stats-grid").innerHTML = d.stats
      .map(
        (s) => `
      <div class="stat-card">
        <dt class="stat-value">${s.value}</dt>
        <dd class="stat-label">${s.label}</dd>
      </div>`
      )
      .join("");
  }

  function skillCardHTML(s) {
    return `<div class="skill-card">${icon(s.icon)}<span>${s.name}</span></div>`;
  }

  function renderSkills() {
    document.getElementById("skills-technical").innerHTML = d.skills.technical.map(skillCardHTML).join("");
    document.getElementById("skills-tools").innerHTML = d.skills.tools.map(skillCardHTML).join("");
    document.getElementById("skills-interests").innerHTML = d.skills.interests.map(skillCardHTML).join("");
  }

  function renderExperience() {
    const html = d.experience
      .map(
        (e) => `
      <li class="timeline-item reveal" data-reveal>
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-role">${e.role}</span>
            <span class="timeline-period">${e.period}</span>
          </div>
          <p class="timeline-org">${e.org}</p>
          <ul class="timeline-points">
            ${e.points.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </li>`
      )
      .join("");
    document.getElementById("experience-timeline").innerHTML = html;
  }

  function renderProjects() {
    const html = d.projects
      .map(
        (p) => `
      <article class="project-card reveal" data-reveal>
        <div class="project-top">
          <span class="project-number">${p.number}</span>
          <span class="project-path">${p.path}</span>
        </div>
        <h3 class="project-name">${p.name}</h3>
        ${p.subtitle ? `<p class="project-subtitle">${p.subtitle}</p>` : ""}
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <ul class="project-features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <div class="project-actions">
          ${p.github ? `<a class="btn btn-secondary btn-sm" href="${p.github}" target="_blank" rel="noopener noreferrer">${icon("github")} GitHub</a>` : ""}
          ${p.demo ? `<a class="btn btn-ghost btn-sm" href="${p.demo}" target="_blank" rel="noopener noreferrer">${icon("arrowUpRight")} Live Demo</a>` : ""}
        </div>
      </article>`
      )
      .join("");
    document.getElementById("project-grid").innerHTML = html;
  }

  function renderEducation() {
    const html = d.education
      .map(
        (e) => `
      <div class="education-card reveal" data-reveal>
        <div>
          <p class="education-degree">${e.degree}</p>
          <p class="education-school">${e.school}</p>
        </div>
        <div class="education-meta">
          <span class="education-period">${e.period}</span>
          <span class="education-score">${e.score}</span>
        </div>
      </div>`
      )
      .join("");
    document.getElementById("education-list").innerHTML = html;
  }

  function renderCertifications() {
    const html = d.certifications
      .map(
        (c) => `
      <div class="cert-card reveal" data-reveal>
        <p class="cert-name">${c.name}</p>
        <p class="cert-issuer">${c.issuer}</p>
        ${c.meta ? `<p class="cert-meta">${c.meta}</p>` : ""}
      </div>`
      )
      .join("");
    document.getElementById("cert-grid").innerHTML = html;
  }

  function renderAchievements() {
    const html = d.achievements
      .map(
        (a) => `
      <div class="achievement-card reveal" data-reveal>
        <span class="achievement-icon">${icon(a.icon)}</span>
        <div>
          <p class="achievement-title">${a.title}</p>
          <p class="achievement-desc">${a.description}</p>
        </div>
      </div>`
      )
      .join("");
    document.getElementById("achievement-grid").innerHTML = html;
  }

  function renderExtracurricular() {
    const html = d.extracurricular
      .map(
        (a) => `
      <div class="extra-card reveal" data-reveal>
        <span class="extra-icon">${icon(a.icon)}</span>
        <div>
          <p class="extra-title">${a.title}</p>
          <p class="extra-desc">${a.description}</p>
        </div>
      </div>`
      )
      .join("");
    document.getElementById("extra-grid").innerHTML = html;
  }

  function renderContactSocials() {
    const items = d.socials.map((s) => socialLinkHTML(s));
    if (d.person.phone) {
      items.push(
        `<li><a href="tel:${d.person.phone.replace(/\s/g, "")}" aria-label="Call ${d.person.phone}">${icon("phone")}</a></li>`
      );
    }
    const el = document.getElementById("contact-socials");
    if (el) el.innerHTML = items.join("");
  }

  function renderAll() {
    renderSocials();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderCertifications();
    renderAchievements();
    renderExtracurricular();
    renderContactSocials();
    document.getElementById("footer-year").textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
     Header scroll state + active nav indicator
     --------------------------------------------------------------------- */
  function setupHeaderScroll() {
    const header = document.getElementById("site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupActiveNav() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = links
      .map((l) => document.getElementById(l.getAttribute("href").slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = links.find((l) => l.getAttribute("href").slice(1) === entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------------------------------------------------
     Mobile nav toggle
     --------------------------------------------------------------------- */
  function setupMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const iconWrap = document.getElementById("nav-toggle-icon");
    const links = document.getElementById("nav-links");

    function setState(open) {
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      iconWrap.innerHTML = open ? ICONS.close : ICONS.menu;
    }

    iconWrap.innerHTML = ICONS.menu;
    setState(false);

    toggle.addEventListener("click", () => setState(!links.classList.contains("open")));
    links.querySelectorAll(".nav-link").forEach((l) =>
      l.addEventListener("click", () => setState(false))
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setState(false);
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------------- */
  function setupReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(() => el.classList.add("is-visible"), (i % 6) * 60);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
     Init
     --------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    setupHeaderScroll();
    setupActiveNav();
    setupMobileNav();
    setupReveal();
  });
})();
