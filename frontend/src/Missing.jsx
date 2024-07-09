import {Link} from 'react-router-dom'

const Missing = () => {
    return(
        <main class = "Missing">
            <h2>Post Not Trackable</h2>
            <p> that is daunting...</p>
            <Link to = "/" target='_parent'>Go back to homePage..</Link>
        </main>
    )
}
export default Missing;