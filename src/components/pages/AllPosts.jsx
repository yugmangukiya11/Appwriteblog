import React,{useEffect, useState} from 'react'
import appWriteService from "../../appwrite/config"
import {PostCard , Container} from '..'
import CircularIndeterminate from '../Loader'

function AllPosts() {
    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
      appWriteService.getPosts([]).then((posts) => {
        
        if(posts){
            setposts(posts.documents)
        }
    }).finally(() => setloading(false))
    }, [])
    
  return (
    loading ? <CircularIndeterminate/> :
    <div className="w-full py-12 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Posts</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts