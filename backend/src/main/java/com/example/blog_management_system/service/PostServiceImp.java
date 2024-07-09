package com.example.blog_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.blog_management_system.model.Post;
import com.example.blog_management_system.repository.PostRepository;

@Service
public class PostServiceImp implements PostService{
	
	@Autowired
	private PostRepository postRepository;

	@Override
	public List<Post> getAllPosts() {
		return postRepository.getAllPosts();
	}
	
	@Override
	public int createPost(Post post) {
		return postRepository.createPost(post);
	}

	@Override
	public int deletePost(int id) {
		return postRepository.deletePost(id);
	}

	@Override
	public Post getPostById(int id) {
		return postRepository.getPostById(id);
	}

	@Override
	public int updatePost(Post post) {
		return postRepository.updatePost(post);
	}
	
}
