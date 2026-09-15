import React, { useState, useEffect } from "react";

const sysFont = { fontFamily: "'Tahoma', 'Segoe UI', Verdana, sans-serif" };

const c = {
  windowBg: "#ECE9D8", // classic XP dialog background
  border: "#0A246A",
  titleFrom: "rgba(150,200,255,0.92)",
  titleTo: "rgba(70,120,200,0.92)",
  taskbarFrom: "#3f8cf3",
  taskbarTo: "#1941a5",
  startFrom: "#7fc241",
  startTo: "#3c8f1a",
  text: "#1A1A1A",
  link: "#0A246A",
};

/**
 * Empty for now. To add a project, push an object here:
 * { title, description, tech: [], link, repo }
 */
const projects = [
  {
    title: "Vsper",
    description: "Lorem Ipsum Dolor Sit Amet...",
    tech: ['React', 'Tailwind CSS', 'Node', 'Express.js'],
    link: "https://vsper.vercel.app/",
    repo: "https://github.com/Neha-Bhat/ai-chat-app"
  }
];

const experience = [
  {
    company: "Samsung Electromechanics",
    role: "Engineer, CL2-II",
    dates: "Mar 2023 – Present",
    highlight: "Frontend + integration layer for an enterprise LLM platform, plus two award-winning internal products.",
    award: "Best Project of the Year",
    details: [
      { name: "IntelliLLM — Enterprise LLM Platform", stack: "React · Node.js · PrimeReact · Python · LLMs", bullets: [
        "Built the frontend and Node.js integration layer for an enterprise LLM platform covering RAG, document translation, summarization, model training, and inferencing.",
        "Designed UI workflows for complex AI pipelines and wired model APIs into backend services, handling long-running async operations with backend and AI teams.",
        "Awarded \"Best Project of the Year\" for innovation, engineering excellence, and measurable product impact.",
      ]},
      { name: "GAUDI — ML Training & Inference Platform", stack: "Angular 15 · PrimeNG 15 · Java · Python", bullets: [
        "Won Silver Medal at Samsung IT Innovation Awards for frontend contribution.",
        "Owned a core module end-to-end; delivered the first milestone solo and set architectural patterns adopted across 6 later milestones.",
        "Authored unit tests for ~1,000 frontend functions and mentored 4 engineers through code reviews.",
      ]},
      { name: "SEMCAT — AI Code Assistant Platform", stack: "Angular 15 · PrimeNG 15 · Python · SSE", bullets: [
        "Implemented Server-Sent Events end-to-end for real-time AI response streaming.",
        "Built code preview, syntax highlighting, copy, and download features from Figma designs, with a focus on accessibility and performance.",
      ]},
    ],
  },
  {
    company: "L&T Technology Services",
    role: "Senior Engineer",
    dates: "Aug 2020 – Mar 2023",
    highlight: "Full-stack work on an ML platform and real-time engineering dashboards for petroleum drilling.",
    details: [
      { name: "DS365.ai — Enterprise ML Platform", stack: "Angular 12 · Node.js · MongoDB · Bootstrap 5 · Docker", bullets: [
        "Designed and implemented ~25% of the application UI; built scalable, reusable components from Figma designs.",
        "Developed Angular services integrated with Node.js/MongoDB-backed APIs, keeping data flow consistent from client to database.",
      ]},
      { name: "Real Time Well Engineering (RTWE) & iROP", stack: "Angular 8 · PrimeNG · Dash · Django REST · Docker", bullets: [
        "Built engineering modules for petroleum engineers, including Dull Bit Grading and ML-based drilling prediction dashboards from Adobe XD designs.",
        "Integrated with Django REST backend services for real-time data.",
      ]},
    ],
  },
  {
    company: "Oracle India Pvt. Ltd.",
    role: "IT Consultant",
    dates: "Jul 2016 – Feb 2020",
    highlight: "Enterprise Angular applications, plus two years moonlighting as Linux sysadmin.",
    details: [
      { name: "Enterprise Angular Applications", stack: "Angular · REST APIs", bullets: [
        "Built and maintained applications for task tracking, job scheduling, and operational monitoring.",
        "Developed reusable component libraries and Angular services for API integration across large-scale systems.",
        "Also served as Linux System Administrator (Jul 2016 – Feb 2018), gaining hands-on server and environment management experience.",
      ]},
    ],
  },
];

