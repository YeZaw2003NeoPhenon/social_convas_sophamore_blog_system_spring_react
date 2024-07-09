import { useRef, useState } from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { Alert , Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const NewPost = ({insertIntoPost , setPosts}) => {
    const inputRef = useRef(null)
    const[buttonText , setButtonText ] = useState("Create")
    const[isButtonDisabled , setIsButtonDisabled] = useState(false)
    const history = useHistory()

    const formik = useFormik({
        initialValues : {
            title : '',
            body: '',
            datetime: new Date().toISOString()
        },
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
                setPosts(response);
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
        <main className="NewPost">
            <h2>Create Post</h2>
            <form  onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" 
                id = "title" 
                name = "title"
                value = {formik.values.title} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={inputRef}
                placeholder="Enter the post title"
                required/>
                {formik.touched.title && formik.errors.title ?(
                    <div className = "error">{formik.errors.title}</div>
                ) : null }

                <label htmlFor="body">Post:</label>
                <textarea id="body" 
                 value = {formik.values.body}
                 name = "body"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 required
                 />
                     {formik.touched.title && formik.errors.body ?(
                    <div className = "error">{formik.errors.body}</div>
                ) : null }
                 
                 {/* we have got commodiously post title and post body that we branched out vivaciously */}
                <div className = "btn-group">
                <button type="submit" onClick={() => inputRef.current.focus()} disabled = {formik.isSubmitting || isButtonDisabled}>
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
                </button>

                <button type="reset" onClick={() => {
                    formik.resetForm()
                    setIsButtonDisabled(false)
                    setButtonText('Create')
                }}>Reset Form</button>
                </div>
            </form>
            {formik.errors.submit && <Alert variant="danger" className = "mt-4" show dismissible>{formik.errors.submit}</Alert>}
        </main>
    )
}
export default NewPost;