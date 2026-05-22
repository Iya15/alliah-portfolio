/* ── DATA ARRAYS ─────────────────────────────────────────────────── */

const SKILLS = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
];

const PROJECTS = [
  {
    title: "BrewBoba",
    images: [
      "assets/images/projects/brewboba/pic1.png",
      "assets/images/projects/brewboba/pic2.png",
    ],
    techIcons: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    role: "Developer",
    desc: "BrewBoba is a static web development project created to showcase a modern milk tea brand through visually appealing UI/UX design, realistic product presentation, and responsive frontend development.",
    github: "https://github.com/Iya15/BrewBoba",
    liveDemo: "https://brewboba.vercel.app",
  },
  {
    title: "AI Study Assistant",
    images: [
      "assets/images/projects/ai-study-assistant/pic1.png",
      "assets/images/projects/ai-study-assistant/pic2.png",
    ],
    techIcons: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
    role: "Developer",
    desc: "An AI-powered study companion for BSIT and college students. Designed to help with programming, exams, and quizzes. A SaaS application built to make studying smarter and more efficient.",
    github: "https://github.com/Iya15/AI-Study-Assistant",
    liveDemo: "https://ai-study-assistant-sigma-ten.vercel.app",
  },
  {
    title: "VA Select",
    images: [
      "assets/images/projects/va-select/pic1.png",
      "assets/images/projects/va-select/pic2.png",
    ],
    techIcons: [
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
    role: "Contributed – Added features and logic",
    desc: "This website bridges VA and a Client (Individual or Company) to have a connection without difficulty. It has a feature that makes finding a job or part-time job easier.",
  },
  {
    title: "Medicine Inventory Management System",
    images: [
      "assets/images/projects/medims/pic1.png",
      "assets/images/projects/medims/pic2.png",
    ],
    techIcons: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
    role: "Developer",
    desc: "This system are focused on tracking medicine’s expiration dates, it has notifications for low stocks and expiring medicines. Stores detailed medicine information, and inventory records. The dashboard shows the system’s summary analytics. Stores activity logs for traceability.",
  },
  {
    title: "Bus Booking",
    images: [
      "assets/images/projects/busbooking/pic1.png",
      "assets/images/projects/busbooking/pic2.png",
    ],
    techIcons: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    role: "Developer",
    desc: "With this system, bus operators can manage their bookings. A passenger can freely pick a bus, date and time of departure. It will show a receipt upon booking.",
  },
  {
    title: "FlashWise",
    images: [
      "assets/images/projects/flashwise/pic1.png",
      "assets/images/projects/flashwise/pic2.png",
      "assets/images/projects/flashwise/pic3.png",
      "assets/images/projects/flashwise/pic4.png",
    ],
    techIcons: [
      {
        name: "Ionic",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "TS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
    role: "Developer",
    desc: "This app provides a flip-card review tool for a student. It can create flashcards by subject and create a flipping card that can be helpful for studying. You can create a folder and group flashcards that are related to each other.",
    layout: "mobile",
  },
  {
    title: "You Got Serve",
    images: [
      "assets/images/projects/ygs/pic1.png",
      "assets/images/projects/ygs/pic2.png",
    ],
    techIcons: [
      { name: "Replit", icon: "https://cdn.simpleicons.org/replit/667881" },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "TS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    role: "Contributed – Translate in different languages",
    desc: "This website is a platform to send legal documents from the court or legal professionals. It has a feature that makes sending legal documents easier and faster. It has a dashboard that shows the status of the documents sent and received.",
  },
];

const CERTS = [
  {
    name: "Information Technology Specialist [Databases]",
    issuer: "Issued by: Certiport, a Pearson VUE business",
    issued: "Issued on: December 2025",
    logo: "assets/images/certification-logo/certiport.png",
    certificateImage: "assets/images/certificates/it/cert1.png",
  },
  {
    name: "I.T. Beyond Tomorrow: Shaping the Digital Frontier (RAITE)",
    issuer: "Issued by: RAITE",
    issued: "Issued on: October 2025",
    logo: "assets/images/certification-logo/psite.png",
    certificateImage: "assets/images/certificates/it/cert2.jpeg",
  },
  {
    name: "AI and Analytics Masterclass Series: Turning Data into Strategic Decisions",
    issuer: "Issued by: NEUST Training",
    issued: "Issued on: August 2025",
    logo: "assets/images/certification-logo/neust_training.png",
    certificateImage: "assets/images/certificates/it/cert3.jpg",
  },
  {
    name: "Civil Service Examination [Professional Level]",
    issuer: "Issued by: Civil Service Commission",
    issued: "Issued on: May 2025",
    logo: "assets/images/certification-logo/csc.svg",
    certificateImage: "assets/images/certificates/gov/cert1.png",
  },
];

/* ── RENDER SKILLS ───────────────────────────────────────────────── */
const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) {
  SKILLS.forEach((s) => {
    const item = document.createElement("div");
    item.className = "skill-item";
    item.innerHTML = `
      <img src="${s.icon}" alt="${s.name}" loading="lazy" />
      <span class="skill-label">${s.name}</span>
    `;
    item.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");
      skillsGrid
        .querySelectorAll(".skill-item")
        .forEach((el) => el.classList.remove("active"));
      if (!wasActive) item.classList.add("active");
    });
    skillsGrid.appendChild(item);
  });
}

/* ── RENDER PROJECTS ─────────────────────────────────────────────── */
const carousel = document.getElementById("projectsCarousel");
if (carousel) {
  PROJECTS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    const techHTML = p.techIcons
      .map(
        (i) =>
          `<div class="project-tech-item"><img src="${i.icon}" alt="${i.name}" title="${i.name}" loading="lazy" /><span>${i.name}</span></div>`,
      )
      .join("");
    const mediaClass = p.layout === "mobile" ? "gallery-mobile" : "gallery-landscape";
    const galleryHTML = p.images
      .map(
        (image, index) =>
          `<img class="project-gallery-img" src="${image}" alt="${p.title} screenshot ${index + 1}" loading="lazy" />`,
      )
      .join("");
    const linksHTML = (p.github || p.liveDemo) ? `
      <div class="project-links">
        ${p.github ? `<a class="project-link-btn project-link-github" href="${p.github}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub
        </a>` : ""}
        ${p.liveDemo ? `<a class="project-link-btn project-link-demo" href="${p.liveDemo}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Live Demo
        </a>` : ""}
      </div>` : "";

    card.innerHTML = `
      <div class="project-frame">
        <div class="project-frame-title">${p.title}</div>
        <div class="project-frame-media ${mediaClass}">
          ${galleryHTML}
        </div>
        <div class="project-frame-details">
          <div class="project-meta-label">Tech used:</div>
          <div class="project-tech-icons">${techHTML}</div>
          <div class="project-meta-label">My Role:</div>
          <div class="project-desc project-role">${p.role}</div>
          <div class="project-meta-label">Description:</div>
          <div class="project-desc project-summary">${p.desc}</div>
          ${linksHTML}
        </div>
      </div>
    `;
    carousel.appendChild(card);
  });

  /* ── PROJECTS PAGINATION ─────────────────────────────────────────── */
  const pagination = document.getElementById("projectsPagination");
  if (pagination) {
    const total = PROJECTS.length;

    const updatePagination = () => {
      const cards = carousel.querySelectorAll(".project-card");
      const carouselLeft = carousel.getBoundingClientRect().left;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - carouselLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      pagination.textContent = `${closest + 1} / ${total}`;
    };

    updatePagination();
    carousel.addEventListener("scroll", updatePagination, { passive: true });
  }
}

