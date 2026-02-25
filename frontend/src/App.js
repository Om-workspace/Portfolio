import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="bg-dark text-light min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
        <div className="container">
          <span className="navbar-brand fw-bold text-info">
            Om Kithani
          </span>
          <span className="text-secondary">
            DevOps Engineer
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold text-info">
          Building Scalable Infrastructure
        </h1>
        <p className="lead text-secondary">
          Docker • AWS • Linux • Nginx • PostgreSQL
        </p>
      </div>

      {/* Projects Section */}
      <div className="container pb-5">
        <h2 className="mb-4 border-start border-info border-4 ps-3">
          Projects
        </h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card bg-secondary text-light h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-info">
                    {project.title}
                  </h5>
                  <p className="card-text">
                    {project.description}
                  </p>
                </div>
                <div className="card-footer bg-dark border-0">
                  <small className="text-warning">
                    {project.tech_stack}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center py-3 border-top border-secondary">
        <small className="text-muted">
          © 2026 Om Kithani | Full Stack DevOps Portfolio
        </small>
      </footer>

    </div>
  );
}

export default App;