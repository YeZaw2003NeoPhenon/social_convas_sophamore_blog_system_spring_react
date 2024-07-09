import { Link } from "react-router-dom"

export const Post = ({post}) =>{

    if (!post) {
        return null; 
    }

    return (
    <article className="post">
        <Link to = {`/post/${post.id}`} target="_parent">
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
        </Link>
        <p className="postBody">
            {
             (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...etc...`
            }
        </p>
    </article>
    )
    
}