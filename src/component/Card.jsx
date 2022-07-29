import React from 'react'

function Card({post}) {
    return (
        <div className='card'>
            <span className="title">{post.title}</span>
            <img className='img' src={post.img} alt="" />
            <p className='desc'>{post.desc}</p>
            <button className='cardButton'>Read More</button>
        </div>
    )
}

export default Card