package com.onlineshop.service;

import java.util.List;

import com.onlineshop.bean.Login;

public interface loginService {
	public String signIn(Login login);
	public String signUp(Login login);
	public String changePassword(Login login);
	public String deleteusers(String emailid);
	public List<Login> findAllUser() ;


}
