import { Modal , ModalDialog , ModalBody , ModalHeader , ModalTitle , ModalFooter , Button , ButtonGroup} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import postService from './service/postService.jsx';

export const DeleteModal = ({posts , setPosts , showModal , postId , handleCloseModal , showAlertMessage }) => {
    const history = useHistory()
    
    const handleDelete = async() => {
    try{
         await postService.deletePost(postId);
        const updatedPosts = posts.filter(post => post.id !== postId);
                setTimeout(() => {
                    setPosts(updatedPosts)
                }, 1000)
                showAlertMessage('Post was graciously eradicated!','success');
                handleCloseModal();
                history.push('/');
        }
        catch(error) {
            showAlertMessage('Error Popped up during processing.Devastingly, post can not be deleted!')
            console.log(error.message);
        }
    }

    return(
   <Modal show = {showModal} onHide={handleCloseModal} scrollable className = "bg-dark p-3">
            <ModalHeader className = "border-none">
                <ModalTitle>
                    <h2>Confirm Delete</h2>
                </ModalTitle>
            </ModalHeader>
           <ModalBody>
            <ModalDialog>
            <p className = "fw-bold p-3">Are you sure you want to delete this post?</p>
            </ModalDialog>
           </ModalBody>
    <ModalFooter>
        <ButtonGroup className='d-flex flex-row align-items-center justify-content-center gap-2'>
            <Button onClick={handleDelete} className = "btn btn-danger">Delete</Button>
            <Button onClick={handleCloseModal} className = "btn btn-secondary">Cancel</Button>
        </ButtonGroup>
    </ModalFooter>
        </Modal>
    )
}