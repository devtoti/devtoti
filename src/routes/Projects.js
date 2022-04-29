import { NavLink, Outlet } from "react-router-dom";
import { obtainProjects } from "../data";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  let projects = obtainProjects();

  const [currArr, setCurrArr] = useState(projects);

  function filterArray(arr, id) {
    let active = arr.active
    active = true
    let activeProject = {...arr, active}
    console.log(activeProject)
    setCurrArr([activeProject])
  }

  function currProjectImg() {
    console.log('idk what im doing')
  }

  const imgRef = useRef(null)
  return (
    <>
      <main className="main-projects project-list" style={{ height: "auto" ? "auto" : "100%" }}>
        <div className="project-list">
          <nav className="nav-projects">
            <h2 className='main-header'>.Projects</h2>
            {currArr.map((project, id) => (
              <NavLink
                to={`/Projects/${project.id}`}
                key={project.id}
                onClick={() =>
                  currArr.length > 1
                    ? filterArray(project)
                    : setCurrArr(projects)
                }

              >
                <h4>{project.name}</h4>
                <div className="p-image">

                <img className={project.active == true ? 'project-image active' : 'project-image'}  ref={imgRef} src={project.img} />
                <h5 className="coming-soon">COMING SOON</h5>
                </div>
                <p>Made with: {project.techs}</p>
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </div>
      </main>
    </>
  );
}
