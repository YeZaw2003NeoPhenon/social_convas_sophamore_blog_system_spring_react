import { useState } from "react"
export const useModal = () => {
    const[showModal , setShowModal ] = useState(false)
    const[postToDelete , setPostToDelete] = useState(null)

    const handleCloseModal = () => {
        setShowModal(false)
        setPostToDelete(null)
    }
    
    const confirmDeletePost = (postId) => {
        setShowModal(true)
        setPostToDelete(postId)
    }

    return { showModal , postToDelete , confirmDeletePost , handleCloseModal}
}