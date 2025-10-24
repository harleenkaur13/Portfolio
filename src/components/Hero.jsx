import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
    return (
        <div className='w-full h-[calc(100vh-4rem)] flex items-center justify-center gap-1.5'>
            <div className='max-w-150 min-h-70 flex flex-col items-center p-5'>

                {/* NAME */}
                <div className="flex flex-col md:flex-row md:gap-2 text-4xl sm:text-5xl font-serif font-medium mb-4">
                    <span className="text-zinc-300">Hello, I am</span>
                    <span className="text-yellow-600 md:ml-2">Harleen Kaur</span>
                </div>

                {/* DESCRIPTION */}
                <p className='text-zinc-400 px-7 text-sm sm:text-base leading-relaxed mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nobis deserunt fugiat id cum, dicta harum rem aperiam pariatur alias!</p>

                {/* SOCIALS */}
                <ul className="flex gap-4 mt-6 text-zinc-400">
                    <li className="border border-zinc-800 p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition">
                        <a
                            href="https://www.linkedin.com/in/harleenkaur857/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin />
                        </a>
                    </li>
                    <li className="border border-zinc-800 p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition">
                        <a
                            href="https://github.com/harleenkaur13"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github />
                        </a>
                    </li>
                    <li className="border border-zinc-800 p-2 rounded-full hover:text-yellow-600 hover:border-yellow-600 transition">
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