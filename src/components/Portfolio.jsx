import React from 'react'

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: "mongoDB",
            name: "MongoDB"
        },
        {
            id: 2,
            logo: "express",
            name: "Express"
        },
        {
            id: 3,
            logo: "reactJS",
            name: "ReactJS"
        },
        {
            id: 4,
            logo: "nodeJS",
            name: "NodeJS"
        },
        {
            id: 5,
            logo: "Flutter",
            name: "Flutter"
        },
        {
            id: 6,
            logo: "Pyhton",
            name: "Pyhton"
        },
    ]
    return (
        <div name="Portfolio" className='max-w-screen-2xl mx-auto px-4 md:px-20 my-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src="https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750412034/mongodbinc_logo_gpbjtj.jpg"
                                className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2'>{name}</div>
                                    {/* <p className='px-2 text-gray-700'>mongodb is a powerfull tool.....</p> */}
                                </div>
                                <div className='px-6 py-4 space-x-3 justify-around'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Learn</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Portfolio;
