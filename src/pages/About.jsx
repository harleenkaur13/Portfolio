import copy from "../assets/copy.jpg"

const About = () => {
  return (
    <div className='min-h-screen text-white flex flex-col'>

      {/* HEADING */}
      <div className='h-20 flex justify-center items-end mb-6 md:mb-20'>
        <h1 className='text-4xl font-serif text-amber-500'>About Me</h1>
      </div>

      {/* CONTENT */}
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:px-60'>

        {/* LEFT SIDE */}
        <div className='flex justify-center md:justify-end w-full md:w-2/5'>
          <div className='rounded-md object-cover w-64 h-64 md:w-80 md:h-80'>
            <img loading="lazy" className='object-cover rounded-sm' src={copy} alt="Profile" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col mt-15 px-7 md:mt-0 w-full md:w-3/5 text-center md:text-left md:py-5 md:pl-7'>
          <div className="flex flex-col">
            <div className="text-2xl font-serif text-zinc-400 mb-1.5">Hi There! I'm Harleen</div>
            <div className="text-xl text-amber-500">Aspiring Software Engineer</div>
            <div className="text-sm text-zinc-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a veniam ullam. Voluptates a eaque laboriosam reprehenderit magni? Voluptas, voluptatibus praesentium! Mollitia quae, tempore libero illum quam similique nemo saepe, modi nostrum tenetur eveniet nulla sint sit ex molestias consequatur minus! Autem, labore magnam consequuntur facilis saepe error modi recusandae.</div>
            <div>
            <button className="bg-amber-600 px-4 py-2 rounded-md mt-5 self-center md:self-start hover:bg-amber-700 transition">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About