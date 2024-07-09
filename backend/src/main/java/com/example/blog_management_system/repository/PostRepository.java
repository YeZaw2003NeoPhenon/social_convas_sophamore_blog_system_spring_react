package com.example.blog_management_system.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.blog_management_system.model.Post;

@Mapper
public interface PostRepository {
	public abstract List<Post> getAllPosts();
	public abstract int createPost(Post post);
	public abstract int deletePost(int id);
	public abstract Post getPostById(int id);
	public abstract int updatePost(Post post);
}
