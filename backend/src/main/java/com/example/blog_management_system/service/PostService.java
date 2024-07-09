package com.example.blog_management_system.service;

import java.util.List;

import com.example.blog_management_system.model.Post;

public interface PostService {
	public abstract List<Post> getAllPosts();
	public abstract int createPost(Post post);
	public abstract int deletePost(int id);
	public abstract Post getPostById(int id);
	public abstract int updatePost(Post post);
}
