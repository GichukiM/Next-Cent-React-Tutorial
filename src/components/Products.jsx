import React from 'react'
import pana from '../assets/pana.png'
import Tesla from '../assets/image 9.png'

const Products = () => {
    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={pana} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className="md:w-3/4 text-neutralGrey mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum quaerat reprehenderit harum dicta ab nostrum fugit iste ipsum, accusantium voluptatum, alias rerum odio architecto. Illum nam asperiores doloribus animi?</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={Tesla} alt="" />
                    </div>

                    <div className="md:w-2/3 mx-auto">
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor ipsam quam praesentium unde magnam adipisci harum, inventore voluptatum vitae recusandae debitis placeat quis magni ut quia sequi. Culpa dicta ipsa accusantium voluptates facilis illo quidem inventore vel provident nemo.
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralDGrey mb-8 leading-7'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="/src/assets/clients/Logo.png" alt="" />
                                    <img src="/src/assets/clients/Logo (1).png" alt="" />
                                    <img src="/src/assets/clients/Logo (2).png" alt="" />
                                    <img src="/src/assets/clients/Logo (3).png" alt="" />
                                    <img src="/src/assets/clients/Logo (4).png" alt="" />
                                    <img src="/src/assets/clients/Logo (5).png" alt="" />
                                    <img src="/src/assets/clients/Logo (6).png" alt="" />

                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all Customers
                                            <img src="/src/assets/clients/Right.png" alt="" className='inline-block ml-2' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Products