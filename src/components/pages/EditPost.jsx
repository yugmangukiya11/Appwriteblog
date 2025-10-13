import React, { useEffect, useState } from 'react'
import {Container,PostForm} from ".."
import appWriteService from "../../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setpost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            // console.log(slug.slug)
            appWriteService.getPost(slug).then((post) => {
                // console.log(post)
                if(post){
                    setpost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

    return (
        post ? (
            <div className='py-8'>
                <Container>
                    <PostForm post={post}/>
                </Container>
            </div>
        ) : null
  )
}

export default EditPost