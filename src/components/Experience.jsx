import React from 'react'

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: "C++",
            name: "C++"
        },
        {
            id: 2,
            logo: "HTML",
            name: "HTML"
        },
        {
            id: 3,
            logo: "CSS",
            name: "CSS"
        },
        {
            id: 4,
            logo: "JavaScript",
            name: "JavaScript"
        },
        {
            id: 5,
            logo: "Tailwind",
            name: "Tailwind"
        },
        {
            id: 6,
            logo: "BootStrap",
            name: "BootStrap"
        },
    ]
    return (
        <div name="Experiance" className='max-w-screen-2xl mx-auto px-4 md:px-20 my-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <p className='font-semibold'>I've more than 6 months of experience in blow technologies.</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src="https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750412034/mongodbinc_logo_gpbjtj.jpg"
                                className='w-[150px] p-1 rounded-full border-[2px]' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2'>{name}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Experience;
