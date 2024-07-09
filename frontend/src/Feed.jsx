import { Post } from "./Post"

export const Feed = ({posts}) =>{
    return(
        <>
        { posts && posts.map( post =>(
              <Post key={post.id} post = {post}/>
        ))}
        </>
    )
}
