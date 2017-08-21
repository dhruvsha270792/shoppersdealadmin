package com.nexusdevs.shoppersdeal.admin.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.nexusdevs.shoppersdeal.admin.db.MongoDBManager;

@Configuration
@ComponentScan("com.nexusdevs.shoppersdeal")
@PropertySource("classpath:app.properties")
@EnableWebMvc
public class ApplicationConfiguration {

	@Autowired
	private Environment env;
	
	@Bean
	public MongoDBManager mongoDBManager(){
		String host = env.getProperty("mongodb.deals.host");
		String db = env.getProperty("mongodb.deals.db");
		MongoDBManager mdb = new MongoDBManager(host, db);
		return mdb;
	}
	
	/*@Bean
	public RedisManager redisManager() {
		String host = env.getProperty("redis.offers.host");
		RedisManager rm = new RedisManager(host);
		return rm;
	}*/
}