import React from 'react'

import Section from "../Customs/Section"
import ServiceCard from "../Customs/ServiceCard"
import { HiOutlinePencilAlt, HiOutlineChartBar, HiOutlineDeviceMobile } from "react-icons/hi"

const Services = () => {
    const data = [
      {
        title: "Creative Design",
        description:
          "Mydesign services cover entire product design lifecycle, From prototyping to fully functional design.",
        icon: <HiOutlinePencilAlt className="w-6 h-6 stroke-2" />,
      },
      {
        title: "Software Development",
        description:
          "I dopixel perfect responsive softeare design services which are built around aesthetics and usability.",
        icon: <HiOutlineChartBar className="w-6 h-6 stroke-2" />,
      },
      {
        title: "Mobile App Design",
        description:
          "I specialize in development of highly scalable MVC Web and Mobile Applications using React Native.",
        icon: <HiOutlineDeviceMobile className="w-6 h-6 stroke-2" />,
      },
      {
        title: "Content Writing",
        description:
          "My content and copy-writing services will help you articulate your message and give the audience a compelling reason to keep coming back.",
        icon: <HiOutlinePencilAlt className="w-6 h-6 stroke-2" />,
      },
    ];

    return (
        <Section id="services" title="Services" description="Lorem ipsum dolor sit adipisicing elit. Facere, quos! Et asperiores ut dolorem dignissimos possimus, molestiae nemo." subtitle="what I can do for you ?">
            <div className="flex flex-wrap justify-center items-center">
                {data.map(({ title, description, icon }, index) => (
                    <ServiceCard key={index} icon={icon} title={title} description={description} />
                ))}
            </div>
        </Section>

    )
}


export default Services