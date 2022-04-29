import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Categories , PostCard , PostWidget} from '../components'


const posts = [
  {title: "Post Title", excerpt: "Post Excerpt"},
  {title: "Post Title 2", excerpt: "Post Excerpt 2"}
]; //demo post


const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Voltaic Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'> 
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post) => ( //map through posts and make a card for each
            <PostCard post={post} key={post.title} />
          ))}
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

export default Home
