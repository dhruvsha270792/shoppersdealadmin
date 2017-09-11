package com.nexusdevs.shoppersdeal.admin.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nexusdevs.shoppersdeal.admin.configuration.ApiConfiguration;
import com.nexusdevs.shoppersdeal.admin.util.HttpUtils;
import com.nexusdevs.shoppersdeal.admin.util.JsonUtils;
import com.nexusdevs.shoppersdeal.admin.util.StringUtils;

@RestController
@RequestMapping("/category")
public class CategoryController {

	private static Logger logger = LoggerFactory.getLogger(CategoryController.class);

	@Autowired
	private ApiConfiguration apiConfig;

	@RequestMapping(path="/list", method={RequestMethod.POST,RequestMethod.GET}, consumes = {"text/plain", "application/*"})
	public String categoryList(@RequestParam(defaultValue = "") String sortField, @RequestParam(defaultValue = "") String sortType,
							   @RequestParam(defaultValue = "") String consoleUserId, @RequestParam(defaultValue = "10") int n,
							   @RequestParam(defaultValue = "0") int pos, HttpServletRequest request) {
		try {
			Map<String,String> queryMap  = new HashMap<>();
			
			
			if(sortField!=null && !sortField.equals("")){
				queryMap.put("sortField", sortField);
			}
			
			if(sortType!=null && !sortType.equals("")){
				queryMap.put("sortType", sortType);
			}
			
			queryMap.put("n", n+"");
			queryMap.put("pos", pos+"");
			
			String createCategoryListUrl=apiConfig.getApiUrl()+"c/list/category"+StringUtils.mapToQueryString(queryMap);
			createCategoryListUrl+="&token="+request.getHeader("Authorization");
			String categoryList=HttpUtils.get(createCategoryListUrl);
			return categoryList;
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		return JsonUtils.errorResponse("error to get category list").toString();
	}
	
}
