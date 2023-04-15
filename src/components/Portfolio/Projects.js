import React, { useState, useEffect } from "react";
import Project from "./Project";
import { projectsData, projectsNav } from "../../data";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    // nav
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-between justify-evenly items-center text-white">
          {projectsNav.map((item, index) => (
            <li
              key={index}
              className={`mx-4 cursor-pointer  ${active ===index ? 'active' : ''}`}
              onClick={(e) => 
                handleClick(e, index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* project grid */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
            {projects.map((item)=>(
                <Project item={item} key={item.id}/>
            ))}
      </section>
    </div>
  );
};

export default Projects;
