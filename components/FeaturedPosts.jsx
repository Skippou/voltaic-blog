import React, { useEffect,useState } from 'react'
import {getFeaturedPosts} from '../services'

const FeaturedPosts = () => {

    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        getFeaturedPosts()
            .then(newFeaturedPosts => setFeaturedPosts(newFeaturedPosts));// 
    }, []); // run once

  return (
    console.log(featuredPosts),
    <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 gap-4 react-multi-carousel-list'>
      {featuredPosts.map((post, index) => (
        <div className='bg-white grid-cols-1 shadow-lg rounded-lg p-8 mb-8' key={post.title}>
        </div>
      ))}
    </div>
  )
}

export default FeaturedPosts