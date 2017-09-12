package com.nexusdevs.shoppersdeal.admin.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan(basePackages = "com.nexusdevs.shoppersdeal.admin")
@PropertySource({"classpath:server.properties"})
@EnableWebMvc
public class ApplicationConfiguration {
	
	@Autowired
	private Environment env;
	
	@Bean
	public ApiConfig getApiConfig() {
		ApiConfig config = new ApiConfig();
		System.out.println(env.getProperty("api.server.url"));
		config.setApiUrl(env.getProperty("api.server.url"));
		return config;
	}

	@Bean
	public StandardServletMultipartResolver multipartResolver() {
		return new StandardServletMultipartResolver();
	}
}