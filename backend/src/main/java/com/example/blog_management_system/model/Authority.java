package com.example.blog_management_system.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Authority {
	
	@Getter
	@Setter
	private Long id;
	
	@Getter
	@Setter
	private String authority;
}
