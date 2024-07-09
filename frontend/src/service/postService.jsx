import postApi from "../api/postApi"; // Assuming you have an Axios instance configured in api/postApi.js

const getAllPosts = async () => {
    try {
        const response = await postApi.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch posts: ${error.message}`);
    }
};

const fetchPostById = async (id) => {
    try {
        const response = await postApi.get(`/posts/select/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch post ${id}: ${error.message}`);
    }
};

const addPost = async (post) => {
    try {
        post.datetime = new Date().toISOString();
        const response = await postApi.post(`/posts/create`, post);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to add post: ${error.message}`);
    }
};

const updatePost = async (id, updatedPost) => {
    try {
        updatedPost.datetime = new Date().toISOString();
        const response = await postApi.put(`/posts/update/${id}`, updatedPost);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to update post ${id}: ${error.message}`);
    }
};

const deletePost = async (id) => {
    try {
        const response = await postApi.delete(`/posts/delete/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to delete post ${id}: ${error.message}`);
    }
};

export default {
    getAllPosts,
    fetchPostById,
    addPost,
    updatePost,
    deletePost,
};
