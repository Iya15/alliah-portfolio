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
];

const PROJECTS = [
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
    desc: "This system are focused on tracking medicine’s expiration dates, it has notifications for low stocks and expiring medicines. Stores detailed medicine information, and inventory records. The dashboard shows the system’s summary analytics. It has account creation for pharmacist and admin for security. Stores activity logs for action traceability.",
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
    name: "Civil Service Examination [Professional Level]",
    issued: "Issued on: May 2025",
    logo: "assets/images/certification-logo/csc.svg",
  },
  {
    name: "I.T. Beyond Tomorrow: Shaping the Digital Frontier(RAITE) Participant",
    issued: "Issued on: October 2025",
    logo: "assets/images/certification-logo/psite.png",
  },
  {
    name: "AI & Analytics Masterclass Series: Turning Data into Strategic Decisions",
    issued: "Issued on: August 2025",
    logo: "assets/images/certification-logo/neust_training.png",
  },
  {
    name: "Information Technology Specialist [Database]",
    issued: "Issued on: December 2025",
    logo: "assets/images/certification-logo/certiport.png",
  },
];

/* ── RENDER SKILLS ───────────────────────────────────────────────── */
const skillsGrid = document.getElementById("skillsGrid");
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

/* ── RENDER PROJECTS ─────────────────────────────────────────────── */
const carousel = document.getElementById("projectsCarousel");
PROJECTS.forEach((p) => {
  const card = document.createElement("div");
  card.className = "project-card";
  const techHTML = p.techIcons
    .map(
      (i) =>
        `<div class="project-tech-item"><img src="${i.icon}" alt="${i.name}" title="${i.name}" loading="lazy" /><span>${i.name}</span></div>`,
    )
    .join("");
  const mediaClass = p.images.length > 2 ? "gallery-four" : "gallery-two";
  const galleryHTML = p.images
    .map(
      (image, index) =>
        `<img class="project-gallery-img" src="${image}" alt="${p.title} screenshot ${index + 1}" loading="lazy" />`,
    )
    .join("");
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
      </div>
    </div>
  `;
  carousel.appendChild(card);
});

/* ── RENDER CERTS ────────────────────────────────────────────────── */
const certsGrid = document.getElementById("certsGrid");
CERTS.forEach((c) => {
  const card = document.createElement("div");
  card.className = "cert-card";
  card.innerHTML = `
    <div class="cert-info">
      <div class="cert-name">${c.name}</div>
      <div class="cert-issued">${c.issued}</div>
    </div>
    <div class="cert-logo">
      <img src="${c.logo}" alt="${c.name} logo" loading="lazy" />
    </div>
  `;
  certsGrid.appendChild(card);
});

/* ── THEME TOGGLE ────────────────────────────────────────────────── */
const html = document.documentElement;
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

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

setThemeIcon(html.getAttribute("data-theme") === "dark");
themeBtn.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  setThemeIcon(!isDark);
  flashThemeButton();
});

/* ── MOBILE NAV ──────────────────────────────────────────────────── */
const hamburger = document.getElementById("nav-hamburger");
const mobileMenu = document.getElementById("nav-mobile-menu");
const navCurrentLabel = document.getElementById("nav-current-label");

const sectionLabels = {
  home: "Home",
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

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = mobileMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", open);
});
// Desktop: show on hover of the whole navbar
const navbar = document.getElementById("navbar");
let hoverTimeout;
navbar.addEventListener("mouseenter", () => {
  if (window.matchMedia("(pointer:fine)").matches) {
    clearTimeout(hoverTimeout);
    mobileMenu.classList.add("open");
  }
});
navbar.addEventListener("mouseleave", () => {
  if (window.matchMedia("(pointer:fine)").matches) {
    hoverTimeout = setTimeout(() => mobileMenu.classList.remove("open"), 200);
  }
});
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
  if (!navbar.contains(e.target)) mobileMenu.classList.remove("open");
});

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
document.getElementById("trademark-btn").addEventListener("click", () => {
  document.getElementById("trademark-modal").classList.add("open");
});
document.getElementById("modal-close-btn").addEventListener("click", () => {
  document.getElementById("trademark-modal").classList.remove("open");
});
document.getElementById("trademark-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove("open");
});

/* ── HERO COLLISION ANIMATION ────────────────────────────────────── */
const heroTitle = document.getElementById("heroTitle");
// Trigger after a short delay so user sees it
setTimeout(() => heroTitle.classList.add("collided"), 400);

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
