import {useParams , Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Container , CardHeader , Card , CardBody , CardFooter, CardText ,
         Button , ButtonGroup,
         CardTitle,
         CardSubtitle} from 'react-bootstrap';
const PostPage = ({posts , confirmDeletePost}) => {

    const { id } = useParams(); // this one vicariously return string value so we have use (toString to compare accordingly)
    // fathomably bounced back to boolean values
    const post = posts.find( post => post.id === Number(id));
    const history = useHistory()
    return(
    <main className="PostPage">        
        <article>
    { post && 
          <Container className="mt-5 postContainer">
          <Card className = "card" >
            <CardHeader as="h2" className="card-header">
                <CardTitle className = "postTitle">{post.title}</CardTitle>
                <CardSubtitle className = "postDate">{post.datetime}</CardSubtitle>
            </CardHeader>
            <CardBody>
              <CardText className='postBody'>{post.body}</CardText>
            </CardBody>
            <CardFooter className="text-muted">
                <ButtonGroup className='buttonGroup d-flex flex-col justify-content-around align-items-center gap-3'>
                <Button variant="primary" className = "editBtn fw-bold btn-outline-success p-2 rounded-pill" onClick={() => history.push(`/edit/${post.id}`)}>Edit</Button>
              <Button variant="danger" onClick={() => confirmDeletePost(post.id)} className='deleteBtn rounded-pill'>Delete</Button>
                </ButtonGroup>
             </CardFooter>
          </Card>
        </Container>
       }
    {!post && 
        <>
            <h2>
                Post Not Found
            </h2>
            <p>This is disillusioning catastrophic..</p>
            <p>
                <Link to = "/" target = "_parent"> visit our HomePage</Link>
            </p>
        </>
    }

        </article>
        </main>
    )
}
export default PostPage;