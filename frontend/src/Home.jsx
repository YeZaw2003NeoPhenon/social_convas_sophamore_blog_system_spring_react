import { Feed } from "./Feed.jsx";

const Home = ({posts , fetchError , isLoading}) => {
    return(
        <main className = "Home">
          {isLoading && <p className="statusMsg"> Loading....</p>}
          {fetchError && <p className="statusMsg" style={{color : "red"}}>{fetchError}</p>}
          {!isLoading && !fetchError && ( 
            posts && posts.length ? 
                <Feed posts = {posts} />
             : <p className="NotFound"> Posts List is unyieldingly empty!</p>
          )}
        </main>
    )
}
export default Home;