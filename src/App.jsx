import React, { useState } from "react";

const FONTS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
`;

const c = {
  bg: "#1E1E1E",
  sidebar: "#252526",
  border: "#3C3C3C",
  text: "#D4D4D4",
  dim: "#6E7681",
  comment: "#6A9955",
  string: "#CE9178",
  keyword: "#C586C0",
  key: "#9CDCFE",
  accent: "#007ACC",
  func: "#DCDCAA",
};

const mono = { fontFamily: "'JetBrains Mono', monospace" };

const files = [
  { id: "hero", label: "hero.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "experience", label: "experience.md" },
  { id: "skills", label: "skills.json" },
  { id: "contact", label: "contact.sh" },
];

/**
 * Empty for now. To add a project, push an object here:
 * { title, description, tech: [], link, repo }
 */
const projects = [];

const experience = [
  {
    company: "Samsung Electro-Mechanics",
    role: "Engineer, CL2-II",
    dates: "2023–03 → present",
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
    dates: "2020–08 → 2023–03",
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
    dates: "2016–07 → 2020–02",
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
  { label: "backend", items: ["Node.js", "Express.js", "Python", "Django REST", "Java", "REST APIs", "SSE", "async workflows"] },
  { label: "frontend", items: ["JavaScript (ES6+)", "TypeScript", "React", "Angular (7–15)", "Redux"] },
  { label: "data_infra", items: ["MongoDB", "Docker", "Git", "NPM", "Vite", "Angular CLI", "CI pipelines"] },
  { label: "ui_libraries", items: ["PrimeNG", "PrimeReact", "Angular Material", "Bootstrap"] },
  { label: "testing", items: ["Jasmine", "Jest", "unit testing", "code reviews"] },
  { label: "design", items: ["Figma", "Adobe XD"] },
];

function Lines({ children }) {
  const arr = React.Children.toArray(children);
  return (
    <div className="flex">
      <div style={{ color: c.dim, userSelect: "none" }} className="text-right pr-4 select-none shrink-0 text-xs md:text-sm leading-7">
        {arr.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 text-xs md:text-sm leading-7 min-w-0">
        {arr.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">{line}</div>
        ))}
      </div>
    </div>
  );
}

function FileHeader({ label }) {
  return (
    <div style={{ borderBottom: `1px solid ${c.border}`, color: c.dim }} className="text-xs px-4 py-2">
      {label}
    </div>
  );
}

function ExperienceBlock({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderLeft: `2px solid ${c.border}` }} className="pl-4 mb-6">
      <div>
        <span style={{ color: c.keyword }}>## </span>
        <span style={{ color: c.func }}>{job.company}</span>
      </div>
      <div style={{ color: c.dim }} className="text-xs mt-1">{job.role} · {job.dates}</div>
      <div style={{ color: c.text }} className="text-sm mt-2 opacity-90">{job.highlight}</div>
      {job.award && (
        <div style={{ color: c.string }} className="text-xs mt-2">// 🏆 {job.award}</div>
      )}
      <button onClick={() => setOpen(!open)} style={{ color: c.accent }} className="text-xs mt-3 underline">
        {open ? "- collapse" : "+ expand"}
      </button>
      {open && (
        <div className="mt-3 space-y-4">
          {job.details.map((p) => (
            <div key={p.name}>
              <div style={{ color: c.key }} className="text-sm">{p.name}</div>
              <div style={{ color: c.dim }} className="text-xs mb-1">{p.stack}</div>
              {p.bullets.map((b, i) => (
                <div key={i} style={{ color: c.text }} className="text-sm">
                  <span style={{ color: c.dim }}>{"  "}- </span>{b}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: c.bg, color: c.text, ...mono }} className="min-h-screen text-sm">
      <style>{FONTS_CSS}</style>

      {/* title bar */}
      <div style={{ background: c.sidebar, borderBottom: `1px solid ${c.border}` }} className="flex items-center gap-2 px-4 py-2">
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#FF5F56" }} />
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#27C93F" }} />
        <span style={{ color: c.dim }} className="ml-3 text-xs">neha-gururaj — portfolio</span>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div style={{ background: c.sidebar, borderRight: `1px solid ${c.border}` }} className="w-48 shrink-0 py-4 hidden md:block">
          <div style={{ color: c.dim }} className="px-4 text-xs mb-2">PORTFOLIO / src</div>
          {files.map((f) => (
            <a key={f.id} href={`#${f.id}`} style={{ color: c.text }} className="block px-4 py-1.5 text-xs hover:opacity-70">
              {f.label}
            </a>
          ))}
        </div>

        {/* editor area */}
        <div className="flex-1 min-w-0">
          {/* tabs */}
          <div style={{ borderBottom: `1px solid ${c.border}` }} className="flex overflow-x-auto">
            {files.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                style={{ borderRight: `1px solid ${c.border}`, color: c.text }}
                className="px-4 py-2 text-xs whitespace-nowrap hover:opacity-70"
              >
                {f.label}
              </a>
            ))}
          </div>

          {/* hero.jsx */}
          <section id="hero" className="scroll-mt-10 px-4 md:px-6 py-6 max-w-3xl">
            <FileHeader label="hero.jsx" />
            <div className="mt-4">
              <Lines>
                <span><span style={{ color: c.keyword }}>const</span> <span style={{ color: c.key }}>developer</span> = {"{"}</span>
                <span>{"  "}<span style={{ color: c.key }}>name</span>: <span style={{ color: c.string }}>"Neha Gururaj"</span>,</span>
                <span>{"  "}<span style={{ color: c.key }}>role</span>: <span style={{ color: c.string }}>"Senior Full-Stack Developer"</span>,</span>
                <span>{"  "}<span style={{ color: c.key }}>focus</span>: <span style={{ color: c.string }}>"React / Node.js, frontend for enterprise ML platforms"</span>,</span>
                <span>{"  "}<span style={{ color: c.key }}>location</span>: <span style={{ color: c.string }}>"Bengaluru, India"</span>,</span>
                <span>{"  "}<span style={{ color: c.key }}>experience</span>: <span style={{ color: c.string }}>"9+ years"</span>,</span>
                <span>{"};"}</span>
                <span> </span>
                <span style={{ color: c.comment }}>{"// currently: shipping RAG + LLM tooling, mentoring, and slowly onboarding onto Node.js/Express"}</span>
              </Lines>
              <div className="flex flex-wrap gap-3 mt-6 text-xs">
                <a href="mailto:nehabhat2209@gmail.com" style={{ border: `1px solid ${c.border}`, color: c.text }} className="px-3 py-1.5 rounded hover:opacity-70">
                  nehabhat2209@gmail.com
                </a>
                <a href="https://linkedin.com/in/neha-gururaj" target="_blank" rel="noreferrer" style={{ border: `1px solid ${c.border}`, color: c.text }} className="px-3 py-1.5 rounded hover:opacity-70">
                  linkedin.com/in/neha-gururaj
                </a>
              </div>
            </div>
          </section>

          {/* projects.jsx */}
          <section id="projects" className="scroll-mt-10 px-4 md:px-6 py-6 max-w-3xl">
            <FileHeader label="projects.jsx" />
            <div className="mt-4">
              <div style={{ color: c.comment }} className="text-xs mb-2">
                {"// nothing committed yet — push an object into this array to render a card"}
              </div>
              <Lines>
                <span><span style={{ color: c.keyword }}>const</span> <span style={{ color: c.key }}>projects</span> = [];</span>
              </Lines>

              {projects.length === 0 ? (
                <div style={{ border: `1px dashed ${c.border}` }} className="mt-4 rounded p-6 text-xs" >
                  <div style={{ color: c.dim }}>{">"} status: empty array</div>
                  <div style={{ color: c.dim }} className="mt-1">{">"} shape: {"{ title, description, tech: [], link, repo }"}</div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {projects.map((p) => (
                    <div key={p.title} style={{ border: `1px solid ${c.border}` }} className="rounded p-4">
                      <div style={{ color: c.key }} className="text-sm">{p.title}</div>
                      <div style={{ color: c.text }} className="text-xs mt-2 opacity-80">{p.description}</div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {p.tech.map((t) => (
                          <span key={t} style={{ color: c.string }} className="text-xs">#{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* experience.md */}
          <section id="experience" className="scroll-mt-10 px-4 md:px-6 py-6 max-w-3xl">
            <FileHeader label="experience.md" />
            <div className="mt-4">
              {experience.map((job) => (
                <ExperienceBlock key={job.company} job={job} />
              ))}
            </div>
          </section>

          {/* skills.json */}
          <section id="skills" className="scroll-mt-10 px-4 md:px-6 py-6 max-w-3xl">
            <FileHeader label="skills.json" />
            <div className="mt-4 text-xs md:text-sm">
              <div>{"{"}</div>
              {skillGroups.map((g, gi) => (
                <div key={g.label} className="pl-4">
                  <span style={{ color: c.key }}>"{g.label}"</span>: [
                  <div className="pl-4">
                    {g.items.map((item, i) => (
                      <span key={item} style={{ color: c.string }}>
                        "{item}"{i < g.items.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                  ]{gi < skillGroups.length - 1 ? "," : ""}
                </div>
              ))}
              <div>{"}"}</div>
            </div>
          </section>

          {/* contact.sh */}
          <section id="contact" className="scroll-mt-10 px-4 md:px-6 py-10 max-w-3xl">
            <FileHeader label="contact.sh" />
            <div className="mt-4 text-xs md:text-sm space-y-2">
              <div><span style={{ color: c.dim }}>$</span> <span style={{ color: c.func }}>echo</span> <span style={{ color: c.string }}>"open to full-stack + frontend-heavy roles"</span></div>
              <div style={{ color: c.text }} className="pl-4">open to full-stack + frontend-heavy roles</div>
              <div className="pt-2"><span style={{ color: c.dim }}>$</span> <span style={{ color: c.func }}>contact</span> --email <span style={{ color: c.string }}>nehabhat2209@gmail.com</span></div>
              <div><span style={{ color: c.dim }}>$</span> <span style={{ color: c.func }}>contact</span> --phone <span style={{ color: c.string }}>+91-7624845965</span></div>
              <div><span style={{ color: c.dim }}>$</span> <span style={{ color: c.func }}>contact</span> --linkedin <span style={{ color: c.string }}>linkedin.com/in/neha-gururaj</span></div>
            </div>
          </section>

          {/* status bar */}
          <div style={{ background: c.accent, color: "#fff" }} className="flex items-center justify-between px-4 py-1 text-xs">
            <span>main</span>
            <span>UTF-8 · React · Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
