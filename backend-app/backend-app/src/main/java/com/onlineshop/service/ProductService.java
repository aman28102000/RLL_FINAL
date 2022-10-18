package com.onlineshop.service;

import java.util.List;

import com.onlineshop.bean.Product;

public interface ProductService {
	public String storeProduct(Product product);
	public List<Product> getAllProducts();
	public String findProductById(int pid);
	public List<Product> findProductByPrice(float price);
	public String deleteProduct(int pid);
	public String updateProduct(Product product);

	

}
