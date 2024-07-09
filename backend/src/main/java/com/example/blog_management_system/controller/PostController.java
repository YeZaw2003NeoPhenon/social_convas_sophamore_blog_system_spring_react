package com.example.blog_management_system.controller;


import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.blog_management_system.model.Post;
import com.example.blog_management_system.service.PostServiceImp;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/posts")
public class PostController {
	
	@Autowired
	private PostServiceImp postServiceImp;
	
	
  @RequestMapping( produces = MediaType.APPLICATION_JSON_VALUE , method = RequestMethod.GET)
	public List<Post> getAllEmployees(){
		List<Post> posts = postServiceImp.getAllPosts();
		return posts;
	}
	
	  @RequestMapping(value = "/create" , consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE , method = RequestMethod.POST)
	    public ResponseEntity<Object> addPost(@RequestBody @Valid Post post , BindingResult bindingResult ) {
		  
		  if( bindingResult.hasErrors()) {
			  return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
		  }
		  
	        if (post.getDatetime() == null) {
	            post.setDatetime(new Timestamp( new Date().getTime()));
	        }
	        int newPost = postServiceImp.createPost(post);
			
			if( newPost > 0 ) {
				return ResponseEntity.status(HttpStatus.CREATED).body("Post created successfully");
			}
			else {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("failed in creating post!");
			}
	    }
	  
		@RequestMapping(value = "/delete/{id}",produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
		public ResponseEntity<String> deletePost( @PathVariable int id ) {
			int postResult = postServiceImp.deletePost(id);
			if( postResult > 0 ) { 
				return ResponseEntity.status(HttpStatus.CREATED).body("Post deleted successfully");
			}
			else {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Post deletion failed!");
			}
		}
		
	    @RequestMapping( value = "/select/{id}" , produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	    @ResponseBody
	    public ResponseEntity<Post> getEmployeeById(@PathVariable("id") String id) {
	        Post post = postServiceImp.getPostById(Integer.parseInt(id));
	        if( post != null ) {
	        	return ResponseEntity.status(HttpStatus.OK).body(post);
	        	}
	        else {
	        	return new ResponseEntity<Post>(HttpStatus.NOT_FOUND);
	        }
	    }
  	   
	    @RequestMapping(value = "/update/{id}" , produces = MediaType.APPLICATION_JSON_VALUE , consumes = MediaType.APPLICATION_JSON_VALUE , method = RequestMethod.PUT)
	    @ResponseBody
	    public ResponseEntity<String> updateEmployeeById( @PathVariable("id") String id , @RequestBody Post post) {
	        post.setId(Integer.parseInt(id));
	        post.setDatetime(new Timestamp(new Date().getTime()));
	        	 int postResult = postServiceImp.updatePost(post);
	             if( postResult > 0 ) {
	          	   return new ResponseEntity<String>("Post Updated Successfully" , HttpStatus.OK);
	             }
	             else {
	          	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(" something catastrophic happened!! Failed to update Post! try out again!");
	          }
	   }
}
