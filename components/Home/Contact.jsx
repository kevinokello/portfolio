import React from 'react'
import Section from "../Customs/Section"

const Contact = () => {
    const initialState = { email: "", name: "", message: "" }
    const [userData, setUserData] = React.useState(initialState);
    const { email, name, message } = userData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        })
        alert(`name : ${formData.name} \nemail : ${formData.email} \nmessage : ${formData.message} `)
    }

    return (
      <Section
        id="contact"
        title="Contact Me"
        subtitle="connect with me"
        description="This could be the beginning of something graet!"
      >
        <div className=" mx-auto flex lg:flex-nowrap flex-wrap">
          <div>
            <a href="/">
              <button
                type="button"
                className="outline-none text-xs md:text-sm text-white bg-gradient-to-r from-primary/80 via-secondary/60 to-secondary/80 hover:from-primary hover:via-secondary/80 hover:to-secondary transition-all duration-300 font-medium rounded-lg text-md opacity-90 hover:opacity-100 py-2.5 px-4 text-center mr-2 mb-3 flex justify-center items-center"
              >
                <HiDownload className="mr-2 w-5 h-5" />
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </Section>
    );
}

export default Contact