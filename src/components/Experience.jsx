import React from 'react'

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750495746/1200px-ISO_C_2B_2B_Logo.svg_s626c1.png",
            name: "C++"
        },
        {
            id: 2,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750495763/HTML5_logo_and_wordmark_fud2os.svg",
            name: "HTML"
        },
        {
            id: 3,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750495783/CSS-Logo-2011_hixciy.png",
            name: "CSS"
        },
        {
            id: 4,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750495810/1698604163003_voc3cr.png",
            name: "JavaScript"
        },
        {
            id: 5,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750496045/1200px-Tailwind_CSS_Logo.svg_y7n1p9.png",
            name: "Tailwind"
        },
        {
            id: 6,
            logo: "https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750495875/Bootstrap_logo_r21ezm.svg",
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
                                <img src={logo}
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
