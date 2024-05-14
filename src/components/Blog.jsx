import React from 'react'

const Blog = () => {

    const blogs = [
        {id: 1, title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eos?", image: "/src/assets/image 18.png"
        },
        {id: 2, title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eos?", image: "/src/assets/image 19.png"
        },
        {id: 3, title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eos?", image: "/src/assets/image 20.png"
        }
    ]

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='blog'>

            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vero amet. Eum suscipit odio tenetur at delectus, eveniet cumque nisi fuga quos quidem? Accusantium, et.</p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => 
                        <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                <div className='flex items-center justify-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More
                                            <img src="/src/assets/clients/Right.png" alt="" className='inline-block ml-2' />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Blog