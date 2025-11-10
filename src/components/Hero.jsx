import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center gap-1.5'>
            <div className='pt-auto max-w-150 min-h-70 flex flex-col items-center p-5'>

                {/* NAME */}
                <div className="flex justify-items-center  md:gap-2 text-5xl sm:text-7xl font-serif font-medium mb-4">
                    <p className="text-zinc-400">Hello, I am Harleen Kaur</p>
                </div>

                {/* DESCRIPTION */}
                <p className='text-zinc-400 px-7 text-sm sm:text-base leading-relaxed mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nobis deserunt fugiat id cum, dicta harum rem aperiam pariatur alias!</p>

                {/* SOCIALS */}
                <ul className="flex gap-4 mt-6 text-zinc-400">
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
                </ul>
            </div>
        </div>
    )
}

export default Hero