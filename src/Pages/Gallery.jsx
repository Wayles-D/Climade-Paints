import React, { useState } from "react";
import SEO from "../components/SEO";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filterButtons = [
    { type: "All", label: "All" },
    { type: "Interior", label: "Interiors" },
    { type: "Exterior", label: "Exteriors" },
    { type: "Commercial", label: "Commercials" },
  ];

  const handleFilter = (filterType) => {
    setCurrentFilter(filterType);
  };

  const getFilteredProjects = () => {
    const searchFiltered = projects.filter((project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (currentFilter === "All") {
      return searchFiltered;
    }

    return searchFiltered.filter((project) => project.tags.includes(currentFilter));
  };

  const filteredProjects = getFilteredProjects();

  return (
    <>
      <SEO 
        title="Project Gallery - Our Work"
        description="Browse our portfolio of completed painting projects. View interior, exterior, and commercial painting work by Larr Medas Decorations."
        keywords="painting gallery, project portfolio, completed projects, interior painting examples, exterior painting examples, commercial painting"
        canonical="https://www.larrmedas.com/Gallery"
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#de898c7d]">
        <div>
          {/* left Image */}
          <div className="md:flex md:gap-x-8">
            <img
              className="rounded-2xl lg:shadow-gray-700 shadow-gray-500 shadow-lg lg:shadow-xl sm:w-full md:w-1/2 md:animate__animated md:animate__backInLeft"
              src="https://media.istockphoto.com/id/184104512/photo/man-at-work-20-series.jpg?s=612x612&w=0&k=20&c=XtXxqjAQbvkcug__P8bn63g_ZZouTil0wJBuKAvLvhY="
              alt=""
            />
            <div className="md:my-auto md:h-[200px]  md:w-[602.8px] sm:space-y-2  md:animate__animated md:animate__backInRight">
              <h1 className="inter-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-[#CC323A] lg:w-[541.88px]">
                Project Gallery
              </h1>
              <p className="lora-normal text-base font-bold lg:w-[500px]">
                Dive into our curated collection of residential and commercial finishes. Witness the transformation in our before-and-after showcases, explore our premium materials, and get inspired by the unique color stories that bring our projects to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#CC323A]" />

      {/* filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-[#de898c7d]">
        <div className="flex-wrap md:flex justify-between">
          <div className="flex flex-wrap gap-y-2 justify-evenly space-x-3 text-xs sm:text-[16px]">
            {filterButtons.map((button) => (
              <button
                key={button.type}
                onClick={() => handleFilter(button.type)}
                className={`p-2 border-2 rounded-xl border-accent-content ${currentFilter === button.type
                  ? "bg-[#CC323A] text-white"
                  : "bg-white/40 text-red-500"
                  }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* search */}
          <div className="flex p-2 space-x-3 rounded-xl border-2 border-black w-auto mt-2 md:mt-0 focus-within:border-red-500 transition-colors">
            <img
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762371448/SVG_i8lnpj.png"
              alt="search-icon"
              className="w-[18px] h-[19px] mt-0.5 text-black"
            />
            <input
              type="search"
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none outline-none bg-transparent w-full over"
            />
          </div>
        </div>

        {/* project displays */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#CC323A]"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 py-10">
            <p>Error loading projects: {error}</p>
            <p>Please make sure the backend server is running.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="border-2 border-[#cc323a65] rounded-lg p-2 gap-y-2 shadow-lg shadow-gray-500">
                  <img
                    src={project.projectImage}
                    alt={project.projectName}
                    className="w-full rounded-lg h-48 object-cover"
                  />
                  <div className="mt-1 justify-between">
                    <h2 className="poppins-bold text-[#CC323A]">
                      {project.projectName}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/50 text-[#CC323A] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
