import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react'

import { Categories , PostCard , PostWidget, FeaturedPosts} from '../components'

import { getPosts } from '../services'


// const posts = [
//   {title: "Post Title", excerpt: "Post Excerpt"},
//   {title: "Post Title 2", excerpt: "Post Excerpt 2"}
// ]; //demo post not required


const Home: NextPage<{posts: any}> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Voltaic Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <FeaturedPosts />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'> 
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post: { node: any },index: Key | null | undefined) => <PostCard key={index} post={post.node}/> )}
        </div>
        <div className="lg:col-span-4 col-span-1"> 
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div> 

    </div>
  )
}

export default Home;

//next.js method to get props
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {posts}
  }
}
