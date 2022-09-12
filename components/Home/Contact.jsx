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
        title="Get in touch"
        subtitle="connect with me"
        description=""
      >
        <div className=" mx-auto flex lg:flex-nowrap flex-wrap">
            <div className="mx-auto">
              <div className="dark:bg-paperDark bg-paper relative text-xs flex flex-wrap py-6 pr-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold tracking-widest">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Nairobi, Kenya</p>
                </div>
                <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                  <div>
                    <h2 className="title-font font-semibold  tracking-widest">
                      EMAIL
                    </h2>
                    <a className="text-primary leading-relaxed">
                      kevinokello222@gmail.com
                    </a>
                  </div>
                  <div>
                    <h2 className="title-font font-semibold  tracking-widest mt-4">
                      PHONE
                    </h2>
                    <p className="leading-relaxed">+254 724 071 015</p>
                  </div>
                </div>
              </div>
            </div>
  
        </div>
      </Section>
    );
}

export default Contact