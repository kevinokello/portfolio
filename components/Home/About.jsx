import React from 'react'

import Link from "next/link"
import Section from '../Customs/Section'

import { FaCodepen, FaLinkedin, FaGithub} from "react-icons/fa"

const About = () => {
    const socialLinks = [

      {
        url: "https://github.com/kevinokello",
        icon: <FaGithub className="w-5 h-5" />,
      },
      { url: "#", icon: <FaCodepen className="w-5 h-5" /> },
      {
        url: "https://www.linkedin.com/in/kevin-okello-b4b977202/",
        icon: <FaLinkedin className="w-5 h-5" />,
      },

    ];
    return (
        <Section id="about" className="!relative">
            <div className='flex sm:flex-row justify-center flex-col px-4'>
                <div className='w-full sm:w-1/2 mb-12 sm:mb-0'>
                    
                    <h1 className=" capitalize title-font  sm:text-3xl text-2xl mb-2 font-bold">
                        <span className='text-primary'>People </span>
                        ignore designs
                        <br />
                        that ignores
                        <span className='text-primary ml-2'>People </span>
                    </h1>
                    <p className=" capitalize leading-relaxed text-xs md:text-sm text-textSecondary dark:text-textDarkSecondary">
                        - Frank Chimero
                    </p>
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
                        Connect With Me
                    </h1>
                    <p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
                        I am approximately on every social media platform. You can also mail me anytime, I will reply within 24 hours
                    </p>
                    <div className='select-none capitalize flex my-4'>
                        {socialLinks.map(({ icon, url }, index) => (
                            <Link href={url} key={index}>
                                <div className='border-primary border-2 mr-3 mb-3 rounded-full p-2 text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer'>
                                    {icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About