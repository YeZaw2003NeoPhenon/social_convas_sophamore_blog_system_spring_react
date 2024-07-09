import Header from './Header.jsx'
import NavContainer from './NavContainer.jsx'
import Home from './Home.jsx'
import NewPost from './NewPost.jsx'
import PostPage from './PostPage.jsx'
import About from './About.jsx'
import Missing from './Missing.jsx'
import Footer from './Footer.jsx'
import { EditPost } from './EditPost.jsx'
import {Route, Switch , useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import useWindowSize from './customHooks/useWindowSize.jsx'
import useAxiosApi from './useAxoisApi.jsx'
import { useAlertMessage } from './useAlertMessage.jsx'
import { DeleteModal } from './DeleteModal.jsx'
import { useModal } from './useModal.jsx'
import postService from './service/postService.jsx'
import { AlertDialog } from './AlertDialog.jsx'
import { Container,Row ,Spinner } from 'react-bootstrap'

function App() {
  const [search , setSearch ] = useState('');
  const[searchResult , setSearchResult] = useState([]);
  const[editPostTitle , setEditPostTitle] = useState("");
  const[editPostBody , setEditPostBody ] = useState("");
  const history = useHistory();
  const {width , height} = useWindowSize();
  const{alertMessage , alertVariant , showAlertMessage } = useAlertMessage()
  // const api_url = "http://localhost:3500/posts";

  const { data : posts = [] , setData : setPosts  , fetchError , isLoading } = useAxiosApi()
  const{ showModal , postToDelete , confirmDeletePost , handleCloseModal } = useModal()

   useEffect(() => {
    setSearchResult(posts)
   }, [posts , setSearchResult])

   useEffect(() => {
      const filteredResult = posts.filter(post => {
        const title = post.title ? post.title.toLowerCase() : '';
        const body = post.body ? post.body.toLowerCase() : '';
        return title.includes(search.toLowerCase()) || body.includes(search.toLowerCase());
      });
      setSearchResult(filteredResult.reverse());
  }, [posts, search]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   insertIntoPost();
  //   showAlertMessage('Post Created Successfully!','success')
  // }


 const insertIntoPost =  async (post) => {
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1 ;
  const datetime = format(new Date() , 'MMMM dd, yyyy pp');
  const newPost = { id , ...post , datetime };
  try{
    const response = await postService.addPost(newPost)
    const allPosts = [...posts , response ]
    setPosts(allPosts)
    showAlertMessage('Post Created Successfully!','success')
  }
  catch( err ){
    console.log(` Error ${err.message}`);
    showAlertMessage('omiverously failed to create post!','danger')
    throw new Error("Failed to create post.");
  }
 }

 const handleEdit = async(id) => {
  const datetime = format(new Date() , 'MMMM dd, yyyy pp');
  const updatedPost = { id , title : editPostTitle , datetime , body : editPostBody };
  try{
    const response = await postService.updatePost(id ,updatedPost)
    console.log(response);
    // setPosts(posts.map(post => post.id === id ? response : post));
    setPosts([...posts , response])
    setEditPostTitle('')
    setEditPostBody('')
    history.push('/'); 
    showAlertMessage('Post Updated Unblemishedly!','success')
  }
  catch( err ){
    console.log(`Error ${err.message}`)
    showAlertMessage('Failed to updated post!', 'danger');
  }
 }

  return (
    <div className="App">
      <Header title = "Content Blog Post" width = {width} height = {height}/>
      <NavContainer search = {search} setSearch = {setSearch} />
      <AlertDialog alertMessage={alertMessage} alertVariant={alertVariant}/>
      <Container>
        {isLoading ? (
          <Row className = "d-flex align-items-center justify-content-center mt-5 p-4 fs-5">
            <Spinner animation='border' variant='primary' as={'span'} aria-label = "fetchedLoaderSpinner"></Spinner>
          </Row>
        ): (
          <Switch>
          <Route exact path = "/">
            <Home posts = {searchResult} fetchError = {fetchError} isLoading = {isLoading}/>
          </Route>

          <Route exact path = "/post">
            <NewPost insertIntoPost = {insertIntoPost} setPosts = {setPosts}/>
        </Route>

    <Route path = "/edit/:id">
      <EditPost posts = {posts} 
       editPostTitle = {editPostTitle}
       editPostBody = {editPostBody}
       setEditPostTitle={setEditPostTitle}
       setEditPostBody = {setEditPostBody}
       handleEdit = {handleEdit}
       showAlertMessage = {showAlertMessage}/>
    </Route>
    
      <Route path="/post/:id">
        <PostPage posts={posts} confirmDeletePost={confirmDeletePost} />
      </Route>

       <Route path="/about">
          <About />
        </Route>

      <Route path="*">
        <Missing />
       </Route>
    </Switch>
        )}

      </Container>
  <DeleteModal 
     posts={posts}
     setPosts = {setPosts}
     showModal = {showModal}
     postId = {postToDelete} 
     handleCloseModal = {handleCloseModal}
     showAlertMessage = {showAlertMessage}/>
      <Footer/>
    </div>
  );
}

export default App;