const skillGroups = [
  { label: "Backend & APIs", items: ["Node.js", "Express.js", "Python", "Django REST", "Java", "REST APIs", "SSE"] },
  { label: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "React", "Angular (7–15)", "Redux"] },
  { label: "Data & Infra", items: ["MongoDB", "Docker", "Git", "NPM", "Vite", "Angular CLI"] },
  { label: "UI Libraries", items: ["PrimeNG", "PrimeReact", "Angular Material", "Bootstrap"] },
  { label: "Testing", items: ["Jasmine", "Jest", "Unit testing", "Code reviews"] },
  { label: "Design", items: ["Figma", "Adobe XD"] },
];

const APPS = [
  { id: "about", title: "About Me.txt", icon: "📄" },
  { id: "projects", title: "My Projects", icon: "📁" },
  { id: "experience", title: "My Experience", icon: "💼" },
  { id: "skills", title: "My Skills", icon: "🛠️" },
  { id: "contact", title: "Contact Me", icon: "✉️" },
  { id: "bin", title: "Recycle Bin", icon: "🗑️" },
];

function TitleBarButton({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{ background: "linear-gradient(180deg, #fefefe, #d8d8d8)", border: "1px solid #6b7a99", color: "#1A1A1A" }}
      className="w-5 h-5 text-xs font-bold rounded-sm flex items-center justify-center leading-none hover:brightness-95 active:brightness-90"
    >
      {children}
    </button>
  );
}

