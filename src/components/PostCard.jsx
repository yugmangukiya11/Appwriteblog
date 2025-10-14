import React from 'react'
import { Link } from 'react-router-dom'
import appwriteservice from '../appwrite/config'

function PostCard({$id,title,featuredImage,$createdAt}) {
  return (
    <Link to={`/post/${$id}`} className="group">
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        {/* Image */}
        <div className="w-full h-48 overflow-hidden rounded-t-xl">
          <img
            src={appwriteservice.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
            {title}
          </h2>
          {/* Optional: Add a short description or date here */}
          <p className="text-gray-500 text-sm mt-1">Uploaded at {$createdAt.split("T")[0]}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard