import { useEffect, useRef, useState } from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { Alert , Button, ButtonGroup, Container, Form, FormControl, FormLabel, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const NewPost = ({insertIntoPost , setPosts}) => {
    const inputRef = useRef(null)
    const[buttonText , setButtonText ] = useState("Create")
    const[isButtonDisabled , setIsButtonDisabled] = useState(false)
    const history = useHistory()
    const initialPostState = {
        title : '',
        body: '',
        datetime: new Date().toISOString()
    }
    const [post, setPost] = useState(initialPostState);
    
    useEffect(() => {
        setPost(initialPostState)
    },[])

    const formik = useFormik({
        initialValues : post ,
        validationSchema : Yup.object({
            title : Yup.string()
                    .min(5, 'Title must be at least 5 characters')
                    .max(100, 'Title must be 100 characters or less')
                    .nonNullable("Title must not be words without patterns or empty!")
                    .required('Post title is required'),
            body : Yup.string()
                    .nonNullable("Title must not be words empty!")
                   .required('Body text is required')
        }),
        onSubmit : async( values , { setSubmitting , setErrors }) => {
            /// this conveys the condition we comtemporneously creating post.. but still processing
            setSubmitting(true)
            setIsButtonDisabled(true)
            setButtonText("Creating...")
            try{
                const response = await insertIntoPost(values)
                setPost(response)
                setPosts([...post , response]);
                setButtonText("Created")
                setTimeout(() => {
                    history.push('/');
                }, 1500);
            }
            catch(error){
                setErrors({submit : 'Unknown Error has Popped up!Post Creation failed through!'})
                setButtonText("Create")
                history.push('/')
            }
            finally{
                setSubmitting(false)
                setIsButtonDisabled(false)
            }
        }
    })

    return(
        <Container className="NewPost">
            <Row>
                <h2>Create Post</h2>
            </Row>
           <Row>
           <Form  onSubmit={formik.handleSubmit}>
                <FormLabel htmlFor="title">Title:</FormLabel>
                <FormControl type="text" 
                id = "title" 
                name = "title"
                value = {formik.values.title} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={inputRef}
                placeholder="Enter the post title"
                isInvalid = {formik.touched.title && formik.errors.title }
                required/>
                <FormControl.Feedback type  = "invalid">
                    <div className = "error">{formik.errors.title}</div>
                </FormControl.Feedback>
                <FormLabel htmlFor="body">Body:</FormLabel>
                <FormControl id="body" 
                 value = {formik.values.body}
                 name = "body"
                 as= "textarea"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 isInvalid = {formik.touched.title && formik.errors.body}
                 required
                 />

                 <FormControl.Feedback type  = "invalid">
                 <div className = "error">{formik.errors.body}</div>
                </FormControl.Feedback>
                 
                 {/* we have got commodiously post title and post body that we branched out vivaciously */}
                <ButtonGroup className = "btn-group">
                <Button type="submit" onClick={() => inputRef.current.focus()} disabled = {formik.isSubmitting || isButtonDisabled}>
                {formik.isSubmitting ? (
                    <>
                    <Spinner animation="border" as="span" size="sm" 
                    aria-label = "Rambunctious post spinner management"
                    aria-hidden = "true">
                       {buttonText}
                    </Spinner>
                    </>
                ) : (
                    buttonText
                )}
                </Button>

                <Button type="reset" onClick={() => {
                    formik.resetForm()
                    setIsButtonDisabled(false)
                    setButtonText('Create')
                }}>Reset Form</Button>
                </ButtonGroup>
            </Form>
           </Row>
            {formik.errors.submit && <Alert variant="danger" className = "mt-4" show dismissible>{formik.errors.submit}</Alert>}
        </Container>
    )
}
export default NewPost;