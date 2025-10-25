import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {

    const navigate = useNavigate();
    const { title, description, category, image, _id } = blog;
    return (
        <div onClick={() => navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-blue-500 duration-300 cursor-pointer'>
            <img src={image} alt="" className='aspect-video' />
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-blue-500 rounded-full'>{category}</span>
            <div className='p-5'>
                <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
                <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{__html:description.slice(0, 80)}}></p>
            </div>
        </div>
    )
}

export default BlogCard
