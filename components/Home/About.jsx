import React from 'react'

import Link from "next/link"
import Section from '../Customs/Section'

import { FaCodepen, FaFacebookF, FaGithub, FaHackerrank, FaInstagram } from "react-icons/fa"

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
              <span className="text-primary">“Simplicity </span>
              is the soul of
              <span className="text-primary ml-2">efficiency” </span>
            </h1>
            <p className=" capitalize leading-relaxed text-xs md:text-sm text-textSecondary dark:text-textDarkSecondary">
              - Austin Freeman
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
              Shortly about me:On free time I like playing Table tennis
              immensely, so if you want to join I am waiting for you ; As a Jack
              of All Trades, I'm curious to learn more about new technologies.{" "}
              <br />
              Always woke and motivated to drive meaningful levels of impact
              across the globe.
            </p>
            <h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
              Connect With Me
            </h1>
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
        </div>
      </Section>
    );
}

export default About