import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center gap-1.5'>
            <div className='pt-auto min-h-70 flex flex-col items-center p-5'>

                {/* NAME */}
                <div className="flex flex-col gap-2 text-center mb-10">

                    {/* SMALLER TOP LINE */}
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-300">
                        Hello, I am
                    </h2>

                    {/* BIG GRADIENT NAME */}
                    <h1
                        className="text-5xl md:text-[115px] font-medium text-transparent bg-clip-text bg-linear-to-br from-gray-200 via-gray-300 to-gray-500"
                        style={{ fontFamily: "Poiret" }}
                    >
                        Harleen Kaur
                    </h1>

                </div>



                {/* DESCRIPTION */}
                {/* <p className='text-zinc-400 px-7 text-sm sm:text-base leading-relaxed mt-5 max-w-150'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nobis deserunt fugiat id cum, dicta harum rem aperiam pariatur alias!</p> */}

                {/* SOCIALS */}
                {/* <ul className="flex gap-4 mt-6 text-zinc-400">
                    <li className="p-2 rounded-full hover:text-white hover:scale-105 transition-all duration-300">
                        <a
                            href="https://www.linkedin.com/in/harleenkaur857/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin />
                        </a>
                    </li>
                    <li className="p-2 rounded-full hover:text-white hover:scale-105 transition-all duration-300">
                        <a
                            href="https://github.com/harleenkaur13"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github />
                        </a>
                    </li>
                    <li className="p-2 rounded-full hover:text-white hover:scale-105 transition-all duration-300">
                        <a href="#" target="_blank" rel="noreferrer">
                            <Twitter />
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Hero