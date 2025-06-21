import React from 'react'

function About() {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-bold mb-5'>About</h1>
            <p className='text-justify'>
                "I'm a passionate Frontend Developer skilled in creating responsive, user-friendly,
                and visually appealing websites using clean and efficient code. I specialize in modern
                tools like HTML, CSS, JavaScript, Tailwind, Bootstrap, and React. I'm always eager to
                learn new technologies and build better digital experiences."
            </p>
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
            <span className='text-justify'>[Bechlore of Computer Application], [DAV Institute of Engineering & Technology Jalandhar], [2025]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
            <span className='text-justify'>[Frontend Development
                HTML5 – Semantic, SEO-friendly markup
                CSS3 – Styling, animations, layouts (Flexbox & Grid)
                JavaScript (ES6+) – DOM manipulation, event handling, logic building],
                [UI Frameworks & Styling
                Tailwind CSS – Utility-first responsive design
                Bootstrap – Component-based fast prototyping], [JavaScript Libraries
                React.js – SPA development, component lifecycle, hooks, and state management], [Tools & Workflow
                Visual Studio Code (VS Code)
                Git & GitHub – Version control
                NPM – Package management
                Vite – Fast build tooling for modern web projects]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
            <span className='text-justify'>[Frontend Developer], [Designed and developed responsive websites using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap.
                Built dynamic user interfaces and single-page applications using React.js.
                ], [Portfolio Website: Designed a personal portfolio using React, Tailwind CSS, and Vite.]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Achievement & Awards</h1>
            <span className='text-justify'>[Completed 100+ Hours of Frontend Development Training], [Recognized for completing structured learning in HTML, CSS, JavaScript, and React through online platforms], [like Codewithharry, lean coding etc.]
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
            <span className='text-justify'>[My mission is to craft clean, responsive, and user-focused web experiences that not only look great but perform seamlessly across all devices. I aim to continuously grow as a developer by embracing modern technologies and building meaningful digital solutions that make a real impact.]
            </span>
        </div>
    )
}

export default About;
