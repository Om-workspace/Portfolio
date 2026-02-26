-- ============================================================
-- Portfolio Database – Init & Seed Script
-- Run once on first startup (or re-run to reset data)
-- ============================================================

-- ── Projects ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  description TEXT,
  tech_stack  TEXT,
  icon        TEXT,
  github_url  TEXT,
  sort_order  INTEGER DEFAULT 0
);

TRUNCATE TABLE projects RESTART IDENTITY CASCADE;

INSERT INTO projects (title, description, tech_stack, icon, github_url, sort_order) VALUES
(
  'GreenPath EMS – IoT Traffic Coordination',
  'Designed an IoT-based ambulance traffic priority system using ESP32 for real-time signal control. Built 3 dashboards for hospital, traffic control, and driver coordination.',
  'IoT, ESP32, Embedded C, Dashboard',
  '🚦',
  'https://github.com/Om-workspace',
  1
),
(
  'Linux System Monitoring & Automation',
  'Developed Bash scripts for disk monitoring and log analysis. Automated execution using cron jobs. Structured repository from Basic → Advanced levels.',
  'Bash, Linux, Cron, Shell Scripting',
  '🖥️',
  'https://github.com/Om-workspace',
  2
),
(
  'BookBuddy Community Platform',
  'Built a database-driven book recommendation platform with user interaction and review system.',
  'PHP, SQL, Bootstrap, HTML, CSS',
  '📚',
  'https://github.com/Om-workspace',
  3
),
(
  'Personal Portfolio Website',
  'Built a responsive portfolio website to present technical projects, internship experience, and skill progression. Deployed via GitHub.',
  'React, Docker, Nginx, PostgreSQL, AWS',
  '🌐',
  'https://github.com/Om-workspace',
  4
),
(
  'AI-Powered Code Generation Tool',
  'Integrated AI plugins into VS Code to improve development efficiency and automate repetitive coding tasks.',
  'Python, VS Code, AI/LLM APIs',
  '🤖',
  'https://github.com/Om-workspace',
  5
);

-- ── Skills ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skills (
  id         SERIAL PRIMARY KEY,
  label      TEXT NOT NULL,
  icon       TEXT,
  sort_order INTEGER DEFAULT 0
);

TRUNCATE TABLE skills RESTART IDENTITY CASCADE;

INSERT INTO skills (label, icon, sort_order) VALUES
('Docker',         '🐳', 1),
('AWS',            '☁️',  2),
('Linux',          '🐧', 3),
('Nginx',          '⚡', 4),
('Git & GitHub',   '🌿', 5),
('Bash Scripting', '💻', 6),
('Python',         '🐍', 7),
('JavaScript',     '🟨', 8),
('HTML & CSS',     '🎨', 9),
('Bootstrap',      '🅱️', 10),
('SQL',            '🗄️', 11),
('IoT / ESP32',    '📡', 12),
('PHP',            '🐘', 13),
('C++',            '⚙️', 14),
('CI/CD',          '🔄', 15);

-- ── Experience ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experience (
  id         SERIAL PRIMARY KEY,
  role       TEXT NOT NULL,
  company    TEXT NOT NULL,
  period     TEXT,
  location   TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS experience_bullets (
  id            SERIAL PRIMARY KEY,
  experience_id INTEGER REFERENCES experience(id) ON DELETE CASCADE,
  bullet        TEXT NOT NULL,
  sort_order    INTEGER DEFAULT 0
);

TRUNCATE TABLE experience_bullets RESTART IDENTITY CASCADE;
TRUNCATE TABLE experience        RESTART IDENTITY CASCADE;

INSERT INTO experience (role, company, period, location, sort_order) VALUES
('Internship Trainee', 'Zymr Systems', 'Feb 2026 – Present', 'Pune, Maharashtra', 1);

INSERT INTO experience_bullets (experience_id, bullet, sort_order) VALUES
(1, 'Hands-on experience in Linux-based development environments.',                                                        1),
(1, 'Version control workflows using Git and GitHub.',                                                                     2),
(1, 'Configured and managed Docker containers for application deployment.',                                                3),
(1, 'Explored cloud fundamentals including AWS EC2 and IAM basics.',                                                       4),
(1, 'Bash scripting to automate simple system tasks.',                                                                     5),
(1, 'Understood CI/CD concepts and deployment workflows.',                                                                  6),
(1, 'Collaborated with team members on software development lifecycle practices.',                                          7),
(1, 'Participated in debugging and issue resolution under guidance of senior engineers.',                                   8);

-- ── Education ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS education (
  id         SERIAL PRIMARY KEY,
  degree     TEXT NOT NULL,
  school     TEXT NOT NULL,
  period     TEXT,
  location   TEXT,
  sort_order INTEGER DEFAULT 0
);

TRUNCATE TABLE education RESTART IDENTITY CASCADE;

INSERT INTO education (degree, school, period, location, sort_order) VALUES
(
  'B.E. – Artificial Intelligence & Data Science',
  'PES Modern College of Engineering',
  'Jun 2022 – Present',
  'Pune, Maharashtra',
  1
),
(
  'HSC – Maharashtra State Board',
  'Shri Sambhajiraje Secondary & Higher Secondary School',
  'Jun 2020 – Mar 2022',
  'Pune, Maharashtra',
  2
),
(
  'SSC – Maharashtra State Board',
  'Holy Angels Convent High School',
  'Jun 2014 – Mar 2020',
  'Pune, Maharashtra',
  3
);
