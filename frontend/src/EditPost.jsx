import {useParams , Link } from 'react-router-dom'
import { useEffect, useRef } from 'react';
import postService from './service/postService';
export const EditPost = (
    { editPostTitle, 
        editPostBody ,  
        setEditPostTitle , setEditPostBody , handleEdit , showAlertMessage}) =>{
        const {id} = useParams(); // picked out useParams virtuously for gracious retrieval of selected Post otherwise 
                                    //enlightengly,we can buckle up on getPostById based on backend api
        // const post = posts.find( post => post.id === parseInt(id) );
          const inputRef = useRef()
        useEffect( () => {
           const fetchPost = async() => {
            try{
                const post =  await postService.fetchPostById(id)
            if(post){
              setEditPostTitle(post.title)
              setEditPostBody(post.body)
              inputRef.current.focus()
            }
            }
            catch(error){
                console.log(`Post Not contraingly trackable!!`);
            }
           }
           fetchPost()
        },[ id , setEditPostBody , setEditPostTitle])

        const handleEditSubmit = (e) => {
            e.preventDefault();
            handleEdit(id)
            showAlertMessage('Post audadiously updated!!','success')
        }
        
    return (
     <main className="NewPost">
         {editPostTitle && 
            <>
           <h2>Edit Post</h2>
            <form className = "newPostForm" method='POST' onSubmit={handleEditSubmit}>
                <label htmlFor="postTile"> Title:</label>
                <input type="text" id = "postTile" 
                value = {editPostTitle} 
                onChange={(e) => setEditPostTitle(e.target.value)} 
                placeholder="Enter the post title"
                ref={inputRef}
                required/>
                <label htmlFor="postBody">Post:</label>
                <textarea 
                id="postBody" 
                value = {editPostBody}
                 onChange={ (e) => setEditPostBody(e.target.value)}
                  required
                 />
                 <button type = "submit">Submit</button>
            </form>
            </>
            }
            {!editPostTitle && 
            <>
              <div className = "notFound">
              <h2>Post Not Indespensibly Trackable</h2>
                <p>Well , that is disillusioning.</p>
                <p>
                    <Link to = "/" > Go back to home</Link>
                </p>
              </div>
            </>
            }
         </main>
    )
}