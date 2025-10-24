import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.webp"
import project3 from "../assets/project3.webp"

const Projects = () => {

  const projects = [
    {
      title: "Ember",
      year: "2025",
      image: project1,
      github: ""
    },
    {
      title: "ToDo",
      year: "2025",
      image: project2,
      github: ""
    },
    {
      title: "Sentiment Analysis",
      year: "2025",
      image: project3,
      github: ""
    },
  ];

  return (
    <div className='min-h-screen text-white flex flex-col'>

      {/* HEADING */}
      <div className='h-20 flex justify-center items-end mb-6 md:mb-20'>
        <h1 className='text-4xl font-serif text-amber-500'>Projects</h1>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl w-full justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black w-[250px] rounded-md shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
          >
            <a href={project.github} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            </a>
            <div className="p-5 flex flex-col items-center">
              <span className="bg-gray-500 text-white text-xs px-3 py-1 rounded-md mb-2">
                {project.year}
              </span>
              <h3 className="font-semibold tracking-wider text-lg text-center">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects