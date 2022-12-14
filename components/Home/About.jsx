import React from 'react'

import Link from "next/link"
import Section from '../Customs/Section'

import { FaLinkedin, FaGithub } from "react-icons/fa"

const About = () => {
    const socialLinks = [
      {
        url: "https://github.com/kevinokello",
        icon: <FaGithub className="w-5 h-5" />,
      },
      {
        url: "https://www.linkedin.com/in/kevin-okello-b4b977202/",
        icon: <FaLinkedin className="w-5 h-5" />,
      },
    ];
    return (
      <Section id="about" className="!relative">
        <div className="flex sm:flex-row justify-center flex-col px-4">
          <div className="w-full sm:w-1/2 mb-12 sm:mb-0">
            <h1 className=" capitalize title-font  sm:text-3xl text-2xl mb-2 font-bold">
            "I'm looking to expand my portfolio
              <br />
              while I'm on top 
              <span className="text-primary ml-2">and while I'm young."</span>
            </h1>
            <br />
            <h2 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
              Let's connect
            </h2>
            <div className="select-none capitalize flex my-4">
              {socialLinks.map(({ icon, url }, index) => (
                <Link href={url} key={index}>
                  <div className="border-primary border-2 mr-3 mb-3 rounded-full p-2 text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                    {icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
         
            </h1>
            <p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
              Since beginning my journey as a freelance developer nearly 5 years
              ago, I&#8217;ve done remote work for agencies, consulted for
              startups, and collaborated with talented people to create web
              products for both business and consumer use.
              <br /> <br />
              I'm a graduate of Zetech University, majored in BBIT with a
              specialization in Information Technology. I've done a lot of
              full-stack work, though now I'm mostly focused on back-end. I
              especially enjoy working with LARAVEL.
              <br /> <br />
   
              With my strong conceptualization ability, I am able to visualize
              and create beautiful works. Lastly, you can find me mostly
              tweaking stylesheets and creating fluid user experiences.
              <br /> <br />I am adept at handling multiple design projects in a
              fast paced environment. Excellent at time management,
              organization, problem solving and meeting deadlines.
              <br /> <br />
              I'm passionate about bringing both the technical and visual
              aspects of digital products to life. User experience, beautiful
              pixels and writing clean accessible, human code matters to me.
            </p>
           
          </div>
        </div>
      </Section>
    );
}

export default About