function ExperienceEntry({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #C6C3B5" }} className="py-3">
      <div style={{ color: c.text }} className="text-sm font-bold">{job.company}</div>
      <div style={{ color: "#555" }} className="text-xs mt-0.5">{job.role} · {job.dates}</div>
      <p style={{ color: c.text }} className="text-xs mt-2 leading-relaxed">{job.highlight}</p>
      {job.award && (
        <div style={{ background: "#FFF6C9", border: "1px solid #E0C24A", color: "#5A4A00" }} className="inline-block text-xs px-2 py-0.5 mt-2 rounded-sm">
          ★ {job.award}
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ color: c.link }} className="text-xs mt-2 underline block">
        {open ? "[ Hide details ]" : "[ Show details ]"}
      </button>
      {open && (
        <div className="mt-3 space-y-3">
          {job.details.map((p) => (
            <div key={p.name}>
              <div style={{ color: c.text }} className="text-xs font-semibold">{p.name}</div>
              <div style={{ color: "#555" }} className="text-xs mb-1">{p.stack}</div>
              <ul style={{ color: c.text }} className="text-xs space-y-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const WINDOW_CONTENT = {
  about: () => (
    <div style={{ color: c.text }} className="text-sm leading-relaxed">
      <p className="font-bold text-base mb-1">Neha Gururaj</p>
      <p className="text-xs mb-3" style={{ color: "#555" }}>Senior Full-Stack Developer — React / Node.js</p>
      <p className="text-xs mb-2">
        9+ years building enterprise web applications across React, Angular, and Node.js — currently
        the frontend and integration layer for enterprise LLM platforms in Bengaluru, India.
      </p>
      <p className="text-xs">Double-click the icons on the desktop to explore, or use the Start menu below.</p>
    </div>
  ),
  projects: () =>
    projects.length === 0 ? (
      <div style={{ color: c.text }} className="text-xs leading-relaxed">
        <p className="font-semibold mb-1">This folder is empty.</p>
        <p style={{ color: "#555" }}>
          Add entries to the <code>projects</code> array at the top of this file — each becomes its own
          file icon here, with a description, tags, and a link once it's ready.
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-3">
        {projects.map((p) => (
          <div key={p.title} style={{ border: "1px solid #C6C3B5", background: "white" }} className="p-3 rounded-sm">
            <div style={{ color: c.text }} className="text-sm font-semibold">{p.title}</div>
            <p style={{ color: c.text }} className="text-xs mt-1">{p.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {p.tech.map((t) => (
                <span key={t} style={{ background: "#DCE6F5", color: c.text }} className="text-xs px-1.5 py-0.5 rounded-sm">{t}</span>
              ))}
            </div>
            {(p.link || p.repo) && (
              <div className="flex gap-3 mt-2 text-xs">
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: c.link }} className="underline">View →</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: c.link }} className="underline">Code →</a>}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  experience: () => (
    <div>
      {experience.map((job) => (
        <ExperienceEntry key={job.company} job={job} />
      ))}
    </div>
  ),
  skills: () => (
    <div className="space-y-3">
      {skillGroups.map((g) => (
        <div key={g.label}>
          <div style={{ color: c.link }} className="text-xs font-bold mb-1">{g.label}</div>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((item) => (
              <span key={item} style={{ background: "white", border: "1px solid #C6C3B5", color: c.text }} className="text-xs px-2 py-1 rounded-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  contact: () => (
    <div style={{ color: c.text }} className="text-sm">
      <p className="text-xs mb-3">Open to full-stack and frontend-heavy roles. Reach out any of these ways:</p>
      <div className="space-y-2 text-xs">
        <div>📧 <a href="mailto:nehabhat2209@gmail.com" style={{ color: c.link }} className="underline">nehabhat2209@gmail.com</a></div>
        <div>📞 <a href="tel:+917624845965" style={{ color: c.link }} className="underline">+91-7624845965</a></div>
        <div>🔗 <a href="https://linkedin.com/in/neha-gururaj" target="_blank" rel="noreferrer" style={{ color: c.link }} className="underline">linkedin.com/in/neha-gururaj</a></div>
        <div>📍 Bengaluru, India</div>
      </div>
    </div>
  ),
  bin: () => (
    <div style={{ color: c.text }} className="text-xs text-center py-6">
      <div className="text-3xl mb-2">🗑️</div>
      <p>The Recycle Bin is empty.</p>
      <p style={{ color: "#777" }} className="mt-1">(No deleted code here — just clean commits.)</p>
    </div>
  ),
};

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <div style={{ background: "#1941a5", border: "1px solid #0A246A", color: "white", ...sysFont }} className="text-xs px-2 py-1 rounded-sm">
      {time}
    </div>
  );
}

export default function App() {
  const [openIds, setOpenIds] = useState(["about"]);
  const [minimized, setMinimized] = useState([]);
  const [startOpen, setStartOpen] = useState(false);

  const openWindow = (id) => {
    setOpenIds((prev) => (prev.includes(id) ? [...prev.filter((x) => x !== id), id] : [...prev, id]));
    setMinimized((prev) => prev.filter((x) => x !== id));
    setStartOpen(false);
  };
  const closeWindow = (id) => {
    setOpenIds((prev) => prev.filter((x) => x !== id));
    setMinimized((prev) => prev.filter((x) => x !== id));
  };
  const minimizeWindow = (id) => setMinimized((prev) => [...prev, id]);
  const focusWindow = (id) => {
    setOpenIds((prev) => [...prev.filter((x) => x !== id), id]);
    setMinimized((prev) => prev.filter((x) => x !== id));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(180deg, #3a6ea5 0%, #7ba7d9 45%, #bcd9f0 75%, #cfe6a8 100%)",
        ...sysFont,
      }}
    >
      {/* hill silhouette */}
      <svg viewBox="0 0 1000 220" preserveAspectRatio="none" style={{ position: "absolute", bottom: 40, left: 0, width: "100%", height: "22%" }}>
        <path d="M0,220 L0,120 Q250,20 500,100 T1000,80 L1000,220 Z" fill="#6FAF4C" />
        <path d="M0,220 L0,160 Q300,90 600,150 T1000,130 L1000,220 Z" fill="#5C9A3E" opacity="0.85" />
      </svg>

      {/* desktop icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-5 z-10">
        {APPS.map((app) => (
          <button
            key={app.id}
            onDoubleClick={() => openWindow(app.id)}
            className="flex flex-col items-center w-20 group"
          >
            <span className="text-3xl drop-shadow">{app.icon}</span>
            <span
              style={{ color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              className="text-xs mt-1 text-center leading-tight group-hover:underline"
            >
              {app.title}
            </span>
          </button>
        ))}
      </div>
      <div style={{ color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }} className="absolute top-4 right-4 text-xs italic hidden sm:block">
        (double-click an icon to open)
      </div>

      {/* windows */}
      {openIds.map((id, i) => {
        if (minimized.includes(id)) return null;
        const app = APPS.find((a) => a.id === id);
        const stack = openIds.filter((x) => !minimized.includes(x));
        const idx = stack.indexOf(id);
        const offset = idx * 22;
        return (
          <div
            key={id}
            onMouseDown={() => focusWindow(id)}
            style={{
              position: "absolute",
              top: `calc(12% + ${offset}px)`,
              left: `calc(18% + ${offset}px)`,
              width: "min(520px, 82vw)",
              maxHeight: "68vh",
              zIndex: 100 + i,
              border: `2px solid ${c.border}`,
              borderRadius: 6,
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              display: "flex",
              flexDirection: "column",
              background: c.windowBg,
            }}
          >
            {/* title bar */}
            <div
              style={{
                background: `linear-gradient(180deg, ${c.titleFrom}, ${c.titleTo})`,
                backdropFilter: "blur(4px)",
                borderRadius: "4px 4px 0 0",
              }}
              className="flex items-center justify-between px-2 py-1.5 shrink-0"
            >
              <span style={{ color: "white", textShadow: "1px 1px 1px rgba(0,0,0,0.4)" }} className="text-xs font-bold flex items-center gap-1.5">
                <span>{app.icon}</span> {app.title}
              </span>
              <div className="flex gap-1">
                <TitleBarButton title="Minimize" onClick={() => minimizeWindow(id)}>_</TitleBarButton>
                <TitleBarButton title="Maximize">□</TitleBarButton>
                <TitleBarButton title="Close" onClick={() => closeWindow(id)}>×</TitleBarButton>
              </div>
            </div>
            {/* body */}
            <div className="p-4 overflow-y-auto" style={{ background: c.windowBg }}>
              {WINDOW_CONTENT[id]()}
            </div>
          </div>
        );
      })}

      {/* start menu */}
      {startOpen && (
        <div
          style={{ background: c.windowBg, border: `2px solid ${c.border}`, borderRadius: "6px 6px 0 0" }}
          className="absolute bottom-10 left-2 w-56 shadow-2xl z-[500] overflow-hidden"
        >
          <div style={{ background: `linear-gradient(180deg, ${c.titleFrom}, ${c.titleTo})`, color: "white" }} className="px-3 py-2 text-sm font-bold">
            Neha Gururaj
          </div>
          <div className="py-1">
            {APPS.map((app) => (
              <button
                key={app.id}
                onClick={() => openWindow(app.id)}
                style={{ color: c.text }}
                className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-blue-100"
              >
                <span>{app.icon}</span> {app.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* taskbar */}
      <div
        style={{ background: `linear-gradient(180deg, ${c.taskbarFrom}, ${c.taskbarTo})`, borderTop: "1px solid #0A246A" }}
        className="absolute bottom-0 left-0 w-full h-9 flex items-center justify-between px-2 z-[400]"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStartOpen(!startOpen)}
            style={{ background: `linear-gradient(180deg, ${c.startFrom}, ${c.startTo})`, color: "white", border: "1px solid #2e6e12" }}
            className="text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 shadow"
          >
            <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, width: 10, height: 10 }}>
              <span style={{ background: "#F35325" }} />
              <span style={{ background: "#81BC06" }} />
              <span style={{ background: "#05A6F0" }} />
              <span style={{ background: "#FFBA08" }} />
            </span>
            start
          </button>
          <div className="flex gap-1">
            {openIds.map((id) => {
              const app = APPS.find((a) => a.id === id);
              const isMin = minimized.includes(id);
              return (
                <button
                  key={id}
                  onClick={() => (isMin ? focusWindow(id) : minimizeWindow(id))}
                  style={{ background: isMin ? "#2a5cc9" : "#5f8fe0", color: "white", border: "1px solid #0A246A" }}
                  className="text-xs px-2 py-1 rounded-sm hidden md:flex items-center gap-1 max-w-[140px] truncate"
                >
                  <span>{app.icon}</span> <span className="truncate">{app.title}</span>
                </button>
              );
            })}
          </div>
        </div>
        <Clock />
      </div>
    </div>
  );
}