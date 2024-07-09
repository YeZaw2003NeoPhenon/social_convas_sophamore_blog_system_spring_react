package com.example.blog_management_system.model;

import java.sql.Timestamp;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Post {
	@Getter
	@Setter
	private int id;
	
	@Getter
	@Setter
	@NotNull(message = "Post title is required")
	  @Size(min = 5, max = 100, message = "Post Title must be between 5 and 100 characters")
	private String title;
	
	@Getter
	@Setter
	private Timestamp datetime;
	
	@Getter
	@Setter
	@NotNull(message = "Post body is required")
	private String body;
}