/* ── RENDER CERTS ────────────────────────────────────────────────── */
const certsGrid = document.getElementById("certsGrid");
if (certsGrid) {
  CERTS.forEach((c) => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
      <div class="cert-info">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-issued">${c.issued}</div>
        <a class="cert-view-link" href="#" data-cert-name="${c.name}" data-cert-issuer="${c.issuer}" data-cert-issued="${c.issued}" data-cert-image="${c.certificateImage}">View &gt;&gt;</a>
      </div>
      <div class="cert-logo">
        <img src="${c.logo}" alt="${c.name} logo" loading="lazy" />
      </div>
    `;
    certsGrid.appendChild(card);
  });
}

const certModal = document.getElementById("cert-modal");
const certModalCloseBtn = document.getElementById("cert-modal-close-btn");
const certModalTitle = document.getElementById("cert-modal-title");
const certModalIssuer = document.getElementById("cert-modal-issuer");
const certModalIssued = document.getElementById("cert-modal-issued");
const certModalImage = document.getElementById("cert-modal-image");

function openCertModal({ name, issuer, issued, image }) {
  if (!certModal) return;

  certModalTitle.textContent = name || "Certificate";
  certModalIssuer.textContent = issuer || "";
  certModalIssued.textContent = issued || "";
  certModalImage.src = image || "";
  certModalImage.alt = `${name || "Certificate"} full preview`;

  certModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  if (!certModal) return;
  certModal.classList.remove("open");
  certModalImage.src = "";
  document.body.style.overflow = "";
}

if (certsGrid && certModal) {
  certsGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest(".cert-view-link");
    if (!trigger) return;

    event.preventDefault();
    openCertModal({
      name: trigger.dataset.certName,
      issuer: trigger.dataset.certIssuer,
      issued: trigger.dataset.certIssued,
      image: trigger.dataset.certImage,
    });
  });

  certModalCloseBtn.addEventListener("click", closeCertModal);
  certModal.addEventListener("click", (event) => {
    if (event.target === certModal) closeCertModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && certModal.classList.contains("open")) {
      closeCertModal();
    }
  });
}

/* ── THEME TOGGLE ────────────────────────────────────────────────── */
const html = document.documentElement;
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const THEME_STORAGE_KEY = "alliah-theme";

function setThemeIcon(isDarkMode) {
  if (!themeIcon) return;
  if (isDarkMode) {
    themeIcon.innerHTML =
      '<path d="M21 12.79A9 9 0 1 1 11.21 3c.1 0 .2 0 .3.01A7 7 0 1 0 21 12.79z" />';
    return;
  }

  themeIcon.innerHTML = `
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  `;
}

function flashThemeButton() {
  themeBtn.classList.add("flash");
  window.setTimeout(() => themeBtn.classList.remove("flash"), 180);
}

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch {
    // Ignore storage errors and keep default theme.
  }

  return null;
}

const persistedTheme = getSavedTheme();
if (persistedTheme) {
  html.setAttribute("data-theme", persistedTheme);
}

setThemeIcon(html.getAttribute("data-theme") === "dark");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";

    html.setAttribute("data-theme", nextTheme);
    setThemeIcon(nextTheme === "dark");

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage errors so toggle still works.
    }

    flashThemeButton();
  });
}

/* ── MOBILE NAV ──────────────────────────────────────────────────── */
const hamburger = document.getElementById("nav-hamburger");
const mobileMenu = document.getElementById("nav-mobile-menu");
const navCurrentLabel = document.getElementById("nav-current-label");

const sectionLabels = {
  home: "Home",
  about: "About",
  "what-i-can-do": "What I can do",
  skills: "Skills",
  projects: "Projects",
  certifications: "Certifications",
  contact: "Contact",
  links: "Links",
};

function setCurrentSectionLabel(sectionId) {
  if (!navCurrentLabel) return;
  navCurrentLabel.textContent = sectionLabels[sectionId] || "Home";
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
  // Desktop: keep the menu open while hovering the hamburger or the menu.
  if (window.matchMedia("(pointer:fine)").matches) {
  let hoverCloseTimer;

  const openMenu = () => {
    clearTimeout(hoverCloseTimer);
    mobileMenu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    clearTimeout(hoverCloseTimer);
    hoverCloseTimer = window.setTimeout(() => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }, 120);
  };

  hamburger.addEventListener("mouseenter", () => {
    openMenu();
  });

  hamburger.addEventListener("mouseleave", () => {
    closeMenu();
  });

  mobileMenu.addEventListener("mouseenter", () => {
    openMenu();
  });

    mobileMenu.addEventListener("mouseleave", () => {
      closeMenu();
    });
  }
  // Close on link click
  document.querySelectorAll(".nav-links a, #nav-mobile-menu a").forEach((a) => {
    a.addEventListener("click", () => {
      const targetId = a.getAttribute("href")?.replace("#", "");
      if (targetId) setCurrentSectionLabel(targetId);
      mobileMenu.classList.remove("open");
    });

  // Keep hover highlight anchored to cursor position for a softer interaction.
    a.addEventListener("pointermove", (event) => {
      const bounds = a.getBoundingClientRect();
      const mx = ((event.clientX - bounds.left) / bounds.width) * 100;
      const my = ((event.clientY - bounds.top) / bounds.height) * 100;
      a.style.setProperty("--mx", `${mx}%`);
      a.style.setProperty("--my", `${my}%`);
    });
  });

const trackedSections = Object.keys(sectionLabels)
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function syncLabelWithViewport() {
  const marker = window.scrollY + window.innerHeight * 0.36;
  let activeId = "home";
  trackedSections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });
  setCurrentSectionLabel(activeId);
}

  window.addEventListener("scroll", syncLabelWithViewport, { passive: true });
  window.addEventListener("resize", syncLabelWithViewport);
  syncLabelWithViewport();

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

/* ── CONTACT TYPE BUTTONS ────────────────────────────────────────── */
document.querySelectorAll(".contact-type-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".contact-type-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.type;
    const subjectField = document.getElementById("c-subject");
    const messageField = document.getElementById("c-message");

    if (subjectField) {
      subjectField.value = `${type} Inquiry`;
    }

    if (messageField) {
      messageField.value = `Hey Alliah! Let's build a/an ${type} together.

Here are the info's of my plans:

My goals are:

Theme:

Deadline:

Tech requirements?`;
    }
  });
});

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

function showContactToast(message, variant) {
  const existingToast = document.querySelector(".contact-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = `contact-toast ${variant}`;
  toast.textContent = message;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 220);
  }, 2600);
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(".contact-send-btn");
    const originalButtonText = submitButton.textContent;
    const formData = new FormData(contactForm);
    const preferredType =
      document.querySelector(".contact-type-btn.active")?.dataset.type ||
      "General Inquiry";
    const subjectField = contactForm.querySelector("#c-subject");

    if (subjectField && !subjectField.value.trim()) {
      subjectField.value = preferredType;
      formData.set("subject", preferredType);
    }

    contactStatus.textContent = "";
    contactStatus.classList.remove("success", "error");
    submitButton.disabled = true;
    submitButton.textContent = "Sending";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      contactForm.reset();
      document
        .querySelectorAll(".contact-type-btn")
        .forEach((b) => b.classList.remove("active"));
      showContactToast("Message successfully sent!", "success");
    } catch (error) {
      showContactToast("Message failed to send", "error");
      contactStatus.textContent = "Message failed to send";
      contactStatus.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

/* ── TRADEMARK MODAL ─────────────────────────────────────────────── */
const trademarkBtn = document.getElementById("trademark-btn");
const trademarkModal = document.getElementById("trademark-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

if (trademarkBtn && trademarkModal && modalCloseBtn) {
  trademarkBtn.addEventListener("click", () => {
    trademarkModal.classList.add("open");
  });
  modalCloseBtn.addEventListener("click", () => {
    trademarkModal.classList.remove("open");
  });
  trademarkModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove("open");
  });
}

/* ── HERO COLLISION ANIMATION ────────────────────────────────────── */
const heroTitle = document.getElementById("heroTitle");
// Trigger after a short delay so user sees it
if (heroTitle) {
  setTimeout(() => heroTitle.classList.add("collided"), 400);
}

/* ── ABOUT COLLISION STACK ──────────────────────────────────────── */
const aboutStack = document.getElementById("aboutStack");
if (aboutStack) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateAboutMotion = () => {
    if (reduceMotion) {
      aboutStack.style.setProperty("--about-progress", "1");
      aboutStack.style.setProperty("--about-ease", "1");
      return;
    }

    const rect = aboutStack.getBoundingClientRect();
    /*
     * Use visualViewport.height when available 
     */
    const vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight);
    const viewportMid = vh * 0.5;
    const stackMid = rect.top + rect.height * 0.5;
    const centerDistance = Math.abs(stackMid - viewportMid);
    const travel = vh * 0.62 + rect.height * 0.2;

    const progress = Math.max(0, Math.min(1, 1 - centerDistance / travel));
    const eased = 1 - Math.pow(1 - progress, 3);

    aboutStack.style.setProperty("--about-progress", progress.toFixed(4));
    aboutStack.style.setProperty("--about-ease", eased.toFixed(4));
  };

  let aboutTicking = false;
  const onAboutScroll = () => {
    if (aboutTicking) return;
    aboutTicking = true;
    requestAnimationFrame(() => {
      updateAboutMotion();
      aboutTicking = false;
    });
  };

  updateAboutMotion();
  window.addEventListener("scroll", onAboutScroll, { passive: true });

  window.addEventListener("touchmove", onAboutScroll, { passive: true });
  window.addEventListener("resize", onAboutScroll);
  window.addEventListener("orientationchange", onAboutScroll);

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", onAboutScroll);
    window.visualViewport.addEventListener("scroll", onAboutScroll);
  }
}

/* ── SCROLL REVEAL ───────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));