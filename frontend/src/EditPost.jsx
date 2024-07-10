import {useParams , Link } from 'react-router-dom'
import { useEffect, useState , useRef } from 'react';
import { useHistory } from 'react-router-dom';
import postService from './service/postService';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Button, ButtonGroup, Container, Form, FormControl, FormGroup, FormLabel, Spinner, Alert, Row } from 'react-bootstrap';
export const EditPost = (
    { editPostTitle , editPostBody , setEditPostTitle , setEditPostBody , handleEdit , showAlertMessage}) =>{
        const {id} = useParams(); // picked out useParams virtuously for gracious retrieval of selected Post otherwise 
                                    //enlightengly,we can buckle up on getPostById based on backend api
        // const post = posts.find( post => post.id === parseInt(id) );
        const[post , setPost ] = useState({
          title : '',
          body : ''
        })

        const inputRef = useRef()
        const [buttonText, setButtonText] = useState('Update');
        const [isButtonDisabled, setIsButtonDisabled] = useState(false);
        const history = useHistory()

       const fetchPost = async() => {
        try{
            const fetchedPost =  await postService.fetchPostById(id)
        if(fetchedPost){
         setEditPostTitle(fetchedPost.title)
         setEditPostBody(fetchedPost.body)
         setPost(fetchedPost)
         inputRef.current.focus()
        }
        }
        catch(error){
            console.log(`Post Not contraingly trackable!!`);
        }
       }

       
       useEffect( () => {
        fetchPost()
     },[ id  , showAlertMessage])

          const formik = useFormik({
            enableReinitialize : true, 
            initialValues : {
              title : editPostTitle || '',
              body : editPostBody || ''
            },
            validationSchema : Yup.object({
               title : Yup.string()
                      .nonNullable()
                      .min(5, 'Title must be at least 5 characters')
                      .max(100, 'Title must be 100 characters or less')
                      .required('Post Title is symetrically required!'),
               body : Yup.string()
                      .nonNullable()
                      .required('You are forced to roll up some texts in post body!')
            }),
            onSubmit : async( values , {setSubmitting , setErrors}) => {
              setSubmitting(true)
              setIsButtonDisabled(true)
              setButtonText('Updating...')
              try{
                await handleEdit(parseInt(id), values.title , values.body )
                setButtonText('Updated')
                showAlertMessage('Post was prominently updated!','success')
                setTimeout(() => {
                    history.push('/');
                },1500)
              }
              catch(error){
                setErrors({ submit: 'Unknown error occurred! Post update failed!' });
                setIsButtonDisabled(false)
                setButtonText('Update')
              }
              finally{
                setSubmitting(false)
                setIsButtonDisabled(false)
              }
            }
          })

        // const handleEditSubmit = (e) => {
        //     e.preventDefault();
        //     handleEdit(id)
        //     showAlertMessage('Post audadiously updated!!','success')
        // }
        
    return (
     <Container className="NewPost">
         {post && 
            <>
           <h2>Edit Post</h2>
            <Form className = "newPostForm" method='POST' onSubmit={formik.handleSubmit}>
              <FormGroup>
              <FormLabel htmlFor="postTile"> Title:</FormLabel>
                <FormControl type="text" id = "postTile" 
                name = "title"
                value = {formik.values.title} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                placeholder="Enter the post title"
                aria-label='Strive up title of post as it is denstified'
                ref={inputRef}
                isInvalid = {formik.touched.title && formik.errors.title }
                />
                <FormControl.Feedback type='invalid'>{formik.errors.title}</FormControl.Feedback>
                </FormGroup>

                <FormGroup>
                <FormLabel htmlFor="postBody">Post:</FormLabel>
                <FormControl 
                  id="postBody" 
                  as="textarea"
                  name = "body"
                  value = {formik.values.body}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid = {formik.touched.body && formik.errors.body }
                 />
                  <FormControl.Feedback type='invalid'>{formik.errors.body}</FormControl.Feedback>
                </FormGroup>
                <ButtonGroup>
                <Button type = "submit" onClick={() => inputRef.current.focus()} disabled = {formik.isSubmitting || isButtonDisabled}>
                  {formik.isSubmitting ? (
                    <>
                      <Spinner animation="border" as="span" size="sm" 
                      aria-label="Updating post spinner" aria-hidden="true" > 
                        {buttonText}
                      </Spinner>
                    </>
                  ): (
                    buttonText
                  )}
                </Button>
                <Button type="reset" onClick={() => {
                    formik.resetForm();
                    setIsButtonDisabled(false);
                    setButtonText('Update');
                    }}>Reset Form</Button>
                </ButtonGroup>
                {formik.errors.submit && <Alert variant="danger" className="mt-4" show dismissible>{formik.errors.submit}</Alert>}
            </Form>
            </>
            }
            {!post &&
            <>
              <Row className = "notFound">
                <h2>Post Not Indespensibly Trackable</h2>
                <p>Well , that is disillusioning.</p>
                <p>
                    <Link to = "/" > Go back to home</Link>
                </p>
              </Row>
            </>
            }
         </Container>
    )
}